import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Gallery from "./components/Gallery";

const App = () => {
	return (
		<>
			<div className='container'>
				<p className='title'>Live Spaces</p>
				<p>
					<i className='fa-solid fa-circle-check'></i>
					All NFTs on Cyber either belong to or were minted by their space
					creator.
				</p>
				<Gallery />
				<footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
					<p className='col-md-4 mb-0 text-muted'>© Developed by Akash Mishra</p>

					<ul className='nav col-md-4 justify-content-end'>
						<li>
							<a href='#' className='nav-link px-2 text-muted'>
								Home
							</a>
						</li>
						<li>
							<a href='#' className='nav-link px-2 text-muted'>
								Features
							</a>
						</li>
						<li>
							<a href='#' className='nav-link px-2 text-muted'>
								Pricing
							</a>
						</li>
						<li>
							<a href='#' className='nav-link px-2 text-muted'>
								FAQs
							</a>
						</li>
						<li>
							<a href='#' className='nav-link px-2 text-muted'>
								About
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</>
	);
};

export default App;
