import { styled } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import type { IconButtonsProps } from "../models/IconButton.model";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.2),
  listStyle: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function IconButtonArray({
  iconButtons,
  iconSize = "medium",
  direction = "row",
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

  const layoutStyles: SxProps<Theme> =
    direction === "row"
      ? {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "center",
        }
      : direction === "column"
      ? {
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
        }
      : {
          display: "grid",
          gridTemplateColumns: "repeat(3, 60px)",
          gap: 8,
          justifyItems: "center",
          justifyContent: "center",
          alignItems: "start",
          alignContent: "start",
        };

  return (
    <Card
      sx={{
        p: 1,
        width: "fit-content",
        borderRadius: 3,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
        background: "#fff",
        ...layoutStyles,
      }}
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
                width: resolvedSize + 18,
                height: resolvedSize + 18,
                borderRadius: "50%",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                "& .MuiChip-icon": {
                  margin: 0,
                  padding: 0,
                  width: resolvedSize - 2,   // ⭐ updated size
                  height: resolvedSize - 2,  // ⭐ updated size
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                },

                "& .MuiChip-label": {
                  padding: 0,
                },
              }}
            />
          </Tooltip>
        </ListItem>
      ))}
    </Card>
  );
}
