import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import {
  Button,
  Chip,
  Rating,
  Typography,
  Link,
  Card,
  CardContent,
  Divider,
  Stack,
} from "@mui/material";

import { useBookStore } from "../../Store/bookStore";
import "./StockViewItemPage.css";

const StockViewItemPage = () => {
  const router = useRouter();
  const selectedBook = useBookStore((s) => s.selectedBook);
  const clearSelectedBook = useBookStore((s) => s.clearSelectedBook);

  // ⭐ SAFE REDIRECT — no more React errors
  useEffect(() => {
    if (!selectedBook) {
      router.navigate({ to: "/stock" });
    }
  }, [selectedBook]);

  const handleBack = () => {
    router.navigate({ to: "/stock" });
    clearSelectedBook(); // safe AFTER navigation
  };

  const handleEdit = () => {
    router.navigate({ to: "/stock/edit" });
  };

  if (!selectedBook) return null; // render nothing while redirecting

  return (
    <Stack spacing={3} sx={{ p: 3, maxWidth: 1100, margin: "0 auto" }}>
      
      {/* ACTION BUTTONS */}
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={handleBack}>Back</Button>
        <Button variant="contained" color="warning" onClick={handleEdit}>Edit</Button>
      </Stack>

      {/* MAIN CARD */}
      <Card elevation={4}>
        <CardContent>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{ alignItems: "center" }}   // ⭐ centers the image vertically
          >
            
            {/* COVER IMAGE */}
            <img
              src={selectedBook.image_url}
              alt={selectedBook.title}
              className="book-cover"
            />

            {/* DETAILS */}
            <Stack spacing={2} sx={{ flex: 1 }}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {selectedBook.title}
              </Typography>

              <Typography variant="h6" sx={{ color: "text.secondary" }}>
                {selectedBook.author}
              </Typography>

              <Rating value={selectedBook.rating ?? 0} precision={0.1} readOnly />

              <Divider />

              {/* TWO-COLUMN FLEXBOX */}
              <div className="row">
                
                {/* LEFT COLUMN */}
                <div className="col">
                  <Typography><strong>Genre:</strong> {selectedBook.genre?.name ?? "N/A"}</Typography>
                  <Typography><strong>Country:</strong> {selectedBook.country?.name ?? "N/A"}</Typography>
                  <Typography><strong>Year:</strong> {selectedBook.year ?? "N/A"}</Typography>
                  <Typography><strong>ISBN:</strong> {selectedBook.isbn ?? "N/A"}</Typography>
                  <Typography><strong>Stock Available:</strong> {selectedBook.stock?.NoAvailable ?? 0}</Typography>
                </div>

                {/* RIGHT COLUMN */}
                <div className="col">
                  <Typography><strong>Language:</strong> {selectedBook.language?.name ?? "N/A"}</Typography>
                  <Typography><strong>Status:</strong> {selectedBook.status?.name ?? "N/A"}</Typography>
                  <Typography><strong>Pages:</strong> {selectedBook.pages ?? "N/A"}</Typography>
                  <Typography><strong>Price:</strong> R{(selectedBook.price ?? 0).toFixed(2)}</Typography>
                  <Typography><strong>Stock Sold:</strong> {selectedBook.stock?.NoOfSold ?? 0}</Typography>
                </div>

              </div>

              {/* TAGS */}
              {(selectedBook.tags ?? []).length > 0 && (
                <>
                  <Divider />
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ flexWrap: "wrap" }}
                  >
                    {selectedBook.tags.map((tag) => (
                      <Chip key={tag.id} label={tag.name} />
                    ))}
                  </Stack>
                </>
              )}

              {/* LINK */}
              {selectedBook.link && (
                <>
                  <Divider />
                  <Link
                    href={selectedBook.link}
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                  >
                    More Info
                  </Link>
                </>
              )}

            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default StockViewItemPage;
