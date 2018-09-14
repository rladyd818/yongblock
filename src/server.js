const express = require("express"),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
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
