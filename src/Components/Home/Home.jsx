import React from 'react'
import avatar from '../../Assets/Images/avatar.png'
console.log(avatar);

export default function Home() {
  return (
    <div className='contain-home min-vh-100 d-flex flex-column align-items-center justify-content-center '>
        <div className="main-div">
            <img src={avatar} alt="" className='w-100'/>
            <h1 className='text-white fs-1 fw-bold text-center'>START FRAMEWORK</h1>
            <div className="icon-container d-flex d-flex align-items-center justify-content-center my-4">
                <div className="line bg-white"></div>
                <i className="fas fa-star text-white mx-3"></i>
                <div className="line bg-white"></div>
            </div>
            <div className="txt">
              <p className='text-white text-center my-2'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </div>
  )
}
