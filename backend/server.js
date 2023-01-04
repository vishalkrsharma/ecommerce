import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server on PORT ${PORT}`);
});
