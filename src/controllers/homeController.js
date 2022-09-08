const books = require('../services/books');

exports.index = async (req, res) => {
  const livros = books.jsonReturn(req.params.keyword);
  res.status(200).json(livros);
};
