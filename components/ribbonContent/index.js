import styles from './ribbonContent.module.css';

const RibbonContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <p className={styles.paragrapheWrap}>
            <span className={styles.paragraphe}>
              Get $180- $620 in credit toward iPhone 15 when &nbsp; you trade in
              iPhone 11 or higher.
            </span>
            <span></span>
            <a
              href="https://www.apple.com/shop/buy-iphone/iphone-15"
              className={styles.link}
            >
              &nbsp;Buy &gt;
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RibbonContent;
