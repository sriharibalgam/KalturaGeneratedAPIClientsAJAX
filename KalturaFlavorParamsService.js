
/**
 *Class definition for the Kaltura service: flavorParams.
 **/
var KalturaFlavorParamsService = {
	/**
	 * Add new Flavor Params.
	 * @param	flavorParams	KalturaFlavorParams		 (optional)
	 * @return	KalturaFlavorParams.
	 **/
	add: function(flavorParams){
		var kparams = new Object();
		kparams.flavorParams = flavorParams;
		return new KalturaRequestBuilder("flavorparams", "add", kparams);
	},
	
	/**
	 * Get Flavor Params by ID.
	 * @param	id	int		 (optional)
	 * @return	KalturaFlavorParams.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorparams", "get", kparams);
	},
	
	/**
	 * Update Flavor Params by ID.
	 * @param	id	int		 (optional)
	 * @param	flavorParams	KalturaFlavorParams		 (optional)
	 * @return	KalturaFlavorParams.
	 **/
	update: function(id, flavorParams){
		var kparams = new Object();
		kparams.id = id;
		kparams.flavorParams = flavorParams;
		return new KalturaRequestBuilder("flavorparams", "update", kparams);
	},
	
	/**
	 * Delete Flavor Params by ID.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorparams", "delete", kparams);
	},
	
	/**
	 * List Flavor Params by filter with paging support (By default - all system default params will be listed too).
	 * @param	filter	KalturaFlavorParamsFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaFlavorParamsListResponse.
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
		return new KalturaRequestBuilder("flavorparams", "list", kparams);
	},
	
	/**
	 * Get Flavor Params by Conversion Profile ID.
	 * @param	conversionProfileId	int		 (optional)
	 * @return	array.
	 **/
	getByConversionProfileId: function(conversionProfileId){
		var kparams = new Object();
		kparams.conversionProfileId = conversionProfileId;
		return new KalturaRequestBuilder("flavorparams", "getByConversionProfileId", kparams);
	}
}
