import "./style.css";

const $app = document.querySelector("#app");
$app.className = "bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10";

const $form = document.createElement("form");
$form.className = "space-y-6";

// Función para crear labels estilizados
const createLabel = (forAttribute, text) => {
  const label = document.createElement("label");
  label.htmlFor = forAttribute;
  label.textContent = text;
  label.className = "block text-sm font-medium text-gray-700";
  return label;
};

// Función para crear inputs estilizados
const createInput = (type, name, placeholder) => {
  const input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.placeholder = placeholder;
  input.required = true;
  input.className =
    "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50";
  return input;
};

// Campo para el nombre del producto
const $inputName = createInput("text", "name", "Nombre del producto");

// Campo para la descripción del producto
const $inputDescription = document.createElement("textarea");
$inputDescription.name = "description";
$inputDescription.placeholder = "Descripción del producto";
$inputDescription.required = true;
$inputDescription.className =
  "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50";
$inputDescription.rows = 3;

// Campo para el precio del producto
const $inputPrice = createInput("number", "price", "Precio del producto");
$inputPrice.step = "0.01";

// Campo para subir la imagen
const $inputImage = createInput("file", "image", "");
$inputImage.accept = "image/*";
$inputImage.className =
  "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100";

// Contenedor para la vista previa de la imagen
const $imagePreviewContainer = document.createElement("div");
$imagePreviewContainer.className = "mt-4";

// Mostrar preview de la imagen
$inputImage.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (readerEvent) => {
    $imagePreviewContainer.innerHTML = ""; // Limpiar el contenedor
    const $img = document.createElement("img");
    $img.src = readerEvent.target.result;
    $img.className = "mt-2 rounded-md max-w-full h-auto";
    $img.style.maxHeight = "200px"; // Limitar la altura de la imagen
    $imagePreviewContainer.appendChild($img);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});

// Botón de enviar
const $button = document.createElement("button");
$button.textContent = "Agregar Producto";
$button.className =
  "w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors";

// Añadir los inputs al formulario
const addFormGroup = (label, input) => {
  const div = document.createElement("div");
  div.appendChild(label);
  div.appendChild(input);
  $form.appendChild(div);
};

addFormGroup(createLabel("name", "Nombre del producto"), $inputName);
addFormGroup(
  createLabel("description", "Descripción del producto"),
  $inputDescription
);
addFormGroup(createLabel("price", "Precio del producto"), $inputPrice);
addFormGroup(createLabel("image", "Imagen del producto"), $inputImage);

$form.appendChild($imagePreviewContainer);
$form.appendChild($button);

// Añadir título al formulario
const $title = document.createElement("h2");
$title.textContent = "Agregar Nuevo Producto";
$title.className = "text-2xl font-bold mb-6 text-center text-gray-800";
$app.appendChild($title);

$app.appendChild($form);

// Enviar el formulario
$form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  fetch("http://localhost:4000/products", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Mostrar mensaje de éxito
      showMessage("Producto agregado con éxito!", "success");
    })
    .catch((error) => {
      console.error("Error:", error);
      // Mostrar mensaje de error
      showMessage(
        "Error al agregar el producto. Por favor, intente de nuevo.",
        "error"
      );
    });
});

// Función para mostrar mensajes
const showMessage = (text, type) => {
  const messageElement = document.createElement("p");
  messageElement.textContent = text;
  messageElement.className = `mt-4 p-2 rounded-md ${
    type === "success"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700"
  }`;
  $app.appendChild(messageElement);

  // Remover el mensaje después de 5 segundos
  setTimeout(() => {
    $app.removeChild(messageElement);
  }, 5000);
};
