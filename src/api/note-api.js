import axios from "axios";

const BASE_URL = "http://localhost:3200/notes";

//

export class NoteAPI {
  static async create(note) {
    try {
      return (await axios.post(`${BASE_URL}`, note)).data;
    } catch (error) {
      // Gestion de l'erreur lors de la création d'une note
      console.error("Erreur lors de la création de la note :", error);
      throw error;
    }
  }

  static async fetchAll() {
    try {
      return (await axios.get(`${BASE_URL}`)).data;
    } catch (error) {
      // Gestion de l'erreur lors de la récupération de toutes les notes
      console.error("Erreur lors de la récupération des notes :", error);
      throw error;
    }
  }

  static async fetchById(noteId) {
    try {
      return (await axios.get(`${BASE_URL}/${noteId}`)).data;
    } catch (error) {
      // Gestion de l'erreur lors de la récupération d'une note par ID
      console.error(
        `Erreur lors de la récupération de la note ${noteId} :`,
        error
      );
      throw error;
    }
  }

  static async deleteById(noteId) {
    try {
      return (await axios.delete(`${BASE_URL}/${noteId}`)).data;
    } catch (error) {
      // Gestion de l'erreur lors de la suppression d'une note
      console.error(
        `Erreur lors de la suppression de la note ${noteId} :`,
        error
      );
      throw error;
    }
  }

  static async updateById(note) {
    try {
      return (await axios.patch(`${BASE_URL}/${note.id}`, note)).data;
    } catch (error) {
      // Gestion de l'erreur lors de la mise à jour d'une note
      console.error(
        `Erreur lors de la mise à jour de la note ${note.id} :`,
        error
      );
      throw error;
    }
  }
}
