
/**
 *Class definition for the Kaltura service: data.
 **/
var KalturaDataService = {
	/**
	 * Adds a new data entry.
	 * @param	dataEntry	KalturaDataEntry		Data entry (optional)
	 * @return	KalturaDataEntry.
	 **/
	add: function(dataEntry){
		var kparams = new Object();
		kparams.dataEntry = dataEntry;
		return new KalturaRequestBuilder("data", "add", kparams);
	},
	
	/**
	 * Get data entry by ID..
	 * @param	entryId	string		Data entry id (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 * @return	KalturaDataEntry.
	 **/
	get: function(entryId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		return new KalturaRequestBuilder("data", "get", kparams);
	},
	
	/**
	 * Update data entry. Only the properties that were set will be updated..
	 * @param	entryId	string		Data entry id to update (optional)
	 * @param	documentEntry	KalturaDataEntry		Data entry metadata to update (optional)
	 * @return	KalturaDataEntry.
	 **/
	update: function(entryId, documentEntry){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.documentEntry = documentEntry;
		return new KalturaRequestBuilder("data", "update", kparams);
	},
	
	/**
	 * Delete a data entry..
	 * @param	entryId	string		Data entry id to delete (optional)
	 * @return	.
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("data", "delete", kparams);
	},
	
	/**
	 * List data entries by filter with paging support..
	 * @param	filter	KalturaDataEntryFilter		Document entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 * @return	KalturaDataListResponse.
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
		return new KalturaRequestBuilder("data", "list", kparams);
	}
}
