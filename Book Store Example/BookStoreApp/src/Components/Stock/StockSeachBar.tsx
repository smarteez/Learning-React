import "./SearchAndFilterBar.css";
import { Card, CardContent } from "@mui/material";
import { Textbox } from "../../Controls/Common/Textbox";
import { RadioBoxGroup } from "../../Controls/Common/RadioBoxGroup";
import type { StockFilterState } from "../../Models/StockFilterState.model";

export const SearchAndFilterBar = ({
  searchTerm,
  setSearchTerm,
  status,
  setStatus,
  statusData
}: StockFilterState) => {
  return (
    <Card className="filter-card" elevation={3}>
      <CardContent>
        <div className="toolbar-row">

          <div className="left-section">
            <Textbox
              label="Search Book Name"
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </div>

          <div className="right-section">
            <RadioBoxGroup
              label="Status"
              selectedId={status}
              onChange={(e) => setStatus(Number(e.target.value))}
              items={statusData}
            />
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

