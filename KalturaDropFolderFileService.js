
/**
 *Class definition for the Kaltura service: dropFolderFile.
 **/
var KalturaDropFolderFileService = {
	/**
	 * Allows you to add a new KalturaDropFolderFile object.
	 * @param	dropFolderFile	KalturaDropFolderFile		 (optional)
	 * @return	KalturaDropFolderFile.
	 **/
	add: function(dropFolderFile){
		var kparams = new Object();
		kparams.dropFolderFile = dropFolderFile;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "add", kparams);
	},
	
	/**
	 * Retrieve a KalturaDropFolderFile object by ID.
	 * @param	dropFolderFileId	int		 (optional)
	 * @return	KalturaDropFolderFile.
	 **/
	get: function(dropFolderFileId){
		var kparams = new Object();
		kparams.dropFolderFileId = dropFolderFileId;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "get", kparams);
	},
	
	/**
	 * Update an existing KalturaDropFolderFile object.
	 * @param	dropFolderFileId	int		 (optional)
	 * @param	dropFolderFile	KalturaDropFolderFile		Id (optional)
	 * @return	KalturaDropFolderFile.
	 **/
	update: function(dropFolderFileId, dropFolderFile){
		var kparams = new Object();
		kparams.dropFolderFileId = dropFolderFileId;
		kparams.dropFolderFile = dropFolderFile;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "update", kparams);
	},
	
	/**
	 * Update status of KalturaDropFolderFile.
	 * @param	dropFolderFileId	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaDropFolderFileStatus)
	 * @return	KalturaDropFolderFile.
	 **/
	updateStatus: function(dropFolderFileId, status){
		var kparams = new Object();
		kparams.dropFolderFileId = dropFolderFileId;
		kparams.status = status;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "updateStatus", kparams);
	},
	
	/**
	 * Mark the KalturaDropFolderFile object as deleted.
	 * @param	dropFolderFileId	int		 (optional)
	 * @return	KalturaDropFolderFile.
	 **/
	deleteAction: function(dropFolderFileId){
		var kparams = new Object();
		kparams.dropFolderFileId = dropFolderFileId;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "delete", kparams);
	},
	
	/**
	 * List KalturaDropFolderFile objects.
	 * @param	filter	KalturaDropFolderFileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaDropFolderFileListResponse.
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
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "list", kparams);
	},
	
	/**
	 * Set the KalturaDropFolderFile status to ignore (KalturaDropFolderFileStatus::IGNORE).
	 * @param	dropFolderFileId	int		 (optional)
	 * @return	KalturaDropFolderFile.
	 **/
	ignore: function(dropFolderFileId){
		var kparams = new Object();
		kparams.dropFolderFileId = dropFolderFileId;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "ignore", kparams);
	}
}
