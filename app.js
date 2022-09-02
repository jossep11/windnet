const buttonEmail = document.querySelector("#button-email_opacity");
const usuario = document.querySelector("#usuario");
const apellido = document.querySelector("#last-name");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const phone = document.querySelector("#phone-number");
const message = document.querySelector("#message");
let form = document.querySelector("#form");

let contador = 1;
// carrucel
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
  var datos = new FormData(form);

  var url = "correo.php";
  fetch(url, {
    method: "POST",
    body: datos,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "Email enviado",
        showConfirmButton: false,
      }).then((result) => {
        usuario.value = "";
        apellido.value = "";
        email.value = "";
        asunto.value = "";
        phone.value = "";
        message.value = "";
      });
    })
    .catch((res) =>
      Swal.fire({
        icon: "error",
        title: "Ocurrió un error al enviar el email",
        showConfirmButton: false,
      }).then((result) => {
        console.log("Error", res);
      })
    );
}

function closeNav() {
  document.querySelector("#check").checked = false;
}
