const menuButton =
  document.querySelector(".menu-btn");

const navLinks =
  document.querySelector(".nav-links");

const menuIcon =
  menuButton.querySelector("i");


menuButton.addEventListener(
  "click",
  () => {

    navLinks.classList.toggle("active");

    if (
      navLinks.classList.contains("active")
    ) {

      menuIcon.className =
        "fa-solid fa-xmark";

    } else {

      menuIcon.className =
        "fa-solid fa-bars";

    }

  }
);


document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        navLinks
          .classList
          .remove("active");

        menuIcon.className =
          "fa-solid fa-bars";

      }
    );

  });


const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target
              .classList
              .add("active");

          }

        }
      );

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach(
  element => {

    observer.observe(element);

  }
);


const cursorGlow =
  document.querySelector(".cursor-glow");


document.addEventListener(
  "mousemove",
  event => {

    cursorGlow.style.left =
      event.clientX + "px";

    cursorGlow.style.top =
      event.clientY + "px";

  }
);