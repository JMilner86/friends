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
  .post(addThought)

// /api/Thoughts/<thoughtId>
router.route('/:userId')
    .post(addThought)


// /api/Thoughts/<thoughtId>/<ThoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought)
  .get(getThoughtById)
  .put(updateThought)

router
    .route('thoughts/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)

// /api/Thoughts/<thoughtId>/<ThoughtId>/<ReactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
