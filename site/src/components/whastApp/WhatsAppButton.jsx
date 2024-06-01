import React from 'react';
import { Button } from "@/components/ui/button";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  const phoneNumber = '5511980925594'; // Substitua pelo número de telefone desejado, com código do país
  const message = 'Oi, Estou interessada(o) pelo seu trabalho!'; // Substitua pela mensagem desejada

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button onClick={handleClick} className="bg-purple-600 text-white mt-16 ml-5 mb-8 h-11 hover:bg-purple-700">
      Entrar em Contato
      <BsWhatsapp class="ml-2" size={20} />
    </Button>
  );
};

export default WhatsAppButton;