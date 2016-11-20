
/**
 *Class definition for the Kaltura service: categoryEntry.
 **/
var KalturaCategoryEntryService = {
	/**
	 * Add new CategoryEntry.
	 * @param	categoryEntry	KalturaCategoryEntry		 (optional)
	 * @return	KalturaCategoryEntry.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	add: function(categoryEntry){
		var kparams = new Object();
		kparams.categoryEntry = categoryEntry;
		return new KalturaRequestBuilder("categoryentry", "add", kparams);
	},
	
	/**
	 * Delete CategoryEntry.
	 * @param	entryId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	deleteAction: function(entryId, categoryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new KalturaRequestBuilder("categoryentry", "delete", kparams);
	},
	
	/**
	 * List all categoryEntry.
	 * @param	filter	KalturaCategoryEntryFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaCategoryEntryListResponse.
	 * @return	.
	 * @return	.
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
		return new KalturaRequestBuilder("categoryentry", "list", kparams);
	},
	
	/**
	 * Index CategoryEntry by Id.
	 * @param	entryId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 * @param	shouldUpdate	bool		 (optional, default: true)
	 * @return	int.
	 * @return	.
	 **/
	index: function(entryId, categoryId, shouldUpdate){
		if(!shouldUpdate)
			shouldUpdate = true;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("categoryentry", "index", kparams);
	},
	
	/**
	 * activate CategoryEntry when it is pending moderation.
	 * @param	entryId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	activate: function(entryId, categoryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new KalturaRequestBuilder("categoryentry", "activate", kparams);
	},
	
	/**
	 * activate CategoryEntry when it is pending moderation.
	 * @param	entryId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	reject: function(entryId, categoryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new KalturaRequestBuilder("categoryentry", "reject", kparams);
	},
	
	/**
	 * update privacy context from the category.
	 * @param	entryId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	syncPrivacyContext: function(entryId, categoryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new KalturaRequestBuilder("categoryentry", "syncPrivacyContext", kparams);
	},
	
	/**
	 * .
	 * @param	bulkUploadData	KalturaBulkServiceData		 (optional)
	 * @param	bulkUploadCategoryEntryData	KalturaBulkUploadCategoryEntryData		 (optional, default: null)
	 * @return	KalturaBulkUpload.
	 **/
	addFromBulkUpload: function(bulkUploadData, bulkUploadCategoryEntryData){
		if(!bulkUploadCategoryEntryData)
			bulkUploadCategoryEntryData = null;
		var kparams = new Object();
		kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadCategoryEntryData != null)
			kparams.bulkUploadCategoryEntryData = bulkUploadCategoryEntryData;
		return new KalturaRequestBuilder("categoryentry", "addFromBulkUpload", kparams);
	}
}
