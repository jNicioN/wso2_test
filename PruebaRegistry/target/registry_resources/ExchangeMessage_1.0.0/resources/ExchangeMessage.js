function ExchangeMessage(mc){
	
	var log = mc.getServiceLog(); 
    var payload = mc.getPayloadJSON();
    log.info("Payload desde java script ::\n" + JSON.stringify(payload));
    mc.setProperty("payload", JSON.stringify(payload));
    
    var chibContext = [{"sell":payload.ExchangeRateSell,"buy":payload.ExchangeRateBuy,"pair":payload.CurrencyPair}];
    
    mc.setProperty("chibPayload",JSON.stringify(chibContext));
    
    log.info(JSON.stringify(chibContext));
}