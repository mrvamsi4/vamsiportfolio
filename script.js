const menuButton =
  document.getElementById("menuButton");

const navLinks =
  document.getElementById("navLinks");

const themeButton =
  document.getElementById("themeButton");

const scrollTopButton =
  document.getElementById("scrollTop");

const contactForm =
  document.getElementById("contactForm");

const navigationLinks =
  document.querySelectorAll(".nav-link");


// Mobile Menu

menuButton.addEventListener(
  "click",
  function () {

    navLinks.classList.toggle("open");

    const icon =
      menuButton.querySelector("i");

    if (
      navLinks.classList.contains("open")
    ) {

      icon.className =
        "fa-solid fa-xmark";

    } else {

      icon.className =
        "fa-solid fa-bars";

    }

  }
);


// Close Menu

navigationLinks.forEach(
  function (link) {

    link.addEventListener(
      "click",
      function () {

        navLinks.classList.remove(
          "open"
        );

        menuButton
          .querySelector("i")
          .className =
          "fa-solid fa-bars";

      }
    );

  }
);


// Theme

const savedTheme =
  localStorage.getItem(
    "portfolioTheme"
  );

if (savedTheme === "light") {

  document.body.classList.add(
    "light-theme"
  );

  themeButton
    .querySelector("i")
    .className =
    "fa-solid fa-sun";

}


themeButton.addEventListener(
  "click",
  function () {

    document.body.classList.toggle(
      "light-theme"
    );

    const isLight =
      document.body.classList.contains(
        "light-theme"
      );

    themeButton
      .querySelector("i")
      .className =
      isLight
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";

    localStorage.setItem(

      "portfolioTheme",

      isLight
        ? "light"
        : "dark"

    );

  }
);


// Active Navigation

const sections =
  document.querySelectorAll(
    "section"
  );


window.addEventListener(
  "scroll",
  function () {

    let currentSection = "";

    sections.forEach(
      function (section) {

        const sectionTop =
          section.offsetTop;

        if (
          window.scrollY >=
          sectionTop - 180
        ) {

          currentSection =
            section.getAttribute(
              "id"
            );

        }

      }
    );


    navigationLinks.forEach(
      function (link) {

        link.classList.remove(
          "active"
        );

        if (
          link.getAttribute(
            "href"
          ) ===
          "#" + currentSection
        ) {

          link.classList.add(
            "active"
          );

        }

      }
    );


    if (
      window.scrollY > 500
    ) {

      scrollTopButton
        .classList.add(
          "show"
        );

    } else {

      scrollTopButton
        .classList.remove(
          "show"
        );

    }

  }
);


// Scroll To Top

scrollTopButton.addEventListener(
  "click",
  function () {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  }
);


// Contact Form

contactForm.addEventListener(
  "submit",
  function (event) {

    event.preventDefault();


    const name =
      document
        .getElementById("name")
        .value
        .trim();


    const email =
      document
        .getElementById("email")
        .value
        .trim();


    const message =
      document
        .getElementById("message")
        .value
        .trim();


    const subject =

      encodeURIComponent(

        "Portfolio message from " +
        name

      );


    const body =

      encodeURIComponent(

        "Name: " +
        name +

        "\n\nEmail: " +
        email +

        "\n\nMessage:\n" +
        message

      );


    window.location.href =

      "mailto:mrvamsi690@gmail.com" +

      "?subject=" +
      subject +

      "&body=" +
      body;

  }
);


// Current Year

document
  .getElementById(
    "currentYear"
  )
  .textContent =
  new Date().getFullYear();