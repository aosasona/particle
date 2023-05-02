document.addEventListener("DOMContentLoaded", load);

function load() {
  document.querySelector("body").addEventListener("click", function(e) {
    const elem = document.createElement("div");
    const width = rand(1, 200);
    elem.style.width = width + "px";
    elem.style.aspectRatio = "1/1";
    elem.style.backgroundColor = `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 100) / 100})`;
    elem.style.position = "absolute";
    elem.style.top = e.clientY - width / 2 + "px";
    elem.style.left = e.clientX - width / 2 + "px";
    elem.style.borderRadius = "50%";
    elem.style.transition = "all 0.5s";
    let createdElem = document.querySelector("body").appendChild(elem);
    const SPEED = 25;
    let reverse = false;
    setInterval(() => {
      let y = parseFloat(createdElem.style.top.replace("px", ""));
      const width = +createdElem.style.width.replace("px", "");
      const yBoundary = window.innerHeight + 10;
      y = reverse ? y - SPEED : y + SPEED;
      createdElem.style.top = y + "px";
      if (y + width >= yBoundary) {
        reverse = true;
      } else if (y <= 0) {
        reverse = false;
      }
    }, 150);
    // setInterval(() => {
    //   if (createdElem.style.width.replace("px", "") < 1) {
    //     createdElem.remove();
    //     return;
    //   }
    //   createdElem.style.width = createdElem.style.width.replace("px", "") * 0.8 + "px";
    // }, 500);
  });
}

function rand(min = 1, max = 16) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
