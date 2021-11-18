package com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.model.Cliente;

public interface ClienteRepository extends MongoRepository<Cliente, String>{
	
   List<Cliente> findByCedulacliente(Integer cedulacliente);
   
}