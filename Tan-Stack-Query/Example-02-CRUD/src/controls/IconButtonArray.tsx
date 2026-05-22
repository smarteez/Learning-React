import { styled } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import type { IconButtonsProps } from "../models/IconButton.model";

const ListItem = styled("li")(() => ({
  margin: 0,
  listStyle: "none",
}));

export default function IconButtonArray({
  iconButtons,
  iconSize = "medium",
  direction = "row",
  columns = 3,
}: IconButtonsProps) {
  const visibleButtons = iconButtons.filter((btn) => btn.showIcon);

  const sizeMap = {
    small: 18,
    medium: 22,
    large: 26,
    xl: 32,
  } as const;

  const resolvedSize =
    typeof iconSize === "number" ? iconSize : sizeMap[iconSize];

  const chipSize = resolvedSize + 18;

  const rowLayout: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 1,
    justifyContent: "center",
  };

  const columnLayout: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    alignItems: "center",
  };

  const blockLayout: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, ${chipSize}px)`,
    gap: 8,
    justifyItems: "center",
    alignItems: "center",
  };

  return (
    <Card
      sx={{
        p: 1,
        borderRadius: 3,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
        background: "#fff",
        width: "fit-content",
      }}
    >
      <div
        style={
          direction === "block"
            ? blockLayout
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            : (direction === "row" ? rowLayout : columnLayout) as any
        }
      >
        {visibleButtons.map((btn) => (
          <ListItem key={btn.key}>
            <Tooltip title={btn.label} arrow>
              <Chip
                icon={btn.icon}
                label=""
                clickable
                onClick={btn.action}
                sx={{
                  backgroundColor: btn.color,
                  color: "#fff",
                  width: chipSize,
                  height: chipSize,
                  borderRadius: "50%",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  "& .MuiChip-icon": {
                    margin: 0,
                    padding: 0,
                    width: resolvedSize - 2,
                    height: resolvedSize - 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                  },

                  "& .MuiChip-label": {
                    display: "none",
                  },
                }}
              />
            </Tooltip>
          </ListItem>
        ))}
      </div>
    </Card>
  );
}
