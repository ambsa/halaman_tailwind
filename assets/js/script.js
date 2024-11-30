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

  // Menutup menu tampilan mobile dimanapun
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

// button back to top
const backToTopBtn = document.getElementById('backToTop');

        // Menampilkan tombol saat scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('hidden');
            } else {
                backToTopBtn.classList.add('hidden');
            }
        });

        // Scroll ke atas saat tombol diklik
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });