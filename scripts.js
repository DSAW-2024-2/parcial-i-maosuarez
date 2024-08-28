let share = document.getElementById("share");

share.addEventListener("click", () => {
  const shareOptions = document.getElementById("options");
  shareOptions.style.display =
    shareOptions.style.display === "none" ? "flex" : "none";
});
