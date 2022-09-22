import React from "react";


import { BrowserRouter, Route, Routes } from "react-router-dom";

// IMPORTS ADMIN
import Dashboard  from "./pages/admin/dashboard";

import Produtos from "./pages/admin/produtos";
import ProdutoEditar from "./pages/admin/produtos/produtos.editar";
import ProdutoCadastrar from "./pages/admin/produtos/produtos.cadastrar";

import Usuarios from "./pages/admin/usuarios";
import UsuarioEditar from "./pages/admin/usuarios/usuarios.editar";
import UsuarioCadastrar from "./pages/admin/usuarios/usuario.cadastrar";

//IMPORTS CLIENT
import Home from './pages/cliente/home'
import ProdutosDetalhes from './pages/cliente/produtos/produtos.detalhes'

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
             {/* ROTA CLIENTE */}
                    <Route path= '/'  element={<Home/>} />
                    <Route path="/Produtos/:idProdutos"  element={<ProdutosDetalhes/>} />
    
                    {/* ROTA CLIENTE */}
                    <Route path="/admin"  element={<Dashboard />} />
    
                    <Route path="/admin/produtos"  element={<Produtos />} />
                    <Route path="/admin/produtos/cadastrar"  element={<ProdutoCadastrar/>} />
                    <Route path="/admin/produtos/editar/:idProduto"  element={<ProdutoEditar/>} />
    
                    <Route path="/admin/usuarios"  element={<Usuarios/>} />
                    <Route path="/admin/usuarios/cadastrar"  element={<UsuarioCadastrar/>} />
                    <Route path="/admin/usuarios/editar/:idProduto" element={<UsuarioEditar/>} />

    </Routes>
  </BrowserRouter>
);
}



   