import React from "react";

export default function CardService({ img, title, desc }) {
	return (
		<div className='card card-service border-0'>
			<div className='card-body'>
				<div className='d-flex  flex-column'>
					<div className='image-card mb-5'>
						<img src={img} width='50' height='50' alt='' />
					</div>
					<div className='desk-card'>
						<h5 className='card-title'>{title}</h5>
						<h6 className='card-subtitle mb-2 text-muted'>{desc}</h6>
					</div>
				</div>
			</div>
		</div>
	);
}
