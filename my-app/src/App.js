import React from 'react';
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";  // 홈 페이지
import { Test } from "./pages/test";  // 테스트 페이지

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
