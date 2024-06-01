import React from 'react';
import { PiInstagramLogoThin } from 'react-icons/pi'; // Certifique-se de que este ícone esteja corretamente importado
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InstagramButton = () => {
  const handleClick = () => {
  const username = 'sophia__amarall';

    if (username) {
      const url = `https://instagram.com/${username}`;
      window.open(url, '_blank');
    }
  };

  return (
    <button onClick={handleClick} className=" text-black p-2 rounded flex items-center hover:shadow-md hover:shadow-gray-400">
      <span>Me acompanhe no Instagram!</span>
      <PiInstagramLogoThin className="ml-2" />
    </button>
  );
};

export default InstagramButton;