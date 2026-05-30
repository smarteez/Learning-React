import "./SearchAndFilterBar.css";
import { Card, CardContent, MenuItem, TextField } from "@mui/material";
import { Textbox } from "../../Controls/Common/Textbox";
import type { StockFilterState } from "../../Models/StockFilterState.model";
import type { Genre } from "../../Schemas/Genre.schemas";
import type { Language } from "../../Schemas/Language.schema";

export const SearchAndFilterBar = ({
  searchTerm,
  setSearchTerm,
  status,
  setStatus,
  statusData,
  genre,
  setGenre,
  genreData,
  language,
  setLanguage,
  languageData,
  rating,
  setRating
}: StockFilterState) => {

  // RESET HANDLER
  const handleReset = () => {
    setSearchTerm("");
    setGenre(0);
    setLanguage(0);
    setRating(0);

    const activeStatus = statusData.find(
      (s) => s.name.toLowerCase() === "active"
    );
    if (activeStatus) {
      setStatus(activeStatus.id);
    }
  };

  return (
    <Card className="filter-card" elevation={3}>
      <CardContent>
        <div className="toolbar-row">

          {/* LEFT — Search */}
          <div className="left-section">
            <Textbox
              label="Search Book Title"
              value={searchTerm ?? ""}
              onChange={setSearchTerm}
            />
          </div>

          {/* MIDDLE — Filters */}
          <div className="filters-section">

            {/* Genre */}
            <TextField
              select
              label="Genre"
              size="small"
              value={genre ?? 0}   // FIXED
              onChange={(e) => setGenre(Number(e.target.value))}
              className="filter-item"
            >
              <MenuItem value={0}>All Genres</MenuItem>
              {genreData.map((g: Genre) => (
                <MenuItem key={g.id} value={g.id}>
                  {g.name}
                </MenuItem>
              ))}
            </TextField>

            {/* Language */}
            <TextField
              select
              label="Language"
              size="small"
              value={language ?? 0}   // FIXED
              onChange={(e) => setLanguage(Number(e.target.value))}
              className="filter-item"
            >
              <MenuItem value={0}>All Languages</MenuItem>
              {languageData.map((l: Language) => (
                <MenuItem key={l.id} value={l.id}>
                  {l.name}
                </MenuItem>
              ))}
            </TextField>

            {/* Rating */}
            <TextField
              select
              label="Rating"
              size="small"
              value={rating ?? 0}   // FIXED
              onChange={(e) => setRating(Number(e.target.value))}
              className="filter-item"
            >
              <MenuItem value={0}>All Ratings</MenuItem>
              <MenuItem value={5}>⭐⭐⭐⭐⭐</MenuItem>
              <MenuItem value={4}>⭐⭐⭐⭐ & up</MenuItem>
              <MenuItem value={3}>⭐⭐⭐ & up</MenuItem>
              <MenuItem value={2}>⭐⭐ & up</MenuItem>
              <MenuItem value={1}>⭐ & up</MenuItem>
            </TextField>

            {/* Status */}
            <TextField
              select
              label="Status"
              size="small"
              value={status ?? ""}   // FIXED
              onChange={(e) => setStatus(Number(e.target.value))}
              className="filter-item"
            >
              {statusData.map((s) => (
                <MenuItem key={s.id} value={s.id}>
                  {s.name}
                </MenuItem>
              ))}
            </TextField>

          </div>

          {/* RIGHT — Reset + Add */}
          <div className="right-section">
            <button className="reset-btn" onClick={handleReset}>Reset</button>
            <button className="add-btn">Add</button>
          </div>

        </div>
      </CardContent>
    </Card>
  );
};
