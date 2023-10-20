import { useEffect, useState } from 'react';
import Ejemplo from '../../Assets/img/logo.jpg';
import Circular from './Cirular';
import './OfertaAplicada.css';
import axios from 'axios';

export const OfertaAplicada = () => {
    const [ofertas, setOfertas] = useState([]);

    useEffect(() => {
        const getOfertas = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:0000/api/ofertas/getAll");
                const data = response.data;
                const arreglo = Object.values(data);
                console.log(arreglo[0]);
                setOfertas(arreglo[0]);
            } catch (error) {
                console.log('We have a problem to obtain the users');
            }
        };

        getOfertas();
    }, []);

    return (
        <div className='backgroundContainer'>
            {ofertas.map(item => (
                <div className="bodyCard">
                    <div className='left'>
                        <div className='upLeft'>
                            <img src={Ejemplo} alt="" />
                            <h1>{item.empresa.nombre_empresa}</h1>
                        </div>
                        <div className='downLeft'>
                            <div className='title'>
                                <h1>{item.titulo_oferta}</h1>
                            </div>
                            <div className='description'>
                                <p>{item.descripcion}</p>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='upRight'>
                            <Circular></Circular>
                        </div>
                        <div className='downRight'>
                            <div className='estados'>
                                <p>Postulado //</p>
                                <p>En Proceso //</p>
                                <p>Finalizado //</p>
                            </div>
                            <div>
                                <p>12 de mayo</p>
                                <p>12 de mayo</p>
                                <p>12 de mayo</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
