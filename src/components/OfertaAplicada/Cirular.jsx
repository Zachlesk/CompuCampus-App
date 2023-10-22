import React, {useEffect,useState} from 'react';

import './Circular.css';

function Circular(){ 
  const [valor, setNewValor] = useState('')



  useEffect(()=>{
    setNewValor('Finalizado')
    if(valor === 'Postulado'){
      let progressBar = document.querySelector(".circular-progress");
      let valueContainer = document.querySelector(".value-container");
      
      let progressValue = 0;
      let progressEndValue =33;
      let speed = 10;
      
      let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = valor;
        progressBar.style.background = `
        conic-gradient(
            #FF8686 ${progressValue * 3.6}deg,
            #BABABA  ${progressValue * 3.6}deg
        )`;
        if (progressValue == progressEndValue) {
          clearInterval(progress);
        }
      }, speed);
        
    }else if( valor === 'EnProceso'){

      let progressBar = document.querySelector(".circular-progress");
      let valueContainer = document.querySelector(".value-container");
      
      let progressValue = 0;
      let progressEndValue =63;
      let speed = 10;
      
      let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = valor;
        progressBar.style.background = `
        conic-gradient(
            #FFA959 ${progressValue * 3.6}deg,
            #BABABA ${progressValue * 3.6}deg
        )`;
        if (progressValue == progressEndValue) {
          clearInterval(progress);
        }
      }, speed);

    }else if( valor === 'Finalizado'){

      let progressBar = document.querySelector(".circular-progress");
      let valueContainer = document.querySelector(".value-container");
      
      let progressValue = 0;
      let progressEndValue =100;
      let speed = 10;
      
      let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = valor;
        progressBar.style.background = `
        conic-gradient(
            #8AFF6C ${progressValue * 3.6}deg,
            #BABABA ${progressValue * 3.6}deg
        )`;
        if (progressValue == progressEndValue) {
          clearInterval(progress);
        }
      }, speed);

    }
  
    
  })

    return (
      <div class="container-circular">
      <div class="circular-progress">
        <div class="value-container">{valor}</div>
      </div>
    </div>
  );
}

export default Circular;