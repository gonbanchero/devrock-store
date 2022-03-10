import { Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Carrito from '../containers/Carrito';
import Producto from '../containers/Producto';
import Layout from '../components/Layout';
import UsarContexto from '../context/UsarContexto';

function App() {
	return (
		<>
			<UsarContexto>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="Carrito" element={<Carrito />}></Route>
						<Route path="Producto" element={<Producto />}></Route>
					</Routes>
				</Layout>
			</UsarContexto>
		</>
	);
}

export default App;
