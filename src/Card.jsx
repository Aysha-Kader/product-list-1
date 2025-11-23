function Card({ name, price, rating, category, image, onAddToCart }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <img src={image} alt={name} className="w-50 h-40 object-cover mb-3 " />
      <h2 className="font-bold text-lg">{name}</h2>
      <p className="text-gray-700">₹{price}</p>
      <p className="text-sm text-gray-500">Category: {category}</p>
      <p className="text-yellow-500 mb-3">⭐ {rating}</p>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => onAddToCart(name)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
