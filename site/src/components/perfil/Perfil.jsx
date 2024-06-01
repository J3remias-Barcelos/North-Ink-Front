import React from 'react';
import styles from './Perfil.module.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function Perfil() {
    
    
    return (
        <div>
            <div className="flex justify-center ml-6 mb-3">
                <h1 class="text-white ml-34 mb-10">Meu<span class="text-slate-900"> Perfil</span>.</h1>
            </div>

            <div class="text-white text-2xl font-medium">Edite seu <span class="text-slate-950">Perfil</span>.</div>
            <div className="flex flex-row mt-30 gap-8 my-2 p-2">
                <div className="flex flex-col">
                    <label htmlFor="nome" className="text-white text-sm">Nome</label>
                    <input type="text" id="nome" name="nome" placeholder="seu nome "
                        className="bg-white w-72 h-10 rounded text-center text-zinc-900 focus:outline-none" />

                </div>
                <div className="flex flex-col">
                    <label htmlFor="sobrenome" className="text-white text-sm">Sobrenome</label>
                    <input type="text" id="sobrenome" name="sobrenome" placeholder="seu sobrenome"
                        className="bg-white w-72 h-10 rounded text-center text-zinc-900 focus:outline-none" />
                </div>
            </div>
            <div className="flex flex-row gap-8 my-2 p-2">
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-white text-sm">E-mail</label>
                    <div className={styles.email}>
                        <input placeholder="exemplo@email.com" type="text" id="email" name="email" />
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-8 my-2 p-2">
                <div className="flex flex-col">
                    <label htmlFor="CPF" className="text-white text-sm">CPF</label>
                    <input placeholder="123.456.789-09" type="text" id="CPF" name="CPF"
                        className="bg-white w-72 h-10 rounded text-center text-zinc-900 font-poppins focus:outline-none" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="celular" className="text-white text-sm">Celular</label>
                    <input placeholder="(DDD) Celular" type="text" id="celular" name="celular"
                        className="bg-white w-72 h-10 rounded text-center text-zinc-900 focus:outline-none" />
                </div>
            </div>
            <div className="flex flex-row gap-8 p-2">
                <div className="flex flex-col">
                    <label htmlFor="senha" className="text-white text-sm">Senha</label>
                    <input placeholder="Mínimo 6 caracteres" type="password" id="senha" name="senha"
                        className="bg-white w-72 h-10 rounded text-center text-zinc-900 focus:outline-none" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="repita" className="text-white text-sm">Repita a senha</label>
                    <input placeholder="Mínimo 6 caracteres" type="text" id="repita" name="repita"
                        className="bg-white text-center text-zinc-900 focus:outline-none" />
                </div>
            </div>
            <Button className="w-60 h-12 bg-violet-900 text-white text-lg rounded-md ml-48">Salvar</Button>

        </div>
    );
}

export default Perfil;