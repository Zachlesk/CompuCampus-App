
import './Agregar.css';




export const Agregar = () => {
  
    return (
      <form >
        <div className='buttonDiv'>
          <button formAction=''  className="buttonForm" formMethod='POST'>
            <p>Publicar</p>
          </button>
        </div>
        
        <div className='bodyForm'>
        <div className='formContent'>
          
          <div className='up'>
         
            <label className='labelForm' >Titulo</label>
            <input className='inputTitle'/>

            <div className='upDivision'>
              <div className='marginForm'>
              <label className='labelForm' >Sueldo</label>
              <input className='inputForm'/>
              </div>
             
              <div>
              <label className='labelForm' >Jornada</label>
              <input className='inputForm'/>
              </div>
            </div>  
           


        
          </div>
          <div className='down'>
            
            <label className='labelForm' >Descripcion</label>
            <textarea name='descripcion' className='inputFormDescripcion' placeholder=' # Título  ## Subtítulo '></textarea>


          </div>
        </div>
        </div>
      </form>
    )
  }