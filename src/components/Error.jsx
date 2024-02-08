import React from 'react';
import { errorImage } from '../assets';
const Error = () => (
  <div className='flex flex-col justify-center items-center w-full h-full bg-gray-200 rounded-3xl'>
    <img src={errorImage} alt='Errro Image' className='w-60 h-60 object-contain rounded-3xl'/>
    <h1 className='font-bold text-2xl mt-8 text-black'>Something went wrong. Please try again!!!</h1>
  </div>
);

export default Error;
