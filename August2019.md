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
