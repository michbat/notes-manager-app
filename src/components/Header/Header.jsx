// Importation des styles CSS spécifiques au header
import styles from "./styles.module.css";
// Importation du composant Logo personnalisé
import { Logo } from "../Logo/Logo";
// Importation de l'image du logo
import img from "../../assets/images/logo.png";
// Importation du bouton principal réutilisable
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
// Hook de navigation de React Router pour changer de page
import { useNavigate } from "react-router-dom";
/**
 * Composant Header : affiche l'en-tête de l'application avec le logo et le bouton d'ajout de note.
 *
 * - Le logo permet de revenir à la page d'accueil.
 * - Le bouton permet d'accéder à la page de création d'une nouvelle note.
 * - Responsive : les éléments s'adaptent selon la taille de l'écran.
 */
export const Header = () => {
  // Permet de naviguer entre les pages avec React Router
  const navigate = useNavigate();

  // Gestion du clic sur le bouton "Add note +"
  const handleOnClickOnButton = () => {
    navigate("/note/new"); // Redirige vers la page de création de note
  };

  // Gestion du clic sur le logo
  const handleOnClickOnLogo = () => {
    navigate("/"); // Redirige vers la page d'accueil
  };

  return (
    <div
      className={`row d-flex flex-row justify-content-between ${styles.header_container}`}
    >
      {/* Colonne du logo, centrée sur mobile, à gauche sur écran large */}
      <div className={`col-12 d-flex flex-column col-sm-4 ${styles}`}>
        <Logo
          onClickOnLogo={handleOnClickOnLogo}
          title={`Notemania`}
          subtitle={`Manage your notes`}
          image={img}
        />
      </div>
      {/* Colonne du bouton, centrée sur mobile, à droite sur écran large */}
      <div
        className={`col-12 d-flex justify-content-center col-sm-8  justify-content-sm-end`}
      >
        <ButtonPrimary
          onClickOnButton={handleOnClickOnButton}
          title={`Add note +`}
        />
      </div>
    </div>
  );
};
