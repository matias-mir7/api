document.addEventListener("DOMContentLoaded", () => {
    const dogImagesContainer = document.getElementById("dog-images-container");
    const getDogsBtn = document.getElementById("get-dogs-btn");

    // Función para cargar imágenes de perros
    function cargarImagenesDePerros() {
        const numberOfDogs = 10; // Puedes ajustar el número de imágenes aquí

        fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
            .then((response) => response.json())
            .then((data) => {
                const dogImages = data.message;

                // Limpia el contenedor de imágenes existentes
                dogImagesContainer.innerHTML = "";

                // Muestra las imágenes de perros aleatorios
                dogImages.forEach((imageUrl) => {
                    const img = document.createElement("img");
                    img.src = imageUrl;
                    img.alt = "Perror";
                    dogImagesContainer.appendChild(img);
                });
            })
            .catch((error) => {
                console.error("Error al cargar las imágenes de perros:", error);
            });
    }

    //cargar las imágenes automáticamente al cargar la página
    cargarImagenesDePerros();

    // Agrega un evento de clic al botón para recargar las imágenes
    getDogsBtn.addEventListener("click", cargarImagenesDePerros);
});
