import './Banner.css';
import miFoto from '../../assets/miFoto.png';

const Banner = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">

        <div className="status-badge">
         <span className="status-dot"></span>
         Disponible para nuevos proyectos
        </div>

        <div className="profile-photo-container">
          <img src={miFoto} alt="Foto de Perfil" className="profile-photo" />
        </div>

        <h1 className="hero-title">
          Mileydi <br />
          <span className="text-cyan">Haro</span>
        </h1>

        <h2 className="hero-subtitle">
          Estudiante de Ingenieria de Software con IA | SENATI
        </h2>

        <p className="hero-description">
          Estudiante de último ciclo con tres años de formación en desarrollo de software.
          Construyo aplicaciones web y móviles y me interesa aplicar la inteligencia artificial
          para resolver problemas reales.
        </p>

        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contacto" className="btn btn-secondary">Contáctame</a>
        </div>

      </div>

      <div className="scroll-indicator">↓</div>
    </section>
  );
};

export default Banner;