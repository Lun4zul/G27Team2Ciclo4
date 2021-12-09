package com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.model.Producto;


public interface ProductoRepository extends MongoRepository<Producto, String>{
	
	List<Producto> findByCodigoproducto(Long codigoproducto);
	
	List<Producto> findByNombreproducto(String nombreproducto);
	
}

    