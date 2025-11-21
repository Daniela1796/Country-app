function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content text-center text-white">
          <h1 className="hero-title display-2 fw-bold mb-4">
            Bienvenidos a Countries App
          </h1>
          <p className="hero-subtitle lead fs-3 mb-5">
            Descubre el mundo en una sola página
          </p>
          <div className="hero-buttons">
            <a href="/countries" className="btn btn-light btn-lg px-4 me-3 fw-bold">
              Explora los países
            </a>
            <a href="#features" className="btn btn-outline-light btn-lg px-4">
              Ver más
            </a>
          </div>
        </div>
      </div>

      <div id="features" className="features-section py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="feature-card p-4">
                <div className="feature-icon mb-3">🌍</div>
                <h4>Mas de 250 países</h4>
                <p>Información completa sobre cada país del mundo</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card p-4">
                <div className="feature-icon mb-3">🚀</div>
                <h4>Datos en tiempo real</h4>
                <p>Información actualizada de la confiable API de REST Countries</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card p-4">
                <div className="feature-icon mb-3">📱</div>
                <h4>Diseño Responsivo</h4>
                <p>Funciona a la perfección en todos tus dispositivos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;