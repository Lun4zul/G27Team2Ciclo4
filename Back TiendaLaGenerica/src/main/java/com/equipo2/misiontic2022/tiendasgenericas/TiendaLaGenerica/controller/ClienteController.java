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

import com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.model.Cliente;
import com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.repository.ClienteRepository;

@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ClienteController {

	@Autowired
	ClienteRepository clienteRepository;

	@GetMapping("/clientes")
	public ResponseEntity<List<Cliente>> getAllClientes(@RequestParam(required = false) Integer cedula_cliente){
		try {
			List<Cliente> clientes = new ArrayList<Cliente>();

			if (cedula_cliente == null) {
				clienteRepository.findAll().forEach(clientes::add);
			} else {
				clienteRepository.findByCedulacliente(cedula_cliente).forEach(clientes::add);
			}

			if (clientes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(clientes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
		
	 @GetMapping("/clientes/{cedulacliente}")
	  public ResponseEntity<List<Cliente>> getClienteByCedulacliente(@PathVariable("cedulacliente") Integer cedula) {
	    
		 try {
		 List<Cliente> clienteData = clienteRepository.findByCedulacliente(cedula);

	    if (clienteData.isEmpty()) {
	    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);	      
	    } 
	    	return new ResponseEntity<>(clienteData, HttpStatus.OK);
	    	
	    } catch (Exception e) {
	    	return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
	  }

	  @PostMapping("/clientes")
	  public ResponseEntity<Cliente> createCliente(@RequestBody Cliente cedula) {
	    try {
	      Cliente _cliente = clienteRepository.save(new Cliente(cedula.getCedulacliente(),
	    		  cedula.getDireccioncliente(),cedula.getNombrecliente(),cedula.getEmailcliente(),
	    		  cedula.getTelefonocliente()));
	      return new ResponseEntity<>(_cliente, HttpStatus.CREATED);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	  
	  @PutMapping("/clientes/{cedulacliente}")
	  public ResponseEntity<Cliente> updateCliente(@PathVariable("cedulacliente") Integer cedulacliente, @RequestBody Cliente cedula) {
	    
		  List<Cliente> cliente = clienteRepository.findByCedulacliente(cedulacliente);
		  
		  Cliente clienteDatos = cliente.get(0);
		  
		  Optional<Cliente> clienteData = Optional.ofNullable(clienteDatos);

	    if (clienteData.isPresent()) {
	    	
	      Cliente _cliente = clienteData.get();
	      
	      _cliente.setCedulacliente(cedula.getCedulacliente());
	      _cliente.setDireccioncliente(cedula.getDireccioncliente());
	      _cliente.setNombrecliente(cedula.getNombrecliente());
	      _cliente.setEmailcliente(cedula.getEmailcliente());
	      return new ResponseEntity<>(clienteRepository.save(_cliente), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }

	  @DeleteMapping("/clientes/{cedulacliente}")
	  public ResponseEntity<HttpStatus> deleteClientes(@PathVariable("cedulacliente") Integer cedula) {
	    try {
	      clienteRepository.deleteByCedulacliente(cedula);
	      return new ResponseEntity<>(HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }

	  @DeleteMapping("/clientes")
	  public ResponseEntity<HttpStatus> deleteAllClientes() {
	    try {
	      clienteRepository.deleteAll();
	      return new ResponseEntity<>(HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
}
