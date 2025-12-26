import styles from "./styles.module.css";
export const Logo = ({ image, title, subtitle }) => {
  return (
    <>
      <div className={styles.logo_container}>
        <img className={styles.logo_image} src={image} alt="logo" />
        <div className={styles.logo_text}>{title}</div>
      </div>
      <div className={styles.subtitle}>{subtitle}</div>
    </>
  );
};
