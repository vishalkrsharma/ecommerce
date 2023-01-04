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
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
