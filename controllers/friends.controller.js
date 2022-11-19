// load friends
const friends = require("../models/friend.model");

console.log(friends);
function getFriendsById(req, res) {
  let friendId = Number(req.params.friendId);
  let friend = friends.find((friend) => friend.id === friendId);

  if (friend) {
    res.status(200).send(friend);
  } else {
    res.status(404).send({ error: "Friend does not exist" });
  }
}

function getAllFriends(req, res) {
  res.send(friends);
}

function addFriend(req, res) {
  // input validation
  if (!req.body.name) {
    return res.status(400).json({ error: "please enter friend's name" });
  }
  const newFriend = {
    id: friends.length + 1,
    name: req.body.name,
  };

  // add new friend to list
  if (friends.push(newFriend)) {
    res.status(201).json({ msg: "Friend added!" });
  }
}

module.exports = {
  getFriendsById,
  getAllFriends,
  addFriend,
};
