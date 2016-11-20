
/**
 *Class definition for the Kaltura service: baseEntry.
 **/
var KalturaBaseEntryService = {
	/**
	 * Generic add entry, should be used when the uploaded entry type is not known..
	 * @param	entry	KalturaBaseEntry		 (optional)
	 * @param	type	string		 (optional, enum: KalturaEntryType, default: null)
	 * @return	KalturaBaseEntry.
	 * @return	.
	 **/
	add: function(entry, type){
		if(!type)
			type = null;
		var kparams = new Object();
		kparams.entry = entry;
		kparams.type = type;
		return new KalturaRequestBuilder("baseentry", "add", kparams);
	},
	
	/**
	 * Attach content resource to entry in status NO_MEDIA.
	 * @param	entryId	string		 (optional)
	 * @param	resource	KalturaResource		 (optional)
	 * @return	KalturaBaseEntry.
	 * @return	.
	 **/
	addContent: function(entryId, resource){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.resource = resource;
		return new KalturaRequestBuilder("baseentry", "addContent", kparams);
	},
	
	/**
	 * Generic add entry using an uploaded file, should be used when the uploaded entry type is not known..
	 * @param	entry	KalturaBaseEntry		 (optional)
	 * @param	uploadTokenId	string		 (optional)
	 * @param	type	string		 (optional, enum: KalturaEntryType, default: null)
	 * @return	KalturaBaseEntry.
	 **/
	addFromUploadedFile: function(entry, uploadTokenId, type){
		if(!type)
			type = null;
		var kparams = new Object();
		kparams.entry = entry;
		kparams.uploadTokenId = uploadTokenId;
		kparams.type = type;
		return new KalturaRequestBuilder("baseentry", "addFromUploadedFile", kparams);
	},
	
	/**
	 * Get base entry by ID..
	 * @param	entryId	string		Entry id (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 * @return	KalturaBaseEntry.
	 **/
	get: function(entryId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		return new KalturaRequestBuilder("baseentry", "get", kparams);
	},
	
	/**
	 * Get remote storage existing paths for the asset..
	 * @param	entryId	string		 (optional)
	 * @return	KalturaRemotePathListResponse.
	 * @return	.
	 * @return	.
	 **/
	getRemotePaths: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("baseentry", "getRemotePaths", kparams);
	},
	
	/**
	 * Update base entry. Only the properties that were set will be updated..
	 * @param	entryId	string		Entry id to update (optional)
	 * @param	baseEntry	KalturaBaseEntry		Base entry metadata to update (optional)
	 * @return	KalturaBaseEntry.
	 * @return	.
	 **/
	update: function(entryId, baseEntry){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.baseEntry = baseEntry;
		return new KalturaRequestBuilder("baseentry", "update", kparams);
	},
	
	/**
	 * Update the content resource associated with the entry..
	 * @param	entryId	string		Entry id to update (optional)
	 * @param	resource	KalturaResource		Resource to be used to replace entry content (optional)
	 * @param	conversionProfileId	int		The conversion profile id to be used on the entry (optional, default: null)
	 * @param	advancedOptions	KalturaEntryReplacementOptions		Additional update content options (optional, default: null)
	 * @return	KalturaBaseEntry.
	 * @return	.
	 **/
	updateContent: function(entryId, resource, conversionProfileId, advancedOptions){
		if(!conversionProfileId)
			conversionProfileId = null;
		if(!advancedOptions)
			advancedOptions = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.resource = resource;
		kparams.conversionProfileId = conversionProfileId;
		if (advancedOptions != null)
			kparams.advancedOptions = advancedOptions;
		return new KalturaRequestBuilder("baseentry", "updateContent", kparams);
	},
	
	/**
	 * Get an array of KalturaBaseEntry objects by a comma-separated list of ids..
	 * @param	entryIds	string		Comma separated string of entry ids (optional)
	 * @return	array.
	 **/
	getByIds: function(entryIds){
		var kparams = new Object();
		kparams.entryIds = entryIds;
		return new KalturaRequestBuilder("baseentry", "getByIds", kparams);
	},
	
	/**
	 * Delete an entry..
	 * @param	entryId	string		Entry id to delete (optional)
	 * @return	.
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("baseentry", "delete", kparams);
	},
	
	/**
	 * List base entries by filter with paging support..
	 * @param	filter	KalturaBaseEntryFilter		Entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 * @return	KalturaBaseEntryListResponse.
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
		return new KalturaRequestBuilder("baseentry", "list", kparams);
	},
	
	/**
	 * List base entries by filter according to reference id.
	 * @param	refId	string		Entry Reference ID (optional)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 * @return	KalturaBaseEntryListResponse.
	 * @return	.
	 **/
	listByReferenceId: function(refId, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.refId = refId;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("baseentry", "listByReferenceId", kparams);
	},
	
	/**
	 * Count base entries by filter..
	 * @param	filter	KalturaBaseEntryFilter		Entry filter (optional, default: null)
	 * @return	int.
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("baseentry", "count", kparams);
	},
	
	/**
	 * Upload a file to Kaltura, that can be used to create an entry..
	 * @param	fileData	file		The file data (optional)
	 * @return	string.
	 **/
	upload: function(fileData){
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("baseentry", "upload", kparams, kfiles);
	},
	
	/**
	 * Update entry thumbnail using a raw jpeg file..
	 * @param	entryId	string		Media entry id (optional)
	 * @param	fileData	file		Jpeg file data (optional)
	 * @return	KalturaBaseEntry.
	 * @return	.
	 * @return	.
	 **/
	updateThumbnailJpeg: function(entryId, fileData){
		var kparams = new Object();
		kparams.entryId = entryId;
		kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("baseentry", "updateThumbnailJpeg", kparams, kfiles);
	},
	
	/**
	 * Update entry thumbnail using url..
	 * @param	entryId	string		Media entry id (optional)
	 * @param	url	string		file url (optional)
	 * @return	KalturaBaseEntry.
	 * @return	.
	 * @return	.
	 **/
	updateThumbnailFromUrl: function(entryId, url){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.url = url;
		return new KalturaRequestBuilder("baseentry", "updateThumbnailFromUrl", kparams);
	},
	
	/**
	 * Update entry thumbnail from a different entry by a specified time offset (in seconds)..
	 * @param	entryId	string		Media entry id (optional)
	 * @param	sourceEntryId	string		Media entry id (optional)
	 * @param	timeOffset	int		Time offset (in seconds) (optional)
	 * @return	KalturaBaseEntry.
	 * @return	.
	 * @return	.
	 **/
	updateThumbnailFromSourceEntry: function(entryId, sourceEntryId, timeOffset){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.sourceEntryId = sourceEntryId;
		kparams.timeOffset = timeOffset;
		return new KalturaRequestBuilder("baseentry", "updateThumbnailFromSourceEntry", kparams);
	},
	
	/**
	 * Flag inappropriate entry for moderation..
	 * @param	moderationFlag	KalturaModerationFlag		 (optional)
	 * @return	.
	 * @return	.
	 **/
	flag: function(moderationFlag){
		var kparams = new Object();
		kparams.moderationFlag = moderationFlag;
		return new KalturaRequestBuilder("baseentry", "flag", kparams);
	},
	
	/**
	 * Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non-playable)..
	 * @param	entryId	string		 (optional)
	 * @return	.
	 * @return	.
	 **/
	reject: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("baseentry", "reject", kparams);
	},
	
	/**
	 * Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable)..
	 * @param	entryId	string		 (optional)
	 * @return	.
	 * @return	.
	 **/
	approve: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("baseentry", "approve", kparams);
	},
	
	/**
	 * List all pending flags for the entry..
	 * @param	entryId	string		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaModerationFlagListResponse.
	 **/
	listFlags: function(entryId, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("baseentry", "listFlags", kparams);
	},
	
	/**
	 * Anonymously rank an entry, no validation is done on duplicate rankings..
	 * @param	entryId	string		 (optional)
	 * @param	rank	int		 (optional)
	 * @return	.
	 **/
	anonymousRank: function(entryId, rank){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.rank = rank;
		return new KalturaRequestBuilder("baseentry", "anonymousRank", kparams);
	},
	
	/**
	 * This action delivers entry-related data, based on the user's context: access control, restriction, playback format and storage information..
	 * @param	entryId	string		 (optional)
	 * @param	contextDataParams	KalturaEntryContextDataParams		 (optional)
	 * @return	KalturaEntryContextDataResult.
	 **/
	getContextData: function(entryId, contextDataParams){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.contextDataParams = contextDataParams;
		return new KalturaRequestBuilder("baseentry", "getContextData", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	storageProfileId	int		 (optional)
	 * @return	KalturaBaseEntry.
	 * @return	.
	 * @return	.
	 **/
	exportAction: function(entryId, storageProfileId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.storageProfileId = storageProfileId;
		return new KalturaRequestBuilder("baseentry", "export", kparams);
	},
	
	/**
	 * Index an entry by id..
	 * @param	id	string		 (optional)
	 * @param	shouldUpdate	bool		 (optional, default: true)
	 * @return	int.
	 **/
	index: function(id, shouldUpdate){
		if(!shouldUpdate)
			shouldUpdate = true;
		var kparams = new Object();
		kparams.id = id;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("baseentry", "index", kparams);
	},
	
	/**
	 * Clone an entry with optional attributes to apply to the clone.
	 * @param	entryId	string		Id of entry to clone (optional)
	 * @param	cloneOptions	array		 (optional, default: null)
	 * @return	KalturaBaseEntry.
	 * @return	.
	 **/
	cloneAction: function(entryId, cloneOptions){
		if(!cloneOptions)
			cloneOptions = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.cloneOptions = cloneOptions;
		return new KalturaRequestBuilder("baseentry", "clone", kparams);
	}
}
