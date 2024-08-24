package com.javeriana.pontimovil.ponti_movil.controllers;


import com.javeriana.pontimovil.ponti_movil.entities.Usuario;
import com.javeriana.pontimovil.ponti_movil.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    // Servicios:
    private final UsuarioService usuarioService;

    // Constructor:
    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    // Métodos:
    @GetMapping
    public List<Usuario> obtenerUsuarios() {
        return usuarioService.obtenerUsuarios();
    }

    @GetMapping("/{id}")
    public Usuario obtenerUsuarioPorId(@PathVariable UUID id) {
        return usuarioService.obtenerUsuarioPorId(id);
    }

    @PostMapping("/crear")
    public void crearUsuario(@RequestBody Usuario usuario) {
        usuarioService.crearUsuario(usuario);
    }

    @PostMapping("/{id}/actualizar")
    public void actualizarUsuario(@PathVariable UUID id, @RequestBody Usuario usuario) {
        usuarioService.actualizarUsuario(id, usuario);
    }

    @DeleteMapping("/{id}/eliminar")
    public void eliminarUsuario(@PathVariable UUID id) {
        usuarioService.eliminarUsuario(id);
    }
}