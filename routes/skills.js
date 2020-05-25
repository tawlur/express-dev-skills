var express = require("express");
var router = express.Router();
var skillsCtrl = require("../controllers/skills");

// get /skills
router.get("/", skillsCtrl.index);
// get /skills/new

router.get('/new', skillsCtrl.showNew);

router.post('/', skillsCtrl.newSkill);

router.get('/:id', skillsCtrl.show);

router.delete('/:id', skillsCtrl.delete);

module.exports = router;
