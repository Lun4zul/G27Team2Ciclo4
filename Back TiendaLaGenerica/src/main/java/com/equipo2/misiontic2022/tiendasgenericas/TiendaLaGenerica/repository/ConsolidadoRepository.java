package com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.model.Consolidado;

public interface ConsolidadoRepository extends MongoRepository<Consolidado, String>{
	List<Consolidado> findByCiudad(String ciudad);

}
