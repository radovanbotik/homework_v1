import { Link, useParams } from "react-router";
import { Button } from "../../components/ui/Button";
import { data } from "../../data/data";
import { formatPrice } from "../../util/formatPrice";
import Container from "../../components/ui/Container";
import { TooltipFeatureItemRow } from "../../components/listing-page/tooltip/TooltipFeatureItemRow";
import { Card } from "../../components/ui/Card";
import { useCart } from "../../store/CartContext";

export default function ProductPage() {
  const { productId } = useParams();
  const { addToCart } = useCart();

  //we would fetch with productId directly
  const product = data.find(p => p.id === productId);

  return (
    <Container>
      <Card className="flex flex-col sm:flex-row items-start gap-8 bg-white max-w-4xl mx-auto ">
        <img
          alt={product.description}
          src={product.imageUrl}
          className="aspect-square object-scale-down sm:rounded-lg sm:w-60 w-40 block"
        />

        <div>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">{product.name}</h3>
          <p className="text-xl tracking-tight text-gray-900">{formatPrice({ price: product.price })}</p>
          <p className="space-y-6 text-base text-gray-700">{product.description}</p>
          <Link to={".."} path="relative" className="text-red-500 mr-4">
            Continue shopping
          </Link>

          <Button className="mt-5" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
          <div className="pt-5">
            {product.features.map(feature => (
              <ul className="space-y-4">{<TooltipFeatureItemRow feature={feature} />}</ul>
            ))}
          </div>
        </div>
      </Card>
    </Container>
  );
}
