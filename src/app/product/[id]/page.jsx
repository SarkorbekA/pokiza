
import ProductDetails from "@/components/ProductDetails/ProductDetails";


export default  function ProductPage({ params }) {

  const { id } =  params;


  return <ProductDetails id={id} />;
}
