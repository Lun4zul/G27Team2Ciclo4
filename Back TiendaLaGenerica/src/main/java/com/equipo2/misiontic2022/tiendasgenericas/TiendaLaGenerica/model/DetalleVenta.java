package com.equipo2.misiontic2022.tiendasgenericas.TiendaLaGenerica.model;



public class DetalleVenta {
	
	private Integer cantidadProducto;
	private Integer codigoProducto;
	private Double totalVenta;
	private Double totalVentaConIva;
	private Double ivaVenta;
	
	
	public DetalleVenta(Integer cantidadProducto, Integer codigoProducto, Double totalVenta, Double totalVentaConIva,
			Double ivaVenta) {
		super();
		this.cantidadProducto = cantidadProducto;
		this.codigoProducto = codigoProducto;
		this.totalVenta = totalVenta;
		this.totalVentaConIva = totalVentaConIva;
		this.ivaVenta = ivaVenta;
	}
	
	public Integer getCantidadProducto() {
		return cantidadProducto;
	}
	public void setCantidadProducto(Integer cantidadProducto) {
		this.cantidadProducto = cantidadProducto;
	}
	public Integer getCodigoProducto() {
		return codigoProducto;
	}
	public void setCodigoProducto(Integer codigoProducto) {
		this.codigoProducto = codigoProducto;
	}
	public Double getTotalVenta() {
		return totalVenta;
	}
	public void setTotalVenta(Double totalVenta) {
		this.totalVenta = totalVenta;
	}
	public Double getTotalVentaConIva() {
		return totalVentaConIva;
	}
	public void setTotalVentaConIva(Double totalVentaConIva) {
		this.totalVentaConIva = totalVentaConIva;
	}
	public Double getIvaVenta() {
		return ivaVenta;
	}
	public void setIvaVenta(Double ivaVenta) {
		this.ivaVenta = ivaVenta;
	}
	
	

}
