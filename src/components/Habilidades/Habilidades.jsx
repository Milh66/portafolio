import './Habilidades.css';
const Habilidades = () => {
  // Para  mostrar el boton "VER CERTIFICADO" en una batalla, agrega:
  // certificado: "https://enlace -al-certificado"
  // Si no tiene  certificado, simplemente no pongas esa propiedad.
  const skillsData = [
    {
      id: 1,
      titulo: "HTML y CSS",
      descripcion: "Maquetacion responsiva con Flexbox, CSS Grid y media queries.",
      nivel: "Intermedio"
    },
    {
      id: 2,
      titulo: "JavaScript",
      descripcion: "Logica del lado del cliente, eventos y manipulacion de datos con arreglos.",
      nivel: "Aprendizaje Activo"
    },
    {
      id: 3,
      titulo: "React",
      descripcion: "Interfaces a partir de componentes, props y el Hook useState.",
      nivel: "Aprendizaje Activo"
    },
    {
      id: 4,
      titulo: "Bootstrap",
      descripcion: "Diseño rapido con clases utilitarias, tarjetas y botones.",
      nivel: "Intermedio"
    },
    {
      id: 5,
      titulo: "Git y GitHub",
      descripcion: "Control de versiones y repositorios remotos para mis proyectos.",
      nivel: "Intermedio"  
    },
    {
      id: 6,
      titulo: "Aplicaciones móviles Android",
      descripcion: "Diseño y desarrollado de una app móvil en equipo (seminario de app moviles).",
      nivel: "Aprendizaje Activo"
    },
    {
      id: 7,
      titulo: "Inteligencia Artificial",
      descripcion: "Fundamentos de IA vistos en la carrera de Ingenieria de Software con IA.",
      nivel: "en formación"
    }
  ];

  return (
   <section id="tech-stack" className="habilidades-section">
     <div className="habilidades-container">
      <div className="habilidades-grid">
        {skillsData.map((skill) => (
          <div key={skill.id} className="skill-card">

            <div className="skill-header">
              <div className="skill-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect> 
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>

              {skill.certificado && (
                <a
                  href={skill.certificado}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-badge badge-green"
                >
                  VER CERTIFICADO
                </a>
              )}
            </div>

            <div className="skill-body">
              <h3 className="skill-title">{skill.titulo}</h3>
              <p className="skill-desc">{skill.descripcion}</p>
              <span className="skill-level">{skill.nivel}</span>
            </div>

          </div>
        ))}
      </div>
     </div>
   </section>
 );
};

export default Habilidades;