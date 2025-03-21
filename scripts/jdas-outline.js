const status = document.querySelectorAll(".complete");

status.forEach((s) => {
  if (s.textContent === "COMPLETE") {
    s.className = "finished";
  }
});
