
/**
 *Class definition for the Kaltura service: responseProfile.
 **/
var KalturaResponseProfileService = {
	/**
	 * Add new response profile.
	 * @param	addResponseProfile	KalturaResponseProfile		 (optional)
	 * @return	KalturaResponseProfile.
	 **/
	add: function(addResponseProfile){
		var kparams = new Object();
		kparams.addResponseProfile = addResponseProfile;
		return new KalturaRequestBuilder("responseprofile", "add", kparams);
	},
	
	/**
	 * Get response profile by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaResponseProfile.
	 * @return	.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("responseprofile", "get", kparams);
	},
	
	/**
	 * Update response profile by id.
	 * @param	id	int		 (optional)
	 * @param	updateResponseProfile	KalturaResponseProfile		 (optional)
	 * @return	KalturaResponseProfile.
	 * @return	.
	 **/
	update: function(id, updateResponseProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.updateResponseProfile = updateResponseProfile;
		return new KalturaRequestBuilder("responseprofile", "update", kparams);
	},
	
	/**
	 * Update response profile status by id.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaResponseProfileStatus)
	 * @return	KalturaResponseProfile.
	 * @return	.
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("responseprofile", "updateStatus", kparams);
	},
	
	/**
	 * Delete response profile by id.
	 * @param	id	int		 (optional)
	 * @return	.
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("responseprofile", "delete", kparams);
	},
	
	/**
	 * List response profiles by filter and pager.
	 * @param	filter	KalturaResponseProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaResponseProfileListResponse.
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
		return new KalturaRequestBuilder("responseprofile", "list", kparams);
	},
	
	/**
	 * Recalculate response profile cached objects.
	 * @param	options	KalturaResponseProfileCacheRecalculateOptions		 (optional)
	 * @return	KalturaResponseProfileCacheRecalculateResults.
	 **/
	recalculate: function(options){
		var kparams = new Object();
		kparams.options = options;
		return new KalturaRequestBuilder("responseprofile", "recalculate", kparams);
	},
	
	/**
	 * Clone an existing response profile.
	 * @param	id	int		 (optional)
	 * @param	profile	KalturaResponseProfile		 (optional)
	 * @return	KalturaResponseProfile.
	 * @return	.
	 * @return	.
	 **/
	cloneAction: function(id, profile){
		var kparams = new Object();
		kparams.id = id;
		kparams.profile = profile;
		return new KalturaRequestBuilder("responseprofile", "clone", kparams);
	}
}
