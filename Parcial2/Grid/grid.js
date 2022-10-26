new gridjs.Grid({
    columns: ['NumControl', 'NombreEs', 'ApellidoPa', 'ApellidoMa'],
    server: {
        url: 'http://localhost:8091/get',
        then: data => data.map(ejemplo => 
            [ejemplo.NumControl, ejemplo.NombreEs, ejemplo.ApellidoPa, ejemplo.ApellidoMa]
        )

    }
  }).render(document.getElementById("wrapper"));
  

   

