const Skill = require("../models/skills");
const skills = [
    {id: 12345, skill: 'HTML'},
    {id: 23456, skill: 'Java'},
    {id: 34567, skill: 'Javascript'},
    {id: 45678, skill: 'Ruby'},
    {id: 56789, skill: 'CSS'},
];

module.exports = {
    getAll,
    getOne,
    create,
}

function getOne(id) {
   return skills.find(skill => skill.id === parseInt(id));
}

function getAll() {
    return skills;
}

function create(skills) {
    skills.push(Skill);
}