(function () {
  const startDate = new Date(2025, 2, 20);
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const lists = document.querySelectorAll(".split-section__list");

  lists.forEach((ul) => {
    const listItems = ul.querySelectorAll("li");
    const cycleLength = listItems.length;
    const offset = ((diffDays % cycleLength) + cycleLength) % cycleLength;

    listItems.forEach((li) => li.classList.remove("active"));

    if (listItems[offset]) {
      listItems[offset].classList.add("active");
    }
  });
})();
