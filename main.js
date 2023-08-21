const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function onReady() {
    win = new BrowserWindow({ width: 300, height: 670, frame: false })
    win.loadURL(url.format({
        pathname: path.join(
            __dirname,
            'dist/Poker/index.html'),
        protocol: 'file:',
        slashes: true
    }))
}
app.on('ready', onReady); 
