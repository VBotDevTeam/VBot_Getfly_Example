/**
 * @description
 * @since         Thursday, 2 1st 2024, 9:20:39 am
 * @author        Tú Trần <tutv@getflycrm.com>
 * @copyright     Copyright (c) 2024, Getfly VN TECH.,JSC, Inc.
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */


import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App';

(async () => {

  const setting = {                
    floatingDialPad: {
      right: 10,
      bottom: 10,
      // Optional: top, left
    },        
    floatingButton: {
      enable: true,
      right: 10,
      bottom: 200,     
      backgroundColor: '#20C55A',
      width: 60,
      height: 60,
      icon: '<svg t="1735808619741" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7001" width="200" height="200"><path d="M170.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" opacity=".3" p-id="7002"></path><path d="M170.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="7003"></path><path d="M426.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="7004"></path><path d="M426.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="7005"></path><path d="M682.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="7006"></path><path d="M682.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="7007"></path><path d="M170.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="7008"></path><path d="M426.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="7009"></path><path d="M682.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="7010"></path></svg>',
      // Optional: top, left
    },
    access_token: 'Token của bạn',
  };

  const { VBotWebCall } = await import('https://plugin.vbot.vn/v1.0.1/vbot-web-plugin.js');
  console.log("VBotWebCall",VBotWebCall);
  VBotWebCall.init(setting);

  const clickToCallHandler = (phone) => {
    console.log("clicked!", VBotWebCall);
    VBotWebCall.makeCall(phone);
  };
  
  const openDialPadHandler = () => {
    VBotWebCall.openDialPad();
  };
  
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);

  root.render(
    <HashRouter>
      <App openDialPad={openDialPadHandler} clickToCall={() => clickToCallHandler('0365778xxx')} />
    </HashRouter>
  );

})();
