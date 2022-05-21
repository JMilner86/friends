const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriends,
  removeFriends
} = require('../../controllers/User-controller');

// /api/Users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

  router
  .route('/:userId/friends/:friendsId')
  .post(addFriends)
  .delete(removeFriends)

// /api/Users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
