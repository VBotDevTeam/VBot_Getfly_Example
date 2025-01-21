/**
 * @description
 * @since         Thursday, 2 1st 2024, 9:20:39 am
 * @author        Tú Trần <tutv@getflycrm.com>
 * @copyright     Copyright (c) 2024, Getfly VN TECH.,JSC, Inc.
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

// libs
import React from "react";
import './App.css';
// Wrap the App component with React.memo
// const App = React.memo(() => {
//   return <h1>Hello VBot + Getfly</h1>;
// });
const App = ({ openDialPad, clickToCall }) => {
  return (
    
    <div className='BtnGroup'>
      <h1>Hello VBot + Getfly</h1>
      <button className='CustomCallBtn' onClick={openDialPad}>
            {/* <svg t="1735613373605" class="icon mr-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4275" width="20" height="20"><path d="M170.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" opacity=".3" p-id="4276"></path><path d="M170.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4277"></path><path d="M426.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4278"></path><path d="M426.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4279"></path><path d="M682.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4280"></path><path d="M682.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4281"></path><path d="M170.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4282"></path><path d="M426.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4283"></path><path d="M682.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4284"></path></svg> */}
            <span>Bàn phím</span>
      </button>
      <button className='CustomCallBtn' onClick={clickToCall}>
            {/* <svg t="1736826541657" class="icon mr-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4270" width="20" height="20"><path d="M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.52 387.52 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z" fill="#ffffff" p-id="4271"></path></svg> */}
            <span>Bấm để gọi</span>
      </button>
    </div>
  );
};

export default App;
