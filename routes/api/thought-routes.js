const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,  
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  updateThought
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts)
  .post(addThought)

// /api/Thoughts/<thoughtId>
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought)


// /api/Thoughts/<thoughtId>/<ThoughtId>
router
    .route('/:thoughtId/reactions/')
    .post(addReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;
