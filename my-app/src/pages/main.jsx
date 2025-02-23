
import '../App.css';
import React from 'react';
import { useNavigate , Route, Routes } from "react-router-dom";
import { Test } from './test';

function Main() {
  const navi = useNavigate();

  function goToTestPage() {
    navi("/test"); // "/test" 경로로 이동 (뒤로 가기 가능)
  };
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
        <button onClick={goToTestPage}>테스트하러가기</button>
      </div>

      <Routes>
        <Route path="/test" element = {<Test />} />
      </Routes>
    </div>
  );
}

export default Main;
