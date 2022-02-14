import React from 'react'
import Cardproduct from '../../atom/cardproduct'

export default function Products() {
     const products = [
        {
            title : "Full-Stack JavaScript Developer: Website Travel",
            img : "assets/image/js.png",
            price: 129.000,
        },
        {
            title : "Full-Stack GO Developer: Website Travel",
            img : "assets/image/go.png",
            price: 129.000,
        },
        {
            title : "Full-Stack Flluter Developer: Website Travel",
            img : "assets/image/app.png",
            price: 129.000,
        }
    ]
  return (
    <div>
         <section>
           <div className="container">
            <div className="row">
                <div className="col-12">
                 <div className="row">
                     <div className="col-12">
                       <div className="service">
                           <h6 className="text-success">
                            Top Featured
                           </h6>
                           <h4 className="font-weight-bold mt-3" >
                            Pilih Kelas Unggulan 
                            <br />
                            Untuk Tingkatkan Keahlian
                           </h4>
                       </div>
                     </div>
                 </div>
                </div>
            </div>

            <div className="row my-5">
               {
                   products.map((item) => {
                       return (
                        <div className="col-md-4 col-sm-12 my-3" data-aos="zoom-in" key={item} >
                            <Cardproduct 
                            img={item.img}
                            price={item.price}
                            title={item.title}
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
