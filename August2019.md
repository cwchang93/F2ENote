#### SearchPanel Q

1. 訂房最早不能在當天? 一定要隔天?

#### 用鍵盤操控滑鼠事件? 如何用 keyboard 觸發 onBlur 事件?

=>

```javascript
if (keyCode === 13) {
  e.target.blur();
}
```

https://stackoverflow.com/questions/48961342/how-to-blur-the-input-provided-in-semantic-ui-react

用 switchCase 時如果要宣告變數，需用{} 刮起來

```javascript
case (8): {
                const inputY = date.substring(0, 4);
                const inputM = date.substr(4, 2);
                result = `${inputY}/${inputM}/${inputDay}`;
                break;
            }

```

<a href="https://stackoverflow.com/questions/55729742/react-typescript-argument-of-type-x-number-any-is-not-assignable-to">
typescript動態傳入參數StackOverflow
</a>

什麼是 typescript?

typescript 的功用?

你需要 typescript 嗎?
=> 不完全需要，但 Angular 2 之後需要

typescript 新的資料型態
=> tuple

```javascript
const user: [number, string, boolean] = [1, "Jinwei", true];
```

為何不能?

```javascript
var employee: [[number, string]];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
```

正確

```javascript
var employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
```

或是

```javascript
var employee: [[number, string], [number, string], [number, string]];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
```

```javascript
const multiType: [string, number] = ["hi", 23];
const sigleType: [string, string, string] = ["hi", "hji", "fj"];
```

多個 value 值的用法(直觀)

```javascript
const multiNum: [...string[]] = ['a','b','c','d']

```

#### 190813

gitlen => 用來辨識誰寫的程式碼

###### 想隱藏 gitlen 的作者註解時

"gitlens.currentLine.enabled": false

Bug: 多選時，沒有紅底
menuList

=> 實驗證明: 只要 selectedData 有東西，就會有紅底
癥結點，點其他的 data => selectedData 會改成其他的

#### vsCode 左邊的 activityBar 調整

```json
"workbench.activityBar.visible": false

```

#### setItem

setItem 放的 value 值必須是字串

