import "./SearchAndFilterBar.css";
import { Textbox } from "../controls/Textbox";
import { RadioBoxGroup } from "../controls/RadioBoxGroup";
import { useFilteredProducts } from "../hooks/useFilteredProducts";
import { Card, CardContent } from "@mui/material";

export const SearchAndFilterBar = () => {
  const {
    searchTerm,
    setSearchTerm,
    statusType,
    setStatusType,
    statusTypes,
  } = useFilteredProducts();

  return (
    <Card className="filter-card" elevation={3}>
      <CardContent>
        <div className="toolbar-row">

          <div className="left-section">
            <Textbox
              label="Search Products Name"
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </div>

          <div className="right-section">
            <RadioBoxGroup
              label="Status"
              selectedId={statusType}
              onChange={(e) => setStatusType(Number(e.target.value))}
              items={statusTypes ?? []}
            />
          </div>

        </div>
      </CardContent>
    </Card>
  );
};
