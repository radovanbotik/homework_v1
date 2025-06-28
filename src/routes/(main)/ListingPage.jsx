import { ProductList } from "../../components/listing-page/ProductList";
import { Header } from "../../components/ui/Header";
import { data } from "../../data/data";

export default function ListingPage() {
  //data retrieved from db
  const items = data;

  return (
    <>
      <Header title={`Fingertips\nStore`} />
      <ProductList items={items} />
    </>
  );
}
