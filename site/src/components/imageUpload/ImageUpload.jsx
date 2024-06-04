import { ContextMenuTrigger, ContextMenuContent, ContextMenu } from "@/components/ui/context-menu"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { IoImagesOutline } from "react-icons/io5";
import React, { useState } from 'react';
import axios from 'axios';
import { BlobServiceClient } from '@azure/storage-blob';
import styles from "../../pages/gerenciamento/GerenciamentoPortfolio/GerenciamentoPortfolio.module.css";

const account = "storagenorthink";
const sasToken = "sp=racwdl&st=2024-06-04T04:30:44Z&se=2024-06-30T12:30:44Z&spr=https&sv=2022-11-02&sr=c&sig=71i9eDm5fp%2BlU6h%2F7qkh3Dn5QvpQ%2FaqumPSNgZp3Kp0%3D";
const containerName = "imagens";

const blobServiceClient = new BlobServiceClient(
  `https://${account}.blob.core.windows.net?${sasToken}`
);
const containerClient = blobServiceClient.getContainerClient(containerName);

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
        try {
            for (const blobObj of blobs) {
                const blockBlobClient = containerClient.getBlockBlobClient(blobObj.file.name);
                await blockBlobClient.uploadBrowserData(blobObj.file);
            }
            alert('Upload feito com sucesso para o Azure Blob Storage');
        } catch (error) {
            console.error('Erro ao fazer upload para o Azure Blob Storage:', error);
            alert('Erro ao subir a imagem.');
        }
    };

    return (
        <>
             <div className={styles.customContainer}>
                <label htmlFor="images" className="cursor-pointer">
                    <IoImagesOutline className="text-purple-700 size-24"/>
                </label>
                <Input id="images" type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" />
            </div>
            
            <Button onClick={handleSubmit} className="w-48 h-10 bg-zinc-800 hover:bg-zinc-500 text-white text-lg rounded-md ml-48 mt-4">Anexar</Button>

            <div className="mt-24">
                <div className={styles.customContainerVisible}>
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
