import React from 'react';
import '../assets/styles/components/PopUp.scss';

let counter = 1;

const handlerNext = (e) => {
  setTimeout(() => {
    let elements = {
      step1: document.querySelectorAll('.step-1'),
      step2: document.querySelectorAll('.step-2'),
      step3: document.querySelectorAll('.step-3'),
      step4: document.querySelectorAll('.step-4'),
      step5: document.querySelectorAll('.step-5'),
      btn: document.getElementById('getPlan'),
      count: document.getElementById('count'),
      finish: document.getElementById('finish'),
    };

    switch (counter) {
      case 1:
        elements.count.innerText = '2';
        elements.btn.style.visibility === '' ? (elements.btn.style.visibility = 'visible') : (elements.btn.style.visibility = 'hidden');
        elements.step1[0].classList.remove('active');
        elements.step2[0].classList.add('active');
        counter++;
        break;

      case 2:
        elements.count.innerText = '3';
        elements.step2[0].classList.remove('active');
        elements.step3[0].classList.add('active');
        counter++;
        break;

      case 3:
        elements.count.innerText = '4';
        elements.btn.innerText = 'Recibir plan';
        elements.step3[0].classList.remove('active');
        elements.step4[0].classList.add('active');
        counter++;
        break;

      default:
        elements.finish.innerText = 'Finalizado';
        elements.btn.style.visibility = 'hidden';
        elements.step4[0].classList.remove('active');
        elements.step5[0].classList.add('active');
        counter++;
        break;
    }
  }, 1);
};

const handlerClose = () => {
  const content = document.getElementById('popUp')

  content.style.display = 'none'
};

const PopUp = () => {
  return (
    <div id="popUp">
      <form>
        <span id="close" onClick={handlerClose}>X</span>
        <span className="highlight" id="finish">
          Paso <span id="count">{counter}</span> de 4
        </span>
        <div className="content-pop step-1 active">
          <h2>Empresa y objetivos</h2>

          <label>
            <p className="highlight title">Selecciona un sector</p>
            <select>
              <option></option>
              <option>Opción uno</option>
              <option>Opción dos</option>
            </select>
          </label>

          <p className="highlight title">Selecciona un objetivo</p>

          <div className="input-radio">
            <label>
              <input type="radio" className="option-input radio" />
              Reconocimiento de marca
            </label>
            <label for="nombre">
              <input type="radio" className="option-input radio" />
              Captación de tráfico
            </label>
            <label for="nombre">
              <input type="radio" className="option-input radio" />
              Otros
            </label>
          </div>
        </div>

        <div className="content-pop step-2 ">
          <h2>Datos sobre tu público</h2>

          <p className="highlight title">Edad de tu público</p>

          <div className="inputs">
            <label>
              Desde
              <input className="range" type="number" min="0" max="100" />
            </label>
            <label>
              Hasta
              <input className="range" type="number" min="0" max="100" />
            </label>
          </div>

          <p className="highlight title">Intereses de tu público</p>
          <div className="input-check inputs">
            <label>
              <input className="option-input checkbox" type="checkbox" />
              Interés 1
            </label>
            <label>
              <input className="option-input checkbox" type="checkbox" />
              Interés 1
            </label>
            <label>
              <input className="option-input checkbox" type="checkbox" />
              Interés 1
            </label>
            <label>
              <input className="option-input checkbox" type="checkbox" />
              Interés 1
            </label>
            <label>
              <input className="option-input checkbox" type="checkbox" />
              Interés 1
            </label>
            <label>
              <input className="option-input checkbox" type="checkbox" />
              Interés 1
            </label>
            <label>
              <input className="option-input checkbox" type="checkbox" />
              Interés 1
            </label>
            <label>
              <input className="option-input checkbox" type="checkbox" />
              Interés 1
            </label>
            <label>
              <input className="option-input checkbox" type="checkbox" />
              Interés 1
            </label>
          </div>
        </div>

        <div className="content-pop step-3 ">
          <h2>Inversión y duracón</h2>

          <p className="highlight title">Selecciona un rango de inversión</p>

          <div className="inputs">
            <label>
              Desde
              <input className="range" type="number" min="0" />
            </label>
            <label>
              Hasta
              <input className="range" type="number" min="0" />
            </label>
          </div>

          <label>
            <p className="highlight title">Selecciona una duración</p>
            <select>
              <option></option>
              <option>duración uno</option>
              <option>duración dos</option>
            </select>
          </label>
        </div>

        <div className="content-pop step-4 ">
          <h2>Datos de contacto</h2>

          <div className="content-form">
            <label for="nombre">
              <p className="highlight title">Nombre</p>
              <input className="contact-input" name="nombre" />
            </label>
            <label for="empresa">
              <p className="highlight title">Empresa</p>
              <input className="contact-input" name="empresa" />
            </label>
            <label for="teléfono">
              <p className="highlight title">Teléfono</p>
              <input className="contact-input" name="teléfono" />
            </label>
            <label for="email">
              <p className="highlight title">Email</p>
              <input className="contact-input" name="email" />
            </label>
          </div>
        </div>

        <div className="content-pop step-5 ">
          <h2>Hemos recibido tu información</h2>
          <p>
            En breves recibirás una propuesta de <br /> plan adaptada a tu negocio.
          </p>
        </div>

        <a href="#popUp" className="btn-primary" id="getPlan" onClick={handlerNext}>
          Siguiente
        </a>
      </form>
    </div>
  );
};

export default PopUp;
