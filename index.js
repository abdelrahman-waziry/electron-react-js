// const { app, BrowserWindow } = require('electron')
// const path = require('path')
// const isDev = require('electron-is-dev')
//
// // Window options
// const options = {
//   width: 800,
//   height: 600,
//   webPreferences: {
//     nodeIntegration: true,
//   },
// }
//
// // app url
// const devURL = 'http://localhost:3000'
// const buildPath = `file://${path.join(__dirname, '../build/index.html')}`
// const
//   createWindow = () => {
//     // create window
//     let win = new BrowserWindow(options)
//     // enable dev tools
//     win.webContents.openDevTools()
//     // Load index file
//     win.loadURL(isDev ? devURL : buildPath)
//     // on close
//     win.on('closed', () => {
//       win = null
//     })
//     // Quit when all windows are closed.
//     app.on('window-all-closed', () => {
//       // On macOS it is common for applications and their menu bar
//       // to stay active until the user quits explicitly with Cmd + Q
//       if (process.platform !== 'darwin') {
//         app.quit()
//       }
//     })
//     app.on('activate', () => {
//       // On macOS it's common to re-create a window in the app when the
//       // dock icon is clicked and there are no other windows open.
//       if (win === null) {
//         createWindow()
//       }
//     })
//   }
//
// app.on('ready', createWindow)
