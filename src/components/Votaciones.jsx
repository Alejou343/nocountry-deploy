"use client"
import React from 'react';
import Image from 'next/image';
import ModalGeneral from '@/containers/ModalGeneral';
import ModalEliminarSala from './ModalEliminarSala';
import ModalCopiar from './ModalCopiar';

const historial = [
    {codigo: '01563', nombre: 'Fiesta de cumpleaños', ganador: '80% votó 20 de Marzo', isActive: true},
    {codigo: '025884', nombre: 'Instrumento musical', ganador: '60% votó Guitarra', isActive: true},
    {codigo: '029484', nombre: 'Viaje', ganador: '30% votó Mar del Plata', isActive: false},
    {codigo: '079584', nombre: '¿Qué cenamos?', ganador: '70% votó Pizza', isActive: false},
]

const Votaciones = () => {

    const [deleteModal, setDeleteModal] = React.useState(false)
    const [shareModal, setShareModal] = React.useState(false)
    const [search, setSearch] = React.useState('')

    const filteredRooms = historial.filter(room => room.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <div className='w-2/4 font-dmsans'>
            <h1 className='mb-10 text-4xl font-bold'>Votaciones</h1>
            <div className=' flex flex-col bg-secondaryGray pt-6 w-5/6 rounded-lg'>
                <div className='pb-10 flex flex-col items-center'>
                    <form className='bg-primaryOrange rounded-full flex items-center h-8 justify-evenly gap-4 px-4'>
                        <input 
                            type="text" 
                            name="busqueda"
                            placeholder="Buscar sala" 
                            className='busqueda bg-primaryOrange text-secondaryWhite mx-2 w-24 placeholder-white px-2 text-xs' 
                            value = {search}
                            onChange={(event) => setSearch(event.target.value)}
                        />
                        <Image src="/Images/lupa.png" alt="lupa" width={25} height={25} />
                    </form>
                </div>
                <div className='flex gap-4 pl-10 pb-10 '>
                    <div className='flex justify-center items-center rounded-full bg-slate-300 gap-2 w-24 h-6 cursor-pointer' >
                        <div className='w-4 h-4 bg-green-500 rounded-full'></div>
                        <button className="text-xs">Activas</button>
                    </div>
                    <div className='flex justify-center items-center rounded-full bg-slate-300 gap-2 w-24 h-6 cursor-pointer'>
                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                        <button className="text-xs">Inactivas</button>
                    </div>
                </div>
                <div className='flex flex-col gap-4 px-10 pb-10'>

                    {filteredRooms.map((sala, index) => 
                    <div className='flex gap-2 justify-between' key={index}>
                        <div className={`w-3 h-3 ${sala.isActive ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></div>
                        <p className='text-xs text-start w-full'>{sala.codigo} - {sala.nombre} | {sala.ganador} </p>
                        <div className="flex justify-end w-1/4 gap-4 items-center">
                            <button>
                                <Image 
                                    src="/Images/CoronaIcon.png" 
                                    alt="corona" 
                                    width={20} 
                                    height={20} 
                                    className="cursor-pointer"
                                />
                            </button>
                            <button onClick={() => setDeleteModal(!deleteModal)}>
                                <Image
                                    src="/Images/TrashIcon.png" 
                                    alt="basura" 
                                    width={20} 
                                    height={20} 
                                    className="cursor-pointer"
                                />
                            </button>
                            <button onClick={() => setShareModal(!shareModal)}>
                                <Image
                                    src="/Images/ShareIcon.png" 
                                    alt="compartir" 
                                    width={15} 
                                    height={15} 
                                    className="cursor-pointer"
                                />
                            </button>
                        </div>
                    </div>)}
                </div>
            </div>
            <ModalGeneral state = { deleteModal } changeState = { setDeleteModal }>
                <ModalEliminarSala state = { deleteModal } changeState = { setDeleteModal } />
            </ModalGeneral>
            
            <ModalGeneral state = { shareModal } changeState = { setShareModal }>
                <ModalCopiar 
                    image = {"/Images/ShareIcon.png"}
                    title = "Comparte la sala con tus amigos"
                    content = "Enlace: "
                    code = {`https://votechoice.com/sala/${2985674}`}
                />
            </ModalGeneral>
        </div>
    )
}

export default Votaciones




