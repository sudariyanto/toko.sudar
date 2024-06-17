

// on click navbar

const nav = document.querySelector(".nav");

document.querySelector(".menu").onclick = () => {
  nav.classList.toggle("active");
};

const menu = document.querySelector(".menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});

// nav end

// search

const search = document.querySelector(".search");
const searchfrom = document.querySelector(".search-from");
const searchid = document.querySelector("#search");

document.querySelector(".search").onclick = (e) => {
  searchfrom.classList.toggle("active");
  searchid.focus();
  e.preventDefault(e);
};

document.addEventListener("click", function (e) {
  if(!search.contains(e.target) && !searchfrom.contains(e.target)) {
    searchfrom.classList.remove("active")
  }
})
// search end


