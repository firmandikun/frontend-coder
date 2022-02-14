import React from 'react'
import CardService from '../../atom/cardService'

export default function Service({data}) {
  return (
    <div>
         <section>
          <div className="container">
              <div className="row">
                  <div className="col-12" >
                    <div className="service">
                        <h6 className="text-success">
                         Start Learning Today
                        </h6>
                        <h4 className="font-weight-bold mt-3" >
                         Temui Kelas Berdasarkan 
                         <br/>
                         Kategori Yang Kami Sediakan 
                        </h4>
                    </div>
                  </div>
              </div>
              <div className="row my-5">
                {
                    data.map((item) => {
                        return (
                        <div className="col-md-3 col-sm-12 my-3" data-aos="fade-right" key={item} >
                            <CardService
                             img={item.img}
                             title={item.title}
                             desc={item.desc}
                            />
                        </div>
                        )
                    })
                }
              </div>
          </div>
       </section>
    </div>
  )
}
