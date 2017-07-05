
/**
 *Class definition for the Kaltura service: asset.
 **/
var KalturaAssetService = {
	/**
	 * Returns media or EPG asset by media / EPG internal or external identifier.
	 * @param	id	string		Asset identifier (optional)
	 * @param	assetReferenceType	string		Asset type (optional, enum: KalturaAssetReferenceType)
	 **/
	get: function(id, assetReferenceType){
		var kparams = new Object();
		kparams.id = id;
		kparams.assetReferenceType = assetReferenceType;
		return new KalturaRequestBuilder("asset", "get", kparams);
	},
	
	/**
	 * Returns media or EPG assets. Filters by media identifiers or by EPG internal or external identifier..
	 * @param	filter	KalturaAssetFilter		Filtering the assets request (optional, default: null)
	 * @param	pager	KalturaFilterPager		Paging the request (optional, default: null)
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
		return new KalturaRequestBuilder("asset", "list", kparams);
	}
}
