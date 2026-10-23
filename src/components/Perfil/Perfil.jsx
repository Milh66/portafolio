import './Perfil.css';

const Perfil = () => {
  // Texto de la tarjeta "Perfil profesional" (un parrafo por elemento)
  const parrafos = [
    "Estudiante de Ingenieria de Software con Inteligencia Artificial en SENATI. Llevo tres años de formacion y me falta un ciclo para egresar",
    "Me desarrollado aplicaciones web con React, Bootstrap y Git/GitHub, y una aplicacion movil Android en equipo como parte del seminario",
    "Me gusta trabajar en equipo, aprender tecnologias nuevas y convertir ideas en productos que funcionan."
  ];

  // Linea  de tiempo de formacion (agrega mas objetos cuando tengas certificados)
  const educacionData = [
    {
      id: 1,
      titulo:"Ingenieria de Software con Inteligencia Artificial",
      etiqueta: "En curso",
      detalle: "SENATI . Egreso previsto: COMPLETAR (ciclo/año)"
    }
    // {
    // id:2,
    // titulo:"Nombre del certificacion o curso",
    // etiqueta: "Certificacion",
    // detalle: "Institucion . Año"
    //}
  ];

  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="sobre-mi-container">
        <h2 className="section-title">Sobre mí</h2>

        <div className="sobre-mi-grid">

          {/* TARJETA 1: PERFIL PROFESIONAL */}
          <div className="card">
            <div className="card-header">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Perfil profesional</h3>
            </div>

            <div className="card-text">
              {parrafos.map((texto, index) => (
                <p key={index} className="card-parrafo">{texto}</p>
              ))}
            </div>
          </div>
            
          {/*TARJETA 2: EDUCACIÓN */}
          <div className="card">
            <div className="card-header">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3>Educación</h3>
            </div>

            <div className="timeline">
              {educacionData.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-header">
                    <h4>{item.titulo}</h4>
                    <span className="badge  badge-outline">{item.etiqueta}</span>
                  </div>
                  <span className="timeline-date">{item.detalle}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Perfil;