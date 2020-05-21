const Skill = require('../models/skills');

module.exports = {
    index,
    show,
}

function index(req, res, next) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
 }

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: Skill.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
    });
}
