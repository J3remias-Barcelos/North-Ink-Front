import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { FaWhatsapp } from "react-icons/fa";

function ImageGrid() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    console.log("Abrindo diálogo");
    setIsOpen(true);
  };
  const handleClose = () => {
    console.log("Fechando diálogo");
    setIsOpen(false);
  };

  console.log("Dados do item:", itemData);

  return (
    <Box sx={{ width: 700, height: 700, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item, index) => {
          if (!item.img || !item.title) {
            console.error("Dados faltando para o item no índice:", index);
          }
          return (
            <ImageListItem key={item.img} className="relative">
              <img
                className="rounded-xl shadow-xl w-full h-full object-cover"
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-xl bg-violet-950 bg-opacity-50 opacity-0 hover:opacity-100 flex justify-center items-center flex-col text-white p-4 transition-opacity duration-300">
                <p className="text-xl font-bold">Preço</p>
                <p className="text-lg font-medium">R$ 300,00</p>

                <Dialog isOpen={isOpen} onDismiss={handleClose}>
                  <DialogTrigger asChild>
                    <Button onClick={handleOpen} className="mt-8 text-violet-100 px-4 py-2 rounded">Entrar em Contato</Button>
                  </DialogTrigger>

                  <DialogContent>
                    <h1 className="font-bold text-xl text-center text-zinc-700">
                      Fale com o <span className="text-violet-950 font-bold">Jeremy</span>, <br></br> <span className="text-violet-950 font-bold">através </span>
                      do Whatsapp.
                    </h1>
                    <div className="flex flex-col items-center">
                      <div className="flex justify-center gap-4">
                        <Input placeholder='Nome' className="w-44 border-2 border-purple-200" />
                        <Input placeholder='Telefone' className="w-48 border-2 border-purple-200" />
                      </div>
                      <Input placeholder='Mensagem' className="w-96 mt-4 border-2 border-purple-200" />
                    </div>
                    <div className="flex justify-center mt-4">
                      <Button onClick={handleClose} className="w-48 bg-violet-800 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded">
                        Enviar mensagem<FaWhatsapp className="ml-2 size-7" />
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </ImageListItem>
          );
        })}
      </ImageList>


    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];

export default ImageGrid;

