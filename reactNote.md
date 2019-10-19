#### react 地雷區

> 監聽事件(e.g. onClick )只能綁在 html tag 中 若要綁在 jsx 的 tag 中必須要餵到最底層的 html tag
> <TbXipg onClick={}> > &nbsp; &nbsp; <TbXitb onClick={}> > &nbsp; &nbsp; &nbsp; <ChildComponent onClick={}>
> 必須要綁到最下面 html tag 才行

#### redux utils(把 reducer 簡化的 function)

redux 的 function utils

```javascript
export const createReducer = (initialState, fnMap) => {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
  };
};
```
