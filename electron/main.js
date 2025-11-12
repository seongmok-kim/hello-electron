const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: { nodeIntegration: true, contextIsolation: false }
  })

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173') // 반드시 dev URL
  } else {
    win.loadFile(path.join(__dirname, '../frontend/dist/index.html')) // build 시
  }

  win.webContents.openDevTools() // 개발용
}

app.whenReady().then(createWindow)