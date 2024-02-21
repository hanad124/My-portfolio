import { Route, Routes } from "react-router-dom";
import { Home } from "./Exports";

import { SkeletonTheme } from "react-loading-skeleton";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <SkeletonTheme />
    </>
  );
};

export default App;
