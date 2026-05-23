import type { StockFilterState } from "../../Models/StockFilterState.model";

export default function BookDataGrid({ books, isLoading }: StockFilterState) {
if (isLoading) return <div>Loading products…</div>;
if(books) { console.log(books) }
}