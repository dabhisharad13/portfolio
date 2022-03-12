function animate_heading(id) {
  if (
    document.getElementById(id).getBoundingClientRect().bottom <=
    window.innerHeight
  ) {
    var element = document.getElementById(id);

    document.body.style.backgroundImage = `linear-gradient(to right,black,black)`;
    element.classList.add("animate__animated", "animate__fadeInUp");
    element.style.opacity = 1;
  }
}

$(document).ready(function () {
  let flag = true;
  let height = window.innerHeight;
  height = height / 2;

  window.addEventListener("scroll", () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 300;
    y = y < 1 ? 1 : y;
    v = (255 * y) / 5;

    document.body.onscroll = function () {
      animate_heading("project-container");
      animate_heading("heading-work");
      animate_heading("tech-heading");
      animate_heading("timeline-heading");

      if (flag) {
        document.body.style.backgroundImage = `linear-gradient(to right,white 0% ,white ${v}%, black ${v}%, black 100%)`;

        if (v > 100) {
          document.getElementById(
            "main-text"
          ).style.backgroundImage = `linear-gradient(to right,white 0%,white ${
            v - 200
          }%,black ${v - 130}%, black 100%)`;

          flag = false;
        }
      } else if (!flag) {
        document.body.style.backgroundImage = `linear-gradient(to right,black 0% ,black ${
          v - 155
        }%, white ${v - 155}%, white 100%)`;

        if (v - 155 > 55) {
          document.getElementById(
            "main-text"
          ).style.backgroundImage = `linear-gradient(to right,white 0%,white ${
            v - 200
          }%,black ${v - 150}%, black 100%)`;

          document.getElementById(
            "name"
          ).style.backgroundImage = `linear-gradient(to right,white 0%,white ${
            v - 200
          }%,black ${v - 150}%, black 100%)`;
        } else {
          document.getElementById(
            "main-text"
          ).style.backgroundImage = `linear-gradient(to right,black,black )`;
        }
        if (v < 155) {
          flag = true;
        }
      }
    };
  });

  $(window).scroll(function () {
    $(".hello").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".hideme-nav").css("opacity", ($(window).scrollTop() / 400) * 1);
    $(".hideme-portfolio").css("opacity", $(window).scrollTop() / 1000);
  });
});
