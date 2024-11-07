


function loadScript(src, callback, second_callback) {
    // crea una etiqueta <script> y la agrega a la página
    // esto hace que el script dado: src comience a cargarse y ejecutarse cuando se complete

    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script); // se ejecuta una vez que el script ya ha sido ejecutado
    
    document.head.append(script);

    second_callback() // Lo primero en ejecutarse
  }


  function mojander() {
    alert("función referida");
  }

  function grijander() {
    alert("segunda función referida");
  }


loadScript('./asdf.js', mojander, grijander);

