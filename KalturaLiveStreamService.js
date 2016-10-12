
/**
 *Class definition for the Kaltura service: liveStream.
 **/
var KalturaLiveStreamService = {
	/**
	 * Adds new live stream entry.
 *		 The entry will be queued for provision..
	 * @param	liveStreamEntry	KalturaLiveStreamEntry		Live stream entry metadata (optional)
	 * @param	sourceType	string		Live stream source type (optional, enum: KalturaSourceType, default: null)
	 * @return	KalturaLiveStreamEntry.
	 **/
	add: function(liveStreamEntry, sourceType){
		if(!sourceType)
			sourceType = null;
		var kparams = new Object();
		kparams.liveStreamEntry = liveStreamEntry;
		kparams.sourceType = sourceType;
		return new KalturaRequestBuilder("livestream", "add", kparams);
	},
	
	/**
	 * Get live stream entry by ID..
	 * @param	entryId	string		Live stream entry id (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 * @return	KalturaLiveStreamEntry.
	 **/
	get: function(entryId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		return new KalturaRequestBuilder("livestream", "get", kparams);
	},
	
	/**
	 * Authenticate live-stream entry against stream token and partner limitations.
	 * @param	entryId	string		Live stream entry id (optional)
	 * @param	token	string		Live stream broadcasting token (optional)
	 * @param	hostname	string		Media server host name (optional, default: null)
	 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType, default: null)
	 * @param	applicationName	string		the application to which entry is being broadcast (optional, default: null)
	 * @return	KalturaLiveStreamEntry.
	 **/
	authenticate: function(entryId, token, hostname, mediaServerIndex, applicationName){
		if(!hostname)
			hostname = null;
		if(!mediaServerIndex)
			mediaServerIndex = null;
		if(!applicationName)
			applicationName = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.token = token;
		kparams.hostname = hostname;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.applicationName = applicationName;
		return new KalturaRequestBuilder("livestream", "authenticate", kparams);
	},
	
	/**
	 * Update live stream entry. Only the properties that were set will be updated..
	 * @param	entryId	string		Live stream entry id to update (optional)
	 * @param	liveStreamEntry	KalturaLiveStreamEntry		Live stream entry metadata to update (optional)
	 * @return	KalturaLiveStreamEntry.
	 **/
	update: function(entryId, liveStreamEntry){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.liveStreamEntry = liveStreamEntry;
		return new KalturaRequestBuilder("livestream", "update", kparams);
	},
	
	/**
	 * Delete a live stream entry..
	 * @param	entryId	string		Live stream entry id to delete (optional)
	 * @return	.
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("livestream", "delete", kparams);
	},
	
	/**
	 * List live stream entries by filter with paging support..
	 * @param	filter	KalturaLiveStreamEntryFilter		live stream entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 * @return	KalturaLiveStreamListResponse.
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
		return new KalturaRequestBuilder("livestream", "list", kparams);
	},
	
	/**
	 * Update live stream entry thumbnail using a raw jpeg file.
	 * @param	entryId	string		live stream entry id (optional)
	 * @param	fileData	file		Jpeg file data (optional)
	 * @return	KalturaLiveStreamEntry.
	 **/
	updateOfflineThumbnailJpeg: function(entryId, fileData){
		var kparams = new Object();
		kparams.entryId = entryId;
		kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("livestream", "updateOfflineThumbnailJpeg", kparams, kfiles);
	},
	
	/**
	 * Update entry thumbnail using url.
	 * @param	entryId	string		live stream entry id (optional)
	 * @param	url	string		file url (optional)
	 * @return	KalturaLiveStreamEntry.
	 **/
	updateOfflineThumbnailFromUrl: function(entryId, url){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.url = url;
		return new KalturaRequestBuilder("livestream", "updateOfflineThumbnailFromUrl", kparams);
	},
	
	/**
	 * Delivering the status of a live stream (on-air/offline) if it is possible.
	 * @param	id	string		ID of the live stream (optional)
	 * @param	protocol	string		protocol of the stream to test. (optional, enum: KalturaPlaybackProtocol)
	 * @return	bool.
	 **/
	isLive: function(id, protocol){
		var kparams = new Object();
		kparams.id = id;
		kparams.protocol = protocol;
		return new KalturaRequestBuilder("livestream", "isLive", kparams);
	},
	
	/**
	 * Add new pushPublish configuration to entry.
	 * @param	entryId	string		 (optional)
	 * @param	protocol	string		 (optional, enum: KalturaPlaybackProtocol)
	 * @param	url	string		 (optional, default: null)
	 * @param	liveStreamConfiguration	KalturaLiveStreamConfiguration		 (optional, default: null)
	 * @return	KalturaLiveStreamEntry.
	 **/
	addLiveStreamPushPublishConfiguration: function(entryId, protocol, url, liveStreamConfiguration){
		if(!url)
			url = null;
		if(!liveStreamConfiguration)
			liveStreamConfiguration = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.protocol = protocol;
		kparams.url = url;
		if (liveStreamConfiguration != null)
			kparams.liveStreamConfiguration = liveStreamConfiguration;
		return new KalturaRequestBuilder("livestream", "addLiveStreamPushPublishConfiguration", kparams);
	},
	
	/**
	 * Remove push publish configuration from entry.
	 * @param	entryId	string		 (optional)
	 * @param	protocol	string		 (optional, enum: KalturaPlaybackProtocol)
	 * @return	KalturaLiveStreamEntry.
	 **/
	removeLiveStreamPushPublishConfiguration: function(entryId, protocol){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.protocol = protocol;
		return new KalturaRequestBuilder("livestream", "removeLiveStreamPushPublishConfiguration", kparams);
	},
	
	/**
	 * Regenerate new secure token for liveStream.
	 * @param	entryId	string		Live stream entry id to regenerate secure token for (optional)
	 * @return	.
	 **/
	regenrateSecureToken: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("livestream", "regenrateSecureToken", kparams);
	},
	
	/**
	 * Append recorded video to live entry.
	 * @param	entryId	string		Live entry id (optional)
	 * @param	assetId	string		Live asset id (optional)
	 * @param	mediaServerIndex	string		 (optional, enum: KalturaEntryServerNodeType)
	 * @param	resource	KalturaDataCenterContentResource		 (optional)
	 * @param	duration	float		in seconds (optional)
	 * @param	isLastChunk	bool		Is this the last recorded chunk in the current session (i.e. following a stream stop event) (optional, default: false)
	 * @return	KalturaLiveEntry.
	 **/
	appendRecording: function(entryId, assetId, mediaServerIndex, resource, duration, isLastChunk){
		if(!isLastChunk)
			isLastChunk = false;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.assetId = assetId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.resource = resource;
		kparams.duration = duration;
		kparams.isLastChunk = isLastChunk;
		return new KalturaRequestBuilder("livestream", "appendRecording", kparams);
	},
	
	/**
	 * Register media server to live entry.
	 * @param	entryId	string		Live entry id (optional)
	 * @param	hostname	string		Media server host name (optional)
	 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType)
	 * @param	applicationName	string		the application to which entry is being broadcast (optional, default: null)
	 * @param	liveEntryStatus	int		the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (optional, enum: KalturaEntryServerNodeStatus, default: 1)
	 * @return	KalturaLiveEntry.
	 **/
	registerMediaServer: function(entryId, hostname, mediaServerIndex, applicationName, liveEntryStatus){
		if(!applicationName)
			applicationName = null;
		if(!liveEntryStatus)
			liveEntryStatus = 1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.hostname = hostname;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.applicationName = applicationName;
		kparams.liveEntryStatus = liveEntryStatus;
		return new KalturaRequestBuilder("livestream", "registerMediaServer", kparams);
	},
	
	/**
	 * Unregister media server from live entry.
	 * @param	entryId	string		Live entry id (optional)
	 * @param	hostname	string		Media server host name (optional)
	 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType)
	 * @return	KalturaLiveEntry.
	 **/
	unregisterMediaServer: function(entryId, hostname, mediaServerIndex){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.hostname = hostname;
		kparams.mediaServerIndex = mediaServerIndex;
		return new KalturaRequestBuilder("livestream", "unregisterMediaServer", kparams);
	},
	
	/**
	 * Validates all registered media servers.
	 * @param	entryId	string		Live entry id (optional)
	 * @return	.
	 **/
	validateRegisteredMediaServers: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("livestream", "validateRegisteredMediaServers", kparams);
	},
	
	/**
	 * Creates perioding metadata sync-point events on a live stream.
	 * @param	entryId	string		Kaltura live-stream entry id (optional)
	 * @param	interval	int		Events interval in seconds (optional)
	 * @param	duration	int		Duration in seconds (optional)
	 * @return	.
	 **/
	createPeriodicSyncPoints: function(entryId, interval, duration){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.interval = interval;
		kparams.duration = duration;
		return new KalturaRequestBuilder("livestream", "createPeriodicSyncPoints", kparams);
	}
}
