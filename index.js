const { app, BrowserWindow } = require("electron");

let mainWindow;

// Habilita o live reload no Electron e no FrontEnd da aplicação com a lib electron-reload
// Assim que alguma alteração no código é feita
require("electron-reload")(__dirname, {
    // Note that the path to electron may vary according to the main file
    electron: require(`${__dirname}/node_modules/electron`),
  });

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // habilita a integração do Node.js no FrontEnd
            nodeIntegration: true,
        },
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`)
});