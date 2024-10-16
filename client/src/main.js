import "./style.css";

const $app = document.querySelector("#app");

const $form = document.createElement("form");

const $input = document.createElement("input");
$input.name = "productImage"; // ! Aquí va el valor del fieldName de su servidor
$input.type = "file";
$input.accept = "image/*";

// Mostrar preview de la imagen (Opcional)
$input.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (readerEvent) => {
    let $img = document.querySelector("img");

    if (!$img) {
      $img = document.createElement("img");
    }

    $img.src = readerEvent.target.result;
    $img.style.width = "512px";
    $app.appendChild($img);
  };

  reader.readAsDataURL(file);
});

const $button = document.createElement("button");

$button.textContent = "Accept";
$button.className =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

$form.appendChild($input);

$form.appendChild($button);

$app.appendChild($form);

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  fetch("http://localhost:4000/products", {
    // ! Ruta de su servidor en la que recibe el archivo
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
