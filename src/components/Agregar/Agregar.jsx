import React, { useEffect, useState } from 'react';
import './Agregar.css';

export const Agregar = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [sueldo, setSueldo] = useState('');
  const [jornada, setJornada] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [activation, setActivation] = useState(false);

  useEffect(() => {
    if (activation) {
    
      const dataHandler = () => {
        const postData = {
          title,
          sueldo,
          jornada,
          descripcion
        };
        console.log(postData);
      };

      dataHandler();
    }
  }, [activation, title, sueldo, jornada]);

  const handlePublicarClick = (e) => {
    e.preventDefault();
    setActivation(true); // Toggle activation to true
  };

  return (
    <form className=''>
      <div className='buttonDiv'>
        <button onClick={handlePublicarClick} className="buttonForm">
          <p>Publicar</p>
        </button>
      </div>

      <div className='bodyForm'>
        <div className='formContent'>
          <div className='up'>
            <label className='labelForm'>Titulo</label>
            <input className='inputTitle' name='titulo' onChange={(e) => setTitle(e.target.value)} />

            <div className='upDivision'>
              <div className='marginForm'>
                <label className='labelForm'>Sueldo</label>
                <input className='inputForm' name="sueldo" onChange={(e) => setSueldo(e.target.value)} />
              </div>

              <div>
                <label className='labelForm'>Jornada</label>
                <input className='inputForm' name="jornada" onChange={(e) => setJornada(e.target.value)} />
              </div>
            </div>
          </div>
          <div className='down'>
            <label className='labelForm'>Descripcion</label>
            <textarea name='descripcion' className='inputFormDescripcion' onChange={(e) => setDescripcion(e.target.value)} placeholder=' # Título  ## Subtítulo '></textarea>
          </div>
        </div>
      </div>
    </form>
  );
};
