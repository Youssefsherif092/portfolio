import React from 'react'

export default function Footer() {
  return (
    <div className='foot-contain'>
        <div className="container-fluid text-white py-5 main-foot">
            <div className="row py-5">
                <div className="col-md-4 text-center">
                    <h2>LOCATION</h2>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4 text-center">
                    <h2>AROUND THE WEB</h2>
                    <div className="row-icons d-flex justify-content-center align-items-center">
                        <div className="icon-contain mx-1">
                            <i className='fab fa-facebook text-white fs-6 p-2 rounded-circle border border-1 border-white '></i>
                        </div>
                        <div className="icon-contain mx-1">
                            <i className='fab fa-twitter text-white fs-6 p-2 rounded-circle border border-1 border-white '></i>
                        </div>
                        <div className="icon-contain mx-1">
                            <i className='fab fa-twitter text-white fs-6 p-2 rounded-circle border border-1 border-white '></i>
                        </div>
                        <div className="icon-contain mx-1">
                            <i className='fas fa-globe text-white fs-6 p-2 rounded-circle border border-1 border-white '></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <h2>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
        <div className="container-fluid text-white py-2 d-flex justify-content-center align-items-center copyright">
            <p>Copyright © Your Website 2021</p>
        </div>
    </div>
  )
}
