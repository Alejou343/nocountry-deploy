import ImagePrincipal from '@/components/ImagePrincipal'
import Password from '@/components/Password';
import React from 'react'

const Register = () => {
    return (
        <div className='flex gap-40 pt-8 pl-32'>
            <main className='flex-colum justify-center w-1/2 '>
                <h1 className='text-secondaryBlack text-5xl font-bold font-dmsans flex justify-center'> Registrate </h1>
                <form action="">
                    <div className='my-6'>
                        <label className='text-secondaryBlack font-dmsans font-medium'> NOMBRE </label>
                        <input className="w-full border-b border-secondaryBlack bg-slate-50 outline-none " type="text" name="email"/>
                    </div>

                    <div className='my-6'>
                        <label className='text-secondaryBlack font-dmsans font-medium'> EMAIL </label>
                        <input className="w-full border-b border-secondaryBlack bg-slate-50 outline-none " type="email" name="email"/>
                    </div>

                    <Password/>

                    <div className='flex items-center justify-center gap-8 my-5 py-2'>
                        <button className='bg-primaryPurple text-secondaryWhite font-dmsans font-medium w-1/2 py-2 rounded-full'> INGRESAR </button>
                        
                        <button className='text-primaryPurple font-dmsans font-medium border-primaryPurple border rounded-full w-1/2 gap-2 py-1 flex items-center justify-center'>
                            <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="logoGoogle" className='w-8 h-8 justify-center'/>
                            Entrar con google
                        </button>
                    </div>

                    <div className='flex gap-4 mb-8'>
                        <hr className='flex-grow border-secondaryBlack mt-3'/>
                            <span className='text-secondaryBlack font-dmsans font-medium'>OR</span>
                        <hr className='flex-grow border-secondaryBlack mt-3'/>
                    </div>

                    <button className='text-primaryPurple font-dmsans font-medium border-primaryPurple border rounded-full w-full py-2'> INICIAR SESIÓN </button>
                </form>
            </main>

            <ImagePrincipal/>    
        </div>
    )
}

export default Register;