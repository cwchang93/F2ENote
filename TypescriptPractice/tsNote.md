###Typescript 常用的表示方式!

#### Array 表示方法

> 基本表示法~

```javascript
// 1.dataType[]
const user: string[] = ["jw", "sk", "yl"];

// 2. Array<dataType>
const idNumber: Array<number> = [1, 2, 3];
```

> 多種 dataType 表示法

```javascript
// 1. (dataType1|dataType2)[]
const mixture: (number | string)[] = ["banana", 30, 32, "wine"];

// 2. Array<dataType1|dataType2>
const mixture: Array<number | string> = ["cow", 123, "animal"];
```

> typescript 錯誤寫法

```javascript
const cow: [string] = ["jw", "hi"];
```

> Q: Cannot redeclare block-scoped variable 'test'.ts(2451)
> 因為編譯完後有同樣的變數，因此會報這個錯誤?

<a href="https://medium.com/@muravitskiy.mail/cannot-redeclare-block-scoped-variable-varname-how-to-fix-b1c3d9cc8206"> </a>
