const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,  
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  updateThought
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThought)

// /api/Thoughts/<thoughtId>
router.route('/:userId')
    .post(addThought)


// /api/Thoughts/<thoughtId>/<ThoughtId>
router
  .route('/:userId/:thoughtId')
  .delete(removeThought)
  .get(getThoughtById)
  .put(updateThought)

router
    .route('thoughts/:thoughtId')
    .post(addReaction)
    .delete(removeReaction)

module.exports = router;
