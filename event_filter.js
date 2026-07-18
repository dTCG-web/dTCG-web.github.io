  const filterSelect = document.getElementById('filtro');

  // Escuchamos el cambio en el select
  filterSelect.addEventListener('change', function() {
    
    // IMPORTANTE: Buscamos los items AQUÍ ADENTRO, cuando el usuario cambia el select. 
    // Para este momento, el fetch ya terminó y los <li> ya existen.
    // También agregamos el punto (.) para seleccionar por clase.
    const items = document.querySelectorAll('.filtrable');
    
    const selectedClass = this.value;

    items.forEach(item => {
      // Coincidimos con el value="todos" de tu HTML
      if (selectedClass === 'todos') {
        item.style.display = 'block';
      } 
      // Comprobamos si tiene la clase seleccionada
      else if (item.classList.contains(selectedClass)) {
        item.style.display = 'block';
      } 
      // Ocultamos si no coincide
      else {
        item.style.display = 'none';
      }
    });
  });