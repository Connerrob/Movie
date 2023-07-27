document.addEventListener("DOMContentLoaded", () => {
  const scrollLeftArrow = document.getElementById("scroll-left");
  const scrollRightArrow = document.getElementById("scroll-right");
  const navMenu = document.getElementById("nav-menu");

  // Function to handle scrolling to the right
  const scrollRight = () => {
    navMenu.scrollLeft += 500;
  };

  // Function to handle scrolling to the left
  const scrollLeft = () => {
    navMenu.scrollLeft -= 500;
  };

  // Add event listeners to the scroll arrows
  scrollLeftArrow.addEventListener("click", scrollLeft);
  scrollRightArrow.addEventListener("click", scrollRight);

  // Add event listener for the scroll event to detect reaching the end
  navMenu.addEventListener("scroll", () => {
    if (navMenu.scrollLeft + navMenu.offsetWidth >= navMenu.scrollWidth) {
      // User has reached the end, clone and append menu items to continue scrolling
      const navItems = navMenu.querySelectorAll("li");
      const clonedNavItems = Array.from(navItems).map((item) =>
        item.cloneNode(true)
      );
      clonedNavItems.forEach((clonedItem) => navMenu.appendChild(clonedItem));
    }
  });
});
