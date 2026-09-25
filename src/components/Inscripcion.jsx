function Inscripcion({ inscripcion, onEliminar }) {
  return (
    <article className="card h-100">
      <div className="card-body">
        <h2 className="h5">{inscripciones.nombre}</h2>
        <p className="badge bg-secondary">{inscripciones.categoria}</p>
              
        <button
          className="btn btn-danger"
          onClick={() => onEliminar(inscripciones.id)}
        >
          Desinscribirme
        </button>
      </div>
    </article>
  );
}

export default Inscripcion;
