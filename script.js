let video = document.querySelector(".about .container .cont .image");
let pop = document.querySelector(".popup_video");
video.onclick = function () {
  pop.style.display = "block";
};
let exit = document.querySelector(".popup_video i");
exit.onclick = function () {
  pop.style.display = "none";
};
