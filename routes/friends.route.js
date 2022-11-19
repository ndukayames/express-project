const express = require("express");

const friendsController = require("../controllers/friends.controller");

const route = express.Router();

route.get("/", friendsController.getAllFriends);

route.post("/", friendsController.addFriend);
route.get("/:friendId", friendsController.getFriendsById);

module.exports = route;
