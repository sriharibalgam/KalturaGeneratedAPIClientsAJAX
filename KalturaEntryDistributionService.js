
/**
 *Class definition for the Kaltura service: entryDistribution.
 **/
var KalturaEntryDistributionService = {
	/**
	 * Add new Entry Distribution.
	 * @param	entryDistribution	KalturaEntryDistribution		 (optional)
	 * @return	KalturaEntryDistribution.
	 **/
	add: function(entryDistribution){
		var kparams = new Object();
		kparams.entryDistribution = entryDistribution;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "add", kparams);
	},
	
	/**
	 * Get Entry Distribution by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaEntryDistribution.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "get", kparams);
	},
	
	/**
	 * Validates Entry Distribution by id for submission.
	 * @param	id	int		 (optional)
	 * @return	KalturaEntryDistribution.
	 **/
	validate: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "validate", kparams);
	},
	
	/**
	 * Update Entry Distribution by id.
	 * @param	id	int		 (optional)
	 * @param	entryDistribution	KalturaEntryDistribution		 (optional)
	 * @return	KalturaEntryDistribution.
	 **/
	update: function(id, entryDistribution){
		var kparams = new Object();
		kparams.id = id;
		kparams.entryDistribution = entryDistribution;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "update", kparams);
	},
	
	/**
	 * Delete Entry Distribution by id.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "delete", kparams);
	},
	
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaEntryDistributionFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaEntryDistributionListResponse.
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
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "list", kparams);
	},
	
	/**
	 * Submits Entry Distribution to the remote destination.
	 * @param	id	int		 (optional)
	 * @param	submitWhenReady	bool		 (optional, default: false)
	 * @return	KalturaEntryDistribution.
	 **/
	submitAdd: function(id, submitWhenReady){
		if(!submitWhenReady)
			submitWhenReady = false;
		var kparams = new Object();
		kparams.id = id;
		kparams.submitWhenReady = submitWhenReady;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "submitAdd", kparams);
	},
	
	/**
	 * Submits Entry Distribution changes to the remote destination.
	 * @param	id	int		 (optional)
	 * @return	KalturaEntryDistribution.
	 **/
	submitUpdate: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "submitUpdate", kparams);
	},
	
	/**
	 * Submits Entry Distribution report request.
	 * @param	id	int		 (optional)
	 * @return	KalturaEntryDistribution.
	 **/
	submitFetchReport: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "submitFetchReport", kparams);
	},
	
	/**
	 * Deletes Entry Distribution from the remote destination.
	 * @param	id	int		 (optional)
	 * @return	KalturaEntryDistribution.
	 **/
	submitDelete: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "submitDelete", kparams);
	},
	
	/**
	 * Retries last submit action.
	 * @param	id	int		 (optional)
	 * @return	KalturaEntryDistribution.
	 **/
	retrySubmit: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "retrySubmit", kparams);
	}
}
