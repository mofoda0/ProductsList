import Card from "../card/Card.jsx"
import products from "../../data/products.js";

const ProductsList = () => {
  return (
    <main className="bg-[rgb(229,229,229)] min-h-screen px-10 py-5">

      <div className="flex flex-wrap justify-center gap-5 max-w-420 m-auto">
        {products.map((item) => (
          <Card id={item.id} image={item.image}  name={item.name} rating={item.rating} priceCents={item.priceCents} />
        ))}
      </div>
    </main>
  );
};

export default ProductsList;
