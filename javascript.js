const sliderMin = document.getElementById("sliderMin");
const sliderMax = document.getElementById("sliderMax");
const minValue = document.getElementById("minValue");
const maxValue = document.getElementById("maxValue");
const sliderWrapper = document.querySelector(".slider-wrapper");

// Function to update the range between the thumbs
function updateSliderBackground() {
  const minValue = sliderMin.value;
  const maxValue = sliderMax.value;

  // Calculate percentage of the values based on the max range
  const minPercent = (minValue / 10000) * 100;
  const maxPercent = (maxValue / 10000) * 100;

  // Set the background of the slider
  sliderMin.style.background = `linear-gradient(to right, #4caf50 ${minPercent}%,#4caf50 ${minPercent}%, #4caf50 ${maxPercent}%, #ddd ${maxPercent}%)`;
  sliderMax.style.background = `linear-gradient(to right, #ddd ${minPercent}%, #4caf50 ${minPercent}%, #4caf50 ${maxPercent}%, #ddd  ${maxPercent}%)`;

  // Update the displayed values
  document.getElementById("minValue").textContent = minValue;
  document.getElementById("maxValue").textContent = maxValue;
}

// Update slider background when the user changes the value
sliderMin.addEventListener("input", updateSliderBackground);
sliderMax.addEventListener("input", updateSliderBackground);

// Initial call to set the background
updateSliderBackground();
