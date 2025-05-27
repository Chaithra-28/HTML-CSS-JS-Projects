// Element references
const copyText = document.querySelector("textarea[name=copyTxt]");
const finalText = document.querySelector("textarea[name=finalTxt]");
const moveBtn = document.querySelector(".moverBtn");
const copyBtn = document.querySelector(".copyBtn");
const output = document.querySelector(".output");
const outputContainer = document.querySelector(".output-container");

// Copy text to clipboard
copyBtn.addEventListener("click", () => {
  const text = copyText.value;
  if (!text) return;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showCopyMessage("Content Copied");
    })
    .catch((err) => {
      showCopyMessage("Failed to copy");
      console.error(err);
    });
});

// Move text to final textarea
moveBtn.addEventListener("click", () => {
  finalText.value = copyText.value;
});

// Auto-select text when clicked
copyText.addEventListener("click", (e) => e.target.select());
finalText.addEventListener("click", (e) => e.target.select());

// Show temporary feedback message
function showCopyMessage(message) {
    output.textContent = message;           // Step 1: show message
    output.classList.add("added");          // Step 2: add a class for styling
    setTimeout(() => {
      output.classList.remove("added");     // Step 3: remove class after 2s
      output.textContent = "";              // Step 4: clear the text
    }, 2000);
  }
  