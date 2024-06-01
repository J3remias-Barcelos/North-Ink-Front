import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import imagemPerfil from "../../utils/assets/tatuador-grid.png";

function Studio() {
    return (
        <div className="">
            <h1 className="text-white ml-36">Seu<span className="text-slate-900"> Studio</span>.</h1>

            <div className="flex flex-col mt-8 justify-center items-center">
                <img
                    src={imagemPerfil}
                    alt="Logo Branca"
                    className="w-20 rounded-full"
                />
                <label htmlFor="nome" className="mr-64 text-white text-sm">Nome do Studio</label>
                <Input type="text" id="nome" name="nome" placeholder="Nome do seu Studio"
                    className="bg-white w-96 h-10 ml-4 rounded text-center text-zinc-900" />
            </div>

            <div className="flex justify-center gap-1 text-white text-2xl font-medium mb-4 mt-6">Edite seu <span className="text-slate-950">Studio</span>.</div>
            <div className="flex flex-row justify-between mt-30 gap-6 p-2">
                <div className="flex flex-col">
                    <label htmlFor="cep" className="text-white text-sm">CEP</label>
                    <Input placeholder="Insira o CEP" type="text" id="cep" name="cep"
                        className="bg-gray-100 w-70 h-10 rounded text-center text-zinc-900" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="numero" className="text-white text-sm">Número</label>
                    <Input type="text" id="numero" name="numero" placeholder="Insira o Número"
                        className="bg-white w-50 h-10 rounded text-center text-zinc-900" />
                </div>
            </div>
            <div className="flex flex-row justify-between mt-30 gap-6 p-2">
                <div className="flex flex-col">
                    <label htmlFor="rua" className="text-white text-sm">Rua</label>
                    <Input placeholder="Insira a Rua" type="text" id="rua" name="rua"
                        className="bg-white w-70 h-10 rounded text-center text-zinc-900" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="bairro" className="text-white text-sm">Bairro</label>
                    <Input type="text" id="bairro" name="bairro" placeholder="Insira o Bairro"
                        className="bg-white w-50 h-10 rounded text-center text-zinc-900" />
                </div>
            </div>
            <div className="flex flex-row justify-between mt-30 gap-6 p-2">
                <div className="flex flex-col">
                    <label htmlFor="complemento" className="text-white text-sm">Complemento</label>
                    <Input placeholder="Insira o Complemento" type="text" id="complemento" name="complemento"
                        className="bg-white w-70 h-10 rounded text-center text-zinc-900" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cidade" className="text-white text-sm">Cidade</label>
                    <Input type="text" id="cidade" name="cidade" placeholder="Insira a Cidade"
                        className="bg-white w-50 h-10 rounded text-center text-zinc-900" />
                </div>
            </div>
            <div className="flex flex-row justify-between mt-30 gap-6 p-2">
                <div className="flex flex-col">
                    <label htmlFor="estado" className="text-white text-sm">Estado</label>
                    <Input placeholder="Insira o Estado" type="text" id="estado" name="estado"
                        className="bg-white w-70 h-10 rounded text-center text-zinc-900" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="pais" className="text-white text-sm">País</label>
                    <Input type="text" id="pais" name="pais" placeholder="Insira o País"
                        className="bg-white w-50 h-10 rounded text-center text-zinc-900" />
                </div>
            </div>
            
            <Button className="w-80 h-12 bg-violet-900 text-white text-lg rounded-md ml-40">Salvar</Button>
        </div>
    );
}

export default Studio;