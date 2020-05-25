
module.exports = {
    index,
    show,
    showNew,
    newSkill,
}

function index(req, res, next) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
 }

function show(req, res) {
    res.render('skills/show', {
        tyler: Skill.getOne(req.params.id),
        skillNum: Skill.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
    });
}

function showNew(req, res) {
    res.render('skills/new')
};

function newSkill(req, res) {
    res.render('skills/new')
};