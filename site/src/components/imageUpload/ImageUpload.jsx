import { ContextMenuTrigger, ContextMenuContent, ContextMenu } from "@/components/ui/context-menu"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { IoImagesOutline } from "react-icons/io5";
import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
    const [images, setImages] = useState([]);
    const [blobs, setBlobs] = useState([]);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const newBlobs = files.map(file => ({
            blob: URL.createObjectURL(file),
            file
        }));

        setImages((prevImages) => [...prevImages, ...newBlobs.map(blobObj => blobObj.blob)]);
        setBlobs((prevBlobs) => [...prevBlobs, ...newBlobs]);
    };

    const handleRemoveImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
        setBlobs((prevBlobs) => prevBlobs.filter((_, i) => i !== index));
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        blobs.forEach((blobObj, index) => {
            formData.append(`image-${index}`, blobObj.file);
        });

        try {
            const response = await axios.post('subirArquivo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                alert('Upload feito');
            } else {
                alert('Erro ao subir a imagem.');
            }
        } catch (error) {
            console.error('error', error);
        }
    };

    return (
        <>
            <div className="text-white border-dashed border-2 border-purple-600 p-8 rounded-lg w-96 h-52 flex flex-col items-center justify-center hover:border-purple-400 hover:shadow-md transition duration-300">
                <label htmlFor="images" className="cursor-pointer">
                    <IoImagesOutline className="text-purple-700 size-24"/>
                </label>
                <Input id="images" type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" />
            </div>
            
            <Button onClick={handleSubmit} className="w-48 h-10 bg-zinc-500 hover:bg-zinc-800 text-white text-lg rounded-md ml-24 mt-4">Anexar</Button>

            <div className="mt-44">
                <h2 className="font-semibold font-poppins text-zinc-600">Insira valores em suas tatuagens. </h2>
                <div className="text-white border-dashed border-2 border-purple-600 p-8 rounded-lg w-96 h-52 flex flex-wrap items-center justify-center hover:border-purple-400 hover:shadow-md transition duration-300 overflow-auto">
                    {images.map((image, index) => (
                        <div key={index} className="flex flex-col items-center mb-2 mx-1">
                            <img src={image} alt={`preview-${index}`} className="w-20 h-20 object-cover mb-2" />
                            <button onClick={() => handleRemoveImage(index)} className="bg-violet-500 text-white p-1 rounded">Remover</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ImageUpload;
