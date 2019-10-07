# hcj
## 切版處理順序
### 處理大區塊呈現多欄或是單欄樣式
### 處理個別細部文字與圖片的樣式
### 從左到右開始處理版面編排

#NPM
NPM 是 Node Package Manager(線上套件庫)，可以用來下載多種 Javascript 套件，提高開發效率。
NPM 安裝環境分為 Global 與 Local
NPM 安裝於Global，指令是-g, 為的是不需要每次建立環境時都需要再次安裝
Npm 安裝於Local，則不需要輸入特殊指令，預設即是安裝在Project端

#Gulp 使用方法
安裝Gulp前，需要先安裝 
1. Node 
2. NPM [ NVM 會在安裝 NPM 時自動安裝]
3. 建立一個新專案 mkdir demo-project
4. 進入這個專案 cd demo-project 
    <code>
        mkdir demo-project && cd demo-project
    </code>

5. 初始化 NPM 專案，建立pageage.json
    <code>
        npm init
    </code>
    name: 專案的名t稱，預設該目錄名。
    description: 專案描述
    entry point: 專案切入點
    test command: 專案測試指令
    git repository: 專案原始碼的git位置
    keywoard: 專案關鍵字
    author: 專案作者，以 author-name <author@email.com> 來表示。
    license: 專案版權隸屬。 
6. 
<code>
    npm install gulp-cli -g
    npm install gulp -D
    npx -p touch nodetouch gulpfile.js
    gulp --help
    gulp 
    gulp [taskName]
</code>