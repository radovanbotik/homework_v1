import { GridList } from "../../components/listing-page/GridList";
import { Header } from "../../components/ui/Header";
import { data } from "../../data/data";

export default function ListingPage() {
  //data retrieved from db
  const items = data;

  return (
    <div>
      <Header title={`Fingertips\nStore`} />
      <GridList items={items} />
    </div>
  );
}
