import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';  // Assume you have global styles

export default function Home() {
  // For demonstration, I'm creating an array of 20 products.
  const sampleProducts = Array(20).fill({
    name: 'Sample Product',
    description: 'This is a description of the sample product.',
    price: 29.99,
    imageUrl: 'https://img.freepik.com/free-photo/colorful-heart-air-balloon-shape-collection-concept-isolated-color-background-beautiful-heart-ball-event_90220-1047.jpg'
  });

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.productsGrid}>
          {sampleProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

