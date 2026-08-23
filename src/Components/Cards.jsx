
function Cards({ product }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

       <div className="details">
          <span>{product.details}</span>
        </div>

        <p className="product-price">${product.price}</p>
      </div>

    </div>
  );
}

export default Cards;