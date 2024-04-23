const router = require("express").Router();

const {
  getUser,
  updateUser,
  deleteUser,
  deleteUser ,
  addUser,
  getSingleUser,
  createUser,
} = require("../../controllers/thoughtController");

router.route("/").get(getUser).post(createUser);


router
  .route("/:thoughtId")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

  router.route("/:userId/friends/:friendId").delete(deletefriend);

  
  module.exports = router;
  

