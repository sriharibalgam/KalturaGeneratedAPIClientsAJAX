
/**
 *Class definition for the Kaltura service: genericDistributionProviderAction.
 **/
var KalturaGenericDistributionProviderActionService = {
	/**
	 * Add new Generic Distribution Provider Action.
	 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional)
	 **/
	add: function(genericDistributionProviderAction){
		var kparams = new Object();
		kparams.genericDistributionProviderAction = genericDistributionProviderAction;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "add", kparams);
	},
	
	/**
	 * Add MRSS transform file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	xslData	string		XSL MRSS transformation data (optional)
	 **/
	addMrssTransform: function(id, xslData){
		var kparams = new Object();
		kparams.id = id;
		kparams.xslData = xslData;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addMrssTransform", kparams);
	},
	
	/**
	 * Add MRSS validate file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	xsdData	string		XSD MRSS validatation data (optional)
	 **/
	addMrssValidate: function(id, xsdData){
		var kparams = new Object();
		kparams.id = id;
		kparams.xsdData = xsdData;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addMrssValidate", kparams);
	},
	
	/**
	 * Add results transform file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	transformData	string		transformation data xsl, xPath or regex (optional)
	 **/
	addResultsTransform: function(id, transformData){
		var kparams = new Object();
		kparams.id = id;
		kparams.transformData = transformData;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addResultsTransform", kparams);
	},
	
	/**
	 * Get Generic Distribution Provider Action by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "get", kparams);
	},
	
	/**
	 * Get Generic Distribution Provider Action by provider id.
	 * @param	genericDistributionProviderId	int		 (optional)
	 * @param	actionType	int		 (optional, enum: KalturaDistributionAction)
	 **/
	getByProviderId: function(genericDistributionProviderId, actionType){
		var kparams = new Object();
		kparams.genericDistributionProviderId = genericDistributionProviderId;
		kparams.actionType = actionType;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "getByProviderId", kparams);
	},
	
	/**
	 * Update Generic Distribution Provider Action by provider id.
	 * @param	genericDistributionProviderId	int		 (optional)
	 * @param	actionType	int		 (optional, enum: KalturaDistributionAction)
	 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional)
	 **/
	updateByProviderId: function(genericDistributionProviderId, actionType, genericDistributionProviderAction){
		var kparams = new Object();
		kparams.genericDistributionProviderId = genericDistributionProviderId;
		kparams.actionType = actionType;
		kparams.genericDistributionProviderAction = genericDistributionProviderAction;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "updateByProviderId", kparams);
	},
	
	/**
	 * Update Generic Distribution Provider Action by id.
	 * @param	id	int		 (optional)
	 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional)
	 **/
	update: function(id, genericDistributionProviderAction){
		var kparams = new Object();
		kparams.id = id;
		kparams.genericDistributionProviderAction = genericDistributionProviderAction;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "update", kparams);
	},
	
	/**
	 * Delete Generic Distribution Provider Action by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "delete", kparams);
	},
	
	/**
	 * Delete Generic Distribution Provider Action by provider id.
	 * @param	genericDistributionProviderId	int		 (optional)
	 * @param	actionType	int		 (optional, enum: KalturaDistributionAction)
	 **/
	deleteByProviderId: function(genericDistributionProviderId, actionType){
		var kparams = new Object();
		kparams.genericDistributionProviderId = genericDistributionProviderId;
		kparams.actionType = actionType;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "deleteByProviderId", kparams);
	},
	
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaGenericDistributionProviderActionFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "list", kparams);
	}
}
