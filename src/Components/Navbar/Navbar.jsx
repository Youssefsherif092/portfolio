import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {

    useEffect(() => {
        let navLink = document.querySelectorAll('.nav-link');
        let brand = document.querySelector('.navbar-brand');
        let nav = document.querySelector('.navbar')
        for(let i=0; i<navLink.length; i++){
            navLink[i].addEventListener('click',function(){
                navLink[i].classList.add('active-nav')
                if(i==0){
                    navLink[1].classList.remove('active-nav');
                    navLink[2].classList.remove('active-nav');
                    console.log('hello0');
                }
                else if(i==1){
                    navLink[2].classList.remove('active-nav');
                    navLink[0].classList.remove('active-nav');
                    console.log('hello1');
                }
                else if(i==2){
                    navLink[0].classList.remove('active-nav');
                    navLink[1].classList.remove('active-nav');
                    console.log('hello2');
                    console.log(navLink[0].classList);
                }
            })
        }
        brand.addEventListener('click',function(){
            navLink[0].classList.remove('active-nav');
            navLink[1].classList.remove('active-nav');
            navLink[2].classList.remove('active-nav');
        })
        window.addEventListener('scroll',function(){
            if(this.scrollY > 30){
                nav.classList.remove('py-4')
            }
            else{
                nav.classList.add('py-4')
            }
        })

    }, [])
    
  return (
        <nav
            class="navbar navbar-expand-sm navbar-light bg-light py-4 fixed-top"
        >
            <div class="container">
                <Link class="navbar-brand text-white fs-2 fw-bolder" to="home">START FRAMEWORK</Link>
                <button
                    class="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li class="nav-item mx-2">
                            <Link class="nav-link rounded-3 text-white fs-6 fw-bold" to="about">ABOUT</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link class="nav-link rounded-3 text-white fs-6 fw-bold" to="portfolio">PORTFOLIO</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link class="nav-link rounded-3 text-white fs-6 fw-bold" to="contact">CONTACT</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
  )
}
