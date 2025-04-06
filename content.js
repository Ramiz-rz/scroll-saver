// content.js

// Encode the domain to avoid special characters that could cause issues in storage keys
const domain = encodeURIComponent(window.location.origin);
const path = encodeURIComponent(window.location.pathname); // Get the page path to support multiple pages

// Unique key for each page to store scroll position
const key = `${domain}${path}`;

// Get saved scroll position, custom offset, and smooth scroll setting
chrome.storage.sync.get([key, `${key}_offset`, `${key}_smooth_scroll`, `${key}_scroll_speed`], (data) => {
  const savedY = data[key];
  const offset = data[`${key}_offset`] || 0;
  const smoothScroll = data[`${key}_smooth_scroll`] !== undefined ? data[`${key}_smooth_scroll`] : true;
  const scrollSpeed = data[`${key}_scroll_speed`] || 500;

  if (savedY) {
    // Smoothly scroll back to the saved position, applying the offset
    window.scrollTo({
      top: savedY - offset,
      behavior: smoothScroll ? 'smooth' : 'auto'
    });
  }

  // Real-time scroll position update
  setInterval(() => {
    const scrollY = window.scrollY;
    chrome.storage.sync.set({ [key]: scrollY });
  }, 1000);
});
