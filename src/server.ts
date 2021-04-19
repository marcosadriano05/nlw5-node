import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.json({ message: "método get" });
});

server.post('/', (req, res) => {
  res.json({ message: "método post" });
})

server.listen(3333, () => console.log("Server runnig on port 3333"));