const Goal = require('../../models/goal')

module.exports = {
  index,
  create,
  delete: deleteGoal,
};

async function index(req, res) {
  let goal = null
  if(req.user._id){
    goal = await Goal.find({user : req.user._id})
  }
  res.json(goal)
}

async function create(req, res) {
  req.body.user = req.user._id
  console.log(req.body)
  const newGoal = await Goal.create(req.body);
  return res.json(newGoal)
}

async function deleteGoal(req, res) {
  console.log(req.params.id)
  const deleteGoal = await Goal.findByIdAndRemove(req.params.id)
  return res.json(deleteGoal)
}