import React from "react";

export default function Header() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light'>
			<div className='container'>
				<nav className='navbar'>
					<a className='navbar-brand' href='/#'>
						<img src='assets/image/logo.svg' width='30' height='30' alt='a' />
					</a>
				</nav>
				<button
					className='navbar-toggler' d
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item active'>
							<a className='nav-link' href='/#'>
								Flash Sale <span className='sr-only'>(current)</span>
							</a>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='/#'
								id='navbarDropdown'
								role='button'
								data-toggle='dropdown'
								aria-expanded='false'
							>
								Kelas
							</a>
							<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<a className='dropdown-item' href='/#'>
									Kelas Koding
								</a>
								<a className='dropdown-item' href='/#'>
									Kelas Desaine
								</a>
								<a className='dropdown-item' href='/#'>
									Kelas Marketing
								</a>
							</div>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='/#'
								id='navbarDropdown'
								role='button'
								data-toggle='dropdown'
								aria-expanded='false'
							>
								Resources
							</a>
							<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<a className='dropdown-item' href='/#'>
									HandBook
								</a>
								<a className='dropdown-item' href='/#'>
									DigiBook
								</a>
								<a className='dropdown-item' href='/#'>
									Pixel Assets
								</a>
								<a className='dropdown-item' href='/#'>
									Website Builder
								</a>
							</div>
						</li>
					</ul>
					<div className='form-inline my-2 my-lg-0 navbar-nav'>
						Hallo, Firman
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle navbar-brand'
								href='/#'
								id='navbarDropdown'
								role='button'
								data-toggle='dropdown'
								aria-expanded='false'
							>
								<img
									src='assets/image/user.png'
									width='30'
									height='30'
									alt=''
									className='rounded-circle border border-info '
								/>
							</a>
							<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<a className='dropdown-item' href='/#'>
									HandBook
								</a>
								<a className='dropdown-item' href='/#'>
									DigiBook
								</a>
								<a className='dropdown-item' href='/#'>
									Pixel Assets
								</a>
								<a className='dropdown-item' href='/#'>
									Website Builder
								</a>
							</div>
						</li>
					</div>
				</div>
			</div>
		</nav>
	);
}
