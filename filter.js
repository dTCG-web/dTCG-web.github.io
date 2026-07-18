// Localizar el elemento select en el DOM
const selectFilter = document.getElementById('filtro');

// Consumir el archivo JSON de la raíz
fetch('cartas_deckbuilder.json')
    .then(response => {
        if (!response.ok) throw new Error('Error al cargar el JSON de etiquetas');
        return response.json();
    })
    .then(data => {
        const reinasArray = data.reinas; 

        // 1. Crear un Set para almacenar etiquetas únicas (evita duplicados)
        
        const listaTagsUnicas = new Set();
        
        // 2. Recorrer cada reina y extraer sus tags individuales
        reinasArray.forEach(reina => {
            const tags = reina.tags.split(' ')
            tags.forEach(t => {
                listaTagsUnicas.add(t)
            });

        });

        // 3. Convertir el Set en un array y ordenarlo alfabéticamente (Opcional pero recomendado)
        const tagsOrdenados = Array.from(listaTagsUnicas).sort();

        // 4. Crear un elemento <option> por cada etiqueta única encontrada
        tagsOrdenados.forEach(tag => {
            const option = document.createElement('option');
            option.value = tag.toLowerCase(); // Valor en minúsculas para filtrar más fácil
            option.textContent = tag;         // Texto visible tal como viene en el JSON
            selectFilter.appendChild(option);
        });
    })
    .catch(error => console.error('Error procesando las etiquetas:', error));

 