# 1-webpack-es6

## 此 webpack 專案目的

此 webpack 專案會將 ES6+ 的 JS 程式碼進行編譯

編譯的最後產出能夠讓 JS 程式碼降級到 ES5，讓不支援 ES6+ 的瀏覽器可以直接使用

## 前端專案起手式

此說明是針對，拿到一個前端專案時，通常會先做的事情

注意這個 git 載下來後要輸入指令時

一定要在 `\webpack-guide\1-webpack-es6>` 的位置進行

回到起手式，此為用 node.js 進行 webpack 編譯而運行的專案

所以就在指令中輸入

```bash
npm install
```

用 cmd 或是 PowerShell 來看大概會是長這樣 `\webpack-guide\1-webpack-es6>npm install`

1-webpack-es6 資料夾內就會多出 node_modules

會產生 node_modules 是因為 package.json 裡面有寫好此專案要安裝的第三方函式庫

## scripts

觀察 package.json 的 `scripts`，有 dev 及 build，內容分別為 webpack-dev-server 及 webpack

可以把 script 想成用 json 方式來儲存不同的 .bat 或是 .sh

### dev

使用方式為

```bash
npm run dev
```

啟動開發用的伺服器，類似 Visual Studio 啟動 IIS Express 的感覺，可以進行特別的偵錯功能或其他更多

### build

```bash
npm run dev
```

打包整個專案到 webpack 設置的 output 目標資料夾，試著輸入看看會發現專案中出現了 dist 這個資料夾，裡面的內容就會是這個 webpack 專案中所用到有依賴關係的東西

## devDependencies

點開 package.json 觀察 `devDependencies`

可以看到 babel 及 plugin 及 webpack 相關的函式庫

既然有 webpack 在其中，那就能夠在專案中找到 `webpack.config.js` （也有例外，這裡先不探討）

觀察 webpack 的 entry，知道哪隻檔案是進入點，就能開始看 code 了


