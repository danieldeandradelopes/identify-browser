import React, {useState, useEffect} from 'react';
import {isFirefox, isChrome, isChromium, isOpera, isSafari, isEdge, isIE, isMobile} from 'react-device-detect';

function App() {  
  const [browser, setBrowser] = useState('');

  useEffect(() => {
    if (isFirefox){
      setBrowser('Firefox')
    }

    if (isChrome) {
      setBrowser('Chrome')
    }

  },[])

  return (
    <h1>Você está acessando esse site do navegador: {browser}</h1>
  );
}

export default App;
