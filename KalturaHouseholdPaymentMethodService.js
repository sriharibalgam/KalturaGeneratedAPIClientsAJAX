
/**
 *Class definition for the Kaltura service: householdPaymentMethod.
 **/
var KalturaHouseholdPaymentMethodService = {
	/**
	 * Force remove of a payment method of the household..
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 * @param	paymentMethodId	int		Payment method Identifier (optional)
	 **/
	forceRemove: function(paymentGatewayId, paymentMethodId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentMethodId = paymentMethodId;
		return new KalturaRequestBuilder("householdpaymentmethod", "forceRemove", kparams);
	},
	
	/**
	 * Get a list of all configured Payment Gateways providers available for the account. For each payment is provided with the household associated payment methods..
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("householdpaymentmethod", "list", kparams);
	},
	
	/**
	 * Removes a payment method of the household..
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 * @param	paymentMethodId	int		Payment method Identifier (optional)
	 **/
	remove: function(paymentGatewayId, paymentMethodId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentMethodId = paymentMethodId;
		return new KalturaRequestBuilder("householdpaymentmethod", "remove", kparams);
	},
	
	/**
	 * Set a payment method as default for the household..
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 * @param	paymentMethodId	int		Payment method Identifier (optional)
	 **/
	setAsDefault: function(paymentGatewayId, paymentMethodId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentMethodId = paymentMethodId;
		return new KalturaRequestBuilder("householdpaymentmethod", "setAsDefault", kparams);
	}
}
