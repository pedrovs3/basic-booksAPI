const books = require('../services/books');

exports.index = async (req, res) => {
  const livros = books.jsonReturn(req.params.keyword);
  if (livros) res.status(200).json(livros);
  else res.status(404).json({ error: 'Don\'t have books with this keyword.' });
};
