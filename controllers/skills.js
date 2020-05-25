const Skill = require("../models/skills");

module.exports = {
  index,
  show,
  showNew,
  newSkill,
  delete: deleteSkill,
};

function index(req, res, next) {
  res.render("skills/index", {
    skills: Skill.getAll(),
  });
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id)
    // skillNum:
    //   Skill.getAll().findIndex(
    //     (skill) => skill.id === parseInt(req.params.id)
    //   ) + 1,
  });
}

function showNew(req, res) {
  res.render("skills/new");
}

function newSkill(req, res) {
    console.log(req.body)
  Skill.create(req.body);
  res.redirect("/skills");
}

function deleteSkill(req, res) {
    console.log(req.params.id)
    Skill.deleteOne(req.params.id)
    res.redirect("/skills");
}