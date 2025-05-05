const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Awesome", "Fun", "Cool", "WTF", "Why God Why?", "What is the Point?"];
const typingDelay = 200; // Delay between each typed character in milliseconds
const erasingDelay = 100; // Delay between each erased character 
//Delay between current and next text
const newLetterDelay = 1000;
let index = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[index].length) {
        typedTextSpan.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newLetterDelay)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (words.length > 0) {
        setTimeout(type, newLetterDelay)
    }
})

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        index++;
        if (index >= words.length) {
            index = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}