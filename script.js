document.addEventListener("DOMContentLoaded", () => {
    const dogImagesContainer = document.getElementById("dog-images-container");
    const getDogsBtn = document.getElementById("get-dogs-btn");

    
    //cargar las imágenes automáticamente al cargar la página
    cargarImagenesDePerros();

    // Agrega un evento de clic al botón para recargar las imágenes
    getDogsBtn.addEventListener("click", cargarImagenesDePerros);
});
