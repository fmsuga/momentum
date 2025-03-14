const images = [
  'url("img/foto-gym.jpg")',
  'url("img/foto-gym2.jpg")',
  'url("img/foto-gym3.jpg")'
];

let index = 0;
const heroSection = document.querySelector('.hero');

function changeBackground() {
  heroSection.style.backgroundImage = images[index];
  index = (index + 1) % images.length;
}

setInterval(changeBackground, 4000); // Cambia cada 4 segundos

changeBackground(); // Carga la primera imagen


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('$30000 por mes', 'success')
  })
}


//script pago efectivo/tarjeta
// Precios base en efectivo
const preciosBase = {
  mensual: 35000,
  tresMeses: 28000,
  seisMeses: 21000,
  anual: 17500,
};


const recargo = 1.10; // 

function cambiarPrecios(metodo) {
  if (metodo === 'tarjeta') {
      document.getElementById("precio-mensual").innerText = `$${Math.round(preciosBase.mensual * recargo)} / Mes`;
      document.getElementById("precio-3meses").innerText = `$${Math.round(preciosBase.tresMeses * recargo)} / Mes`;
      document.getElementById("precio-6meses").innerText = `$${Math.round(preciosBase.seisMeses * recargo)} / Mes`;
      document.getElementById("precio-anual").innerText = `$${Math.round(preciosBase.anual * recargo)} / Mes`;
  } else {
      document.getElementById("precio-mensual").innerText = `$${preciosBase.mensual} / Mes`;
      document.getElementById("precio-3meses").innerText = `$${preciosBase.tresMeses} / Mes`;
      document.getElementById("precio-6meses").innerText = `$${preciosBase.seisMeses} / Mes`;
      document.getElementById("precio-anual").innerText = `$${preciosBase.anual} / Mes`;
  }



document.querySelectorAll('.btn-toggle').forEach(btn => {
  btn.classList.remove('active');
});


document.getElementById(`btn-${metodo}`).classList.add("active");
}


window.onload = function() {
  cambiarPrecios('efectivo');
};


// beneficios, que se pare la img al pasar el mouse

const logoContainer = document.querySelector(".logo-track");

logoContainer.addEventListener("mouseenter", () => {
    logoContainer.style.animationPlayState = "paused"; // Se detiene la animación
});

logoContainer.addEventListener("mouseleave", () => {
    logoContainer.style.animationPlayState = "running"; // Se reanuda
});

