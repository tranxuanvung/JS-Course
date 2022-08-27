window.addEventListener("load", function(){
  const text = document.querySelector(".text");
  text.addEventListener("mouseenter", function (event) {
    const title = event.target.dataset.tooltip;
    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "tooltip-title";
    tooltipDiv.textContent = title;
    document.body.appendChild(tooltipDiv);

    const cords = event.target.getBoundingClientRect();
    const {top, left, width} = cords;
    tooltipDiv.style.left = `${left + (width/2) - (tooltipDiv.offsetWidth/2)}px`;
    tooltipDiv.style.top = `${top - tooltipDiv.offsetHeight - 20}px`;
  })

  text.addEventListener("mouseleave", function () {
    const tooltip = document.querySelector(".tooltip-title");
    if(tooltip){
      tooltip.parentNode.removeChild(tooltip);
    }
  })
});