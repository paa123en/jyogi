'use strict';

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Screen = electron.screen;

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
  app.quit();
});

// Electronの初期化完了後に実行
app.on('ready', function() {
  // メイン画面の表示。ウィンドウの幅、高さを指定できる
  const size = Screen.getPrimaryDisplay().size; // ディスプレイのサイズを取得する
  mainWindow = new BrowserWindow({
    left: 0,
    top: 0,
    width: size.width, // 最大サイズで表示する
    height: size.height, // 最大サイズで表示する
    frame: true, // ウィンドウフレームを表示
    show: true,
    transparent: true,
    resizable: true,
    'always-on-top': true // 一番手前に表示する
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // dev tool
  //mainWindow.webContents.openDevTools();

  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});