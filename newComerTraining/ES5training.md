#### 綁定 this 方法

```javascript
var obj = {};
var f = function() {
  return this;
};
console.log(f() === window);
console.log(f.call(obj) === obj);
```

```js
var each = function(param) {
  console.log("a");

  if (typeof param === "function") {
  }
};
```

```js
js api & web api 區別

js 操作web api的方法

外層

// 底層
document.getElementById('content');
document.getElementById('content').classList;


1. 建立模組名稱
2. 作用域範圍
3.


```
