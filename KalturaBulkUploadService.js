
/**
 *Class definition for the Kaltura service: bulkUpload.
 **/
var KalturaBulkUploadService = {
	/**
	 * Aborts the bulk upload and all its child jobs.
	 * @param	id	int		job id (optional)
	 **/
	abort: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload", "abort", kparams);
	},
	
	/**
	 * Get bulk upload batch job by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload", "get", kparams);
	},
	
	/**
	 * List bulk upload batch jobs.
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("bulkupload", "list", kparams);
	}
}
