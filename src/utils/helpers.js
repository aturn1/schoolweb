// This file contains JavaScript helper functions for the website

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to format a date in the format "Month Day, Year"
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

// Function to generate a random number between a minimum and maximum value
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Export the helper functions
module.exports = {
  capitalizeFirstLetter,
  formatDate,
  generateRandomNumber
};