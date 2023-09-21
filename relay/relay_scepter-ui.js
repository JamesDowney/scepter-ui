const kol = require("kolmafia");

// This is some basic skill data, thanks scotch and tourguide.
const scepterSkills = [
  {
    skill: kol.Skill.get("Aug. 1st: Mountain Climbing Day!"),
    good: false,
    available: false,
    desc: "a +adv buff",
  },
  {
    skill: kol.Skill.get("Aug. 2nd: Find an Eleven-Leaf Clover Day"),
    good: true,
    available: false,
    desc: "lucky!",
  },
  {
    skill: kol.Skill.get("Aug. 3rd: Watermelon Day!"),
    good: false,
    available: false,
    desc: "a watermelon",
  },
  {
    skill: kol.Skill.get("Aug. 4th: Water Balloon Day!"),
    good: false,
    available: false,
    desc: "three water balloons",
  },
  {
    skill: kol.Skill.get("Aug. 5th: Oyster Day!"),
    good: false,
    available: false,
    desc: "some oyster eggs",
  },
  {
    skill: kol.Skill.get("Aug. 6th: Fresh Breath Day!"),
    good: false,
    available: false,
    desc: "a +com buff",
  },
  {
    skill: kol.Skill.get("Aug. 7th: Lighthouse Day!"),
    good: true,
    available: false,
    desc: "an item/meat buff",
  },
  {
    skill: kol.Skill.get("Aug. 8th: Cat Day!"),
    good: false,
    available: false,
    desc: "a catfight, meow",
  },
  {
    skill: kol.Skill.get("Aug. 9th: Hand Holding Day!"),
    good: true,
    available: false,
    desc: "a foe's hand held",
  },
  {
    skill: kol.Skill.get("Aug. 10th: World Lion Day!"),
    good: true,
    available: false,
    desc: "roars like a lion",
  },
  {
    skill: kol.Skill.get("Aug. 11th: Presidential Joke Day!"),
    good: false,
    available: false,
    desc: "myst stats",
  },
  {
    skill: kol.Skill.get("Aug. 12th: Elephant Day!"),
    good: false,
    available: false,
    desc: "mus stats",
  },
  {
    skill: kol.Skill.get("Aug. 13th: Left/Off Hander's Day!"),
    good: false,
    available: false,
    desc: "double offhands",
  },
  {
    skill: kol.Skill.get("Aug. 14th: Financial Awareness Day!"),
    good: false,
    available: false,
    desc: "bad meatgain",
  },
  {
    skill: kol.Skill.get("Aug. 15th: Relaxation Day!"),
    good: false,
    available: false,
    desc: "a full heal",
  },
  {
    skill: kol.Skill.get("Aug. 16th: Roller Coaster Day!"),
    good: true,
    available: false,
    desc: "-full & +food%",
  },
  {
    skill: kol.Skill.get("Aug. 17th: Thriftshop Day!"),
    good: false,
    available: false,
    desc: "a 1000 meat coupon",
  },
  {
    skill: kol.Skill.get("Aug. 18th: Serendipity Day!"),
    good: false,
    available: false,
    desc: "a bunch of items",
  },
  {
    skill: kol.Skill.get("Aug. 19th: Honey Bee Awareness Day!"),
    good: false,
    available: false,
    desc: "stalked by bees",
  },
  {
    skill: kol.Skill.get("Aug. 20th: Mosquito Day!"),
    good: false,
    available: false,
    desc: "HP regen",
  },
  {
    skill: kol.Skill.get("Aug. 21st: Spumoni Day!"),
    good: false,
    available: false,
    desc: "stats of all kinds",
  },
  {
    skill: kol.Skill.get("Aug. 22nd: Tooth Fairy Day!"),
    good: true,
    available: false,
    desc: "a free tooth monster",
  },
  {
    skill: kol.Skill.get("Aug. 23rd: Ride the Wind Day!"),
    good: false,
    available: false,
    desc: "mox stats",
  },
  {
    skill: kol.Skill.get("Aug. 24th: Waffle Day!"),
    good: true,
    available: false,
    desc: "three waffles",
  },
  {
    skill: kol.Skill.get("Aug. 25th: Banana Split Day!"),
    good: false,
    available: false,
    desc: "a banana split",
  },
  {
    skill: kol.Skill.get("Aug. 26th: Toilet Paper Day!"),
    good: false,
    available: false,
    desc: "some toilet paper",
  },
  {
    skill: kol.Skill.get("Aug. 27th: Just Because Day!"),
    good: true,
    available: false,
    desc: "three random effects",
  },
  {
    skill: kol.Skill.get("Aug. 28th: Race Your Mouse Day!"),
    good: true,
    available: false,
    desc: "a melting fam equip",
  },
  {
    skill: kol.Skill.get("Aug. 29th: More Herbs, Less Salt Day!"),
    good: false,
    available: false,
    desc: "a food stat enhancer",
  },
  {
    skill: kol.Skill.get("Aug. 30th: Beach Day!"),
    good: true,
    available: false,
    desc: "a +7 adv accessory",
  },
  {
    skill: kol.Skill.get("Aug. 31st: Cabernet Sauvignon Day!"),
    good: false,
    available: false,
    desc: "two bottles of +booze% wine",
  },
];

