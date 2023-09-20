const kol = require("kolmafia");

// This is some basic skill data, thanks scotch and tourguide.
const scepterSkills = [
  {skill: kol.Skill.get(7452), good: false, available: false, desc: "a +adv buff"},
  {skill: kol.Skill.get(7453), good: true, available: false, desc: "lucky!"},
  {skill: kol.Skill.get(7454), good: false, available: false, desc: "a watermelon"},
  {skill: kol.Skill.get(7455), good: false, available: false, desc: "three water balloons"},
  {skill: kol.Skill.get(7456), good: false, available: false, desc: "some oyster eggs"},
  {skill: kol.Skill.get(7457), good: false, available: false, desc: "a +com buff"},
  {skill: kol.Skill.get(7458), good: true, available: false, desc: "an item/meat buff"},
  {skill: kol.Skill.get(7459), good: false, available: false, desc: "a catfight, meow"},
  {skill: kol.Skill.get(7460), good: true, available: false, desc: "a foe's hand held"},
  {skill: kol.Skill.get(7461), good: true, available: false, desc: "roars like a lion"},
  {skill: kol.Skill.get(7462), good: false, available: false, desc: "myst stats"},
  {skill: kol.Skill.get(7463), good: false, available: false, desc: "mus stats"},
  {skill: kol.Skill.get(7464), good: false, available: false, desc: "double offhands"},
  {skill: kol.Skill.get(7465), good: false, available: false, desc: "bad meatgain"},
  {skill: kol.Skill.get(7466), good: false, available: false, desc: "a full heal"},
  {skill: kol.Skill.get(7467), good: true, available: false, desc: "-full & +food%"},
  {skill: kol.Skill.get(7468), good: false, available: false, desc: "a 1000 meat coupon"},
  {skill: kol.Skill.get(7469), good: false, available: false, desc: "a bunch of items"},
  {skill: kol.Skill.get(7470), good: false, available: false, desc: "stalked by bees"},
  {skill: kol.Skill.get(7471), good: false, available: false, desc: "HP regen"},
  {skill: kol.Skill.get(7472), good: false, available: false, desc: "stats of all kinds"},
  {skill: kol.Skill.get(7473), good: true, available: false, desc: "a free tooth monster"},
  {skill: kol.Skill.get(7474), good: false, available: false, desc: "mox stats"},
  {skill: kol.Skill.get(7475), good: true, available: false, desc: "three waffles"},
  {skill: kol.Skill.get(7476), good: false, available: false, desc: "a banana split"},
  {skill: kol.Skill.get(7477), good: false, available: false, desc: "some toilet paper"},
  {skill: kol.Skill.get(7478), good: true, available: false, desc: "three random effects"},
  {skill: kol.Skill.get(7479), good: true, available: false, desc: "a melting fam equip"},
  {skill: kol.Skill.get(7480), good: false, available: false, desc: "a food stat enhancer"},
  {skill: kol.Skill.get(7481), good: true, available: false, desc: "a +7 adv accessory"},
  {skill: kol.Skill.get(7482), good: false, available: false, desc: "two bottles of +booze% wine"},
]

// Set the availability of each skill
scepterSkills.forEach(day => {
  if(kol.getProperty(`_aug${day.skill.id - 7451}Cast`) == "false") {
    Object.assign(day, {available: true})
  }
})

// Generate a little box to show the skill in the relay window
function skillBox(availableSkill) {
  const scepterSkill = scepterSkills.find(x => x.skill == availableSkill);

  return(`<div class="skill-box">
  <a href="runskillz.php?action=Skillz&whichskill=${scepterSkill.skill.id}&targetplayer=${kol.myId()}&pwd=${kol.myHash()}&quantity=1">
  <div class="heading-div">
  <img  alt="${scepterSkill.skill.name}" src="/images/itemimages/aug${scepterSkill.skill.id-7451}.gif"/>
  <h1>${scepterSkill.skill.name.split(": ")[1]}</h1>
  </div>
  <div class="hr-div"></div>
  <p>${scepterSkill.desc}</p>
  </a>
  </div>`)
}

// This is the element that will show today's skill
const dailySkill =`<h1 class='skills-divider'>Today is the ${kol.todayToString().slice(-2)}${kol.todayToString().slice(-1) == 1 ? "st" : kol.todayToString().slice(-1) == 2 ? "nd" : kol.todayToString().slice(-1) == 3 ? "rd" : "th"}!</h1>
<h3 class='skills-divider'>This one is a freebie!</h3>`;

// This constructs the portion of html that contains the good skills
const goodSkills = scepterSkills.filter(x => x.good && x.available).map(x => skillBox(x.skill)).join("\n");

// This constructs the portion of html that contains the other skills
const otherSkills = scepterSkills.filter(x => !x.good && x.available).map(x => skillBox(x.skill)).join("\n")

// Here's some styling for the various elements we're using
const css = `<style type='text/css'>

body {
  display: inline-flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  font-family: 'Khand', sans-serif;
}

.skills-divider {
  width: 100%;
  text-align: center;
}

.skill-box {
  height: 200;
  width: 200;
  display: inline-flex;
  margin: 5;
  border: solid;
  border-width: 1px;
  border-color: black;
  border-radius: 5px;
  transition: transform .1s;
  background-color: white;
  box-shadow: 1px 1px black;
}

.skill-box:hover {
  transform: scale(1.05);
}

.heading-div {
  display: flex;
  height: 45;
  justify-items: center;
  align-items: center;
}

.hr-div {
  height: 1;
  background-color: #bbbbbb;
  justify-self: center;
  margin-left: 5;
  margin-right: 5;
}

.skill-box a {
  width: 100%;
  text-decoration: none;
  color: black;
}

.skill-box h1 {
  width: 100%;
  text-align: center;
  font-size: large;
  margin-right: 5;
  margin-left: 5;
}

.skill-box img {
  float: left;
  margin-left: 5;
  height: 30;
  width: 30;
}

.skill-box p {
  width: 100%;
  text-align: center;
  font-size: normal;
}

.skill-box hr {
  width: 80%;
}

</style>  
`;

module.exports.main = () => {
  var pageText =
    [
      "<html>",
      "<head>",
      css,
      "</head>",
      "<body>",
      `${kol.canInteract() ? dailySkill : ""}`,
      `${skillBox(scepterSkills[kol.todayToString().slice(-2)-1].skill)}`,
      "<h1 class='skills-divider'>Good Skills</h1>",
      goodSkills,
      "",
      "<h1 class='skills-divider'>Other Skills</h1>",
      otherSkills,
      "</body>",
      "</html>",
      "",
    ].join("\n");

  kol.write(pageText);
}