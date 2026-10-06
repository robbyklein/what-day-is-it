(function () {
  const startDate = new Date(2025, 2, 20);

  function update() {
    const today = new Date();
    const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    document.querySelectorAll(".split-section__list").forEach((ul) => {
      const listItems = ul.querySelectorAll("li");
      const cycleLength = listItems.length;
      const offset = ((diffDays % cycleLength) + cycleLength) % cycleLength;

      listItems.forEach((li, i) => li.classList.toggle("active", i === offset));
    });
  }

  function scheduleMidnight() {
    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    setTimeout(() => {
      update();
      scheduleMidnight();
    }, nextMidnight - now + 1000); // +1s buffer past midnight
  }

  // catch up after sleep / switching back to the tab
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) update();
  });
  window.addEventListener("focus", update);

  update();
  scheduleMidnight();
})();
