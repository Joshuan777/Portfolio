let container = document.querySelector('.container');
let nextPage = document.querySelector('.nextPage');
let career = document.querySelector('.career');
let home = document.querySelector('.home');
let me = document.querySelector('.me');
let aboutMe = document.querySelector('.aboutMe');
let project = document.querySelector('.project');
let work = document.querySelector('.work');
let contact = document.querySelector('.contact');
let contactsP = document.querySelector('.contactsP');
let navHome = document.querySelectorAll('.navHome');
let navAbout = document.querySelectorAll('.navAbout');
let navProjects = document.querySelectorAll('.navProjects');
let navContact = document.querySelectorAll('.navContact');

let clickBuffer = null;
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Loads the sound
fetch("sounds/Minecraft - Buttonplate Click Sound Eff.mp3")
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer))
  .then(decodedAudio => {
    clickBuffer = decodedAudio;
  })
  .catch(e => console.error("Audio loading error:", e));

// plays the sound when the button is clicked
function playClickSound(e) {
  if (['dino', 'anotherClass'].some(cls => e.currentTarget.classList.contains(cls))) return;
  if (!clickBuffer) return;

  const source = audioCtx.createBufferSource();
  source.buffer = clickBuffer;
  source.connect(audioCtx.destination);
  source.start(0);
}

function showOnly(sectionToShow) {
  let sections = [container, home, aboutMe, project, contactsP];
  sections.forEach(section => {
    section.style.display = (section === sectionToShow) ? 'block' : 'none';
  });
}

function addNavHandler(element, sectionToShow) {
  element.addEventListener('click', (e) => {
    playClickSound(e);
    showOnly(sectionToShow);
  });
}

addNavHandler(nextPage, home);
addNavHandler(me, aboutMe);
addNavHandler(work, project);
addNavHandler(contact, contactsP);

navHome.forEach(btn => addNavHandler(btn, home));
navAbout.forEach(btn => addNavHandler(btn, aboutMe));
navProjects.forEach(btn => addNavHandler(btn, project));
navContact.forEach(btn => addNavHandler(btn, contactsP));

