let scrollPosition = 0;
let ticking = false;
const header = document.querySelector("header");
const btnAboutme = document.querySelector(".aboutme");
const btnSkill = document.querySelector(".skills");
const btnEducation = document.querySelector(".education");
const btnPortfolio = document.querySelector(".portfolio");
const btnContacts = document.querySelector(".contacts");

const about = document.querySelector(".section-about");
const skill = document.querySelector(".section-skills");
const formation = document.querySelector(".section-formation");
const projects = document.querySelector(".section-projects");
const contact = document.querySelector(".section-contact");

function changeBackgroundColorHeader(scrollPos) {
  if (scrollPos >= 100) {
    header.style.backgroundColor = "#fff";
    header.style.boxShadow =
      "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042);";
  } else {
    header.style.backgroundColor = "transparent";
  }
}
document.addEventListener("scroll", function (e) {
  scrollPosition = window.scrollY;
  changeBackgroundColorHeader(scrollPosition);
  buttonFocusBySection([
    [about, btnAboutme],
    [skill, btnSkill],
    [formation, btnEducation],
    [projects, btnPortfolio],
    [contact, btnContacts],
  ]);
});

function scrollingTo(scrollPos) {
  console.log(scrollPos);
  window.scrollBy(0, scrollPos);
}
btnAboutme.addEventListener("click", () =>
  scrollingTo(about.getBoundingClientRect().y - 163)
);
btnSkill.addEventListener("click", () =>
  scrollingTo(skill.getBoundingClientRect().y - 163)
);
btnEducation.addEventListener("click", () =>
  scrollingTo(formation.getBoundingClientRect().y - 163)
);
btnPortfolio.addEventListener("click", () =>
  scrollingTo(projects.getBoundingClientRect().y - 163)
);
btnContacts.addEventListener("click", () =>
  scrollingTo(contact.getBoundingClientRect().y - 163)
);

function buttonFocusBySection(array) {
  array.forEach((element) => {
    if (
      element[0].getBoundingClientRect().top <= 163 &&
      element[0].getBoundingClientRect().bottom >= 163
    ) {
      element[1].focus();
    } else {
      element[1].blur();
    }
  });
}
