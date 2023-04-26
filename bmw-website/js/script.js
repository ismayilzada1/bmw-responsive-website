const searchForm = document.querySelector(".search-form");

const searchButton = document.querySelector("#search-btn");

const HamburgerButton = document.querySelector("#hamburger-btn");

const NavBar = document.querySelector(".navbar");

searchButton.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (!e.composedPath().includes(searchButton) && !e.composedPath().includes(searchForm)) {
      searchForm.classList.remove("active");
    }
  });
});

HamburgerButton.addEventListener("click",function()
{
    NavBar.classList.toggle("active");
});

