import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await signUp(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='w-full h-screen'>
        <img 
          className='hidden sm:block absolute w-full h-full object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/421eb204-167a-4e06-b20c-bf9d55d06bb3/FR-fr-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
          alt="Plusieurs petites images de films de Netflix" 
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[400px] h-[480px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>  
              <h1 className='text-3xl font-bold'>Inscrivez-vous</h1>
             
              <form onSubmit={handleSubmit} className='flex flex-col py-4'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded' 
                  type="email" 
                  placeholder='E-mail' 
                  autoComplete='email' />
                <input
                  onChange={(e) => setPassword(e.target.value)} 
                  className='p-3 my-2 bg-gray-700 rounded' 
                  type="password" 
                  placeholder='Mot de passe' 
                  autoComplete='current-password' 
                />
                <button className='bg-red-600 py-3 my-6 rounded font-bold hover:brightness-110'>Inscrivez-vous</button>
                <div className='flex justify-between items-center text-sm text-gray-500'>
                  <p className='cursor-default'><input className='mr-2' type="checkbox" />Se souvenir de moi</p>
                  <p className='cursor-pointer'>Besoin d'aide?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-500'>Vous êtes déjà abonné ?</span>{' '}
                  <span className='pl-1 cursor-pointer hover:underline'>
                    <Link to="/login">Connexion</Link>
                  </span>
                </p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup