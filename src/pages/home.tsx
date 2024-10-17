import React from 'react';
import logosenac from '../assets/logosenac.png'
import { Link } from 'react-router-dom';

const PagPrincipal: React.FC = () => {
  return (
    <div className="bg-orange-100 min-h-screen flex flex-col items-center justify-center items-center">

        <div className="absolute ml-4 mt-4 top-0 left-0">
        <img src={logosenac} alt="Logo" className="h-16" />
        </div>

      <h1 className="text-4xl font-bold">
        Bem Vindo(a)
        </h1>

      <p className="text-lg ">
        Qual funcionalidade deseja acessar?
        </p>
        
        <div className='flex gap-5 grid-cols-3 m-6 tracking-wide text-2x1'>
            <Link to="/dashboard">
            <button className='bg-blue-500 text-white py-5 px-10 rounded'>
             Dashboard
             </button>
            </Link>

            <Link to="/pontodevendas">
            <button className=' bg-blue-500 text-white py-5 px-10 rounded'>
             Ponto de Vendas
             </button>
            </Link>

            <Link to="/estoque">
            <button className='bg-blue-500 text-white py-5 px-10 rounded'>
             Estoque
             </button>
            </Link>
       
        </div>


    </div>
  );
};

export default PagPrincipal;
