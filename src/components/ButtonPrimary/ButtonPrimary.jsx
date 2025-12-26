// Importation des styles CSS spécifiques à ce composant
import styles from "./styles.module.css";

/**
 * Composant bouton principal réutilisable pour l'application.
 *
 * Props :
 * - title : texte affiché dans le bouton
 * - onClickOnButton : fonction appelée lors du clic sur le bouton
 */
export const ButtonPrimary = ({ title, onClickOnButton }) => {
  // Fonction interne pour gérer le clic sur le bouton
  const handleOnClick = () => {
    onClickOnButton(); // Appelle la fonction passée en prop
  };
  return (
    <button
      onClick={handleOnClick} // Gestionnaire d'événement pour le clic
      type="button" // Définit le type du bouton
      className={`btn btn-primary ${styles.button_style}`} // Ajoute les classes Bootstrap et personnalisées
    >
      {title} {/* Affiche le texte du bouton */}
    </button>
  );
};
