import React from 'react'

export default function Footer() {
  return (
    <div>
         <footer className="my-5" >
         <div className="container">
           <div className="row">
               <div className="col-md-4 col-sm-12">
                <nav className="navbar px-0">
                    <a className="navbar-brand" href="/#">
                        <img
                            src="assets/image/logo.svg"
                            width="30"
                            height="30"
                            alt=""
                        />
                    </a>
                </nav>
                <p> kode family adalah tempat belajar koding desain dan lain2 dengan mudah </p>
               </div>
               <div className="col-md-2 col-sm-12">
                <ul className="navbar-nav">
                    <li className="nav-item font-weight-bold">Start Your Carier</li>
                    <li className="nav-item mt-3">Frontend Developer</li>
                    <li className="nav-item mt-3">Backend Developer</li>            
                    <li className="nav-item mt-3">UI/UX</li>        
                  </ul>
               </div>
               <div className="col-md-2 col-sm-12">
                <ul className="navbar-nav">
                    <li className="nav-item font-weight-bold">Product</li>
                    <li className="nav-item mt-3">Tips</li>
                    <li className="nav-item mt-3">Website Builder</li>            
                    <li className="nav-item mt-3">Developer</li>        
                  </ul>
               </div>
               <div className="col-md-2 col-sm-12">
                <ul className="navbar-nav">
                    <li className="nav-item font-weight-bold">Company</li>
                    <li className="nav-item mt-3">About</li>
                    <li className="nav-item mt-3">Contack</li>            
                    <li className="nav-item mt-3">Carier</li>        
                  </ul>
               </div>
               <div className="col-md-2 col-sm-12">
                <ul className="navbar-nav">
                    <li className="nav-item font-weight-bold">Learn Langunge</li>
                    <li className="nav-item mt-3">JavaScript</li>
                    <li className="nav-item mt-3">PHP</li>            
                    <li className="nav-item mt-3">Dart</li>        
                  </ul>
               </div>
           </div>
           
         </div>
     </footer>
    </div>
  )
}
