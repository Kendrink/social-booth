const { User, Thought} = require('../models');

module.exports = {
 
  async userController(req, res) {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  async getSingleUser(req, res) {
    try {
      const user = await Course.findOne({ _id: req.params.courseId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No course with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  async createUser(req, res) {
    try {
      const user = await user.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
 
  async deleteUser(req, res) {
    try {
      const user = await user.findOneAndDelete({ _id: req.params.courseId });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      await User.deleteMany({ _id: { $in: user.expressions } });
      res.json({ message: 'expression by user deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
 
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.courseId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
