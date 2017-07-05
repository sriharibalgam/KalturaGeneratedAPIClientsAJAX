
/**
 *Class definition for the Kaltura service: messageTemplate.
 **/
var KalturaMessageTemplateService = {
	/**
	 * Retrieve a message template used in push notifications and inbox.
	 * @param	assetType	int		possible values: Asset type – Series (optional, enum: KalturaOTTAssetType)
	 **/
	get: function(assetType){
		var kparams = new Object();
		kparams.assetType = assetType;
		return new KalturaRequestBuilder("messagetemplate", "get", kparams);
	},
	
	/**
	 * Set the account’s push notifications and inbox messages templates.
	 * @param	assetType	int		The asset type to update its template (optional, enum: KalturaOTTAssetType)
	 * @param	template	KalturaMessageTemplate		The actual message with placeholders to be presented to the user (optional)
	 **/
	update: function(assetType, template){
		var kparams = new Object();
		kparams.assetType = assetType;
		kparams.template = template;
		return new KalturaRequestBuilder("messagetemplate", "update", kparams);
	}
}
