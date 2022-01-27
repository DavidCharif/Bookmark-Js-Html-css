let switcher = 0;
// extraer del dom

const cambioPestana = (pos) => {
  let opcion1 = document.getElementById("option1");
  let opcion2 = document.getElementById("option2");
  let opcion3 = document.getElementById("option3");
  let button1 = document.getElementById("button1");
  let button2 = document.getElementById("button2");
  let button3 = document.getElementById("button3");

  switch (pos) {
    case 1:
      /* border-bottom: 5px solid  hsl(0, 94%, 66%); */
      button1.style.borderBottom = "3px solid  hsl(0, 94%, 66%)";
      button2.style.borderBottom = "1px solid  grey";
      button3.style.borderBottom = "1px solid  grey";
      opcion1.style.display = "";
      opcion2.style.display = "none";
      opcion3.style.display = "none";
      break;
    case 2:
      button1.style.borderBottom = "1px solid  grey";
      button2.style.borderBottom = "3px solid  hsl(0, 94%, 66%)";
      button3.style.borderBottom = "1px solid  grey";
      opcion1.style.display = "none";
      opcion2.style.display = "";
      opcion3.style.display = "none";
      break;
    case 3:
      button1.style.borderBottom = "1px solid grey";
      button2.style.borderBottom = "1px solid  grey";
      button3.style.borderBottom = "3px solid  hsl(0, 94%, 66%)";
      opcion1.style.display = "none";
      opcion2.style.display = "none";
      opcion3.style.display = "";
      break;
  }
};

// Input correo

const verificarCorreo = () => {
  let mailBox = document.getElementById("mailInput");
  let value = mailBox.value;
  let texto = document.getElementById("textoError");
  let contenedor = document.getElementById("contenedorError");

  if (value.includes("@") && value.includes(".") && !value.includes(" ")) {
    mailBox.style.borderBottom = "5px solid green";
    mailBox.style.borderTop = "1px solid green";
    mailBox.style.borderLeft = "1px solid green";
    mailBox.style.borderRight = "1px solid green";
    texto.innerText = "Correo correcto";
    contenedor.style.background = "green";
    mailBox.classList.add("is-valid");
    mailBox.classList.remove("is-invalid");
  } else {
    mailBox.style.borderBottom = "1px solid var(--secundary-color)";
    contenedor.style.background = "var(--secundary-color)";
    mailBox.style.borderTop = "1px solid var(--secundary-color)";
    mailBox.style.borderLeft = "1px solid var(--secundary-color)";
    mailBox.style.borderRight = "1px solid var(--secundary-color)";
    texto.innerText = "Whoops, make sure it's an email";
    mailBox.classList.add("is-invalid");
    mailBox.classList.remove("is-valid");

    /* let p = document.createElement("p");
        let div = document.createElement("div");
        p.textContent = "Whoops, make sure it's an email"
        div.appendChild(p)
        mailBox.appendChild(div); */
  }
  console.log(value.includes("@"));
};

const menu = () => {
  let button = document.getElementById("loginButton");
  let header = document.getElementById("header");
  let logo = document.getElementById("logo");

  if (switcher == 0) {
    header.style.backgroundColor = "hsl(229, 31%, 21%)";
    switcher += 1;
    button.classList.remove("btn-danger");
    button.classList.add("btn-outline-light");
    button.style.border = "1px solid white";
    button.classList.add("btn-lg");
    button.classList.add("btn-block");
    button.style.backgroundColor = "none";
    button.style.border = "1px solid white";
    logo.src = "images/logo-bookmarkWhite.svg";
  } else if (switcher = 1) {  
    
    logo.src = "images/logo-bookmark.svg";
    header.style.backgroundColor = "white";
    button.classList.remove("btn-outline-light");
    button.classList.remove("btn-block");
    button.classList.remove("btn-outline-light")
    button.classList.remove("btn-block")
    button.classList.add("btn-danger")
    switcher = 0; 
    }
    console.log(switcher);
};
