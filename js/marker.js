export const markerPicker = function () {
  const x_btn = document.querySelector(".x-btn");
  const o_btn = document.querySelector(".o-btn");

  x_btn.addEventListener("click", () => {
    x_btn.classList.add("active");
    o_btn.classList.remove("active");

    localStorage.setItem("marker-selected", "x-marker");
  });

  o_btn.addEventListener("click", () => {
    o_btn.classList.add("active");
    x_btn.classList.remove("active");

    localStorage.setItem("marker-selected", "o-marker");
  });
};
