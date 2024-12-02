import Filters from "@/components/Filters";

export default function ShopPage() {
  // possible query: ?onSale=true&NewArrival=true

  return (
    <div>
      <Filters />
      <div>clothes grid</div>
    </div>
  );
}
