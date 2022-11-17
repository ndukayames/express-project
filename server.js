const express = require("express");

const SERVER = express();
const PORT = 3000;

// load friends

const friends = [
  {
    id: 1,
    name: "Obi James",
  },
  {
    id: 2,
    name: "Nduka Yames",
  },
  {
    id: 3,
    name: "Ndukayames",
  },
];

// create a middleware that logs request

SERVER.use((req, res, next) => {
  console.log(`sending ${req.method} request to ${req.url}`);
  next();
  console.log(`finished ${req.method} request to ${req.url} }`);
});

// specifying routes, try 1;
SERVER.get("/", (req, res) => {
  res.status(200).json("Hello World!");
});

SERVER.get("/friends", (req, res, next) => {
  res.send(friends);
});

SERVER.get("/friends/:friendId", (req, res, next) => {
  let friendId = Number(req.params.friendId);
  let friend = friends.find((friend) => friend.id === friendId);

  if (friend) {
    res.status(200).send(friend);
  } else {
    res.status(404).send({ error: "Friend does not exist" });
  }
});
SERVER.listen(PORT, () => {
  console.log("Server is running");
});
