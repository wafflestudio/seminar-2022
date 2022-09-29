import { useState } from "react";

const { useEffect } = require("react");

function MyComponent() {
  console.log("렌더링 중입니다... (상)");
  useEffect(() => {
    console.log("side-effect 실행");
    return () => console.log("side-effect가 싼 똥 처리");
  });
  console.log("렌더링 중입니다... (하)");

  const [theAnswer, setTheAnswer] = useState(42);
  return (
    <div>
      <div>안녕하세요!</div>
      <button onClick={() => setTheAnswer(theAnswer === 42 ? 404 : 42)}>
        궁극적인 답은 {theAnswer}
      </button>
    </div>
  );
}

export default MyComponent;
