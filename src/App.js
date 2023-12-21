
import Accordian from './components/Accordian'
import RandomColor from './components/RandomColor';
import Star from './components/star/Star';
import Image from './components/image/Image';
import Button from './components/image-scroll/Button';
import CartItem from './components/CartItem';

import { useContext } from "react";
import { cartContext } from './context/CartContext';
import MenuList from './components/tree-view/MenuList';
import QRCode from 'react-qr-code';
import QrCode from './components/qrcode/QrCode';

function App() {
  const { item, setItem } = useContext(cartContext);

  return (
    // <Accordian />
    // <RandomColor/>
    // <Star/>
    // <Image/>
    // <Button />
    <>
    
    <QrCode />
    </>
  
    );
}

export default App