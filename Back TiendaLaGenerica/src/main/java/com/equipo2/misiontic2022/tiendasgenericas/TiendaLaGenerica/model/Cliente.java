package com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "db_clientes")
public class Cliente {
	
	@Id
	private String id;
	
	private Integer cedulacliente;
	private String direccioncliente;
	private String emailcliente;
	private String nombrecliente;
	private String telefonocliente;
	
	
	public Cliente() {
		
	}
	
	/**
	 * @param id
	 * @param cedulacliente
	 * @param direccioncliente
	 * @param emailcliente
	 * @param nombrecliente
	 * @param telefonocliente
	 */
	public Cliente(Integer cedulacliente, String direccioncliente, String emailcliente,
			String nombrecliente, String telefonocliente) {
		super();
		this.cedulacliente = cedulacliente;
		this.direccioncliente = direccioncliente;
		this.emailcliente = emailcliente;
		this.nombrecliente = nombrecliente;
		this.telefonocliente = telefonocliente;
	}

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * @return the cedulacliente
	 */
	public Integer getCedulacliente() {
		return cedulacliente;
	}

	/**
	 * @param cedulacliente the cedulacliente to set
	 */
	public void setCedulacliente(Integer cedulacliente) {
		this.cedulacliente = cedulacliente;
	}

	/**
	 * @return the direccioncliente
	 */
	public String getDireccioncliente() {
		return direccioncliente;
	}

	/**
	 * @param direccioncliente the direccioncliente to set
	 */
	public void setDireccioncliente(String direccioncliente) {
		this.direccioncliente = direccioncliente;
	}

	/**
	 * @return the emailcliente
	 */
	public String getEmailcliente() {
		return emailcliente;
	}

	/**
	 * @param emailcliente the emailcliente to set
	 */
	public void setEmailcliente(String emailcliente) {
		this.emailcliente = emailcliente;
	}

	/**
	 * @return the nombrecliente
	 */
	public String getNombrecliente() {
		return nombrecliente;
	}

	/**
	 * @param nombrecliente the nombrecliente to set
	 */
	public void setNombrecliente(String nombrecliente) {
		this.nombrecliente = nombrecliente;
	}

	/**
	 * @return the telefonocliente
	 */
	public String getTelefonocliente() {
		return telefonocliente;
	}

	/**
	 * @param telefonocliente the telefonocliente to set
	 */
	public void setTelefonocliente(String telefonocliente) {
		this.telefonocliente = telefonocliente;
	}	

}
