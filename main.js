const { app, BrowserWindow} = require('electron')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800
  })

  mainWindow.loadFile('chrome://dino')
}

app.whenReady().then(createWindow)
