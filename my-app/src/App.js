
import './App.css';
import React from 'react';
import { Test } from "./pages/test";
import { Route, Routes , Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <div className ='title'>
        <div>
        <p className='first'>개발환경에서 시작된 기적같은 개발 이야기</p>
        </div>
        <div>
        <p className='second'>나의 성향은</p>
        </div>
        <div>
        <p className='thrid'>your tendency.</p>
        </div>
      </div>

      <div>
        <p className='fourth'>아직 해본적없는 너를,<br></br>개발해보고싶어.</p>
      </div>

      <div className='bt'>
        <Link to="/test">테스트하러가기</Link>
      </div>


      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
