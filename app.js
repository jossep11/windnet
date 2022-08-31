const buttonEmail = document.querySelector("#button-email_opacity");
let form = document.querySelector("#form");

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
  var datos = new FormData(form);
  var url = "correo.php";
  fetch(url, {
    method: "POST",
    body: datos,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((res) => console.log(res));
}

function closeNav() {
  document.querySelector("#check").checked = false;
}
