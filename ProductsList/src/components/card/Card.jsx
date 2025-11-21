const Card = ({image, name, rating, priceCents}) => {
  const price = (priceCents/100).toFixed(2);

  return (
    <div className="relative flex flex-col justify-between p-4 rounded-lg shadow-md w-80 bg-white text-center">
      <h3 className="text-2xl text-center">{name}</h3>
      <div className="text-[1rem] mb-2">★ {rating.stars} ({rating.count})
      <img src={image} alt={name} className="w-full h-70 mb-3 p-5" />
      </div>
      <p className="absolute bottom-18 left-3 font-medium">${price}</p>
      <div className="absolute bottom-18 right-3 font-medium">
        <select className="p-1 rounded-md ">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
      </div>
      <button className="bg-black text-white border-none py-2 cursor-pointer rounded-2xl hover:bg-[hsl(0,0%,10%)]">Add to Cart</button>
    </div>
  );
};

export default Card;
