// Importation de la fonction createSlice de Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

/**
 * -----------------------------
 *  Qu'est-ce qu'un "slice" Redux ?
 * -----------------------------
 *
 * Un "slice" (tranche) est une portion du state global de Redux dédiée à une fonctionnalité ou un domaine précis de l'application (ici, les notes).
 * Il regroupe :
 *   - l'état initial (initialState)
 *   - les reducers (fonctions qui modifient l'état)
 *   - les actions associées
 *
 * Grâce à createSlice (Redux Toolkit), on simplifie la création de ces éléments et on évite le code répétitif.
 *
 * ---------------------------------------
 *  À quoi sert Redux dans une app React ?
 * ---------------------------------------
 *
 * Redux est une bibliothèque de gestion d'état global. Elle permet :
 *   - de centraliser l'état de l'application (partagé entre plusieurs composants)
 *   - de rendre le flux de données prévisible et traçable
 *   - de faciliter le debug et la maintenance
 *   - d'éviter le "prop drilling" (passage de props sur plusieurs niveaux)
 *
 * Redux Toolkit simplifie et sécurise l'utilisation de Redux grâce à des outils modernes.
 */

// Création du slice pour la gestion des notes
export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteList: (currentSlice, action) => {
      currentSlice.noteList = action.payload;
    },
  },
});

// Export du reducer pour l'intégrer dans le store Redux
export const noteReducer = noteSlice.reducer;

// Export de l'action générée automatiquement par createSlice
export const { setNoteList } = noteSlice.actions;
