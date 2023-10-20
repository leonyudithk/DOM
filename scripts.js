const array = [];
function AgregarImagen() {
  const nombre = document.getElementById("nombre").value;
  const imagenInput = document.getElementById("imagen");
  const galeria = document.getElementById("galeria");

  let obj = {
    nombre: nombre,
    imagen: imagenInput,
  };
  array.push(obj);

  if (nombre && imagenInput.files.length > 0) {
    const imagen = URL.createObjectURL(imagenInput.files[0]);
    // Agregar película a la galería
    for (let i = 0; i < 10; i++) {
      // Crear elemento de película
      const objeto = document.createElement("div");
      objeto.className = "objeto";

      const imgElement = document.createElement("img");
      imgElement.src = imagen;

      const descripcionElement = document.createElement("p");
      //   descripcionElement.textContent = nombre;
      // <img src="${imgElement}" alt="">
      descripcionElement.innerHTML = `    
        <div class="movie-info">
            <h3>${nombre}</h3>
            <span class="green">0.8</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            ${nombre}
        </div>
        `;

      objeto.appendChild(imgElement);
      objeto.appendChild(descripcionElement);
      galeria.appendChild(objeto);
    }

    // Limpiar campos del formulario
    document.getElementById("nombre").value = "";
    imagenInput.value = "";
  } else {
    alert("Por favor, complete todos los campos.");
  }
  // console.log(array);
}

//================Funcion de busqueda================================================

// Funcion Buscar
//capturo el fromulario
const form = document.getElementById("form");
//console.log("estoy dentro form", form);
//escuhar los eventos para submit de el formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //  console.log("estoy dentro e", e);
  //capturo el valor o lo que escriben en el search o input
  const search = document.querySelector(".search").value;
  //console.log("estoy dentro sear", e, search);

  //realizo la busqueda
  const busqueda = array.filter((filtro) =>
    filtro.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  console.log("La busqueda es: ", busqueda);
  //llamo a la funcion para que pinte las tarjetas que conicidierron con la busqueda
});
