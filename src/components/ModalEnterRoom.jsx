'use client'
import ModalGeneral from '@/containers/ModalGeneral';
import React, { useState } from 'react';
import { ModalChooseTime } from './ModalChooseTime';

export const ModalEnterRoom = () => {
    const [ chooseTime, setChooseTime ] = useState( false );
    const [ code, setCode ] = useState('');
    
    const handelSubmit = ( event ) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const roomCode = data.get('code');
        setCode( roomCode );
        console.log(roomCode);
    }

    return (
        <main>
            <h1 className='text-primaryPurple text-5xl font-bold font-dmsans flex justify-center'> Entrar a la sala </h1>
            <form onSubmit={ handelSubmit }>
                <div className='my-10'>
                    <label className='text-secondaryBlack font-dmsans font-medium' htmlFor="code"> NOMBRE DE LA SALA O CODIGO </label>
                    <input className="w-full border-b border-secondaryBlack bg-slate-50 outline-none " type="text" name="code" id='code'/>
                </div>

                <div className='flex justify-center items-center'>
                    <button 
                        className="bg-primaryPurple text-white font-semibold rounded-3xl px-4 py-2"
                        onClick={() => setChooseTime( !chooseTime ) }
                    >
                        Empezar →
                    </button>
                </div>
            </form>
            <ModalGeneral
                state = { chooseTime }
                changeState = { setChooseTime }
            >
                <ModalChooseTime
                    code = { code }
                />
            </ModalGeneral>
        </main>
    )
}

