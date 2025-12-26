// Importation du composant Outlet pour afficher les routes imbriquées
import { Outlet } from "react-router-dom";
// Importation de la police Roboto pour l'ensemble de l'application
import "typeface-roboto";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NoteAPI } from "./api/note-api";
import { Header } from "./components/Header/Header";
import { setNoteList } from "./store/notes/notes-slice";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllNotes = async () => {
      const notesList = await NoteAPI.fetchAll();
      dispatch(setNoteList(notesList));
    };
    fetchAllNotes();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
