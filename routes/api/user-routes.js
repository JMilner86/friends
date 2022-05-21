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

// router
// .route('/users')
// .get(getAllUser)

// /api/Users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// router
// .route('/:userId/friends')


  router
  .route('/:userId/friends/:friendId')
  .delete(removeFriends)
  .post(addFriends)
// /api/Users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
