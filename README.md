#### Reconciliation

- 랜더 전후의 일치 여부를 판단하는 규칠
- 서로 다른 타입의 두 엘리먼트는 서로 다른 트리를 만들어낸다.
- 개발자가 key props를 통해 여러 렌더링 사이에서 어떤 자식 엘리먼트가 변경되지 않아야 할지 표시해줄 수 있다.

#### React.createPotal

modal 같은 것을 만들 때 특정 다른 div 안에 children에 넣어줄 수 있다.
root를 벗어난 곳에 넣고싶다면 createPotal을 쓰는 것도 좋은 방법이다.

```jsx
function App() {
  const [visible, setVisible] = useState(false); // 초기값 false 지정

  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  return (
    <div>
      <button onClick={open}>open</button>
      {visible && (
        <Modal>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.5)",
            }}
          ></div>
          Hello
        </Modal>
      )}
    </div>
  );
}
```

#### React.forwardRef

리액트에서 제공하는 API 중 forwardRef를 이용해서 하위 컴포넌트에 있는 레퍼런스를 상위 컴포넌트에서 이용하기
