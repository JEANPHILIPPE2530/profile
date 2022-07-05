const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["a Full-Stack Web Developer.", "a Ruby on Rails Developer.", "looking for new amazing projects!", "a Freelancer..."];
const typingDelay = 200;    // vitesse d'écriture
const erasingDelay = 100;   // vitesse de suppression
const newTextDelay = 2000;  // temps avant un nouveau texte
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  // chaque tour de la fonction ajoute une nouvelle lettre du mot
    if (charIndex < textArray[textArrayIndex].length) {
    // on ajoute la classe typing pour que le curseur ne clignotte pas
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex ++;
    setTimeout(type, typingDelay);
    } 
    else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
    }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
} 
    else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
    }
}

// une fois le DOM chargé on lance la fonction
document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});