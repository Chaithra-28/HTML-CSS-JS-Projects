// progress
const progress = document.getElementById("progress");

// prevBtn
const prevBtn = document.getElementById("prev");

// nextBtn
const nextBtn = document.getElementById("next");

// circles
const circles = document.querySelectorAll(".circle");

let activeIndex = 1;

nextBtn.addEventListener("click", () => {
  activeIndex++;
  if (activeIndex > circles.length) {
    activeIndex = circles.length;
  }

  updateUI();
});

prevBtn.addEventListener("click", () => {
  activeIndex--;
  if (activeIndex < 1) {
    activeIndex = 1;
  }

  updateUI();
});


// Main UI update function
function updateUI() {
  // Step 1: Highlight active circles
  circles.forEach((circle, index) => {
    circle.classList.toggle("active", index < activeIndex);
  });

  // Step 2: Update progress bar width
  const percent = ((activeIndex - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${percent}%`;

  // Step 3: Enable/disable buttons
  prevBtn.disabled = activeIndex === 1;
  nextBtn.disabled = activeIndex === circles.length;
}

// Initialize UI on page load
updateUI();

// function updateUI() {
//   circles.forEach((circle, index) => {
//     if (index < activeIndex) {
//       circle.classList.add("active");
//     } else {
//       circle.classList.remove("active");
//     }
//   });

//   const actives = document.querySelectorAll(".active");
//   progress.style.width =
//     ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

//   if (activeIndex === 1) {
//     prevBtn.disabled = true;
//   } else if (activeIndex === circles.length) {
//     nextBtn.disabled = true;
//   } else {
//     prevBtn.disabled = false;
//     nextBtn.disabled = false;
//   }
// }


