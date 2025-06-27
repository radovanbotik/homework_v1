import Container from "../ui/Container";

import { ProductCard } from "./ProductCard";

export function ProductList({ items }) {
  return (
    <Container className="max-w-5xl">
      <ul role="list" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {items.map(item => (
          <li key={item.id}>
            <ProductCard item={item} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
