import React, { useEffect, useState } from 'react';
import './Agregar.css';
import axios from 'axios';

export const Agregar = () => {
  const [title, setTitle] = useState('');
  const [sueldo, setSueldo] = useState('');
  const [jornada, setJornada] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handlePublicarClick = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      sueldo,
      jornada,
      descripcion
    };

    try {
      const response = await axios.post("http://127.0.0.1:0000/api/campers", postData);

   
      console.log("Solicitud POST exitosa:", response.data);

     
      setTitle('');
      setSueldo('');
      setJornada('');
      setDescripcion('');
    } catch (error) {
      console.error("Error al realizar la solicitud POST:", error);
    }
  };

  return (
    <form>
      <div className='buttonDiv'>
        <button onClick={handlePublicarClick} className="buttonForm">
          <p>Publicar</p>
        </button>
      </div>

      <div className='bodyForm'>
        <div className='formContent'>
          <div className='up'>
            <label className='labelForm'>Titulo</label>
            <input className='inputTitle' name='titulo' value={title} onChange={(e) => setTitle(e.target.value)} />

            <div className='upDivision'>
              <div className='marginForm'>
                <label className='labelForm'>Sueldo</label>
                <input className='inputForm' name="sueldo" value={sueldo} onChange={(e) => setSueldo(e.target.value)} />
              </div>

              <div>
                <label className='labelForm'>Jornada</label>
                <input className='inputForm' name="jornada" value={jornada} onChange={(e) => setJornada(e.target.value)} />
              </div>
            </div>
          </div>
          <div className='down'>
            <label className='labelForm'>Descripcion</label>
            <textarea name='descripcion' className='inputFormDescripcion' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder=' # Título  ## Subtítulo '></textarea>
          </div>
        </div>
      </div>
    </form>
  );
};
