import express from 'express';

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.post('/summarize', async (req, res) => {
  const result = await summarizeContent(req.body.url);
  res.send(result);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
