import { DependencyList, useEffect, useState } from "react";

export const useEffectSkipFirstRender = (callBack: () => void, dependencies: DependencyList) => {
   const [count, setCount] = useState(0);
   useEffect(() => {
      if (count > 0) {
         callBack();
      }
      setCount((s) => (s = s + 1));
   }, dependencies);
};
