import "./SearchAndFilterBar.css";
import { Textbox } from "../controls/Textbox";
import { RadioBoxGroup } from "../controls/RadioBoxGroup";
import { Card, CardContent } from "@mui/material";
import type { ProductFilterState } from "../models/ProductFilterState.model";

export const SearchAndFilterBar = ({
  searchTerm,
  setSearchTerm,
  statusType,
  setStatusType,
  statusTypes
}: ProductFilterState) => {
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
              items={statusTypes}
            />
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

