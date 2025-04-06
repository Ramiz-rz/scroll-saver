// popup.js
document.addEventListener("DOMContentLoaded", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const domain = encodeURIComponent(new URL(tab.url).origin);
  const path = encodeURIComponent(tab.url.split(domain)[1]);
  const key = `${domain}${path}`;

  // Get current settings
  chrome.storage.sync.get([`${key}_offset`, `${key}_smooth_scroll`, `${key}_scroll_speed`, `${key}_dark_mode`], (data) => {
    document.getElementById("offset").value = data[`${key}_offset`] || '';
    document.getElementById("scroll-speed").value = data[`${key}_scroll_speed`] || 500;
    document.getElementById("smooth-scroll-toggle").checked = data[`${key}_smooth_scroll`] !== undefined ? data[`${key}_smooth_scroll`] : true;

    // Check dark mode status
    const isDarkMode = data[`${key}_dark_mode`] || false;
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    }
  });

  // Save settings when Save button is clicked
  document.getElementById("save-offset").addEventListener("click", () => {
    const offset = document.getElementById("offset").value;
    const scrollSpeed = document.getElementById("scroll-speed").value;
    const smoothScroll = document.getElementById("smooth-scroll-toggle").checked;

    // Save settings to chrome.storage
    chrome.storage.sync.set({
      [`${key}_offset`]: parseInt(offset, 10) || 0,
      [`${key}_scroll_speed`]: parseInt(scrollSpeed, 10) || 500,
      [`${key}_smooth_scroll`]: smoothScroll
    });

    // Show confirmation message with animation
    showNotification("Settings Saved!", "success");
  });

  // Reset scroll position when Reset button is clicked
  document.getElementById("reset-scroll").addEventListener("click", () => {
    window.scrollTo(0, 0);

    // Show confirmation message with animation
    showNotification("Scroll Position Reset!", "info");
  });

  // Toggle dark mode
  document.getElementById("toggle-theme").addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    // Save dark mode preference
    chrome.storage.sync.set({
      [`${key}_dark_mode`]: isDarkMode
    });
  });
});

// Show notification with animation
function showNotification(message, type) {
  const statusElement = document.getElementById("status");

  // Set the message and type
  statusElement.textContent = message;
  statusElement.classList.add(type);

  // Make the status element visible
  statusElement.style.display = "block";

  // Add animation for the notification
  statusElement.classList.add("fade-in");

  // Hide notification after 2 seconds
  setTimeout(() => {
    // Remove animation and reset classes
    statusElement.classList.remove("fade-in");
    statusElement.classList.remove(type);
    statusElement.textContent = "";

    // Hide the notification element after animation
    statusElement.style.display = "none";
  }, 2000);
}
