const toggler = document.querySelector(".custom-toggler");
const collapse = document.getElementById("collapsibleNavbar");

collapse.addEventListener("show.bs.collapse", () => {
  toggler.classList.add("open");
});

collapse.addEventListener("hide.bs.collapse", () => {
  toggler.classList.remove("open");
});

const slider = document.querySelector(".cards-scroll");
let isDragging = false;
let startX = 0;
let scrollStart = 0;

// --- Mouse Drag (smooth, no inertia) ---
const onMouseDown = (e) => {
  isDragging = true;
  startX = e.pageX - slider.offsetLeft;
  scrollStart = slider.scrollLeft;
  slider.style.cursor = "grabbing";
  e.preventDefault();
};

const onMouseUpOrLeave = () => {
  isDragging = false;
  slider.style.cursor = "grab";
};

const onMouseMove = (e) => {
  if (!isDragging) return;
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.2;
  slider.scrollLeft = scrollStart - walk;
};

// --- Wheel Scroll with Smooth Behavior ---
const onWheel = (e) => {
  e.preventDefault();
  slider.scrollTo({
    left: slider.scrollLeft + e.deltaY,
    behavior: "smooth",
  });
};

// --- Event Listeners ---
slider.addEventListener("mousedown", onMouseDown);
slider.addEventListener("mouseup", onMouseUpOrLeave);
slider.addEventListener("mouseleave", onMouseUpOrLeave);
slider.addEventListener("mousemove", onMouseMove);
slider.addEventListener("wheel", onWheel, { passive: false });

// --- Optional: Initialize Cursor ---
slider.style.cursor = "grab";

document.querySelectorAll("video").forEach((video) => {
  video.addEventListener("error", () => {
    console.log("Video reload triggered:", video.currentSrc);
    video.load();
    video.play();
  });
});
