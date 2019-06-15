var express = require("express"),
  app = express(),
  electron = require("electron");

require("electron-reload")(__dirname);

app.use(express.static(__dirname));
app.use(require("./controllers"));

// app.set('views', __dirname + '/client/views');
// app.use(express.static(__dirname + '/client/dist/static'));

app.listen(7000, function () {
  console.log("Listening on port 7000...");
});

electron.app.on("ready", function () {
  const sw = electron.screen.getAllDisplays();
  const winWidth = sw[0].workArea.width;
  const winHeight = sw[0].workArea.height;
  const mainWindow = new electron.BrowserWindow({
    width: winWidth,
    height: winHeight,
    autoHideMenuBar: true,
    useContentSize: true,
    resizable: false,
    icon: __dirname + "/images/take-exam-icon.png"
  });
  mainWindow.loadURL("http://localhost:7000/");
  mainWindow.focus();
});
