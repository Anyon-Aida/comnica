'use client';

import Image from 'next/image';
import CustomButton from './components/CustomButton';

export default function Home() {
  const handleClick = () => {
    console.log('Gomb megnyomva');
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logoContainer">
          <Image
            src="/logo.svg"
            alt="Comnica Logo"
            width={50}
            height={50}
          />
          <h1>COMNICA</h1>
        </div>
      </header>

      <div className="leftPanel">
        <div className="leftContent">
          <h1>Comnica Signature</h1>
          <p>Digitális aláíró szolgáltatás a Comnicától</p>
        </div>
        <div className="imageContainer">
          <Image
            src="/laptop-illustration.png"
            alt="Laptop Illustration"
            width={500}
            height={500}
            className="leftImage"
          />
        </div>
      </div>

      <div className="rightPanel">
        <h2>
          Üdvözlöm a
          <br />
          Comnica Signature-ben!
        </h2>
        <p>
          A következőkben végigvezetjük dokumentumai elfogadásán és aláírásán. A
          folyamat több percet is igénybe vehet, ezért kérjük, csak akkor
          kezdje el, ha készen áll rá.
        </p>
        <CustomButton onClick={handleClick}>KEZDHETJÜK</CustomButton>
      </div>
    </div>
  );
}
