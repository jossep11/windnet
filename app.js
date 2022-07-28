const buttonEmail = document.querySelector("#button-email_opacity");
const form = document.querySelector("#form");
let contador = 1;
window.onload = () => {
  if (document.querySelector(`#carrucel-1`)) {
    setInterval(() => {
      if (contador > 3) {
        contador = 1;
      }
      document.querySelector(`#carrucel-${contador}`).checked = true;
      contador++;
    }, 5000);
  }
};
if (form) {
  form.addEventListener("submit", handleSubmit);
}
function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  console.log(form.get("name"));
  buttonEmail.setAttribute(
    "href",
    `mailto:info@wfiber.net?subject=${form.get("name")} ${form.get(
      "last-name"
    )}, ${form.get("email")} &body=Número de telefono:${form.get(
      "phone-number"
    )}%0D%0A${form.get("message")}`
  );
  buttonEmail.click();
}

function closeNav() {
  document.querySelector("#check").checked = false;
}
console.log(document.querySelector(".btn-inicio"));
// document.querySelector('.btn-inicio').onclick = function() {
//   console.log('test');
// }​;​

// document.querySelector('.Btn-Servicios').onclick = function() {
//   console.log('test')
// }​;​
// document.querySelector('.Btn-Nosotros').onclick = function() {
//   console.log('test')
// }​;​
// document.querySelector('.Btn-Precios').onclick = function() {
//   console.log('test')
// }​;​
// document.querySelector('.Btn-Contacto').onclick = function() {
//   console.log('test')
// };
