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
	  public ResponseEntity<Ventas> registrarVenta(@RequestBody Ventas codigoVenta, DetalleVenta codigoProducto) {
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
	  
	  @GetMapping("/ventas/{codigoVenta}")
	  public ResponseEntity<List<Ventas>> getVentasByCodigoVenta(@PathVariable("codigoVenta") Integer codigoVenta) {
	    
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
		public ResponseEntity<List<Ventas>> getAllVentas(@RequestParam(required = false) Integer codigoVenta){
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
	  
	  @DeleteMapping("/ventas/{codigoVenta}")
	  public ResponseEntity<HttpStatus> deleteVentas(@PathVariable("codigoVenta") Integer codigoVenta) {
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
	  
	  
	  @PutMapping("/ventas/{codigoVenta}")
	  public ResponseEntity<Ventas> updateVentas(@PathVariable("codigoVenta") Integer codigoVenta, @RequestBody Ventas codigoDeVenta) {
	    
		  List<Ventas> ventas = ventasRepository.findByCodigoVenta(codigoVenta); 		  
		  
		  
		  Ventas ventasDatos = ventas.get(0);
		  
		  Optional<Ventas> ventasData = Optional.ofNullable(ventasDatos);

	    if (ventasData.isPresent()) {
	    	
	      Ventas _ventas = ventasData.get();
	      
	      _ventas.setCodigoVenta(codigoDeVenta.getCodigoVenta());
	      _ventas.setCedulaCliente(codigoDeVenta.getCedulaCliente());
	      _ventas.setDetalleventa(codigoDeVenta.getDetalleventa());
	      _ventas.setTotalVenta(codigoDeVenta.getTotalVenta());
	      _ventas.setIvaVenta(codigoDeVenta.getIvaVenta());
	      _ventas.setTotalVentaConIva(codigoDeVenta.getTotalVentaConIva());
	   
	      return new ResponseEntity<>(ventasRepository.save(_ventas), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
	  
	 
}
