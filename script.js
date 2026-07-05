document.addEventListener("DOMContentLoaded", () => {
    const contenedorServicios = document.querySelector("#servicios");

    fetch('servicios.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(servicio => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <h3>${servicio.titulo}</h3>
                    <p>${servicio.descripcion}</p>
                `;
                contenedorServicios.appendChild(card);
            });
        })
        .catch(error => console.error('Error al cargar los servicios:', error));
});