import { useCart } from "../../store/CartContext";
import { formatPrice } from "../../util/formatPrice";
import { isBool } from "../../util/isBool";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import Container from "../ui/Container";
import { Tooltip } from "../ui/Tooltip";

export function TooltipCard({ item }) {
  return (
    <Card className="max-w-80 z-[100] relative rounded-none overflow-hidden isolate">
      <div className="size-full absolute inset-0 bg-[#FDF1D7]/95 -z-10"></div>
      <div className="flex gap-2.5 z-10">
        <div className="h-20 w-20 relative shrink-0 -ml-4">
          <img src={item.imageUrl} alt={item.name} className="object-contain rounded mb-2 size-full absolute" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xs font-bold text-[#1D1D39]">Description</h3>
          <dd className="text-xs ">{item.description}</dd>

          <div className="space-y-1">
            <h3 className="text-xs font-bold text-[#1D1D39]">Key Features</h3>
            <ul className="space-y-1">
              {item.features.map(f => (
                <li key={f.name}>
                  <dl>
                    <div className="space-y-1">
                      <div className="text-xs text-[#1D1D39]">{f.name}</div>
                      <div className="col-span-2">
                        {f.values.map(v => (
                          <dl className="ml-2" key={v.label}>
                            <div className="grid grid-cols-2  text-[#1D1D39]">
                              <dt className="text-xs">{v.label}</dt>
                              <dd className="text-xs text-right">{isBool(v.value)}</dd>
                            </div>
                          </dl>
                        ))}
                      </div>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function ProductCard({ item }) {
  const { addToCart } = useCart();
  const price = formatPrice({ price: item.price });

  return (
    <Card className="bg-[#FCFCFC] relative sm:py-5">
      <Tooltip content={<TooltipCard item={item} />} />
      <div className="aspect-square w-3/5 mx-auto relative mb-5">
        <img
          src={item.imageUrl}
          alt={`image preview of product ${item.name}`}
          className="block border-0 w-full h-full object-scale-down absolute left-0 top-0 inset-0 "
        />
      </div>
      <div className="text-[#1D1D39] lg:text-sm font-medium mt-1">{item.name}</div>
      <div className="text-[#1D1D39] lg:text-xs font-bold mt-1">{price}</div>
      <Button className="w-full mt-2" onClick={() => addToCart(item)}>
        Add to Cart
      </Button>
    </Card>
  );
}

export function GridList({ items }) {
  return (
    <Container className="max-w-4xl">
      <ul role="list" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
        {items.map(item => (
          <li key={item.id}>
            <ProductCard item={item} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
