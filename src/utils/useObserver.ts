/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react"

// Vigila el margen restante para la siguiente página
// Importante para "Infinity Scroll"
export default function useObserver() {
	const fromRef = useRef(null)
	const root = useRef(null)
	const [isIntersected, setIntersection] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const { isIntersecting } = entries[0];

				setIntersection(isIntersecting);
			},
			{
				root: root.current,
			}
		);

		if (fromRef.current) observer.observe(fromRef.current);

		return () => {
			observer.disconnect();
		};

		/* 
			! Problema: múltiples instancias de Intersection Observer
			! 			debido a multiples ejecuciones de useEffect.
			
			! No estoy completamente seguro de cuál es la raíz del problema

			* Solución: Agregar fromRef.current como dependencia.
			* también es importante desconectar observer si la raíz cambia.

			+ Una solución alternativa es usar just-debounce-it o   +
			+ cualquier otro paquete que cumpla una función similar +
			+ Sin embargo esto no lo soluciona por completo, pues   +
			+ se continua creando multiples instancias, solo que    +
			+ a menor ritmo que antes +

		*/
  	}, [fromRef.current, root.current]); 

	return { root, fromRef, isIntersected }
}
