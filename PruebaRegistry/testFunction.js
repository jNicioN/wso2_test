function testFunction(mc){
	
	var log = mc.getServiceLog(); 
    var payload = mc.getPayloadJSON();
    log.info("Payload desde java script ::" + JSON.stringify(payload));
    mc.setProperty("payload", JSON.stringify(payload));
}