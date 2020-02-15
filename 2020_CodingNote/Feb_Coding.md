#### 2020 Feb Note

1. styled component 的 mixin 怎麼用? <br>
   <a href="https://gist.github.com/carlosepp/7704cce24edba0520eb6b36d894f04ae">參考連結</a>

```js
const mixinCenter = () => `
    diplay: flex;
    align-items: center;
`;

const ContainerDiv = styled.div`
  ${mixinCenter}
`;
```

react type node
<a href="https://stackoverflow.com/questions/45519567/what-is-the-typescript-equivalent-of-react-proptypes-node">
參考</a>

### Hooks Rules

<a href="https://reactjs.org/docs/hooks-rules.html"> Hooks Rule</a>

```js
```

#### yarn upgrade

```
yarn upgrade [package | package@tag | package@version | --scope @scope]... [--ignore-engines] [--pattern]
```

#### 使用 link 的方式

```
Xin-design
$lerna run build

到XinMedia-XinDesign\packages\components
$ yarn link

之後到tuku裡面
$yarn link @xin-design/xind

yarn link v1.21.1
success Registered "@xin-design/xind".
info You can now run `yarn link "@xin-design/xind"` in the project
want to use this package and it will be used instead.
Done in 0.06s.


```

#### 有重複 react 時

把 lib 的 react 指向專案的 React => <a href="https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react">參考連結</a>

```
This problem can also come up when you use npm link or an equivalent. In that case, your bundler might “see” two Reacts — one in application folder and one in your library folder. Assuming myapp and mylib are sibling folders, one possible fix is to run npm link ../myapp/node_modules/react from mylib. This should make the library use the application’s React copy.

```

#### 2/3 待辦

=> dropdown 優化成 TUKU 下拉選單: => 組合 input 模組
=> 教育訓練第二季預計名單通知
=> Q: composses & mixin 差別? 差在一個要 CSS module 才能用嗎?

Q: styled component 傳參數時要如何直接用 obj 附值~?

```js
const btnCSS = ({ color: string, background: string, border: string }) => {
  return `
    &:hover,
    &:focus {
        color: ${color};
        background: ${background};
        border-color: ${border};
    }

    &:disabled {
        color: rgba(0, 0, 0, 0.25);
        background-color: #f5f5f5;
        border-color: #d9d9d9;
        cursor: not-allowed;
    }`;
};
```

styled component 已讀不回

```
檢查一下可能是因為外層包的tag跟裡面className有重覆到
=> 在className前面多加&

```

skeleton AntDesign 直接包在裡面即可用
=> skeleton 待優化

#### 2/5

Elastic Search 目前先不管

後台: 不用前後端分離，不用那麼麻煩
分離 pros:

多 API 管理後台

API 不同台

ansible: 管理

go framework CRUD / go graphQL server 歸 api

graphQL 相對不安全? => Restful 也可以跳過中間層!?

盤點站長平台元件

Xinshop: order

Article
Admin

hard: 使用者身分確認~?

資料庫:
admin: 管理者後台
user, product

機器:伺服組

機器都用 centOS

node Nginx PM2

API: go
mariaDB client/server

技能:

1. ansible: linux 指令
2. Go Framework(CRUD): go 語言熟悉、CRUD 流程、migration DB
   前端驗證 JWT: Json Web Token
3. Go GraphQL Server

4. NextJS 部署 => nginx 設定
5. 管理後台部署

如何登入測試機?
反向代理 http://10.35.2.26:83/
站長平台使用~? => 用 antDesign Pro?

#### openSSH 用戶端在 windows 找不到新增功能

=> 重新開機 (因為剛刪除，之後要新增，有 bug)

#### 待辦項目

1. 教育訓練文件優化 - TrainingSample
2. 教育訓練文件擬定 - 呈報給 Lucha

3. Proxy 反向代理
4.

#### 三月中: 教育訓練第二季講者 confirm

#### CentOS

linux CentOS command
https://www.cyberciti.biz/faq/how-to-check-os-version-in-linux-command-line/

改變權限=> super
\$sudo -s

\$ssh rdadmin@10.35.2.26

/usr/sbin/nginx 亂碼
/usr/lib64/nginx 沒東西
/etc/nginx => 看起來是這個
/usr/share/nginx => html  
 /usr/share/man/man8/nginx.8.gz

vi -R etc/nginx/nginx.conf

#### AWS

\$ ssh ec2-user@54.169.189.236 -i asus_private_key.pem

#### 安裝 nvm

curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash

#### 安裝 nodejs

#### 調整完 nginx 的 config 要記得更新~

sudo nginx -t && sudo systemctl restart nginx

#### Q:疑問

1. 遠端沒有權限要如何把 TFS 的檔案摳下來?
2. 網頁上出現圖片的 => 流程: 前端打 api => api 指向放靜態檔案的那台 server

3. 網頁啟動無論靜態或動態頁，一定都會有啟動服務 server run 著

#### 已完成

nginx 指向 domain

nginx 同樣可以把網站指向特定 html 頁面 那為何還需要啟動 node 服務
=> 使用者資料需要跟資料庫拿
=> 當今天有修改資料時需要重 build

更改該資料夾的權限
\$chmod 755

caveat 警告

搜尋、新增、編輯、刪除

#### CSS

<a href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_table_test">css table</a>

#### 原生 js 寫 html 動態改變資料要如何不用砍節點就改變畫面顯示?!

#### querySelectorAll('')如何選取多個值