// Set the availability of each skill
if (kol.toInt(kol.getProperty("_augSkillsCast")) < 5) {
  scepterSkills.forEach((day) => {
    if (kol.getProperty(`_aug${day.skill.id - 7451}Cast`) == "false") {
      Object.assign(day, { available: true });
    }
  });
}

// Generate a little box to show the skill in the relay window
function skillBox(availableSkill, disabled) {
  const scepterSkill = scepterSkills.find((x) => x.skill == availableSkill);

  return `<div class="skill-box" ${disabled ? 'style="opacity: 0.5;"' : ""}>
  <a ${
    disabled
      ? ""
      : `href="runskillz.php?action=Skillz&whichskill=${
          scepterSkill.skill.id
        }&targetplayer=${kol.myId()}&pwd=${kol.myHash()}&quantity=1"`
  }>
  <div class="heading-div">
  <img  alt="${scepterSkill.skill.name}" src="/images/itemimages/aug${
    scepterSkill.skill.id - 7451
  }.gif"/>
  <h1>${scepterSkill.skill.name.split(": ")[1]}</h1>
  </div>
  <div class="hr-div"></div>
  <p>${scepterSkill.desc}</p>
  </a>
  </div>`;
}

// This is the element that shows how many august skills you've cast today
const skillsRemaining = `<h1>You've used ${kol.getProperty(
  "_augSkillsCast"
)}/5 casts today.</h1>`;

// This is the element that will show today's skill
const dailySkill =
  kol.canInteract() &&
  scepterSkills[kol.todayToString().slice(-2) - 1].available
    ? `<h1>Today is the ${kol.todayToString().slice(-2)}${
        kol.todayToString().slice(-1) == 1
          ? "st"
          : kol.todayToString().slice(-1) == 2
          ? "nd"
          : kol.todayToString().slice(-1) == 3
          ? "rd"
          : "th"
      }!</h1>
  <h3>This one is a freebie!</h3>
  ${skillBox(scepterSkills[kol.todayToString().slice(-2) - 1].skill, false)}`
    : "";

// This constructs the portion of html that contains the good skills
// This needs to be supported by a function that classifies skills based on your path/possibly even ascension state
const goodSkills = [
  "<h1 class='collapsible'>Good Skills</h1>",
  "<div class='content'>",
  scepterSkills
    .filter((x) => x.good && x.available)
    .map((x) => skillBox(x.skill, false))
    .join("\n"),
  "</div>",
].join("\n");

// This constructs the portion of html that contains the other skills
const otherSkills = [
  "<h1 class='collapsible'>Other Skills</h1>",
  "<div class='content'>",
  scepterSkills
    .filter((x) => !x.good && x.available)
    .map((x) => skillBox(x.skill, false))
    .join("\n"),
  "</div>",
].join("\n");
// This constructs the portion of html that contains used skills
const usedSkills = [
  `<h1 class='collapsible' style='color: gray;'>Used Skills</h1>`,
  `<div class='content' style='display: none;'>`,
  scepterSkills
    .filter((x) => !x.available)
    .map((x) => skillBox(x.skill, true))
    .join("\n"),
  "</div>",
].join("\n");

// Here's links for external js/css files
const css = `<link rel="stylesheet" href="scepter-ui/scepter-ui.css">`;
const js = `<script src="scepter-ui/scepter-ui.js"></script>`;

module.exports.main = () => {
  var pageText = [
    "<html>",
    "<head>",
    css,
    "</head>",
    "<body>",
    skillsRemaining,
    dailySkill,
    goodSkills,
    otherSkills,
    usedSkills,
    js,
    "</body>",
    "</html>",
    "",
  ].join("\n");

  kol.write(pageText);
};
