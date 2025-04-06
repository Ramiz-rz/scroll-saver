# Scroll Saver - Chrome Extension

**Scroll Saver** is a lightweight Chrome extension that saves your scroll position and restores it when you revisit a website. It synchronizes across devices and allows you to set custom scroll offsets for individual sites.

## Features
- 💾 **Saves scroll position** across multiple pages for a seamless browsing experience.
- 🔄 **Syncs across devices** using Chrome Sync Storage, making it available wherever you're logged in.
- ⚙️ **Customizable scroll offset** per site for precise control over your scroll position.
- 🖱️ **Smooth scroll back to position** with adjustable speed.
- 🔒 **100% local data** (no tracking) to respect your privacy.
- 🌒 **Dark mode toggle** for a better UI experience.
- ✅ **Visual feedback** when settings are saved or applied, confirming that the action was successful.

## Installation (for Development)
1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/scroll-saver.git
    ```
2. Navigate to `chrome://extensions/` in your Chrome browser.
3. Enable **Developer mode** (toggle at the top-right corner).
4. Click **Load unpacked** and select the folder where the project was cloned (`scroll-saver`).
5. The extension will now be installed and active in your browser.

## Usage

### **Using the Extension**
- **Open the settings popup** by clicking on the extension icon in your browser toolbar.
- **Set Custom Scroll Offset**: Enter a pixel value for the scroll offset to fine-tune your saved scroll position.
- **Smooth Scroll**: Toggle the smooth scroll feature on/off to enable or disable smooth transitions when restoring scroll positions.
- **Scroll Speed**: Adjust the scroll speed (in milliseconds) for smooth scrolling, giving you more control over the speed of the transition.
- **Dark Mode**: Toggle dark mode for a more comfortable viewing experience, especially in low-light environments.
- **Save Settings**: After making changes, click **Save Settings** to apply your customizations. A confirmation message will show once the settings have been saved successfully.

### **Reset Scroll Position**
- **Reset Scroll Position**: Click the "Reset Scroll Position" button to instantly scroll back to the top of the page.

### **How it Syncs Across Devices**
- The scroll position and settings are saved in Chrome's sync storage. This ensures that your preferences are available on all devices where you're signed into the same Chrome account.

## Notifications & Feedback
- **Visual Feedback**: After clicking **Save Settings** or **Reset Scroll**, a confirmation message will appear or a subtle animation will trigger, indicating that the action was successfully completed.

## Troubleshooting
- **Settings not saving or syncing**: Make sure Chrome's sync storage is enabled and you're signed into the same Chrome account on all devices.
- **Smooth scroll not working**: Ensure that the smooth scroll setting is enabled. Some websites may disable smooth scrolling for performance reasons.
- **Scroll position not saved correctly**: This may occur on dynamic websites (e.g., infinite scrolling). The saved position may not match the actual position in such cases.

## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please follow the coding guidelines and write meaningful commit messages.

## License
This project is open-source and available with master resale rights on my Github (https://github.com/Ramiz-rz).

## Developer
**Rameez Aslam** - Full Stack Developer and Creator of Scroll Saver Chrome Extenssion.
**GitHub:** - https://github.com/Ramiz-rzs