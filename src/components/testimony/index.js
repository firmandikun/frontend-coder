import React from 'react'

export default function Testimony() {
  return (
    <div>
         <section className="heros" >
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center ">
            <div className="col-md-6 col-sm-12 mb-5" data-aos="zoom-in-up">
                <img src="assets/image/testimony.png" alt="" width="400" height="50" className="img-fluid py-0 m-0" /> 
            </div>
              <div className="col-md-6 col-sm-12" data-aos="zoom-in-up">
                  <h3>Dede Gita Silvia</h3>
                  <div className="d-flex mt-3">
                    <i className="fa-solid text-warning fa-star mx-2"></i>
                    <i className="fa-solid text-warning fa-star mx-2"></i>
                    <i className="fa-solid text-warning fa-star mx-2"></i>
                    <i className="fa-solid text-warning fa-star mx-2"></i>
                    <i className="fa-solid text-warning fa-star mx-2"></i>
                  </div>
                  <h4 className="text-testimony  mt-3 font-weight-light my-5 " >
                      Sangat membantu dalam <br /> <span className="text-info font-weight-bold " >mengembangkan</span> <br /> softskill koding saya
                  </h4>

                  <button type="button" className="btn btn-info">Semuanya</button>
              </div>
              
          </div>
        </div>
     </section>
    </div>
  )
}
