window.addEventListener("load", function () {
  const links = [...document.querySelectorAll(".menu-link")];
  links.forEach((item) => item.addEventListener("mouseenter", handleHoverLink));

  const line = document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(line);
  function handleHoverLink(event) {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    line.style.width = `${width}px`;
    line.style.left = `${left}px`;
    line.style.top = `${top + height + 2}px`;
  }

  const menu = document.querySelector(".menu");
  if (menu) {
    menu.addEventListener("mouseleave", function () {
      line.style.width = 0;
    });
  }
});
