
/**
 *Class definition for the Kaltura service: genericDistributionProviderAction.
 **/
var KalturaGenericDistributionProviderActionService = {
	/**
	 * Add new Generic Distribution Provider Action.
	 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 * @return	.
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
	 * @return	KalturaGenericDistributionProviderAction.
	 * @return	.
	 **/
	addMrssTransform: function(id, xslData){
		var kparams = new Object();
		kparams.id = id;
		kparams.xslData = xslData;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addMrssTransform", kparams);
	},
	
	/**
	 * Add MRSS transform file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	xslFile	file		XSL MRSS transformation file (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 * @return	.
	 * @return	.
	 **/
	addMrssTransformFromFile: function(id, xslFile){
		var kparams = new Object();
		kparams.id = id;
		kfiles = new Object();
		kfiles.xslFile = xslFile;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addMrssTransformFromFile", kparams, kfiles);
	},
	
	/**
	 * Add MRSS validate file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	xsdData	string		XSD MRSS validatation data (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 * @return	.
	 **/
	addMrssValidate: function(id, xsdData){
		var kparams = new Object();
		kparams.id = id;
		kparams.xsdData = xsdData;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addMrssValidate", kparams);
	},
	
	/**
	 * Add MRSS validate file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	xsdFile	file		XSD MRSS validatation file (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 * @return	.
	 * @return	.
	 **/
	addMrssValidateFromFile: function(id, xsdFile){
		var kparams = new Object();
		kparams.id = id;
		kfiles = new Object();
		kfiles.xsdFile = xsdFile;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addMrssValidateFromFile", kparams, kfiles);
	},
	
	/**
	 * Add results transform file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	transformData	string		transformation data xsl, xPath or regex (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 * @return	.
	 **/
	addResultsTransform: function(id, transformData){
		var kparams = new Object();
		kparams.id = id;
		kparams.transformData = transformData;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addResultsTransform", kparams);
	},
	
	/**
	 * Add MRSS transform file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	transformFile	file		transformation file xsl, xPath or regex (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 * @return	.
	 * @return	.
	 **/
	addResultsTransformFromFile: function(id, transformFile){
		var kparams = new Object();
		kparams.id = id;
		kfiles = new Object();
		kfiles.transformFile = transformFile;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addResultsTransformFromFile", kparams, kfiles);
	},
	
	/**
	 * Get Generic Distribution Provider Action by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 * @return	.
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
	 * @return	KalturaGenericDistributionProviderAction.
	 * @return	.
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
	 * @return	KalturaGenericDistributionProviderAction.
	 * @return	.
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
	 * @return	KalturaGenericDistributionProviderAction.
	 * @return	.
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
	 * @return	.
	 * @return	.
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
	 * @return	.
	 * @return	.
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
	 * @return	KalturaGenericDistributionProviderActionListResponse.
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
