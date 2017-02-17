
/**
 *Class definition for the Kaltura service: dropFolder.
 **/
var KalturaDropFolderService = {
	/**
	 * Allows you to add a new KalturaDropFolder object.
	 * @param	dropFolder	KalturaDropFolder		 (optional)
	 **/
	add: function(dropFolder){
		var kparams = new Object();
		kparams.dropFolder = dropFolder;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "add", kparams);
	},
	
	/**
	 * Mark the KalturaDropFolder object as deleted.
	 * @param	dropFolderId	int		 (optional)
	 **/
	deleteAction: function(dropFolderId){
		var kparams = new Object();
		kparams.dropFolderId = dropFolderId;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "delete", kparams);
	},
	
	/**
	 * Retrieve a KalturaDropFolder object by ID.
	 * @param	dropFolderId	int		 (optional)
	 **/
	get: function(dropFolderId){
		var kparams = new Object();
		kparams.dropFolderId = dropFolderId;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "get", kparams);
	},
	
	/**
	 * List KalturaDropFolder objects.
	 * @param	filter	KalturaDropFolderFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
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
	},
	
	/**
	 * Update an existing KalturaDropFolder object.
	 * @param	dropFolderId	int		 (optional)
	 * @param	dropFolder	KalturaDropFolder		Id (optional)
	 **/
	update: function(dropFolderId, dropFolder){
		var kparams = new Object();
		kparams.dropFolderId = dropFolderId;
		kparams.dropFolder = dropFolder;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "update", kparams);
	}
}
