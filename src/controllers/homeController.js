const books = require('../services/books');

exports.index = async (req, res) => {
  const livros = await books.jsonReturn(req.params.keyword);
  if (livros) res.status(200).json(livros);
  else res.status(404).json({ error: "Don't have books with this keyword." });
};

exports.indexQuery = async (req, res) => {
  console.log(req.query.keyword);
  const livros = await books.jsonReturn(req.query.keyword);
  if (livros) res.status(200).json(livros);
  else res.status(404).json({ error: "Don't have books with this keyword." });
};