<a href="https://blog.csdn.net/Dzq_Boyka/article/details/80592346">mask 寫法</a>

#### 2/10

- meeting
  腳本操作 SERVER
  GOLANG 自帶 http 不用 nginx

api 為何要 node 服務 因為要用 pm2
因為 go 服務 build => run
機器重啟: 重新 run

- supervisor

sftp 上 code
SMB: 類似網路芳鄰東西 => 因為

雲端 CDN: 鄰近節點讀到想讀照片、減少流量

swoole: C 的 PHP，開源版本沒有新維護
不用 laravel

讀寫分離:
讀 > 寫

#### gin template

- gin
- gormigrate

####　 go hotload

### bug 寫原生 CSS 不要再用 className 了 QQ

         <div class="test">test</div>
             <div className="test">Wrap</div>

### 2/11

1. 本週教育訓練確認 教室 & 哲昇

- 哲昇預計週三完成

2. 刷完官網 + golang tutorial
   <a href="http://xahlee.info/golang/golang_print.html">Golang Tutorial</a>

3. Input 密碼要記得隱藏

```
<input type="password">
```

<a href="https://stackoverflow.com/questions/41801034/display-the-list-when-an-item-hover">CSS hover show List</a>

1. 點擊前後 a 標籤要一樣顏色
2. 讓點擊範圍變大
3. 首頁: 置中、旁邊不要有滾輪

- prettier 設定

```js

    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    "editor.formatOnSave": true,

```

#### 右邊卷軸的罪魁禍首

```css
.index {
  height: 100vh;
}
```

#### why 寬度改變高度會跟著變?(transform)

```css
margin-top: 50%;
transform: translateY(-50%);
```

#### Xinmedia 會議

Elastic Search: 全文檢索
SMB: 類似網路上的芳鄰
Azure: CDN 費用另外加
發展性、效能、輕量型
Go: 非同步、非執行續、非直譯式

Swoole: C => php 效能好
Python: 爬蟲、深度學習

#### go 知識

```
$go mod download
路徑: C:\Users\chunweichang\go\pkg\mod

```

#### 查詢

\$godoc fmt Println

#### Golang

composer

go module: 控管專案有哪些 module

傳統 go vendor

go init => 產生.mod .sum

#### Gin

router, middleware

controller

- gin-sample

fresh
hotload 的概念

樣板引擎的檔案改變會刷新
.tmpl

sum => 依賴

mutation CRUD
query 查詢

migration 回朔
如何 CRUD 到資料庫

#### MySQL

<a href="https://dev.mysql.com/downloads/file/?id=492456">MySQL 下載</a>

<a href="https://tableplus.com/windows">table Plus</a>

<div>user: root</div>

####

bug

```
Left side of comma operator is unused and has no side effects.ts(2695)
```

```js
class Group extends React.Component<I_Props> {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <AppContextConsumer>
          {ConsumerProps => {
            console.log("this.props", this.props);
            return (
              <li>{this.props.name}</li>   // 這邊灰掉因為沒有包wrap
              <button onClick={this.props.add}>+</button>
            );
          }}
        </AppContextConsumer>
      </div>
    );
  }
}

```

#### 教育訓練

1. 下載速度耗時間
2. 內網連結有落差
3. 麥克風使用
4. 雷射筆、簡報器 => 之後由 F2E Link 購買
5. 簽到表: 手寫簽到表
6. 由我這邊寄課程相關資訊

#### 教育訓練未來規劃

1. 雄獅資訊行銷企劃部 from F2E
2. 雄獅資訊期刊(先對內) =>

- Medium Pro?

3. 雄獅資訊學院(外部課程) => 雄獅資訊達人

- concern: \\\$\$
- 缺平台跟舞台?!

#### 欣傳媒從內部到外部的案例(欣傳媒達人秀)

- 課程整理:

1. 文字化放上去
2. push 到整個雄獅資訊; => 讓內部人都可以看到!

- 外部課程

###　第二季: 原編姓名

人資特定門檻

是否對外? (私底下挖角)

他能得到答案，我能得到成長。

寒冬一年:

- RWD & AWD 開發?

- PageSpeed Insights

#### js regex

1. <a href="https://stackoverflow.com/questions/13855335/validate-field-for-all-language-characters-through-regex/13855453"> all language regex</a>
2. <a href="https://stackoverflow.com/questions/150033/regular-expression-to-match-non-ascii-characters/873600#873600"> 
   </a>

#### CDN

<a href="https://www.jsdelivr.com/package/npm/emoji-regex?tab=collection">
JS CDN
</a>

#### 一包 jsfunction 在 html 也可以去吃它

=> 直接 CDN 進來，看 function 名稱是啥直接呼叫即可!

用 emojiText 即可

#### reg 多個空格會很慘

```js
const fullWidthDigit = /[\uFE30-\uFFA0] /; // 多個空格會無法check
```

#### regex useful link

<a href="https://blog.typeart.cc/%E6%AD%A3%E5%89%87%E8%A1%A8%E9%81%94%E5%BC%8F-%E5%85%A8%E5%9E%8B%E8%8B%B1%E6%95%B8%E4%B8%AD%E6%96%87%E5%AD%97%E3%80%81%E5%B8%B8%E7%94%A8%E7%AC%A6%E8%99%9Funicode%E5%B0%8D%E7%85%A7%E8%A1%A8/"> useful Link</a>

#### emoji=regex 套件 require 不進來
