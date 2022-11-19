const express = require("express");
const path = require("path");

const friendsRoute = require("./routes/friends.route");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
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
app.get("/", (req, res) => {
  res.render("index", {
    // first parameter is the filename (without extension) of the view to be rendered
    title: "Rending HTML",
    caption: "Hello World!",
  });
});
app.use("/friends", friendsRoute);
app.use("/public", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.status(200).json("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server is running");
});
