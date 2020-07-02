let btnShared = document.getElementsByClassName("btn-shared");
const boxUserShare = document.getElementById("user-share");
const boxUserShare2 = document.getElementById("shared-option");
let width = screen.width;
let height = screen.height;

/* Click for shared */
btnShared[0].addEventListener(
  "click",
  () => {
    boxUserShare.style.display = "none";
    boxUserShare2.style.display = "inherit";
    boxUserShare2.style.display = "grid";
    boxUserShare2.className =
      "animate__animated animate__fadeIn animate_delay-2s";
  },
  true
);
btnShared[1].addEventListener(
  "click",
  () => {
    boxUserShare2.style.display = "none";
    boxUserShare.style.display = "inherit";
    boxUserShare.style.display = "grid";
    boxUserShare.className =
      "animate__animated animate__fadeIn animate_delay-2s";
  },
  true
);
/*click for shared whit popover*/
$(function () {
  $('[data-toggle="popover"]').popover();
});
