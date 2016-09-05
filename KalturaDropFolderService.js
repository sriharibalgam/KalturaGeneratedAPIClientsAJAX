
/**
 *Class definition for the Kaltura service: dropFolder.
 **/
var KalturaDropFolderService = {
	/**
	 * Allows you to add a new KalturaDropFolder object.
	 * @param	dropFolder	KalturaDropFolder		 (optional)
	 * @return	KalturaDropFolder.
	 **/
	add: function(dropFolder){
		var kparams = new Object();
		kparams.dropFolder = dropFolder;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "add", kparams);
	},
	
	/**
	 * Retrieve a KalturaDropFolder object by ID.
	 * @param	dropFolderId	int		 (optional)
	 * @return	KalturaDropFolder.
	 **/
	get: function(dropFolderId){
		var kparams = new Object();
		kparams.dropFolderId = dropFolderId;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "get", kparams);
	},
	
	/**
	 * Update an existing KalturaDropFolder object.
	 * @param	dropFolderId	int		 (optional)
	 * @param	dropFolder	KalturaDropFolder		Id (optional)
	 * @return	KalturaDropFolder.
	 **/
	update: function(dropFolderId, dropFolder){
		var kparams = new Object();
		kparams.dropFolderId = dropFolderId;
		kparams.dropFolder = dropFolder;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "update", kparams);
	},
	
	/**
	 * Mark the KalturaDropFolder object as deleted.
	 * @param	dropFolderId	int		 (optional)
	 * @return	KalturaDropFolder.
	 **/
	deleteAction: function(dropFolderId){
		var kparams = new Object();
		kparams.dropFolderId = dropFolderId;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "delete", kparams);
	},
	
	/**
	 * List KalturaDropFolder objects.
	 * @param	filter	KalturaDropFolderFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaDropFolderListResponse.
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
		return new KalturaRequestBuilder("dropfolder_dropfolder", "list", kparams);
	}
}
