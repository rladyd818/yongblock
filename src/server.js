const express = require("express"),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
<<<<<<< HEAD
  Blockchain = require("./blockchain"),
  P2P = require("./p2p");

  const { getBlockchain, createNewBlock } = Blockchain;
  // const startP2PServer = P2P.startP2PServer;
  // const connectToPeers = P2P.connectToPeers;
  const { startP2PServer, connectToPeers } = P2P;

  const PORT = process.env.HTTP_PORT || 3000;

  const app = express();
//use는 미들웨어
  app.use(bodyParser.json());
  app.use(morgan("combined"));

  app.get("/blocks", (req, res, next) => {
    res.send(getBlockchain());
  });

  app.post("/blocks", (req, res) => {
    const { body: {data} } = req;
    const newBlock = createNewBlock(data);
    res.send(newBlock);
  });

  app.post("/peers", (req, res) => {
    const { body: { peer } } = req;
    connectToPeers(peer);


    res.send(user);
  });

  const server = app.listen(PORT, () => console.log(
    `Blockchain HTTP server running on ${PORT}`)
  );
  
  startP2PServer(server);
=======
  Blockchain = require("./blockchain");

const {getBlockchain, createNewBlock} = Blockchain;

const PORT = process.env.HTTP_PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(morgan("combined"));

app.get("/blocks", (req, res) => {
  res.send(getBlockchain());
});

app.post("/blocks", (req, res) => {
  const {body: {data}} = req;
  const newBlock = createNewBlock(data)
  res.send(newBlock);
});

app.listen(PORT, () => console.log("yongblock Server runnig on ", PORT));
>>>>>>> 46941e7c423188b3693151a590e54d65583d4bfd
