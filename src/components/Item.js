import React, { useContext } from 'react';
import '../assets/css/Item.css';
import Contexto from '../context/Contexto';
import { Link } from 'react-router-dom';

export default function Item(props) {
	const { nombre, precio, medidas, img, id } = props;
	const { agregarCarrito } = useContext(Contexto);
	return (
		<>
			<div className="home-item">
				<img src={img} alt="" className="home-item-img" />
				<div className="home-item-info">
					<Link to="Producto">
						<h1 className="home-item-titulo">{nombre}</h1>
					</Link>
					<p className="home-item-medidas">{medidas}</p>
					<div className="home-item-actions">
						<h3 className="home-item-precio">{precio}</h3>
						<button
							className="home-item-comprar"
							onClick={() => {
								agregarCarrito({ id });
							}}
						></button>
					</div>
				</div>
			</div>
		</>
	);
}
