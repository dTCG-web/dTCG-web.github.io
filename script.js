// Step 1: Locate the HTML list container
const listContainer = document.getElementById('lista-reinas');
const listGatadas = document.getElementById('lista-gatadas');
const listEscenas = document.getElementById('lista-escenas');

// Step 2: Fetch the JSON file from the root folder
fetch('cartas_deckbuilder.json')
    .then(response => {
        if (!response.ok) throw new Error('Network error');
        return response.json();
    })
    .then(data => {
        // Access the "reinas" array directly from the data object
        const reinasArray = data.reinas;

        // Loop through the nested array
        reinasArray.forEach(reina => {
            
            const listItem = document.createElement('li');
            listItem.classList.add(...reina.tags.split(" "))
            listItem.classList.add("filtrable")
            
            
            const nameSpan = document.createElement('div');
            nameSpan.textContent = reina.nombre;
            listItem.appendChild(nameSpan);
            
            
            reina.imagenes.forEach(img => {
                
                const imageElement = document.createElement('img');
                
                
                imageElement.src = "https://dragtcg.neocities.org/" + img;
                imageElement.alt = reina.nombre;
                
                imageElement.style.maxWidth = "150px"; 
                
                
                listItem.appendChild(imageElement);
            });
            
            listContainer.appendChild(listItem);
        });

        const gatadasArray = data.gatadas

        gatadasArray.forEach(gatada => {
            
            const listItem = document.createElement('li');
            listItem.classList.add(...gatada.tags.split(" "))
            listItem.classList.add("filtrable")
            
            
            const nameSpan = document.createElement('div');
            nameSpan.textContent = gatada.nombre;
            listItem.appendChild(nameSpan);
            
            
            gatada.imagenes.forEach(img => {
                
                const imageElement = document.createElement('img');
                
                
                imageElement.src = "https://dragtcg.neocities.org/" + img;
                imageElement.alt = gatada.nombre;
                
                imageElement.style.maxWidth = "150px"; 
                
                
                listItem.appendChild(imageElement);
            });
            
            listGatadas.appendChild(listItem);
        });

        const escenasArray = data.escenas
        escenasArray.forEach(escena => {
            
            const listItem = document.createElement('li');
            listItem.classList.add(...escena.tags.split(" "))
            listItem.classList.add("filtrable")
            
            
            const nameSpan = document.createElement('div');
            nameSpan.textContent = escena.nombre;
            listItem.appendChild(nameSpan);
            
            
            escena.imagenes.forEach(img => {
                
                const imageElement = document.createElement('img');
                
                
                imageElement.src = "https://dragtcg.neocities.org/" + img;
                imageElement.alt = escena.nombre;
                
                imageElement.style.maxWidth = "150px"; 
                
                
                listItem.appendChild(imageElement);
            });
            
            listEscenas.appendChild(listItem);
        });

    })
    .catch(error => console.error('Fetch error:', error));
