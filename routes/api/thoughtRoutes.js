const router = require("express").Router();

const {
  getThoughts,
  updateThought,
  deleteThought,
  deleteReaction,
  addReaction,
  getSingleThought,
  createThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(createThought);


router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

  router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

  
  module.exports = router;




