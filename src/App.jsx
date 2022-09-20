import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Reserva from './pages/Reserva';
import Cardapio from './pages/Cardapio';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Nav />
								<Home />
								<Footer />
							</>
						}
					/>
					<Route
						path='/reserva'
						element={
							<>
								<Nav />
								<Reserva />
								<Footer />
							</>
						}
					/>
					<Route
						path='/cardapio'
						element={
							<>
								<Nav />
								<Cardapio />
								<Footer />
							</>
						}
					/>
					<Route
						path='/contato'
						element={
							<>
								<Nav />
								<Contato />
								<Footer />
							</>
						}
					/>
					<Route path='/admin' element={<Admin />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
