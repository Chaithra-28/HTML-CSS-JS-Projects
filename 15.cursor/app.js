const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  // e.pageX --> across (x-axis)
  // e.pageY --> up and down (y-axis)
  moveCursor(e.pageX, e.pageY);
});

const moveCursor = (pageX, pageY) => {
  cursor.style.left = pageX + "px";
  cursor.style.top = pageY + "px";
};
