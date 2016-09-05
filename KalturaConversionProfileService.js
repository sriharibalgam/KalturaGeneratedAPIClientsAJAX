
/**
 *Class definition for the Kaltura service: conversionProfile.
 **/
var KalturaConversionProfileService = {
	/**
	 * Set Conversion Profile to be the partner default.
	 * @param	id	int		 (optional)
	 * @return	KalturaConversionProfile.
	 **/
	setAsDefault: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("conversionprofile", "setAsDefault", kparams);
	},
	
	/**
	 * Get the partner's default conversion profile.
	 * @param	type	string		 (optional, enum: KalturaConversionProfileType, default: null)
	 * @return	KalturaConversionProfile.
	 **/
	getDefault: function(type){
		if(!type)
			type = null;
		var kparams = new Object();
		kparams.type = type;
		return new KalturaRequestBuilder("conversionprofile", "getDefault", kparams);
	},
	
	/**
	 * Add new Conversion Profile.
	 * @param	conversionProfile	KalturaConversionProfile		 (optional)
	 * @return	KalturaConversionProfile.
	 **/
	add: function(conversionProfile){
		var kparams = new Object();
		kparams.conversionProfile = conversionProfile;
		return new KalturaRequestBuilder("conversionprofile", "add", kparams);
	},
	
	/**
	 * Get Conversion Profile by ID.
	 * @param	id	int		 (optional)
	 * @return	KalturaConversionProfile.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("conversionprofile", "get", kparams);
	},
	
	/**
	 * Update Conversion Profile by ID.
	 * @param	id	int		 (optional)
	 * @param	conversionProfile	KalturaConversionProfile		 (optional)
	 * @return	KalturaConversionProfile.
	 **/
	update: function(id, conversionProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.conversionProfile = conversionProfile;
		return new KalturaRequestBuilder("conversionprofile", "update", kparams);
	},
	
	/**
	 * Delete Conversion Profile by ID.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("conversionprofile", "delete", kparams);
	},
	
	/**
	 * List Conversion Profiles by filter with paging support.
	 * @param	filter	KalturaConversionProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaConversionProfileListResponse.
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
		return new KalturaRequestBuilder("conversionprofile", "list", kparams);
	}
}
