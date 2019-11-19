function ExchangeValidator(mc){
	
	var log = mc.getServiceLog(); 
    var payload = mc.getPayloadJSON();
    log.info("Payload desde java script ::\n" + JSON.stringify(payload));
    mc.setProperty("payload", JSON.stringify(payload));
	
	
//	var RateSell = mc.getProperty("ExchangeRateSell");
//	var RateBuy = mc.getProperty("ExchangeRateBuy");
//	var CurrencyPair = mc.getProperty("CurrencyPair");
	
	var RateSell = payload.ExchangeRateSell;
	var RateBuy = payload.ExchangeRateBuy;
	var CurrencyPair = payload.CurrencyPair;
	
	
	var decimalValidator = /^\d{1,6}(\.\d{6})$/;
	var currencyValidator = /([A-Z]){3}\-([A-Z]){3}/;
	
	if(decimalValidator.test(RateSell)){
		if(decimalValidator.test(RateBuy)){
			if(currencyValidator.test(CurrencyPair)){
				mc.setProperty("validator", "S");
			}else{
				mc.setProperty("validator", "CurrencyPair");
			}
		}else{
			mc.setProperty("validator", "ExchangeRateBuy");
		}
	}else{
		mc.setProperty("validator", "ExchangeRateSell");
	}
	
}