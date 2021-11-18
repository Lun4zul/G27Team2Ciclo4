package com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String>{
	
   List<Usuario> findByUsername(String username);   
  // List<Usuario> findByNombre(String nombre);
}