
/**
 *Class definition for the Kaltura service: media.
 **/
var KalturaMediaService = {
	/**
	 * Add entry.
	 * @param	entry	KalturaMediaEntry		 (optional)
	 * @return	KalturaMediaEntry.
	 **/
	add: function(entry){
		var kparams = new Object();
		kparams.entry = entry;
		return new KalturaRequestBuilder("media", "add", kparams);
	},
	
	/**
	 * Add content to media entry which is not yet associated with content (therefore is in status NO_CONTENT).
 *	     If the requirement is to replace the entry's associated content, use action updateContent..
	 * @param	entryId	string		 (optional)
	 * @param	resource	KalturaResource		 (optional, default: null)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 * @return	.
	 **/
	addContent: function(entryId, resource){
		if(!resource)
			resource = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		if (resource != null)
			kparams.resource = resource;
		return new KalturaRequestBuilder("media", "addContent", kparams);
	},
	
	/**
	 * Adds new media entry by importing an HTTP or FTP URL.
 *		 The entry will be queued for import and then for conversion.
 *		 This action should be exposed only to the batches.
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional)
	 * @param	url	string		An HTTP or FTP URL (optional)
	 * @param	bulkUploadId	int		The id of the bulk upload job (optional)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 * @return	.
	 **/
	addFromBulk: function(mediaEntry, url, bulkUploadId){
		var kparams = new Object();
		kparams.mediaEntry = mediaEntry;
		kparams.url = url;
		kparams.bulkUploadId = bulkUploadId;
		return new KalturaRequestBuilder("media", "addFromBulk", kparams);
	},
	
	/**
	 * Adds new media entry by importing an HTTP or FTP URL.
 *		 The entry will be queued for import and then for conversion..
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional)
	 * @param	url	string		An HTTP or FTP URL (optional)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 * @return	.
	 **/
	addFromUrl: function(mediaEntry, url){
		var kparams = new Object();
		kparams.mediaEntry = mediaEntry;
		kparams.url = url;
		return new KalturaRequestBuilder("media", "addFromUrl", kparams);
	},
	
	/**
	 * Adds new media entry by importing the media file from a search provider.
 *		 This action should be used with the search service result..
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null)
	 * @param	searchResult	KalturaSearchResult		Result object from search service (optional, default: null)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 * @return	.
	 **/
	addFromSearchResult: function(mediaEntry, searchResult){
		if(!mediaEntry)
			mediaEntry = null;
		if(!searchResult)
			searchResult = null;
		var kparams = new Object();
		if (mediaEntry != null)
			kparams.mediaEntry = mediaEntry;
		if (searchResult != null)
			kparams.searchResult = searchResult;
		return new KalturaRequestBuilder("media", "addFromSearchResult", kparams);
	},
	
	/**
	 * Add new entry after the specific media file was uploaded and the upload token id exists.
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional)
	 * @param	uploadTokenId	string		Upload token id (optional)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	addFromUploadedFile: function(mediaEntry, uploadTokenId){
		var kparams = new Object();
		kparams.mediaEntry = mediaEntry;
		kparams.uploadTokenId = uploadTokenId;
		return new KalturaRequestBuilder("media", "addFromUploadedFile", kparams);
	},
	
	/**
	 * Add new entry after the file was recored on the server and the token id exists.
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional)
	 * @param	webcamTokenId	string		Token id for the recored webcam file (optional)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	addFromRecordedWebcam: function(mediaEntry, webcamTokenId){
		var kparams = new Object();
		kparams.mediaEntry = mediaEntry;
		kparams.webcamTokenId = webcamTokenId;
		return new KalturaRequestBuilder("media", "addFromRecordedWebcam", kparams);
	},
	
	/**
	 * Copy entry into new entry.
	 * @param	sourceEntryId	string		Media entry id to copy from (optional)
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null)
	 * @param	sourceFlavorParamsId	int		The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	addFromEntry: function(sourceEntryId, mediaEntry, sourceFlavorParamsId){
		if(!mediaEntry)
			mediaEntry = null;
		if(!sourceFlavorParamsId)
			sourceFlavorParamsId = null;
		var kparams = new Object();
		kparams.sourceEntryId = sourceEntryId;
		if (mediaEntry != null)
			kparams.mediaEntry = mediaEntry;
		kparams.sourceFlavorParamsId = sourceFlavorParamsId;
		return new KalturaRequestBuilder("media", "addFromEntry", kparams);
	},
	
	/**
	 * Copy flavor asset into new entry.
	 * @param	sourceFlavorAssetId	string		Flavor asset id to be used as the new entry source (optional)
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	addFromFlavorAsset: function(sourceFlavorAssetId, mediaEntry){
		if(!mediaEntry)
			mediaEntry = null;
		var kparams = new Object();
		kparams.sourceFlavorAssetId = sourceFlavorAssetId;
		if (mediaEntry != null)
			kparams.mediaEntry = mediaEntry;
		return new KalturaRequestBuilder("media", "addFromFlavorAsset", kparams);
	},
	
	/**
	 * Convert entry.
	 * @param	entryId	string		Media entry id (optional)
	 * @param	conversionProfileId	int		 (optional, default: null)
	 * @param	dynamicConversionAttributes	array		 (optional, default: null)
	 * @return	bigint.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	convert: function(entryId, conversionProfileId, dynamicConversionAttributes){
		if(!conversionProfileId)
			conversionProfileId = null;
		if(!dynamicConversionAttributes)
			dynamicConversionAttributes = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.conversionProfileId = conversionProfileId;
		kparams.dynamicConversionAttributes = dynamicConversionAttributes;
		return new KalturaRequestBuilder("media", "convert", kparams);
	},
	
	/**
	 * Get media entry by ID..
	 * @param	entryId	string		Media entry id (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 **/
	get: function(entryId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		return new KalturaRequestBuilder("media", "get", kparams);
	},
	
	/**
	 * Get MRSS by entry id
 *	     XML will return as an escaped string.
	 * @param	entryId	string		Entry id (optional)
	 * @param	extendingItemsArray	array		 (optional, default: null)
	 * @param	features	string		 (optional, default: null)
	 * @return	string.
	 * @return	.
	 **/
	getMrss: function(entryId, extendingItemsArray, features){
		if(!extendingItemsArray)
			extendingItemsArray = null;
		if(!features)
			features = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.extendingItemsArray = extendingItemsArray;
		kparams.features = features;
		return new KalturaRequestBuilder("media", "getMrss", kparams);
	},
	
	/**
	 * Update media entry. Only the properties that were set will be updated..
	 * @param	entryId	string		Media entry id to update (optional)
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata to update (optional)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 **/
	update: function(entryId, mediaEntry){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.mediaEntry = mediaEntry;
		return new KalturaRequestBuilder("media", "update", kparams);
	},
	
	/**
	 * Replace content associated with the media entry..
	 * @param	entryId	string		Media entry id to update (optional)
	 * @param	resource	KalturaResource		Resource to be used to replace entry media content (optional)
	 * @param	conversionProfileId	int		The conversion profile id to be used on the entry (optional, default: null)
	 * @param	advancedOptions	KalturaEntryReplacementOptions		Additional update content options (optional, default: null)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 * @return	.
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
		return new KalturaRequestBuilder("media", "updateContent", kparams);
	},
	
	/**
	 * Delete a media entry..
	 * @param	entryId	string		Media entry id to delete (optional)
	 * @return	.
	 * @return	.
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("media", "delete", kparams);
	},
	
	/**
	 * Approves media replacement.
	 * @param	entryId	string		Media entry id to replace (optional)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 **/
	approveReplace: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("media", "approveReplace", kparams);
	},
	
	/**
	 * Cancels media replacement.
	 * @param	entryId	string		Media entry id to cancel (optional)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 **/
	cancelReplace: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("media", "cancelReplace", kparams);
	},
	
	/**
	 * List media entries by filter with paging support..
	 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 * @return	KalturaMediaListResponse.
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
		return new KalturaRequestBuilder("media", "list", kparams);
	},
	
	/**
	 * Count media entries by filter..
	 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null)
	 * @return	int.
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("media", "count", kparams);
	},
	
	/**
	 * Upload a media file to Kaltura, then the file can be used to create a media entry..
	 * @param	fileData	file		The file data (optional)
	 * @return	string.
	 **/
	upload: function(fileData){
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("media", "upload", kparams, kfiles);
	},
	
	/**
	 * Update media entry thumbnail by a specified time offset (In seconds)
 *		 If flavor params id not specified, source flavor will be used by default.
	 * @param	entryId	string		Media entry id (optional)
	 * @param	timeOffset	int		Time offset (in seconds) (optional)
	 * @param	flavorParamsId	int		The flavor params id to be used (optional, default: null)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 * @return	.
	 **/
	updateThumbnail: function(entryId, timeOffset, flavorParamsId){
		if(!flavorParamsId)
			flavorParamsId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.timeOffset = timeOffset;
		kparams.flavorParamsId = flavorParamsId;
		return new KalturaRequestBuilder("media", "updateThumbnail", kparams);
	},
	
	/**
	 * Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 *		 If flavor params id not specified, source flavor will be used by default.
	 * @param	entryId	string		Media entry id (optional)
	 * @param	sourceEntryId	string		Media entry id (optional)
	 * @param	timeOffset	int		Time offset (in seconds) (optional)
	 * @param	flavorParamsId	int		The flavor params id to be used (optional, default: null)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 * @return	.
	 **/
	updateThumbnailFromSourceEntry: function(entryId, sourceEntryId, timeOffset, flavorParamsId){
		if(!flavorParamsId)
			flavorParamsId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.sourceEntryId = sourceEntryId;
		kparams.timeOffset = timeOffset;
		kparams.flavorParamsId = flavorParamsId;
		return new KalturaRequestBuilder("media", "updateThumbnailFromSourceEntry", kparams);
	},
	
	/**
	 * Update media entry thumbnail using a raw jpeg file.
	 * @param	entryId	string		Media entry id (optional)
	 * @param	fileData	file		Jpeg file data (optional)
	 * @return	KalturaMediaEntry.
	 * @return	.
	 * @return	.
	 **/
	updateThumbnailJpeg: function(entryId, fileData){
		var kparams = new Object();
		kparams.entryId = entryId;
		kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("media", "updateThumbnailJpeg", kparams, kfiles);
	},
	
	/**
	 * Update entry thumbnail using url.
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
		return new KalturaRequestBuilder("media", "updateThumbnailFromUrl", kparams);
	},
	
	/**
	 * Request a new conversion job, this can be used to convert the media entry to a different format.
	 * @param	entryId	string		Media entry id (optional)
	 * @param	fileFormat	string		Format to convert (optional)
	 * @return	int.
	 * @return	.
	 **/
	requestConversion: function(entryId, fileFormat){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.fileFormat = fileFormat;
		return new KalturaRequestBuilder("media", "requestConversion", kparams);
	},
	
	/**
	 * Flag inappropriate media entry for moderation.
	 * @param	moderationFlag	KalturaModerationFlag		 (optional)
	 * @return	.
	 * @return	.
	 **/
	flag: function(moderationFlag){
		var kparams = new Object();
		kparams.moderationFlag = moderationFlag;
		return new KalturaRequestBuilder("media", "flag", kparams);
	},
	
	/**
	 * Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable).
	 * @param	entryId	string		 (optional)
	 * @return	.
	 * @return	.
	 **/
	reject: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("media", "reject", kparams);
	},
	
	/**
	 * Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable).
	 * @param	entryId	string		 (optional)
	 * @return	.
	 * @return	.
	 **/
	approve: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("media", "approve", kparams);
	},
	
	/**
	 * List all pending flags for the media entry.
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
		return new KalturaRequestBuilder("media", "listFlags", kparams);
	},
	
	/**
	 * Anonymously rank a media entry, no validation is done on duplicate rankings.
	 * @param	entryId	string		 (optional)
	 * @param	rank	int		 (optional)
	 * @return	.
	 **/
	anonymousRank: function(entryId, rank){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.rank = rank;
		return new KalturaRequestBuilder("media", "anonymousRank", kparams);
	},
	
	/**
	 * Add new bulk upload batch job
 *		 Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 *		 If no conversion profile was specified, partner's default will be used.
	 * @param	fileData	file		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null)
	 * @param	bulkUploadEntryData	KalturaBulkUploadEntryData		 (optional, default: null)
	 * @return	KalturaBulkUpload.
	 **/
	bulkUploadAdd: function(fileData, bulkUploadData, bulkUploadEntryData){
		if(!bulkUploadData)
			bulkUploadData = null;
		if(!bulkUploadEntryData)
			bulkUploadEntryData = null;
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadEntryData != null)
			kparams.bulkUploadEntryData = bulkUploadEntryData;
		return new KalturaRequestBuilder("media", "bulkUploadAdd", kparams, kfiles);
	}
}
