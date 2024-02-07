import React, {useEffect} from 'react'
import port1 from '../../Assets/Images/port1.png'
import port2 from '../../Assets/Images/port2.png'
import port3 from '../../Assets/Images/port3.png'

export default function Portfolio() {

    useEffect(() => {
        let list = document.querySelectorAll('.port-contain');
        let sample = document.getElementById('sample');
        let overlay = document.getElementById('overlay')
        for(let i=0;i<list.length;i++){
            list[i].addEventListener('click',function(){
                var myimg = list[i].getElementsByTagName('img')[0];
                var mysrc = myimg.src;
                sample.src = mysrc;
                overlay.style.display = 'flex';
            })
        }
        overlay.addEventListener('click',function(){
            overlay.style.display = 'none';
        })
        })
  return (
    <div className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
        <div className="overoverlay position-absolute z-3 w-100 h-100" id='overlay'>
            <img src={port1} alt="" className='w-25 rounded-3 port-img' id='sample'/>
        </div>
        <div className="title-contain">
            <div className="portfolio-title text-uppercase mb-3 fs-1 fw-bolder">
                PORTFOLIO COMPONENT
            </div>
            <div className="icon-container d-flex d-flex align-items-center justify-content-center mb-4">
                <div className="line2 bg-custom"></div>
                <i className="fas fa-star mx-3"></i>
                <div className="line2 bg-custom"></div>
            </div>
        </div>
        <div className="container position-relative ">
            <div className="row gy-3">
                <div className="col-md-4 ">
                    <div className="port-contain w-100 position-relative ">
                        <div className="overlay bg-warning w-100 h-100 position-absolute rounded-3 d-flex flex-column align-items-center justify-content-center ">
                            <i className='fas fa-plus fw-bolder text-white'></i>
                        </div>
                        <img src={port1} alt="" className='w-100 rounded-3 port-img'/>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="port-contain w-100 position-relative ">
                        <div className="overlay bg-warning w-100 h-100 position-absolute rounded-3 d-flex flex-column align-items-center justify-content-center ">
                            <i className='fas fa-plus fw-bolder text-white'></i>
                        </div>
                        <img src={port2} alt="" className='w-100 rounded-3 port-img'/>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="port-contain w-100 position-relative ">
                        <div className="overlay bg-warning w-100 h-100 position-absolute rounded-3 d-flex flex-column align-items-center justify-content-center ">
                            <i className='fas fa-plus fw-bolder text-white'></i>
                        </div>
                        <img src={port3} alt="" className='w-100 rounded-3 port-img'/>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="port-contain w-100 position-relative ">
                        <div className="overlay bg-warning w-100 h-100 position-absolute rounded-3 d-flex flex-column align-items-center justify-content-center ">
                            <i className='fas fa-plus fw-bolder text-white'></i>
                        </div>
                        <img src={port1} alt="" className='w-100 rounded-3 port-img'/>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="port-contain w-100 position-relative ">
                        <div className="overlay bg-warning w-100 h-100 position-absolute rounded-3 d-flex flex-column align-items-center justify-content-center ">
                            <i className='fas fa-plus fw-bolder text-white'></i>
                        </div>
                        <img src={port2} alt="" className='w-100 rounded-3 port-img'/>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="port-contain w-100 position-relative ">
                        <div className="overlay bg-warning w-100 h-100 position-absolute rounded-3 d-flex flex-column align-items-center justify-content-center ">
                            <i className='fas fa-plus fw-bolder text-white'></i>
                        </div>
                        <img src={port3} alt="" className='w-100 rounded-3 port-img'/>
                    </div>
                </div>
            </div>
        </div>
    </div>    
  )
}
