import React from 'react';
import img from '../images/image-qr-code.png';
const QR = () => {
   return (
      <div className='w-screen h-screen justify-center items-center flex'>
         <div className='justify-center align-middle bg-white flex flex-col items-center rounded-[3%] max-w-[300px]'>
            <img
               src={img}
               alt='image not found'
               className='p-5  pb-5 rounded-[30px] '
            />
            <div className='title text-[25px] pb-[30px] text-center px-2 font-bold text-light-blue'>
               Improve your front-end skills by building projects
            </div>
            <div className='subTitle  text-[15px] text-center px-4 pb-10 font-normal text-grayish-blue'>
               Scan the QR code to visit Frontend Mentor and take your coding
               skills to the next level
            </div>
         </div>
      </div>
   );
};

export default QR;
