const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function onReady() {
    win = new BrowserWindow({ width: 300, height: 670 })
    win.loadURL(url.format({
        pathname: path.join(
            __dirname,
            'dist/poker/index.html'),
        protocol: 'file:',
        slashes: true
    }))
}
app.on('ready', onReady); 
