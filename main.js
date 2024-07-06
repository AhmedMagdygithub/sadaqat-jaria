document.addEventListener("DOMContentLoaded", () => {
  const countBtn = document.querySelector(".count-button");
  const resetBtn = document.querySelector(".reset-button");
  const tasbeehSelect = document.querySelector(".tasbeeh-select");
  const counterSpan = document.getElementById("counter");
  const fieldset = document.querySelector(".field");

  let count = 0;

  countBtn.addEventListener("click", () => {
    const selectedTasbeeh = tasbeehSelect.value;
    count++;
    counterSpan.textContent = count;
  });

  resetBtn.addEventListener("click", () => {
    count = 0;
    counterSpan.textContent = count;

    // إضافة تأثير للـ fieldset عند الضغط على زر Reset فقط
    addShakeEffect();
  });

  function addShakeEffect() {
    fieldset.classList.add("shake");
    setTimeout(() => {
      fieldset.classList.remove("shake");
    }, 820);
  }
});
