
import './Favoritos.css';

export const Favoritos = () => {


    return (
        <div className="bodyCard">

            <div className='left'>
                <div className='upLeft'>
                    <img src={Ejemplo} alt="" />
                    <h1>CampusLands</h1>
                </div>

                <div className='downLeft'>

                    <div className='title'>
                        <h1>Vacante programador experto en html,css y React</h1>
                    </div>

                    <div className='description'>
                        <p>
                            Estamos en búsqueda de un programador altamente capacitado y apasionado por el desarrollo web para unirse a nuestro equipo. Como Programador Experto en HTML, CSS y React, desempeñarás un papel fundamental en la creación de experiencias de usuario excepcionales y aplicaciones web de alta calidad.<br />

                            Responsabilidades:<br />

                            . Desarrollar y mantener aplicaciones web eficientes utilizando HTML, CSS y React.<br />
                            . Colaborar estrechamente con diseñadores y otros miembros del equipo de desarrollo para garantizar una implementación precisa de diseños y características.<br />
                            . Optimizar la velocidad y rendimiento de las aplicaciones web.<br />
                            . Realizar pruebas de calidad y solucionar problemas para garantizar la funcionalidad sin problemas.<br />
                            . Mantenerse actualizado con las mejores prácticas y tendencias de desarrollo web.<br />
                            

                        </p>
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
    )
}