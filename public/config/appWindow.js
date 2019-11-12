/**
 * -------------------------------------------------------
 * Main window options
 * -------------------------------------------------------
 *
 * The `BrowserWindow` class creates and controls windows
 * The following options are the options used to create the main application
 * window on application startup.
 *
 * @link https://electronjs.org/docs/api/browser-window
 */

module.exports = {
  width: 800,
  height: 600,
  center: true,
  webPreferences: {
    nodeIntegration: true,
  },
}