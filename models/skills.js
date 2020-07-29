const skills = [
  { id: 12345, skill: "HTML" },
  { id: 23456, skill: "Java" },
  { id: 34567, skill: "Javascript" },
  { id: 45678, skill: "Ruby" },
  { id: 56789, skill: "CSS" },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
}

function getAll() {
  return skills;
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}

function deleteOne(id) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(idx, 1);
}
