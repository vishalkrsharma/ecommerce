import data from './data';

function App() {
  return (
    <div className='App'>
      <header>
        <a href='/'>ecommerce</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className='products'>
          {data.products.map((product) => (
            <div className='product' key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className='product-info'>
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
              </div>
              <p>
                <stong>₹{product.price}</stong>
              </p>
              <button>Add to cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
