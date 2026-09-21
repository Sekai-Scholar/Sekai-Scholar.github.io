document.querySelectorAll(".tab-group").forEach(group => {
  const buttons = group.querySelectorAll(":scope > .tabs button");
  const contents = group.querySelectorAll(":scope > .tab-content");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const target = group.querySelector("#" + targetId);

      contents.forEach(content => {
        content.classList.remove("active");
      });

      buttons.forEach(button => {
        button.classList.remove("active");
      });

      target.classList.add("active");
      button.classList.add("active");
    });
  });
});