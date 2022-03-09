const [red, green, blue] = [69, 111, 225];
const b = 0;
let flag = true;

window.addEventListener("scroll", () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 150;

  y = y < 1 ? 1 : y;

  v = (255 * y) / 5;
  document.body.onscroll = function () {
    if (
      document.getElementById("project-container").getBoundingClientRect()
        .bottom <= window.innerHeight
    ) {
      document.body.style.backgroundImage = `linear-gradient(to right,black,black)`;
      //   document.body.onscroll = "";
      //   console.log(y * 5);
      //   document.body.style.backgroundImage = `linear-gradient(to right,black 0% ,black ${
      //     y * 6
      //   }%, white ${y * 6}%, white 100%)`;
    } else {
      if (flag) {
        // console.log(v-150, 300-v);
        document.body.style.backgroundImage = `linear-gradient(to right,white 0% ,white ${v}%, black ${v}%, black 100%)`;
        if (v > 250) {
          flag = false;
        }
      } else if (!flag) {
        // console.log(v - 255, v);
        document.body.style.backgroundImage = `linear-gradient(to right,black 0% ,black ${
          v - 255
        }%, white ${v - 255}%, white 100%)`;
        if (v < 250) {
          flag = true;
        }
      }
    }
  };

  //   if (v >200){
  //      if (flag) {
  //     // console.log(v-150, 300-v);
  //     document.body.style.backgroundImage = `linear-gradient(to right,white 0% ,white ${v-150}%, black ${v-150}%, black 100%)`;
  //     if (v > 250) {
  //       flag = false;
  //     }
  //   } else if (!flag) {
  //     // console.log(v - 255, v);
  //     document.body.style.backgroundImage = `linear-gradient(to right,black 0% ,black ${v - 255}%, white ${v - 255}%, white 100%)`;
  //     if (v < 250) {
  //       flag = true;
  //     }
  //   }
  //   }

  //   v=v-128+50
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
});

$(window).scroll(function () {
  $(".hello").css("opacity", 1 - $(window).scrollTop() / 500);
  $(".hideme-nav").css("opacity", ($(window).scrollTop() / 400) * 1);
  $(".hideme-portfolio").css("opacity", $(window).scrollTop() / 1000);
});

// $(document).ready(function () {
//   /* Every time the window is scrolled ... */
//   $(window).scroll(function () {
//     /* Check the location of each desired element */
//     $(".hideme-nav,.hideme-portfolio").each(function (i) {
//       var bottom_of_object = $(this).position().top + $(this).outerHeight();
//       var bottom_of_window = $(window).scrollTop() + $(window).height();

//       /* If the object is completely visible in the window, fade it it */
//       if (bottom_of_window > bottom_of_object / 1.2) {
//         $(this).animate({ opacity: "1" }, 1000);
//       }
//     });
//   });
// });
