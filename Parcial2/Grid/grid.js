import { Grid } from "gridjs";
import "./node_modules/gridjs/dist/theme/mermaid.css";

function helloWorld () {
  const wrapperRef = useRef(null);

  const grid = new Grid({
    columns: ['NumControl', 'NombreEs', 'ApellidoPa', 'ApellidoMa'],
    server: {
        url: 'http://localhost:8090/get',
        then: data => data.map(ejemplo => 
            [ejemplo.NumControl, ejemplo.NombreEs, ejemplo.ApellidoPa, ejemplo.ApellidoMa]
        )

    }
  });
  
  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  
  return <div ref={wrapperRef} />;
}

