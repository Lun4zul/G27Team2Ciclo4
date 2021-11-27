package com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.model.Cliente;
import com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.model.Ventas;

public interface VentasRepository extends MongoRepository<Ventas, String>{
	List<Ventas> findByCodigoVenta(Integer codigoVenta);
	List<Ventas> deleteByCodigoVenta(Integer codigoVenta);


}
