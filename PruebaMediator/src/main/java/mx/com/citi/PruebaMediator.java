package mx.com.citi;

import org.apache.synapse.MessageContext; 
import org.apache.synapse.mediators.AbstractMediator;

public class PruebaMediator extends AbstractMediator { 

	public boolean mediate(MessageContext mc) { 
		
		int idEstauts = (Integer) mc.getProperty("idEstatus");
		int idClienteCore = (Integer) mc.getProperty("idClienteCore");
		int suma = idEstauts + idClienteCore;
		mc.setProperty("suma", suma);
		return true;
	}
}
