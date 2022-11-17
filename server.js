const express = require("express");

const friendsRoute = require("./routes/friends.route");

const app = express();
const PORT = 3000;

// create a middleware that logs request

app.use((req, res, next) => {
  console.log(`sending ${req.method} request to ${req.url}`);
  next();
  console.log(`finished ${req.method} request to ${req.baseUrl}${req.url} }`);
});
// parsing json input
app.use(express.json());

// specifying routes,
app.use("/friends", friendsRoute);
app.get("/", (req, res) => {
  res.status(200).json("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server is running");
});
