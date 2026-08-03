import kitImage from './assets/kit.svg';
import lipstickImage from './assets/lipstick.svg';
import mascaraImage from './assets/mascara.svg';
import eyelinerImage from './assets/eyeliner.svg';

const products = [
  {
    name: 'Velvet Rouge',
    type: 'Labial líquido',
    description: 'Color intenso, acabado satinado y confort de larga duración.',
    accent: 'Rose Noir',
    price: '24€',
    tone: 'rose',
    image: lipstickImage
  },
  {
    name: 'Lash Lift',
    type: 'Rimel volumen',
    description: 'Pestañas definidas, elevadas y con un efecto editorial.',
    accent: 'Midnight Black',
    price: '29€',
    tone: 'black',
    image: mascaraImage
  },
  {
    name: 'Linea Élite',
    type: 'Delineador preciso',
    description: 'Trazo fino o dramático con una fórmula resistente.',
    accent: 'Golden Smoke',
    price: '22€',
    tone: 'gold',
    image: eyelinerImage
  }
];

const benefits = [
  'Pigmentación profesional para cámara',
  'Texturas cómodas y de alto rendimiento',
  'Diseño elegante pensado para crear con confianza'
];

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="nav">
          <div className="brand">LUMÉRA</div>
          <a href="#catalogo" className="nav-link">Ver catálogo</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Makeup Beyond Beauty</p>
            <h1>Maquillaje premium para crear como una profesional.</h1>
            <p className="hero-text">
              Luméra une lujo, pigmentación y precisión para que cada look se vea impecable frente a la cámara y en cada detalle.
            </p>
            <div className="hero-actions">
              <a href="#catalogo" className="btn btn-primary">Descubrir colección</a>
              <a href="#beneficios" className="btn btn-secondary">Por qué Luméra</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Vista editorial de maquillaje premium">
            <img src={kitImage} alt="Kit de maquillaje Luméra" className="hero-image" />
          </div>
        </div>
      </header>

      <main>
        <section id="catalogo" className="section">
          <div className="section-heading">
            <p className="eyebrow">Productos destacados</p>
            <h2>Formulas diseñadas para un resultado studio-ready.</h2>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className={`product-visual ${product.tone}`}>
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <p className="product-type">{product.type}</p>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-meta">
                  <span>{product.accent}</span>
                  <strong>{product.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="beneficios" className="section benefits-section">
          <div className="section-heading">
            <p className="eyebrow">Por qué elegir Luméra</p>
            <h2>Elegancia, rendimiento y una estética imposible de ignorar.</h2>
          </div>

          <div className="benefits-list">
            {benefits.map((benefit) => (
              <div className="benefit-item" key={benefit}>
                <span>✦</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
