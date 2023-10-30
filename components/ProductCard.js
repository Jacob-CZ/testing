import { useState } from 'react';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className={styles.card} onClick={() => setExpanded(true)}>
        <img src={product.imageUrl} alt={product.name} className={styles.image} />
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>

      {expanded && (
        <div className={`${styles.overlay} ${expanded ? styles.showOverlay : ''}`} onClick={() => setExpanded(false)}>
          <div className={styles.overlayContent} onClick={e => e.stopPropagation()}> {/* Prevent click inside the card from closing it */}
            <img src={product.imageUrl} alt={product.name} className={styles.expandedImage} />
            <h2 className={styles.expandedTitle}>{product.name}</h2>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
            <button className={styles.button} onClick={() => setExpanded(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;


