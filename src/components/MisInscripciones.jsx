import Inscripcion from "./components/inscripcion"; 

function MisInscripciones({ inscripciones, onEliminar }) {
  return (
    <div className="row g-4 m-top-4">
      <h2 className="col-12">Mis inscripciones</h2>
      {inscripciones.length === 0 ? (
        <p className="col-12 text-muted">Aún no tienes inscripciones.</p>
      ) : (
        inscripciones.map((inscripciones) => (
          <div className="col-12 col-md-6 col-lg-4" key={inscripciones.id}>
            <Inscripcion
              inscripcion={inscripciones}
              onEliminar={onEliminar}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default MisInscripciones;
