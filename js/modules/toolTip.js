export default function toolTip() {
  const _toolTips = document.querySelectorAll("[data-tooltip]");

  _toolTips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(e) {
    const tollTipBox = createToolTipBox(this);

    this.addEventListener("mouseleave", onMouseLeave);
    onMouseLeave.element = this;
    onMouseLeave.tollTipBox = tollTipBox;

    this.addEventListener("mousemove", onMouseMove);
    onMouseMove.tollTipBox = tollTipBox;
  }

  const onMouseLeave = {
    handleEvent() {
      this.tollTipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(e) {
      this.tollTipBox.style.top = e.pageY + 20 + "px";
      this.tollTipBox.style.left = e.pageX + 20 + "px";
    },
  };

  function createToolTipBox(element) {
    const toolTipBox = document.createElement("div");
    const toolTipText = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = toolTipText;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }
}
