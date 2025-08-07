function removeThrobber() {
  const throbber = document.getElementById("throbber");
  const img = document.getElementById("profileImg");
  if (throbber) throbber.remove();
  if (img) img.hidden = false;
}

// --- Dynamic years of experience ---
function updateExperienceYears(start = new Date(2018, 4)) { // May 2018
  const now = new Date();
  const diff = now - start;
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); // account for leap years
  const el = document.getElementById("experienceYears");
  if (el) el.textContent = years;
}
window.onload = () => {
  removeThrobber();
  updateExperienceYears();
};

