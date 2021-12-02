package com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;


import com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.model.Ventas;

public interface VentasRepository extends MongoRepository<Ventas, String>{
	List<Ventas> findByCodigoVenta(Long codigoVenta);
	List<Ventas> findByCedulaCliente(Long cedulaCliente);
	
	void deleteByCodigoVenta(Long codigoVenta);
	void deleteByCedulaCliente(Long cedulaCliente);

	
}
