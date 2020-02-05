#### 2020 Feb Note
1. styled component的mixin怎麼用? <br>
<a href="https://gist.github.com/carlosepp/7704cce24edba0520eb6b36d894f04ae">參考連結</a>

```js
const mixinCenter = () => `
    diplay: flex;
    align-items: center;
`

const ContainerDiv = styled.div`
    ${mixinCenter}
`
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


#### 使用link的方式
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

#### 有重複react時

把lib的react指向專案的React => <a href="https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react">參考連結</a>

```
This problem can also come up when you use npm link or an equivalent. In that case, your bundler might “see” two Reacts — one in application folder and one in your library folder. Assuming myapp and mylib are sibling folders, one possible fix is to run npm link ../myapp/node_modules/react from mylib. This should make the library use the application’s React copy.

```


#### 2/3 待辦
=> dropdown 優化成TUKU下拉選單:  => 組合input模組
=> 教育訓練第二季預計名單通知
=> Q: composses & mixin差別? 差在一個要CSS module才能用嗎?


Q: styled component傳參數時要如何直接用obj附值~?
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

skeleton AntDesign直接包在裡面即可用
=> skeleton待優化

#### 2/5 
Elastic Search目前先不管

後台: 不用前後端分離，不用那麼麻煩
分離pros: 

多API管理後台 

API 不同台 

ansible: 管理

go framework CRUD / go graphQL server 歸api

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

機器都用centOS

node Nginx PM2 

API: go
mariaDB client/server


技能:
1. ansible: linux指令
2. Go Framework(CRUD): go語言熟悉、CRUD流程、migration DB
前端驗證JWT: Json Web Token  
3. Go GraphQL Server

4. NextJS 部署 => nginx 設定
5. 管理後台部署


如何登入測試機? 
反向代理 http://10.35.2.26:83/
站長平台使用~?  => 用antDesign Pro? 

#### openSSH用戶端在windows 找不到新增功能
=> 重新開機 (因為剛刪除，之後要新增，有bug)



#### 待辦項目
1. 教育訓練文件優化 - TrainingSample
2. 教育訓練文件擬定 - 呈報給Lucha

3. Proxy 反向代理
4. 

#### 三月中: 教育訓練第二季講者confirm 


#### CentOS 
linux CentOS command
https://www.cyberciti.biz/faq/how-to-check-os-version-in-linux-command-line/

改變權限=> super
$sudo -s


$ssh rdadmin@10.35.2.26 

 /usr/sbin/nginx 
 /usr/lib64/nginx 
 /etc/nginx     => 看起來是這個
 /usr/share/nginx   => html
 /usr/share/man/man8/nginx.8.gz


 vi -R etc/nginx/nginx.conf