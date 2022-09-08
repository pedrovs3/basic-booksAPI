require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors');
const { globalMiddleware } = require('./src/middlewares/globalMiddleware');

const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(globalMiddleware);

app.use(routes);

// Get Invalid
app.get('*', (req, res) => {
  res.status(404).json({
    error: 'Don\'t have books with this keyword.',
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server escutando na porta ${process.env.PORT}`);
  console.log(`http://localhost:${process.env.PORT}`);
});
