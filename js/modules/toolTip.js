export default function toolTip() {
  const toolTips = document.querySelectorAll("[data-tooltip]");

  const onMouseMove = {
    handleEvent(e) {
      this.tollTipBox.style.top = `${e.pageY + 20}px`;
      this.tollTipBox.style.left = `${e.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tollTipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
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

  function onMouseOver() {
    const tollTipBox = createToolTipBox(this);

    this.addEventListener("mouseleave", onMouseLeave);
    onMouseLeave.element = this;
    onMouseLeave.tollTipBox = tollTipBox;

    this.addEventListener("mousemove", onMouseMove);
    onMouseMove.tollTipBox = tollTipBox;
  }

  toolTips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
