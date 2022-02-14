import React from 'react'

export default function Hero() {
  return (
    <div>
       <section className="heros d-lg-none  d-block" >
          <div className="container">
            <div className="row">
                <div className="col-lg-6 mt-5">
                    <img src="assets/image/hero.png" alt="" className="img-fluid py-0 m-0" />
             </div>
                <div className="col-lg-6 pt-4 ">
                    <h5 className="title-heros " >
                        Design & Code Your
                        <br/>
                        <span className=" text-info animasi-teks mt-3">
                            Future Career
                        </span>
                    </h5>
                    <p className="pt-4" >
                        Perdalam kemampuan desain dan code bersama expert 
                        <br />
                        di bidangnya serta dapatkan sertifikat resminya 
                    </p>
                    <div className="herro-btn my-5">
                        <button type="button" className="btn btn-info">Daftar</button>
                        <button type="button" className="btn btn-outline-secondary ml-4">Katalog </button> 
                    </div>
                </div>
                
            </div>
          </div>
       </section>

       <section className="hero d-none d-lg-block " >
          <div className="container">
            <div className="row">
                <div className="col-lg-6 pt-4" data-aos="fade-right">
                    <h1 className="title-hero " >
                        Design & Code Your
                        <span className=" text-info animasi-teks mt-3">
                            Future Career
                        </span>
                    </h1>
                    <p className="pt-4" >
                        Perdalam kemampuan desain dan code bersama expert 
                        <br/>
                        di bidangnya serta dapatkan sertifikat resminya 
                    </p>
                    <div className="herro-btn pt-4">
                        <div className="row">
                            <div className="col-12">
                                <button type="button" className="btn btn-info">Daftar Kelas Sekarang</button>
                                <button type="button" className="btn btn-outline-secondary ml-4">Katalog Kelas</button>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-6 " data-aos="fade-left">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="assets/image/hero.png" alt="" className="img-fluid py-0 m-0" />
                    </div>
                    <div className="carousel-item">
                    <img src="assets/image/hero.png" alt="" className="img-fluid py-0 m-0" />
                    </div>
                    <div class="carousel-item">
                    <img src="assets/image/hero.png" alt="" className="img-fluid py-0 m-0" />
                    </div>
                </div>
                </div>
                    
             </div>
            </div>
          </div>
       </section>
    </div>
  )
}
