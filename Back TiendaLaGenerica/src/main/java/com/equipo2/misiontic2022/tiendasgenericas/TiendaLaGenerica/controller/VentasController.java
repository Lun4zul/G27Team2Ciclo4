package com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.controller;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.model.DetalleVenta;
import com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.model.Ventas;
import com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.repository.VentasRepository;

@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class VentasController {
	@Autowired
	VentasRepository ventasRepository;
	
	  @PostMapping("/ventas")
	  public ResponseEntity<Ventas> registrarVenta(@RequestBody Ventas codigoVenta) {
	    try {
	      Ventas _ventas = ventasRepository.save(new Ventas(
	    		  codigoVenta.getCodigoVenta(),
	    		  codigoVenta.getCedulaCliente(),
	    		  codigoVenta.getDetalleventa(),
	    		  codigoVenta.getTotalVenta(),
	    		  codigoVenta.getIvaVenta(),
	    		  codigoVenta.getTotalVentaConIva()));
	      return new ResponseEntity<>(_ventas, HttpStatus.CREATED);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	  
	 
	  @GetMapping("/ventas/consecutivo")
		public ResponseEntity<Long> getVentaConsecutivo() {
			try {
			ArrayList<Ventas> aux = (ArrayList<Ventas>) ventasRepository.findAll();
			long mayor = 0;
			for (Ventas v : aux) {
				if (v.getCodigoVenta() > mayor) {
					mayor = v.getCodigoVenta();
				}
			}
			if (aux.isEmpty()) {
				mayor=1;
			}
			
				return new ResponseEntity<>(mayor, HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		
		
	  @GetMapping("/ventas/{codigoVenta}")
	  public ResponseEntity<List<Ventas>> getVentasByCodigoVenta(@PathVariable("codigoVenta") Long codigoVenta) {
	    
		 try {
		 List<Ventas> ventasData = ventasRepository.findByCodigoVenta(codigoVenta);

	    if (ventasData.isEmpty()) {
	    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);	      
	    } 
	    	return new ResponseEntity<>(ventasData, HttpStatus.OK);
	    	
	    } catch (Exception e) {
	    	return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
	  }
	  
	  
	  @GetMapping("/ventas")
		public ResponseEntity<List<Ventas>> getAllVentas(@RequestParam(required = false) Long codigoVenta){
			try {
				List<Ventas> ventas = new ArrayList<Ventas>();

				if (codigoVenta == null) {
					ventasRepository.findAll().forEach(ventas::add);
				} else {
					ventasRepository.findByCodigoVenta(codigoVenta).forEach(ventas::add);
				}

				if (ventas.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}

				return new ResponseEntity<>(ventas, HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
	  
	  
	  @GetMapping("/ventas/id/{id}")
		public ResponseEntity<Ventas> getVentaById(@PathVariable("id") String id) {
			Optional<Ventas> ventaData = ventasRepository.findById(id);

			if (ventaData.isPresent()) {
				return new ResponseEntity<>(ventaData.get(), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
		}

		
		@GetMapping("/ventas/cedula/{cedula}")
		public ResponseEntity<ArrayList<Ventas>> getVentaByCedulaCliente(@PathVariable("cedula") Long cedula) {
			ArrayList<Ventas> aux = (ArrayList<Ventas>) ventasRepository.findByCedulaCliente(cedula);
			Optional<ArrayList<Ventas>> ventaData = Optional.of(aux);

			if (ventaData.isPresent()) {
				return new ResponseEntity<>(ventaData.get(), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
		}

			  
	  @DeleteMapping("/ventas/{codigoVenta}")
	  public ResponseEntity<HttpStatus> deleteVentas(@PathVariable("codigoVenta") Long codigoVenta) {
	    try {
	      ventasRepository.deleteByCodigoVenta (codigoVenta);
	      return new ResponseEntity<>(HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }

	  @DeleteMapping("/ventas")
	  public ResponseEntity<HttpStatus> deleteAllVentas() {
	    try {
	      ventasRepository.deleteAll();
	      return new ResponseEntity<>(HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	  
	  
	  @DeleteMapping("/ventas/id/{id}")
		public ResponseEntity<HttpStatus> deleteVentasById(@PathVariable("id") String id) {
			try {
				ventasRepository.deleteById(id);
				return new ResponseEntity<>(HttpStatus.ACCEPTED);
			} catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		@DeleteMapping("/ventas/cedula/{cedula}")
		public ResponseEntity<HttpStatus> deleteVentasByCedulacliente(@PathVariable("cedula") long cedula) {
			try {
				ventasRepository.deleteByCodigoVenta(cedula);
				return new ResponseEntity<>(HttpStatus.ACCEPTED);
			} catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

	  
	  
	  @PutMapping("/ventas/id/{id}")
		public ResponseEntity<Ventas> updateVentaById(@PathVariable("id") String id, @RequestBody Ventas sale) {
			Optional<Ventas> ventaData = ventasRepository.findById(id);

			if (ventaData.isPresent()) {
				Ventas _venta = ventaData.get();
				_venta.setCedulaCliente(sale.getCedulaCliente());
				_venta.setCodigoVenta(sale.getCodigoVenta());
				_venta.setDetalleventa(sale.getDetalleventa());
				_venta.setIvaVenta(sale.getIvaVenta());
				_venta.setTotalVenta(sale.getTotalVenta());
				_venta.setTotalVentaConIva(sale.getTotalVentaConIva());
				
				return new ResponseEntity<>(ventasRepository.save(_venta), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
		}

	  
	  @PutMapping("/ventas/codigo/{codigo}")
		public ResponseEntity<Ventas> updateVentaByCodigoventa(@PathVariable("codigo") long codigo,
				@RequestBody Ventas sale) {
			Ventas aux = ventasRepository.findByCodigoVenta(codigo).get(0);
			Optional<Ventas> ventaData = Optional.of(aux);

			if (ventaData.isPresent()) {
				Ventas _venta = ventaData.get();
				_venta.setCedulaCliente(sale.getCedulaCliente());
				_venta.setCodigoVenta(sale.getCodigoVenta());
				_venta.setDetalleventa(sale.getDetalleventa());
				_venta.setIvaVenta(sale.getIvaVenta());
				_venta.setTotalVenta(sale.getTotalVenta());
				_venta.setTotalVentaConIva(sale.getTotalVentaConIva());

				return new ResponseEntity<>(ventasRepository.save(_venta), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
		}

	  
	 
}
