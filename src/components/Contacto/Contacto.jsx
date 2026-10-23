import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contacto.css';

const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [cargando, setCargando] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setCargando(true);

    try {
      const templateParams = {
        nombre: formulario.nombre,
        email: formulario.email,
        mensaje: formulario.mensaje
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      Swal.fire({
        title: '¡Mensaje Enviado!',
        text: 'Gracias por contactarme. Te respondere a la brevedad.',
        icon: 'success',
        confirmButtonColor: '#00d8ff',
        background: '#111a2e',
        color: '#ffffff'
      });

      serFormulario({ nombre: '', email: '', mensaje: ''});

    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      Swal.fire({
        titlr: 'Error',
        text: 'Hubo un problema al enviar el mensaje. Intentalo mas tarde.',
        icon: 'error',
        confirmButtonColor: '#00d8ff',
        background: '#ffffff'
      });
    } finally {
      setCargando(false);
    }
  };
    
return (
  <section id="contacto" className="contacto-section">
    <h2 className="contacto-main-title">Trabajemos Juntos</h2>

    <div className="contacto-container">
      <div className="contacto-grid">

        {/* =====================================
            COLUMNA IZQUIERDA: INFORMACIÓN
            (¡Restaurada!)
        ====================================== */}
        <div className="contacto-info">
          <h3 className="info-title">Ponte en Contacto</h3>
          <p className="info-desc">
            ¿Tienes un proyecto en mente o necesitas ayuda para
automatizar tus flujos de trabajo?
              Me encantaría escucharte.
           </p>
        <div className="info-items">
          {/* Ítem Email */}
          <div className="info-item">
            <div className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-
1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
               </svg>
            </div>
          <div>
            <span className="item-label">Email</span>
            <p className="item-text">mileydiharo5@gmail.com</p>
          </div>
        </div>

        {/* Ítem Ubicación */}
        <div className="info-item">
          <div className="info-icon">
            <svg width="20" height="20" viewBox="0 0 24 24"
fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18
0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<div>
<span className="item-label">Ubicación</span>
<p className="item-text"> Lima - Perú</p>
</div>
</div>
</div>
</div>
{/* =====================================
COLUMNA DERECHA: FORMULARIO
====================================== */}
<div className="contacto-form-wrapper">
<form onSubmit={manejarEnvio} className="contacto-form">
<div className="form-group">
<label htmlFor="nombre">Nombre</label>
<input
type="text"
id="nombre"
name="nombre"
value={formulario.nombre}
onChange={manejarCambio}
placeholder="Mileydi Haro"
required
/>
</div>
<div className="form-group">
<label htmlFor="email">Email</label>
<input
type="email"
id="email"
name="email"
value={formulario.email}
onChange={manejarCambio}
placeholder="mileydiharo5@gmail.com"
required
/>
</div>
<div className="form-group">
<label htmlFor="mensaje">Mensaje</label>
<textarea
id="mensaje"
name="mensaje"
value={formulario.mensaje}
onChange={manejarCambio}
placeholder="Cuéntame sobre tu proyecto..."
rows="5"
required
></textarea>
</div>
<button type="submit" className="btn-submit">Enviar

Mensaje</button>
</form>
</div>
</div>
</div>
</section>
);
};
export default Contacto;