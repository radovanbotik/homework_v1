import Container from "../ui/Container";

import { Product } from "./Product";

export function ProductList({ items }) {
  return (
    <Container className="max-w-4xl">
      <ul role="list" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {items.map(item => (
          <li key={item.id}>
            <Product item={item} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
