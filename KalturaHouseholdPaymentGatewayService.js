
/**
 *Class definition for the Kaltura service: householdPaymentGateway.
 **/
var KalturaHouseholdPaymentGatewayService = {
	/**
	 * Disable payment-gateway on the household.
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 **/
	deleteAction: function(paymentGatewayId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		return new KalturaRequestBuilder("householdpaymentgateway", "delete", kparams);
	},
	
	/**
	 * Enable a payment-gateway provider for the household..
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 **/
	set: function(paymentGatewayId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		return new KalturaRequestBuilder("householdpaymentgateway", "set", kparams);
	},
	
	/**
	 * Get a household’s billing account identifier (charge ID) for a given payment gateway.
	 * @param	paymentGatewayExternalId	string		External identifier for the payment gateway (optional)
	 **/
	getChargeID: function(paymentGatewayExternalId){
		var kparams = new Object();
		kparams.paymentGatewayExternalId = paymentGatewayExternalId;
		return new KalturaRequestBuilder("householdpaymentgateway", "getChargeID", kparams);
	},
	
	/**
	 * Gets the Payment Gateway Configuration for the payment gateway identifier given.
	 * @param	paymentGatewayId	int		The payemnt gateway for which to return the registration URL/s for the household. If omitted – return the regisration URL for the household for the default payment gateway (optional)
	 * @param	intent	string		Represent the client’s intent for working with the payment gateway. Intent options to be coordinated with the applicable payment gateway adapter. (optional)
	 * @param	extraParameters	array		Additional parameters to send to the payment gateway adapter. (optional)
	 **/
	invoke: function(paymentGatewayId, intent, extraParameters){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.intent = intent;
		kparams.extraParameters = extraParameters;
		return new KalturaRequestBuilder("householdpaymentgateway", "invoke", kparams);
	},
	
	/**
	 * Get a list of all configured Payment Gateways providers available for the account. For each payment is provided with the household associated payment methods..
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("householdpaymentgateway", "list", kparams);
	},
	
	/**
	 * Set user billing account identifier (charge ID), for a specific household and a specific payment gateway.
	 * @param	paymentGatewayExternalId	string		External identifier for the payment gateway (optional)
	 * @param	chargeId	string		The billing user account identifier for this household at the given payment gateway (optional)
	 **/
	setChargeID: function(paymentGatewayExternalId, chargeId){
		var kparams = new Object();
		kparams.paymentGatewayExternalId = paymentGatewayExternalId;
		kparams.chargeId = chargeId;
		return new KalturaRequestBuilder("householdpaymentgateway", "setChargeID", kparams);
	}
}
