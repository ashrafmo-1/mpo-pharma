const header = document.getElementById("header");
const handleScroll = () => {
  if (window.scrollY > 0) {
    header.classList.add("pinned");
  } else {
    header.classList.remove("pinned");
  }
};
window.addEventListener("scroll", handleScroll);

// about us status numbers



// component fn
// function loadSection(elementId, filePath) {
//   fetch(filePath)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Failed to load ${filePath}`);
//       }
//       return response.text();
//     })
//     .then((html) => {
//       document.getElementById(elementId).innerHTML = html;
//     })
//     .catch((error) => console.error(error));
// }

// loadSection("navigation", "../constants/nav.html");
// loadSection("hero", "../home/hero.html");
// loadSection("about", "../home/aboutus.html");
// loadSection("products", "../home/products.html");

/* handle nav bar btn */
const NAVBAR = document.querySelector(".menu-bars");

NAVBAR.addEventListener("click", () => {
  const SID_EBAR_RESPONSIVE = document.querySelector(".side-bar-responsive");
  SID_EBAR_RESPONSIVE.classList.toggle("active");
});

/* career jop modle */


// toggleModal(".apply-jop", ".overlay-modle-career", "flex");
// toggleModal(".close-career-modle", ".overlay-modle-career", "none");

// FAQ
function toggleAnswer(element) {
  const PARENT = element.parentElement;
  const ANSWER = PARENT.querySelector(".faq-answer");
  const ICON = PARENT.querySelector(".icon");

  if (ANSWER.classList.contains("hidden")) {
    ANSWER.classList.remove("hidden");
    ANSWER.classList.add("visible");
    ANSWER.classList.add("activeQuistion")
    ICON.src = "./public/icons/menus-icon.svg";
    element.style.borderTop = "1px solid #333";
    element.style.borderRight = "1px solid #333";
    element.style.borderLeft = "1px solid #333";
    element.style.borderRadius = "8px 8px 0px 0px";
  } else {
    ANSWER.classList.remove("visible");
    ANSWER.classList.add("hidden");
    ICON.src = "./public/icons/plus-icon.svg";
    element.style.border = "none";
  }
}

// product fillter btns
function toggleButton(button) {
  const buttons = document.querySelectorAll(".toggle-bg");
  buttons.forEach((btn) => {
    btn.classList.remove("bg-[#166e1d]", "text-white");
    btn.classList.add("text-black");
  });
  button.classList.add("bg-[#166e1d]", "text-white");
  button.classList.remove("text-black");
}