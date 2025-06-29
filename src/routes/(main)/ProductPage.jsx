import { Link, useParams } from "react-router";
import { Button } from "../../components/ui/Button";
import { data } from "../../data/data";
import Container from "../../components/ui/Container";
import { TooltipFeatureItemRow } from "../../components/listing-page/tooltip/TooltipFeatureItemRow";
import { Card } from "../../components/ui/Card";
import { useCart } from "../../store/CartContext";
import { ProductImage } from "../../components/product-page/ProductImage";
import { ProductHeader } from "../../components/product-page/ProductHeader";

export default function ProductPage() {
  const { productId } = useParams();
  const { addToCart } = useCart();

  //we would fetch with productId directly
  const product = data.find(p => p.id === productId);

  return (
    <Container className="pt-16">
      <Card className="flex flex-col sm:flex-row items-start bg-white max-w-4xl mx-auto ">
        <ProductImage imageUrl={product.imageUrl} alt={product.description} />

        <div>
          <ProductHeader description={product.description} name={product.name} price={product.price} />
          <Link to={".."} path="relative" className="text-red-500 mr-4">
            Continue shopping
          </Link>

          <Button className="mt-5" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
          <div className="pt-5">
            {product.features.map(feature => (
              <ul key={feature.name} className="space-y-4">
                {<TooltipFeatureItemRow feature={feature} />}
              </ul>
            ))}
          </div>
        </div>
      </Card>
    </Container>
  );
}
