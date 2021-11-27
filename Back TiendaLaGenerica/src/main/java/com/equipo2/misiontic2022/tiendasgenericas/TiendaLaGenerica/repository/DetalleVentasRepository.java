package com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.model.DetalleVenta;

public interface DetalleVentasRepository extends  MongoRepository <DetalleVenta, String>{
	List<DetalleVenta> findByCodigoProducto(Integer codigoProducto);

}
