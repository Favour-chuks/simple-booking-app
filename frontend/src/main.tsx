import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import ShowBook from "./pages/booklist.tsx";
import CreateBook from './pages/CreateBooks';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from 'notistack';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <BrowserRouter>
       <SnackbarProvider>
         <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
       </SnackbarProvider>
     </BrowserRouter>
   </React.StrictMode>
);
