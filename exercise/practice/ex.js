window.addEventListener("load", function(){
  const text = document.querySelector(".text");
  text.addEventListener("mouseenter", function () {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = text.dataset.tooltip;
    document.body.appendChild(tooltip);

    const cords = text.getBoundingClientRect();
    const tooltipW = tooltip.offsetWidth;
    const tooltipH = tooltip.offsetHeight;
    const {x, y, width} = cords;
    tooltip.style.top = `${y - tooltipH - 20}px`;
    tooltip.style.left = `${x + width/2 - tooltipW/2}px`;
  })

  text.addEventListener("mouseleave", function(){
    const tooltip = document.querySelector(".tooltip");
    if(!tooltip) return;
    tooltip.parentNode.removeChild(tooltip);
  })
})