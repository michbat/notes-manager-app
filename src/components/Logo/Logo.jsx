// Importation des styles CSS spécifiques au logo
import styles from "./styles.module.css";
/**
 * Composant Logo : affiche le logo, le titre et le sous-titre de l'application.
 *
 * Props :
 * - image : chemin de l'image du logo
 * - title : texte principal (nom de l'application)
 * - subtitle : texte secondaire (slogan ou description)
 * - onClickOnLogo : fonction appelée lors d'un clic sur le logo
 */
export const Logo = ({ image, title, subtitle, onClickOnLogo }) => {
  // Fonction pour gérer le clic sur le logo
  const handleOnClick = () => {
    onClickOnLogo(); // Appelle la fonction passée en prop
  };
  return (
    <div>
      {/* Conteneur du logo et du titre, cliquable */}
      <div onClick={handleOnClick} className={styles.logo_container}>
        <img className={styles.logo_image} src={image} alt="logo" />
        <div className={styles.logo_text}>{title}</div>
      </div>
      {/* Sous-titre affiché sous le logo */}
      <div className={styles.logo_subtitle}>{subtitle}</div>
    </div>
  );
};
