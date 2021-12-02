package com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.model;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ventas")
public class Ventas {
	
	@Id
	private String id;
	private Long cedulaCliente;
	
	@Indexed(unique=true)
	private Long codigoVenta;
	private ArrayList<DetalleVenta> detalleventa;
	private Double totalVenta;
	private Double ivaVenta;
	private Double totalVentaConIva;
	
	public Ventas() {
		this.detalleventa= new ArrayList<DetalleVenta>();
	}

	
	public Ventas(Long codigoVenta, Long cedulaCliente, ArrayList<DetalleVenta> detalleventa,
			Double totalVenta, Double ivaVenta, Double totalVentaConIva) {
		super();
		this.codigoVenta = codigoVenta;
		this.cedulaCliente = cedulaCliente;
		this.detalleventa = detalleventa;
		this.totalVenta = totalVenta;
		this.ivaVenta = ivaVenta;
		this.totalVentaConIva = totalVentaConIva;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Long getCodigoVenta() {
		return codigoVenta;
	}
	public void setCodigoVenta(Long codigoVenta) {
		this.codigoVenta = codigoVenta;
	}
	public Long getCedulaCliente() {
		return cedulaCliente;
	}
	public void setCedulaCliente(Long cedulaCliente) {
		this.cedulaCliente = cedulaCliente;
	}
	public ArrayList<DetalleVenta> getDetalleventa() {
		return detalleventa;
	}
	public void setDetalleventa(ArrayList<DetalleVenta> detalleventa) {
		this.detalleventa = detalleventa;
	}
	public Double getTotalVenta() {
		return totalVenta;
	}
	public void setTotalVenta(Double totalVenta) {
		this.totalVenta = totalVenta;
	}
	public Double getIvaVenta() {
		return ivaVenta;
	}
	public void setIvaVenta(Double ivaVenta) {
		this.ivaVenta = ivaVenta;
	}
	public Double getTotalVentaConIva() {
		return totalVentaConIva;
	}
	public void setTotalVentaConIva(Double totalVentaConIva) {
		this.totalVentaConIva = totalVentaConIva;
	}


	
	
}