#### 新的 Coding 筆記

##### TypeScript 中當 data 是物件的宣告方式

```js
const handleChildData = (data: { text: "洛杉磯", value: "LAX" }) => {
  setInputText(data.text);
};

const [selectedData, setSelectedData] = React.useState({ text: "", value: "" });
```

#### 用 terminal 關掉沒關成功的 port

```

netstat -ano|findstr 3002
taskkill -PID 18308 -F

3002 為port的名稱
下面的PID為 port ID

```

#### XinD 待討論項目

##### Input

1. input是否需要M版折行的props? 或是直接預設M版折行?
2. 

```


```