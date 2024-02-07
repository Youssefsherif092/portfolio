import React, {useEffect} from 'react'


export default function Contact() {
    useEffect(() => {
        let labelList = document.querySelectorAll('.label');
        let uName = document.getElementById("uName");
        let uAge = document.getElementById("uAge");
        let uMail = document.getElementById("uMail");
        let uPass = document.getElementById("uPass");
        let namelabel = document.getElementById("nameLabel");
        let agelabel = document.getElementById("ageLabel");
        let maillabel = document.getElementById("mailLabel");
        let passlabel = document.getElementById("passLabel");
        uName.addEventListener('input',function(){
            if(uName.value != ''){
                namelabel.style.top = '-40px';
                console.log(namelabel.style.top);
            }
            else{
                namelabel.style.top = '0px';
            }
        })
        uAge.addEventListener('input',function(){
            if(uAge.value != ''){
                agelabel.style.top = '-40px';
                console.log(agelabel.style.top);
            }
            else{
                agelabel.style.top = '0px';
            }
        })
        uMail.addEventListener('input',function(){
            if(uMail.value != ''){
                maillabel.style.top = '-40px';
                console.log(maillabel.style.top);
            }
            else{
                maillabel.style.top = '0px';
            }
        })
        uPass.addEventListener('input',function(){
            if(uPass.value != ''){
                passlabel.style.top = '-40px';
                console.log(passlabel.style.top);
            }
            else{
                passlabel.style.top = '0px';
            }
        })
      }, []);
  return (
    <div className='contact-contain min-vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div className="contact-title text-uppercase mb-3 fs-1 fw-bolder">
                CONTACT COMPONENT
            </div>
            <div className="icon-container d-flex d-flex align-items-center justify-content-center my-4">
                <div className="line2 bg-custom"></div>
                <i className="fas fa-star mx-3"></i>
                <div className="line2 bg-custom"></div>
            </div>
        <form action="" className='w-50'>
            <div className="inputs  position-relative py-0">
                <label className='label text-success ' id="nameLabel" htmlFor="uName" >Username:</label>
                <input type="text" className='form-control w-100 my-5' placeholder='Username:' id='uName'/>
            </div>
            <div className="inputs  position-relative py-0">
                <label className='label text-success ' id="ageLabel" htmlFor="uAge" >Age:</label>
                <input type="text" className='form-control w-100 my-5' placeholder='Age:' id='uAge'/>
            </div>
            <div className="inputs  position-relative py-0">
                <label className='label text-success ' id="mailLabel" htmlFor="uMail" >Email:</label>
                <input type="text" className='form-control w-100 my-5' placeholder='Email:' id='uMail'/>
            </div>
            <div className="inputs  position-relative py-0">
                <label className='label text-success ' id="passLabel" htmlFor="uPass" >Password:</label>
                <input type="text" className='form-control w-100 my-5' placeholder='Password:' id='uPass'/>
            </div>
            <button type="button" className='btn btn-success'>Send!</button>
        </form>
    </div>
  )
}
