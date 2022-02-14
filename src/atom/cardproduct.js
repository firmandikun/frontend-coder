import React from "react";

export default function Cardproduct({ img, title, price }) {
	return (
		<div className='card border-0'>
			<div className='p-3'>
				<img src={img} className='card-img-top rounded' alt='...' />
			</div>
			<div className='card-body'>
				<p className='course-name'>{title}</p>

				<p className='font-weight-light text-muted'>{price}</p>
				<p className='d-flex justify-content-between text-success'>
					Ambil Promo
					<i className='fa-solid fa-chevron-right'></i>
				</p>
			</div>
		</div>
	);
}
