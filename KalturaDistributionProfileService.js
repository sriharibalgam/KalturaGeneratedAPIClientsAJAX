
/**
 *Class definition for the Kaltura service: distributionProfile.
 **/
var KalturaDistributionProfileService = {
	/**
	 * Add new Distribution Profile.
	 * @param	distributionProfile	KalturaDistributionProfile		 (optional)
	 * @return	KalturaDistributionProfile.
	 **/
	add: function(distributionProfile){
		var kparams = new Object();
		kparams.distributionProfile = distributionProfile;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "add", kparams);
	},
	
	/**
	 * Get Distribution Profile by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaDistributionProfile.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "get", kparams);
	},
	
	/**
	 * Update Distribution Profile by id.
	 * @param	id	int		 (optional)
	 * @param	distributionProfile	KalturaDistributionProfile		 (optional)
	 * @return	KalturaDistributionProfile.
	 **/
	update: function(id, distributionProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.distributionProfile = distributionProfile;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "update", kparams);
	},
	
	/**
	 * Update Distribution Profile status by id.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaDistributionProfileStatus)
	 * @return	KalturaDistributionProfile.
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "updateStatus", kparams);
	},
	
	/**
	 * Delete Distribution Profile by id.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "delete", kparams);
	},
	
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaDistributionProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaDistributionProfileListResponse.
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
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "list", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaDistributionProfileListResponse.
	 **/
	listByPartner: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "listByPartner", kparams);
	}
}
