document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const body = document.body;

  mobileMenuButton.addEventListener("click", () => {
      if (mobileMenu.classList.contains("hidden")) {
          // Show the menu with a smooth transition
          mobileMenu.classList.remove("hidden");
          mobileMenu.classList.add("flex");
          setTimeout(() => {
              mobileMenu.classList.remove("opacity-0");
              mobileMenu.classList.add("opacity-100");
              mobileMenu.style.transform = "translateY(0)";
          }, 10);
      } else {
          // Hide the menu with a smooth transition
          mobileMenu.classList.remove("opacity-100");
          mobileMenu.classList.add("opacity-0");
          mobileMenu.style.transform = "translateY(-100%)";
          setTimeout(() => {
              mobileMenu.classList.add("hidden");
              mobileMenu.classList.remove("flex");
          }, 500); // Wait for animation to finish
      }
  });

  // Close menu when clicking outside
  body.addEventListener("click", (event) => {
      if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
          // Close the menu with a smooth transition if clicked outside
          if (!mobileMenu.classList.contains("hidden")) {
              mobileMenu.classList.remove("opacity-100");
              mobileMenu.classList.add("opacity-0");
              mobileMenu.style.transform = "translateY(-100%)";
              setTimeout(() => {
                  mobileMenu.classList.add("hidden");
                  mobileMenu.classList.remove("flex");
              }, 500); // Wait for animation to finish
          }
      }
  });
});