import { useState } from "react";

const CntExUseState = () => {
    const [cnt, Setcnt] = useState(0);
    const handleCnt = () => Setcnt(cnt + 1);
  return (
    <div>
      CntExUseState
      <p>{cnt}</p>
      <button onClick={handleCnt}>+</button>
    </div>
  );
};

export { CntExUseState };
