
export default function About() {

    return (
        <div className='contain-home min-vh-100 d-flex flex-column  justify-content-center align-items-center w-auto m-0 '>
            <div className="about-title text-uppercase mb-3 fs-1 fw-bolder text-white ">
                ABOUT COMPONENT
            </div>
            <div className="icon-container d-flex d-flex align-items-center justify-content-center my-4">
                <div className="line2 bg-white"></div>
                <i className="fas fa-star text-white mx-3"></i>
                <div className="line2 bg-white"></div>
            </div>
            <div className="paragraphs text-white d-flex justify-content-center align-items-center">
                <div className="paragraph1 mx-3">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes<br></br> the complete source files including HTML, CSS, and JavaScript as well as<br></br> optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="paragraph2 mx-3">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes<br></br> the complete source files including HTML, CSS, and JavaScript as well as<br></br> optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    )
}
