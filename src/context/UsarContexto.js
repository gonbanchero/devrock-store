import Contexto from './Contexto';
import axios from 'axios';
import { useReducer } from 'react';
import Reducer from './Reducer';

export default function UsarContexto(props) {
	const estadoInicial = {
		productos: [],
		carrito: [],
	};
	const { children } = props;
	const [state, dispatch] = useReducer(Reducer, estadoInicial);

	const listameProductos = async () => {
		const res = await axios.get(
			'https://devrockstore-default-rtdb.firebaseio.com/productos.json'
		);
		dispatch({ type: 'LISTAME_PRODUCTOS', payload: res.data });

		console.log(res.data);
	};

	const agregarCarrito = (item) => {
		console.log('si, llega el pedido amigo', item);
	};

	const eliminarCarrito = () => {};

	return (
		<Contexto.Provider
			value={{
				productos: state.productos,
				carrito: state.carrito,
				listameProductos,
				agregarCarrito,
				eliminarCarrito,
			}}
		>
			{children}
		</Contexto.Provider>
	);
}
