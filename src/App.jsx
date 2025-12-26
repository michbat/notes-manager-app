// Importation du composant Outlet pour afficher les routes imbriquées
import { Outlet } from "react-router-dom";
// Importation de la police Roboto pour l'ensemble de l'application
import "typeface-roboto";
// Importation du composant Header (barre de navigation)
import { Header } from "./components/Header/Header";

/**
 * Composant racine App : structure principale de l'application.
 *
 * - Affiche le Header en haut de toutes les pages.
 * - Utilise <Outlet /> pour afficher le contenu de la route courante (pages enfants).
 */
export const App = () => {
  return (
    <>
      {/* Barre de navigation affichée sur toutes les pages */}
      <Header />
      {/* Affiche la page correspondant à la route courante */}
      <Outlet />
    </>
  );
};
