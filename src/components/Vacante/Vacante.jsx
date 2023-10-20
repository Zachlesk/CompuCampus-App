import React, { useState, useEffect } from 'react';
import ejemplo from '../../Assets/img/logo.jpg';
import './Vacante.css';
import axios from 'axios';

export const Vacante = () => {
  const [vacante, setVacante] = useState(null);

  useEffect(() => {
    const obtenerVacantePorId = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:0000/api/campers/${id}`);
        setVacante(response.data);
      } catch (error) {
        console.log('Ocurrió un error al obtener la vacante por ID');
      }
    };

    obtenerVacantePorId();
  }, []);

  return (
    <div className='backgroundContainer'>
      {vacante && (
        <div className='bodyVacants'>
          <div className='rigth'>
            <div className='sec1'>
              <h1>{vacante.title}</h1>
              <h3>{vacante.fecha}</h3>
            </div>
            <div className='sec2'>
              <p>{vacante.descripcion}</p>
            </div>
          </div>
          <div className='left'>
            <div className='img'>
              <img src={ejemplo} alt='' />
            </div>
            <div className='middle'>
              <h1>{vacante.empresa}</h1>
            </div>
            <div className='square'>
              <div className='category'>
                <div className='box'>
                  <p>Category</p>
                </div>
              </div>
              <div className='traits'>
                <div className='boxy'>
                  <label>Salary</label>
                  <p>{vacante.salario}</p>
                </div>
                <div className='boxy'>
                  <label>Location</label>
                  <p>Colombia</p>
                </div>
                <div className='boxy'>
                  <label>Job Type</label>
                  <p>Full-Time</p>
                </div>
                <div className='boxy'>
                  <label>Daytime</label>
                  <p>{vacante.jornada}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
