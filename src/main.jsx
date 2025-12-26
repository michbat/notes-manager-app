import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoteBrowse } from "./pages/NoteBrowse/NoteBrowse";
import { Note } from "./pages/Note/Note";
import { NoteCreate } from "./pages/NoteCreate/NoteCreate";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<NoteBrowse />} />
            <Route path="/note/:id" element={<Note />} />
            <Route path="/note/new" element={<NoteCreate />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
