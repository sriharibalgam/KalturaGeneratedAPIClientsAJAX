
/**
 *Class definition for the Kaltura service: accessControlProfile.
 **/
var KalturaAccessControlProfileService = {
	/**
	 * Add new access control profile.
	 * @param	accessControlProfile	KalturaAccessControlProfile		 (optional)
	 * @return	KalturaAccessControlProfile.
	 **/
	add: function(accessControlProfile){
		var kparams = new Object();
		kparams.accessControlProfile = accessControlProfile;
		return new KalturaRequestBuilder("accesscontrolprofile", "add", kparams);
	},
	
	/**
	 * Get access control profile by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaAccessControlProfile.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrolprofile", "get", kparams);
	},
	
	/**
	 * Update access control profile by id.
	 * @param	id	int		 (optional)
	 * @param	accessControlProfile	KalturaAccessControlProfile		 (optional)
	 * @return	KalturaAccessControlProfile.
	 **/
	update: function(id, accessControlProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.accessControlProfile = accessControlProfile;
		return new KalturaRequestBuilder("accesscontrolprofile", "update", kparams);
	},
	
	/**
	 * Delete access control profile by id.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrolprofile", "delete", kparams);
	},
	
	/**
	 * List access control profiles by filter and pager.
	 * @param	filter	KalturaAccessControlProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaAccessControlProfileListResponse.
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
		return new KalturaRequestBuilder("accesscontrolprofile", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: accessControl.
 **/
var KalturaAccessControlService = {
	/**
	 * Add new Access Control Profile.
	 * @param	accessControl	KalturaAccessControl		 (optional)
	 * @return	KalturaAccessControl.
	 **/
	add: function(accessControl){
		var kparams = new Object();
		kparams.accessControl = accessControl;
		return new KalturaRequestBuilder("accesscontrol", "add", kparams);
	},
	
	/**
	 * Get Access Control Profile by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaAccessControl.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrol", "get", kparams);
	},
	
	/**
	 * Update Access Control Profile by id.
	 * @param	id	int		 (optional)
	 * @param	accessControl	KalturaAccessControl		 (optional)
	 * @return	KalturaAccessControl.
	 **/
	update: function(id, accessControl){
		var kparams = new Object();
		kparams.id = id;
		kparams.accessControl = accessControl;
		return new KalturaRequestBuilder("accesscontrol", "update", kparams);
	},
	
	/**
	 * Delete Access Control Profile by id.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrol", "delete", kparams);
	},
	
	/**
	 * List Access Control Profiles by filter and pager.
	 * @param	filter	KalturaAccessControlFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaAccessControlListResponse.
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
		return new KalturaRequestBuilder("accesscontrol", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: adminUser.
 **/
var KalturaAdminUserService = {
	/**
	 * Update admin user password and email.
	 * @param	email	string		 (optional)
	 * @param	password	string		 (optional)
	 * @param	newEmail	string		Optional, provide only when you want to update the email (optional)
	 * @param	newPassword	string		 (optional)
	 * @return	KalturaAdminUser.
	 **/
	updatePassword: function(email, password, newEmail, newPassword){
		if(!newEmail)
			newEmail = "";
		if(!newPassword)
			newPassword = "";
		var kparams = new Object();
		kparams.email = email;
		kparams.password = password;
		kparams.newEmail = newEmail;
		kparams.newPassword = newPassword;
		return new KalturaRequestBuilder("adminuser", "updatePassword", kparams);
	},
	
	/**
	 * Reset admin user password and send it to the users email address.
	 * @param	email	string		 (optional)
	 * @return	.
	 **/
	resetPassword: function(email){
		var kparams = new Object();
		kparams.email = email;
		return new KalturaRequestBuilder("adminuser", "resetPassword", kparams);
	},
	
	/**
	 * Get an admin session using admin email and password (Used for login to the KMC application).
	 * @param	email	string		 (optional)
	 * @param	password	string		 (optional)
	 * @param	partnerId	int		 (optional, default: null)
	 * @return	string.
	 **/
	login: function(email, password, partnerId){
		if(!partnerId)
			partnerId = null;
		var kparams = new Object();
		kparams.email = email;
		kparams.password = password;
		kparams.partnerId = partnerId;
		return new KalturaRequestBuilder("adminuser", "login", kparams);
	},
	
	/**
	 * Set initial users password.
	 * @param	hashKey	string		 (optional)
	 * @param	newPassword	string		new password to set (optional)
	 * @return	.
	 **/
	setInitialPassword: function(hashKey, newPassword){
		var kparams = new Object();
		kparams.hashKey = hashKey;
		kparams.newPassword = newPassword;
		return new KalturaRequestBuilder("adminuser", "setInitialPassword", kparams);
	}
}

/**
 *Class definition for the Kaltura service: analytics.
 **/
var KalturaAnalyticsService = {
	/**
	 * report query action allows to get a analytics data for specific query dimensions, metrics and filters..
	 * @param	filter	KalturaAnalyticsFilter		the analytics query filter (optional)
	 * @return	KalturaReportResponse.
	 **/
	query: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("analytics", "query", kparams);
	}
}

/**
 *Class definition for the Kaltura service: appToken.
 **/
var KalturaAppTokenService = {
	/**
	 * Add new application authentication token.
	 * @param	appToken	KalturaAppToken		 (optional)
	 * @return	KalturaAppToken.
	 **/
	add: function(appToken){
		var kparams = new Object();
		kparams.appToken = appToken;
		return new KalturaRequestBuilder("apptoken", "add", kparams);
	},
	
	/**
	 * Get application authentication token by id.
	 * @param	id	string		 (optional)
	 * @return	KalturaAppToken.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("apptoken", "get", kparams);
	},
	
	/**
	 * Update application authentication token by id.
	 * @param	id	string		 (optional)
	 * @param	appToken	KalturaAppToken		 (optional)
	 * @return	KalturaAppToken.
	 **/
	update: function(id, appToken){
		var kparams = new Object();
		kparams.id = id;
		kparams.appToken = appToken;
		return new KalturaRequestBuilder("apptoken", "update", kparams);
	},
	
	/**
	 * Delete application authentication token by id.
	 * @param	id	string		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("apptoken", "delete", kparams);
	},
	
	/**
	 * List application authentication tokens by filter and pager.
	 * @param	filter	KalturaAppTokenFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaAppTokenListResponse.
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
		return new KalturaRequestBuilder("apptoken", "list", kparams);
	},
	
	/**
	 * Starts a new KS (kaltura Session) based on application authentication token id.
	 * @param	id	string		application token id (optional)
	 * @param	tokenHash	string		hashed token, built of sha1 on current KS concatenated with the application token (optional)
	 * @param	userId	string		session user id, will be ignored if a different user id already defined on the application token (optional, default: null)
	 * @param	type	int		session type, will be ignored if a different session type already defined on the application token (optional, enum: KalturaSessionType, default: null)
	 * @param	expiry	int		session expiry (in seconds), could be overwritten by shorter expiry of the application token and the session-expiry that defined on the application token (optional, default: null)
	 * @return	KalturaSessionInfo.
	 **/
	startSession: function(id, tokenHash, userId, type, expiry){
		if(!userId)
			userId = null;
		if(!type)
			type = null;
		if(!expiry)
			expiry = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.tokenHash = tokenHash;
		kparams.userId = userId;
		kparams.type = type;
		kparams.expiry = expiry;
		return new KalturaRequestBuilder("apptoken", "startSession", kparams);
	}
}

/**
 *Class definition for the Kaltura service: baseEntry.
 **/
var KalturaBaseEntryService = {
	/**
	 * Generic add entry, should be used when the uploaded entry type is not known..
	 * @param	entry	KalturaBaseEntry		 (optional)
	 * @param	type	string		 (optional, enum: KalturaEntryType, default: null)
	 * @return	KalturaBaseEntry.
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

/**
 *Class definition for the Kaltura service: bulkUpload.
 **/
var KalturaBulkUploadService = {
	/**
	 * Add new bulk upload batch job
 *		 Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 *		 If no conversion profile was specified, partner's default will be used.
	 * @param	conversionProfileId	int		Convertion profile id to use for converting the current bulk (-1 to use partner's default) (optional)
	 * @param	csvFileData	file		bulk upload file (optional)
	 * @param	bulkUploadType	string		 (optional, enum: KalturaBulkUploadType, default: null)
	 * @param	uploadedBy	string		 (optional, default: null)
	 * @param	fileName	string		Friendly name of the file, used to be recognized later in the logs. (optional, default: null)
	 * @return	KalturaBulkUpload.
	 **/
	add: function(conversionProfileId, csvFileData, bulkUploadType, uploadedBy, fileName){
		if(!bulkUploadType)
			bulkUploadType = null;
		if(!uploadedBy)
			uploadedBy = null;
		if(!fileName)
			fileName = null;
		var kparams = new Object();
		kparams.conversionProfileId = conversionProfileId;
		kfiles = new Object();
		kfiles.csvFileData = csvFileData;
		kparams.bulkUploadType = bulkUploadType;
		kparams.uploadedBy = uploadedBy;
		kparams.fileName = fileName;
		return new KalturaRequestBuilder("bulkupload", "add", kparams, kfiles);
	},
	
	/**
	 * Get bulk upload batch job by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaBulkUpload.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload", "get", kparams);
	},
	
	/**
	 * List bulk upload batch jobs.
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaBulkUploadListResponse.
	 **/
	listAction: function(pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("bulkupload", "list", kparams);
	},
	
	/**
	 * Aborts the bulk upload and all its child jobs.
	 * @param	id	int		job id (optional)
	 * @return	KalturaBulkUpload.
	 **/
	abort: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload", "abort", kparams);
	}
}

/**
 *Class definition for the Kaltura service: categoryEntry.
 **/
var KalturaCategoryEntryService = {
	/**
	 * Add new CategoryEntry.
	 * @param	categoryEntry	KalturaCategoryEntry		 (optional)
	 * @return	KalturaCategoryEntry.
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

/**
 *Class definition for the Kaltura service: category.
 **/
var KalturaCategoryService = {
	/**
	 * Add new Category.
	 * @param	category	KalturaCategory		 (optional)
	 * @return	KalturaCategory.
	 **/
	add: function(category){
		var kparams = new Object();
		kparams.category = category;
		return new KalturaRequestBuilder("category", "add", kparams);
	},
	
	/**
	 * Get Category by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaCategory.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("category", "get", kparams);
	},
	
	/**
	 * Update Category.
	 * @param	id	int		 (optional)
	 * @param	category	KalturaCategory		 (optional)
	 * @return	KalturaCategory.
	 **/
	update: function(id, category){
		var kparams = new Object();
		kparams.id = id;
		kparams.category = category;
		return new KalturaRequestBuilder("category", "update", kparams);
	},
	
	/**
	 * Delete a Category.
	 * @param	id	int		 (optional)
	 * @param	moveEntriesToParentCategory	int		 (optional, enum: KalturaNullableBoolean, default: 1)
	 * @return	.
	 **/
	deleteAction: function(id, moveEntriesToParentCategory){
		if(!moveEntriesToParentCategory)
			moveEntriesToParentCategory = 1;
		var kparams = new Object();
		kparams.id = id;
		kparams.moveEntriesToParentCategory = moveEntriesToParentCategory;
		return new KalturaRequestBuilder("category", "delete", kparams);
	},
	
	/**
	 * List all categories.
	 * @param	filter	KalturaCategoryFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaCategoryListResponse.
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
		return new KalturaRequestBuilder("category", "list", kparams);
	},
	
	/**
	 * Index Category by id.
	 * @param	id	int		 (optional)
	 * @param	shouldUpdate	bool		 (optional, default: true)
	 * @return	int.
	 **/
	index: function(id, shouldUpdate){
		if(!shouldUpdate)
			shouldUpdate = true;
		var kparams = new Object();
		kparams.id = id;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("category", "index", kparams);
	},
	
	/**
	 * Move categories that belong to the same parent category to a target categroy - enabled only for ks with disable entitlement.
	 * @param	categoryIds	string		 (optional)
	 * @param	targetCategoryParentId	int		 (optional)
	 * @return	KalturaCategoryListResponse.
	 **/
	move: function(categoryIds, targetCategoryParentId){
		var kparams = new Object();
		kparams.categoryIds = categoryIds;
		kparams.targetCategoryParentId = targetCategoryParentId;
		return new KalturaRequestBuilder("category", "move", kparams);
	},
	
	/**
	 * Unlock categories.
	 * @return	.
	 **/
	unlockCategories: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("category", "unlockCategories", kparams);
	},
	
	/**
	 * .
	 * @param	fileData	file		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null)
	 * @param	bulkUploadCategoryData	KalturaBulkUploadCategoryData		 (optional, default: null)
	 * @return	KalturaBulkUpload.
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData, bulkUploadCategoryData){
		if(!bulkUploadData)
			bulkUploadData = null;
		if(!bulkUploadCategoryData)
			bulkUploadCategoryData = null;
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadCategoryData != null)
			kparams.bulkUploadCategoryData = bulkUploadCategoryData;
		return new KalturaRequestBuilder("category", "addFromBulkUpload", kparams, kfiles);
	}
}

/**
 *Class definition for the Kaltura service: categoryUser.
 **/
var KalturaCategoryUserService = {
	/**
	 * Add new CategoryUser.
	 * @param	categoryUser	KalturaCategoryUser		 (optional)
	 * @return	KalturaCategoryUser.
	 **/
	add: function(categoryUser){
		var kparams = new Object();
		kparams.categoryUser = categoryUser;
		return new KalturaRequestBuilder("categoryuser", "add", kparams);
	},
	
	/**
	 * Get CategoryUser by id.
	 * @param	categoryId	int		 (optional)
	 * @param	userId	string		 (optional)
	 * @return	KalturaCategoryUser.
	 **/
	get: function(categoryId, userId){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("categoryuser", "get", kparams);
	},
	
	/**
	 * Update CategoryUser by id.
	 * @param	categoryId	int		 (optional)
	 * @param	userId	string		 (optional)
	 * @param	categoryUser	KalturaCategoryUser		 (optional)
	 * @param	override	bool		- to override manual changes (optional, default: false)
	 * @return	KalturaCategoryUser.
	 **/
	update: function(categoryId, userId, categoryUser, override){
		if(!override)
			override = false;
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		kparams.categoryUser = categoryUser;
		kparams.override = override;
		return new KalturaRequestBuilder("categoryuser", "update", kparams);
	},
	
	/**
	 * Delete a CategoryUser.
	 * @param	categoryId	int		 (optional)
	 * @param	userId	string		 (optional)
	 * @return	.
	 **/
	deleteAction: function(categoryId, userId){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("categoryuser", "delete", kparams);
	},
	
	/**
	 * activate CategoryUser.
	 * @param	categoryId	int		 (optional)
	 * @param	userId	string		 (optional)
	 * @return	KalturaCategoryUser.
	 **/
	activate: function(categoryId, userId){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("categoryuser", "activate", kparams);
	},
	
	/**
	 * reject CategoryUser.
	 * @param	categoryId	int		 (optional)
	 * @param	userId	string		 (optional)
	 * @return	KalturaCategoryUser.
	 **/
	deactivate: function(categoryId, userId){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("categoryuser", "deactivate", kparams);
	},
	
	/**
	 * List all categories.
	 * @param	filter	KalturaCategoryUserFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaCategoryUserListResponse.
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
		return new KalturaRequestBuilder("categoryuser", "list", kparams);
	},
	
	/**
	 * Copy all memeber from parent category.
	 * @param	categoryId	int		 (optional)
	 * @return	.
	 **/
	copyFromCategory: function(categoryId){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		return new KalturaRequestBuilder("categoryuser", "copyFromCategory", kparams);
	},
	
	/**
	 * Index CategoryUser by userid and category id.
	 * @param	userId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 * @param	shouldUpdate	bool		 (optional, default: true)
	 * @return	int.
	 **/
	index: function(userId, categoryId, shouldUpdate){
		if(!shouldUpdate)
			shouldUpdate = true;
		var kparams = new Object();
		kparams.userId = userId;
		kparams.categoryId = categoryId;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("categoryuser", "index", kparams);
	},
	
	/**
	 * .
	 * @param	fileData	file		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null)
	 * @param	bulkUploadCategoryUserData	KalturaBulkUploadCategoryUserData		 (optional, default: null)
	 * @return	KalturaBulkUpload.
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData, bulkUploadCategoryUserData){
		if(!bulkUploadData)
			bulkUploadData = null;
		if(!bulkUploadCategoryUserData)
			bulkUploadCategoryUserData = null;
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadCategoryUserData != null)
			kparams.bulkUploadCategoryUserData = bulkUploadCategoryUserData;
		return new KalturaRequestBuilder("categoryuser", "addFromBulkUpload", kparams, kfiles);
	}
}

/**
 *Class definition for the Kaltura service: conversionProfileAssetParams.
 **/
var KalturaConversionProfileAssetParamsService = {
	/**
	 * Lists asset parmas of conversion profile by ID.
	 * @param	filter	KalturaConversionProfileAssetParamsFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaConversionProfileAssetParamsListResponse.
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
		return new KalturaRequestBuilder("conversionprofileassetparams", "list", kparams);
	},
	
	/**
	 * Update asset parmas of conversion profile by ID.
	 * @param	conversionProfileId	int		 (optional)
	 * @param	assetParamsId	int		 (optional)
	 * @param	conversionProfileAssetParams	KalturaConversionProfileAssetParams		 (optional)
	 * @return	KalturaConversionProfileAssetParams.
	 **/
	update: function(conversionProfileId, assetParamsId, conversionProfileAssetParams){
		var kparams = new Object();
		kparams.conversionProfileId = conversionProfileId;
		kparams.assetParamsId = assetParamsId;
		kparams.conversionProfileAssetParams = conversionProfileAssetParams;
		return new KalturaRequestBuilder("conversionprofileassetparams", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: conversionProfile.
 **/
var KalturaConversionProfileService = {
	/**
	 * Set Conversion Profile to be the partner default.
	 * @param	id	int		 (optional)
	 * @return	KalturaConversionProfile.
	 **/
	setAsDefault: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("conversionprofile", "setAsDefault", kparams);
	},
	
	/**
	 * Get the partner's default conversion profile.
	 * @param	type	string		 (optional, enum: KalturaConversionProfileType, default: null)
	 * @return	KalturaConversionProfile.
	 **/
	getDefault: function(type){
		if(!type)
			type = null;
		var kparams = new Object();
		kparams.type = type;
		return new KalturaRequestBuilder("conversionprofile", "getDefault", kparams);
	},
	
	/**
	 * Add new Conversion Profile.
	 * @param	conversionProfile	KalturaConversionProfile		 (optional)
	 * @return	KalturaConversionProfile.
	 **/
	add: function(conversionProfile){
		var kparams = new Object();
		kparams.conversionProfile = conversionProfile;
		return new KalturaRequestBuilder("conversionprofile", "add", kparams);
	},
	
	/**
	 * Get Conversion Profile by ID.
	 * @param	id	int		 (optional)
	 * @return	KalturaConversionProfile.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("conversionprofile", "get", kparams);
	},
	
	/**
	 * Update Conversion Profile by ID.
	 * @param	id	int		 (optional)
	 * @param	conversionProfile	KalturaConversionProfile		 (optional)
	 * @return	KalturaConversionProfile.
	 **/
	update: function(id, conversionProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.conversionProfile = conversionProfile;
		return new KalturaRequestBuilder("conversionprofile", "update", kparams);
	},
	
	/**
	 * Delete Conversion Profile by ID.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("conversionprofile", "delete", kparams);
	},
	
	/**
	 * List Conversion Profiles by filter with paging support.
	 * @param	filter	KalturaConversionProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaConversionProfileListResponse.
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
		return new KalturaRequestBuilder("conversionprofile", "list", kparams);
	}
}

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

/**
 *Class definition for the Kaltura service: deliveryProfile.
 **/
var KalturaDeliveryProfileService = {
	/**
	 * Add new delivery..
	 * @param	delivery	KalturaDeliveryProfile		 (optional)
	 * @return	KalturaDeliveryProfile.
	 **/
	add: function(delivery){
		var kparams = new Object();
		kparams.delivery = delivery;
		return new KalturaRequestBuilder("deliveryprofile", "add", kparams);
	},
	
	/**
	 * Update exisiting delivery.
	 * @param	id	string		 (optional)
	 * @param	delivery	KalturaDeliveryProfile		 (optional)
	 * @return	KalturaDeliveryProfile.
	 **/
	update: function(id, delivery){
		var kparams = new Object();
		kparams.id = id;
		kparams.delivery = delivery;
		return new KalturaRequestBuilder("deliveryprofile", "update", kparams);
	},
	
	/**
	 * Get delivery by id.
	 * @param	id	string		 (optional)
	 * @return	KalturaDeliveryProfile.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("deliveryprofile", "get", kparams);
	},
	
	/**
	 * Add delivery based on existing delivery.
 *		Must provide valid sourceDeliveryId.
	 * @param	deliveryId	int		 (optional)
	 * @return	KalturaDeliveryProfile.
	 **/
	cloneAction: function(deliveryId){
		var kparams = new Object();
		kparams.deliveryId = deliveryId;
		return new KalturaRequestBuilder("deliveryprofile", "clone", kparams);
	},
	
	/**
	 * Retrieve a list of available delivery depends on the filter given.
	 * @param	filter	KalturaDeliveryProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaDeliveryProfileListResponse.
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
		return new KalturaRequestBuilder("deliveryprofile", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: EmailIngestionProfile.
 **/
var KalturaEmailIngestionProfileService = {
	/**
	 * EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB.
	 * @param	EmailIP	KalturaEmailIngestionProfile		Mandatory input parameter of type KalturaEmailIngestionProfile (optional)
	 * @return	KalturaEmailIngestionProfile.
	 **/
	add: function(EmailIP){
		var kparams = new Object();
		kparams.EmailIP = EmailIP;
		return new KalturaRequestBuilder("emailingestionprofile", "add", kparams);
	},
	
	/**
	 * Retrieve a EmailIngestionProfile by email address.
	 * @param	emailAddress	string		 (optional)
	 * @return	KalturaEmailIngestionProfile.
	 **/
	getByEmailAddress: function(emailAddress){
		var kparams = new Object();
		kparams.emailAddress = emailAddress;
		return new KalturaRequestBuilder("emailingestionprofile", "getByEmailAddress", kparams);
	},
	
	/**
	 * Retrieve a EmailIngestionProfile by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaEmailIngestionProfile.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("emailingestionprofile", "get", kparams);
	},
	
	/**
	 * Update an existing EmailIngestionProfile.
	 * @param	id	int		 (optional)
	 * @param	EmailIP	KalturaEmailIngestionProfile		 (optional)
	 * @return	KalturaEmailIngestionProfile.
	 **/
	update: function(id, EmailIP){
		var kparams = new Object();
		kparams.id = id;
		kparams.EmailIP = EmailIP;
		return new KalturaRequestBuilder("emailingestionprofile", "update", kparams);
	},
	
	/**
	 * Delete an existing EmailIngestionProfile.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("emailingestionprofile", "delete", kparams);
	},
	
	/**
	 * add KalturaMediaEntry from email ingestion.
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional)
	 * @param	uploadTokenId	string		Upload token id (optional)
	 * @param	emailProfId	int		 (optional)
	 * @param	fromAddress	string		 (optional)
	 * @param	emailMsgId	string		 (optional)
	 * @return	KalturaMediaEntry.
	 **/
	addMediaEntry: function(mediaEntry, uploadTokenId, emailProfId, fromAddress, emailMsgId){
		var kparams = new Object();
		kparams.mediaEntry = mediaEntry;
		kparams.uploadTokenId = uploadTokenId;
		kparams.emailProfId = emailProfId;
		kparams.fromAddress = fromAddress;
		kparams.emailMsgId = emailMsgId;
		return new KalturaRequestBuilder("emailingestionprofile", "addMediaEntry", kparams);
	}
}

/**
 *Class definition for the Kaltura service: entryServerNode.
 **/
var KalturaEntryServerNodeService = {
	/**
	 * .
	 * @param	id	int		 (optional)
	 * @param	entryServerNode	KalturaEntryServerNode		 (optional)
	 * @return	KalturaEntryServerNode.
	 **/
	update: function(id, entryServerNode){
		var kparams = new Object();
		kparams.id = id;
		kparams.entryServerNode = entryServerNode;
		return new KalturaRequestBuilder("entryservernode", "update", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaEntryServerNodeFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaEntryServerNodeListResponse.
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
		return new KalturaRequestBuilder("entryservernode", "list", kparams);
	},
	
	/**
	 * .
	 * @param	id	string		 (optional)
	 * @return	KalturaEntryServerNode.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("entryservernode", "get", kparams);
	},
	
	/**
	 * Validates server node still registered on entry.
	 * @param	id	int		entry server node id (optional)
	 * @return	.
	 **/
	validateRegisteredEntryServerNode: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("entryservernode", "validateRegisteredEntryServerNode", kparams);
	}
}

/**
 *Class definition for the Kaltura service: fileAsset.
 **/
var KalturaFileAssetService = {
	/**
	 * Add new file asset.
	 * @param	fileAsset	KalturaFileAsset		 (optional)
	 * @return	KalturaFileAsset.
	 **/
	add: function(fileAsset){
		var kparams = new Object();
		kparams.fileAsset = fileAsset;
		return new KalturaRequestBuilder("fileasset", "add", kparams);
	},
	
	/**
	 * Get file asset by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaFileAsset.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("fileasset", "get", kparams);
	},
	
	/**
	 * Update file asset by id.
	 * @param	id	int		 (optional)
	 * @param	fileAsset	KalturaFileAsset		 (optional)
	 * @return	KalturaFileAsset.
	 **/
	update: function(id, fileAsset){
		var kparams = new Object();
		kparams.id = id;
		kparams.fileAsset = fileAsset;
		return new KalturaRequestBuilder("fileasset", "update", kparams);
	},
	
	/**
	 * Delete file asset by id.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("fileasset", "delete", kparams);
	},
	
	/**
	 * Set content of file asset.
	 * @param	id	string		 (optional)
	 * @param	contentResource	KalturaContentResource		 (optional)
	 * @return	KalturaFileAsset.
	 **/
	setContent: function(id, contentResource){
		var kparams = new Object();
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new KalturaRequestBuilder("fileasset", "setContent", kparams);
	},
	
	/**
	 * List file assets by filter and pager.
	 * @param	filter	KalturaFileAssetFilter		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaFileAssetListResponse.
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("fileasset", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: flavorAsset.
 **/
var KalturaFlavorAssetService = {
	/**
	 * Add flavor asset.
	 * @param	entryId	string		 (optional)
	 * @param	flavorAsset	KalturaFlavorAsset		 (optional)
	 * @return	KalturaFlavorAsset.
	 **/
	add: function(entryId, flavorAsset){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.flavorAsset = flavorAsset;
		return new KalturaRequestBuilder("flavorasset", "add", kparams);
	},
	
	/**
	 * Update flavor asset.
	 * @param	id	string		 (optional)
	 * @param	flavorAsset	KalturaFlavorAsset		 (optional)
	 * @return	KalturaFlavorAsset.
	 **/
	update: function(id, flavorAsset){
		var kparams = new Object();
		kparams.id = id;
		kparams.flavorAsset = flavorAsset;
		return new KalturaRequestBuilder("flavorasset", "update", kparams);
	},
	
	/**
	 * Update content of flavor asset.
	 * @param	id	string		 (optional)
	 * @param	contentResource	KalturaContentResource		 (optional)
	 * @return	KalturaFlavorAsset.
	 **/
	setContent: function(id, contentResource){
		var kparams = new Object();
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new KalturaRequestBuilder("flavorasset", "setContent", kparams);
	},
	
	/**
	 * Get Flavor Asset by ID.
	 * @param	id	string		 (optional)
	 * @return	KalturaFlavorAsset.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorasset", "get", kparams);
	},
	
	/**
	 * Get Flavor Assets for Entry.
	 * @param	entryId	string		 (optional)
	 * @return	array.
	 **/
	getByEntryId: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("flavorasset", "getByEntryId", kparams);
	},
	
	/**
	 * List Flavor Assets by filter and pager.
	 * @param	filter	KalturaAssetFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaFlavorAssetListResponse.
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
		return new KalturaRequestBuilder("flavorasset", "list", kparams);
	},
	
	/**
	 * Get web playable Flavor Assets for Entry.
	 * @param	entryId	string		 (optional)
	 * @return	array.
	 **/
	getWebPlayableByEntryId: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("flavorasset", "getWebPlayableByEntryId", kparams);
	},
	
	/**
	 * Add and convert new Flavor Asset for Entry with specific Flavor Params.
	 * @param	entryId	string		 (optional)
	 * @param	flavorParamsId	int		 (optional)
	 * @param	priority	int		 (optional)
	 * @return	.
	 **/
	convert: function(entryId, flavorParamsId, priority){
		if(!priority)
			priority = 0;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.flavorParamsId = flavorParamsId;
		kparams.priority = priority;
		return new KalturaRequestBuilder("flavorasset", "convert", kparams);
	},
	
	/**
	 * Reconvert Flavor Asset by ID.
	 * @param	id	string		Flavor Asset ID (optional)
	 * @return	.
	 **/
	reconvert: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorasset", "reconvert", kparams);
	},
	
	/**
	 * Delete Flavor Asset by ID.
	 * @param	id	string		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorasset", "delete", kparams);
	},
	
	/**
	 * Get download URL for the asset.
	 * @param	id	string		 (optional)
	 * @param	storageId	int		 (optional, default: null)
	 * @param	forceProxy	bool		 (optional, default: false)
	 * @param	options	KalturaFlavorAssetUrlOptions		 (optional, default: null)
	 * @return	string.
	 **/
	getUrl: function(id, storageId, forceProxy, options){
		if(!storageId)
			storageId = null;
		if(!forceProxy)
			forceProxy = false;
		if(!options)
			options = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.storageId = storageId;
		kparams.forceProxy = forceProxy;
		if (options != null)
			kparams.options = options;
		return new KalturaRequestBuilder("flavorasset", "getUrl", kparams);
	},
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param	id	string		 (optional)
	 * @return	KalturaRemotePathListResponse.
	 **/
	getRemotePaths: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorasset", "getRemotePaths", kparams);
	},
	
	/**
	 * Get download URL for the Flavor Asset.
	 * @param	id	string		 (optional)
	 * @param	useCdn	bool		 (optional, default: false)
	 * @return	string.
	 **/
	getDownloadUrl: function(id, useCdn){
		if(!useCdn)
			useCdn = false;
		var kparams = new Object();
		kparams.id = id;
		kparams.useCdn = useCdn;
		return new KalturaRequestBuilder("flavorasset", "getDownloadUrl", kparams);
	},
	
	/**
	 * Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa).
	 * @param	entryId	string		 (optional)
	 * @return	array.
	 **/
	getFlavorAssetsWithParams: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("flavorasset", "getFlavorAssetsWithParams", kparams);
	},
	
	/**
	 * manually export an asset.
	 * @param	assetId	string		 (optional)
	 * @param	storageProfileId	int		 (optional)
	 * @return	KalturaFlavorAsset.
	 **/
	exportAction: function(assetId, storageProfileId){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.storageProfileId = storageProfileId;
		return new KalturaRequestBuilder("flavorasset", "export", kparams);
	},
	
	/**
	 * Set a given flavor as the original flavor.
	 * @param	assetId	string		 (optional)
	 * @return	.
	 **/
	setAsSource: function(assetId){
		var kparams = new Object();
		kparams.assetId = assetId;
		return new KalturaRequestBuilder("flavorasset", "setAsSource", kparams);
	},
	
	/**
	 * delete all local file syncs for this asset.
	 * @param	assetId	string		 (optional)
	 * @return	.
	 **/
	deleteLocalContent: function(assetId){
		var kparams = new Object();
		kparams.assetId = assetId;
		return new KalturaRequestBuilder("flavorasset", "deleteLocalContent", kparams);
	},
	
	/**
	 * serve cmd line to transcode the ad.
	 * @param	assetId	string		 (optional)
	 * @param	ffprobeJson	string		 (optional, default: null)
	 * @param	duration	string		 (optional, default: null)
	 * @return	.
	 **/
	serveAdStitchCmd: function(assetId, ffprobeJson, duration){
		if(!ffprobeJson)
			ffprobeJson = null;
		if(!duration)
			duration = null;
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.ffprobeJson = ffprobeJson;
		kparams.duration = duration;
		return new KalturaRequestBuilder("flavorasset", "serveAdStitchCmd", kparams);
	}
}

/**
 *Class definition for the Kaltura service: flavorParamsOutput.
 **/
var KalturaFlavorParamsOutputService = {
	/**
	 * Get flavor params output object by ID.
	 * @param	id	int		 (optional)
	 * @return	KalturaFlavorParamsOutput.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorparamsoutput", "get", kparams);
	},
	
	/**
	 * List flavor params output objects by filter and pager.
	 * @param	filter	KalturaFlavorParamsOutputFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaFlavorParamsOutputListResponse.
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
		return new KalturaRequestBuilder("flavorparamsoutput", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: flavorParams.
 **/
var KalturaFlavorParamsService = {
	/**
	 * Add new Flavor Params.
	 * @param	flavorParams	KalturaFlavorParams		 (optional)
	 * @return	KalturaFlavorParams.
	 **/
	add: function(flavorParams){
		var kparams = new Object();
		kparams.flavorParams = flavorParams;
		return new KalturaRequestBuilder("flavorparams", "add", kparams);
	},
	
	/**
	 * Get Flavor Params by ID.
	 * @param	id	int		 (optional)
	 * @return	KalturaFlavorParams.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorparams", "get", kparams);
	},
	
	/**
	 * Update Flavor Params by ID.
	 * @param	id	int		 (optional)
	 * @param	flavorParams	KalturaFlavorParams		 (optional)
	 * @return	KalturaFlavorParams.
	 **/
	update: function(id, flavorParams){
		var kparams = new Object();
		kparams.id = id;
		kparams.flavorParams = flavorParams;
		return new KalturaRequestBuilder("flavorparams", "update", kparams);
	},
	
	/**
	 * Delete Flavor Params by ID.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorparams", "delete", kparams);
	},
	
	/**
	 * List Flavor Params by filter with paging support (By default - all system default params will be listed too).
	 * @param	filter	KalturaFlavorParamsFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaFlavorParamsListResponse.
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
		return new KalturaRequestBuilder("flavorparams", "list", kparams);
	},
	
	/**
	 * Get Flavor Params by Conversion Profile ID.
	 * @param	conversionProfileId	int		 (optional)
	 * @return	array.
	 **/
	getByConversionProfileId: function(conversionProfileId){
		var kparams = new Object();
		kparams.conversionProfileId = conversionProfileId;
		return new KalturaRequestBuilder("flavorparams", "getByConversionProfileId", kparams);
	}
}

/**
 *Class definition for the Kaltura service: groupUser.
 **/
var KalturaGroupUserService = {
	/**
	 * Add new GroupUser.
	 * @param	groupUser	KalturaGroupUser		 (optional)
	 * @return	KalturaGroupUser.
	 **/
	add: function(groupUser){
		var kparams = new Object();
		kparams.groupUser = groupUser;
		return new KalturaRequestBuilder("groupuser", "add", kparams);
	},
	
	/**
	 * delete by userId and groupId.
	 * @param	userId	string		 (optional)
	 * @param	groupId	string		 (optional)
	 * @return	.
	 **/
	deleteAction: function(userId, groupId){
		var kparams = new Object();
		kparams.userId = userId;
		kparams.groupId = groupId;
		return new KalturaRequestBuilder("groupuser", "delete", kparams);
	},
	
	/**
	 * List all GroupUsers.
	 * @param	filter	KalturaGroupUserFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaGroupUserListResponse.
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
		return new KalturaRequestBuilder("groupuser", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: liveChannelSegment.
 **/
var KalturaLiveChannelSegmentService = {
	/**
	 * Add new live channel segment.
	 * @param	liveChannelSegment	KalturaLiveChannelSegment		 (optional)
	 * @return	KalturaLiveChannelSegment.
	 **/
	add: function(liveChannelSegment){
		var kparams = new Object();
		kparams.liveChannelSegment = liveChannelSegment;
		return new KalturaRequestBuilder("livechannelsegment", "add", kparams);
	},
	
	/**
	 * Get live channel segment by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaLiveChannelSegment.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livechannelsegment", "get", kparams);
	},
	
	/**
	 * Update live channel segment by id.
	 * @param	id	int		 (optional)
	 * @param	liveChannelSegment	KalturaLiveChannelSegment		 (optional)
	 * @return	KalturaLiveChannelSegment.
	 **/
	update: function(id, liveChannelSegment){
		var kparams = new Object();
		kparams.id = id;
		kparams.liveChannelSegment = liveChannelSegment;
		return new KalturaRequestBuilder("livechannelsegment", "update", kparams);
	},
	
	/**
	 * Delete live channel segment by id.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livechannelsegment", "delete", kparams);
	},
	
	/**
	 * List live channel segments by filter and pager.
	 * @param	filter	KalturaLiveChannelSegmentFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaLiveChannelSegmentListResponse.
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
		return new KalturaRequestBuilder("livechannelsegment", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: liveChannel.
 **/
var KalturaLiveChannelService = {
	/**
	 * Adds new live channel..
	 * @param	liveChannel	KalturaLiveChannel		Live channel metadata (optional)
	 * @return	KalturaLiveChannel.
	 **/
	add: function(liveChannel){
		var kparams = new Object();
		kparams.liveChannel = liveChannel;
		return new KalturaRequestBuilder("livechannel", "add", kparams);
	},
	
	/**
	 * Get live channel by ID..
	 * @param	id	string		Live channel id (optional)
	 * @return	KalturaLiveChannel.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livechannel", "get", kparams);
	},
	
	/**
	 * Update live channel. Only the properties that were set will be updated..
	 * @param	id	string		Live channel id to update (optional)
	 * @param	liveChannel	KalturaLiveChannel		Live channel metadata to update (optional)
	 * @return	KalturaLiveChannel.
	 **/
	update: function(id, liveChannel){
		var kparams = new Object();
		kparams.id = id;
		kparams.liveChannel = liveChannel;
		return new KalturaRequestBuilder("livechannel", "update", kparams);
	},
	
	/**
	 * Delete a live channel..
	 * @param	id	string		Live channel id to delete (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livechannel", "delete", kparams);
	},
	
	/**
	 * List live channels by filter with paging support..
	 * @param	filter	KalturaLiveChannelFilter		live channel filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 * @return	KalturaLiveChannelListResponse.
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
		return new KalturaRequestBuilder("livechannel", "list", kparams);
	},
	
	/**
	 * Delivering the status of a live channel (on-air/offline).
	 * @param	id	string		ID of the live channel (optional)
	 * @return	bool.
	 **/
	isLive: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livechannel", "isLive", kparams);
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
		return new KalturaRequestBuilder("livechannel", "appendRecording", kparams);
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
		return new KalturaRequestBuilder("livechannel", "registerMediaServer", kparams);
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
		return new KalturaRequestBuilder("livechannel", "unregisterMediaServer", kparams);
	},
	
	/**
	 * Validates all registered media servers.
	 * @param	entryId	string		Live entry id (optional)
	 * @return	.
	 **/
	validateRegisteredMediaServers: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("livechannel", "validateRegisteredMediaServers", kparams);
	}
}

/**
 *Class definition for the Kaltura service: liveReports.
 **/
var KalturaLiveReportsService = {
	/**
	 * .
	 * @param	reportType	string		 (optional, enum: KalturaLiveReportType)
	 * @param	filter	KalturaLiveReportInputFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	array.
	 **/
	getEvents: function(reportType, filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("livereports", "getEvents", kparams);
	},
	
	/**
	 * .
	 * @param	reportType	string		 (optional, enum: KalturaLiveReportType)
	 * @param	filter	KalturaLiveReportInputFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaLiveStatsListResponse.
	 **/
	getReport: function(reportType, filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("livereports", "getReport", kparams);
	},
	
	/**
	 * .
	 * @param	reportType	int		 (optional, enum: KalturaLiveReportExportType)
	 * @param	params	KalturaLiveReportExportParams		 (optional)
	 * @return	KalturaLiveReportExportResponse.
	 **/
	exportToCsv: function(reportType, params){
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.params = params;
		return new KalturaRequestBuilder("livereports", "exportToCsv", kparams);
	},
	
	/**
	 * Will serve a requested report.
	 * @param	id	string		- the requested id (optional)
	 * @return	string.
	 **/
	serveReport: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livereports", "serveReport", kparams);
	}
}

/**
 *Class definition for the Kaltura service: liveStats.
 **/
var KalturaLiveStatsService = {
	/**
	 * Will write to the event log a single line representing the event
 *		 KalturaStatsEvent $event.
	 * @param	event	KalturaLiveStatsEvent		 (optional)
	 * @return	bool.
	 **/
	collect: function(event){
		var kparams = new Object();
		kparams.event = event;
		return new KalturaRequestBuilder("livestats", "collect", kparams);
	}
}

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

/**
 *Class definition for the Kaltura service: mediaInfo.
 **/
var KalturaMediaInfoService = {
	/**
	 * List media info objects by filter and pager.
	 * @param	filter	KalturaMediaInfoFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaMediaInfoListResponse.
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
		return new KalturaRequestBuilder("mediainfo", "list", kparams);
	}
}

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

/**
 *Class definition for the Kaltura service: mixing.
 **/
var KalturaMixingService = {
	/**
	 * Adds a new mix.
 *		 If the dataContent is null, a default timeline will be created..
	 * @param	mixEntry	KalturaMixEntry		Mix entry metadata (optional)
	 * @return	KalturaMixEntry.
	 **/
	add: function(mixEntry){
		var kparams = new Object();
		kparams.mixEntry = mixEntry;
		return new KalturaRequestBuilder("mixing", "add", kparams);
	},
	
	/**
	 * Get mix entry by id..
	 * @param	entryId	string		Mix entry id (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 * @return	KalturaMixEntry.
	 **/
	get: function(entryId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		return new KalturaRequestBuilder("mixing", "get", kparams);
	},
	
	/**
	 * Update mix entry. Only the properties that were set will be updated..
	 * @param	entryId	string		Mix entry id to update (optional)
	 * @param	mixEntry	KalturaMixEntry		Mix entry metadata to update (optional)
	 * @return	KalturaMixEntry.
	 **/
	update: function(entryId, mixEntry){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.mixEntry = mixEntry;
		return new KalturaRequestBuilder("mixing", "update", kparams);
	},
	
	/**
	 * Delete a mix entry..
	 * @param	entryId	string		Mix entry id to delete (optional)
	 * @return	.
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("mixing", "delete", kparams);
	},
	
	/**
	 * List entries by filter with paging support.
 *		 Return parameter is an array of mix entries..
	 * @param	filter	KalturaMixEntryFilter		Mix entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 * @return	KalturaMixListResponse.
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
		return new KalturaRequestBuilder("mixing", "list", kparams);
	},
	
	/**
	 * Count mix entries by filter..
	 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null)
	 * @return	int.
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("mixing", "count", kparams);
	},
	
	/**
	 * Clones an existing mix..
	 * @param	entryId	string		Mix entry id to clone (optional)
	 * @return	KalturaMixEntry.
	 **/
	cloneAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("mixing", "clone", kparams);
	},
	
	/**
	 * Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version..
	 * @param	mixEntryId	string		Mix entry to append to its timeline (optional)
	 * @param	mediaEntryId	string		Media entry to append to the timeline (optional)
	 * @return	KalturaMixEntry.
	 **/
	appendMediaEntry: function(mixEntryId, mediaEntryId){
		var kparams = new Object();
		kparams.mixEntryId = mixEntryId;
		kparams.mediaEntryId = mediaEntryId;
		return new KalturaRequestBuilder("mixing", "appendMediaEntry", kparams);
	},
	
	/**
	 * Get the mixes in which the media entry is included.
	 * @param	mediaEntryId	string		 (optional)
	 * @return	array.
	 **/
	getMixesByMediaId: function(mediaEntryId){
		var kparams = new Object();
		kparams.mediaEntryId = mediaEntryId;
		return new KalturaRequestBuilder("mixing", "getMixesByMediaId", kparams);
	},
	
	/**
	 * Get all ready media entries that exist in the given mix id.
	 * @param	mixId	string		 (optional)
	 * @param	version	int		Desired version to get the data from (optional, default: -1)
	 * @return	array.
	 **/
	getReadyMediaEntries: function(mixId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.mixId = mixId;
		kparams.version = version;
		return new KalturaRequestBuilder("mixing", "getReadyMediaEntries", kparams);
	},
	
	/**
	 * Anonymously rank a mix entry, no validation is done on duplicate rankings.
	 * @param	entryId	string		 (optional)
	 * @param	rank	int		 (optional)
	 * @return	.
	 **/
	anonymousRank: function(entryId, rank){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.rank = rank;
		return new KalturaRequestBuilder("mixing", "anonymousRank", kparams);
	}
}

/**
 *Class definition for the Kaltura service: notification.
 **/
var KalturaNotificationService = {
	/**
	 * Return the notifications for a specific entry id and type.
	 * @param	entryId	string		 (optional)
	 * @param	type	int		 (optional, enum: KalturaNotificationType)
	 * @return	KalturaClientNotification.
	 **/
	getClientNotification: function(entryId, type){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.type = type;
		return new KalturaRequestBuilder("notification", "getClientNotification", kparams);
	}
}

/**
 *Class definition for the Kaltura service: partner.
 **/
var KalturaPartnerService = {
	/**
	 * Create a new Partner object.
	 * @param	partner	KalturaPartner		 (optional)
	 * @param	cmsPassword	string		 (optional)
	 * @param	templatePartnerId	int		 (optional, default: null)
	 * @param	silent	bool		 (optional, default: false)
	 * @return	KalturaPartner.
	 **/
	register: function(partner, cmsPassword, templatePartnerId, silent){
		if(!cmsPassword)
			cmsPassword = "";
		if(!templatePartnerId)
			templatePartnerId = null;
		if(!silent)
			silent = false;
		var kparams = new Object();
		kparams.partner = partner;
		kparams.cmsPassword = cmsPassword;
		kparams.templatePartnerId = templatePartnerId;
		kparams.silent = silent;
		return new KalturaRequestBuilder("partner", "register", kparams);
	},
	
	/**
	 * Update details and settings of an existing partner.
	 * @param	partner	KalturaPartner		 (optional)
	 * @param	allowEmpty	bool		 (optional, default: false)
	 * @return	KalturaPartner.
	 **/
	update: function(partner, allowEmpty){
		if(!allowEmpty)
			allowEmpty = false;
		var kparams = new Object();
		kparams.partner = partner;
		kparams.allowEmpty = allowEmpty;
		return new KalturaRequestBuilder("partner", "update", kparams);
	},
	
	/**
	 * Retrieve partner object by Id.
	 * @param	id	int		 (optional, default: null)
	 * @return	KalturaPartner.
	 **/
	get: function(id){
		if(!id)
			id = null;
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("partner", "get", kparams);
	},
	
	/**
	 * Retrieve partner secret and admin secret.
	 * @param	partnerId	int		 (optional)
	 * @param	adminEmail	string		 (optional)
	 * @param	cmsPassword	string		 (optional)
	 * @return	KalturaPartner.
	 **/
	getSecrets: function(partnerId, adminEmail, cmsPassword){
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.adminEmail = adminEmail;
		kparams.cmsPassword = cmsPassword;
		return new KalturaRequestBuilder("partner", "getSecrets", kparams);
	},
	
	/**
	 * Retrieve all info attributed to the partner
 *		 This action expects no parameters. It returns information for the current KS partnerId..
	 * @return	KalturaPartner.
	 **/
	getInfo: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("partner", "getInfo", kparams);
	},
	
	/**
	 * Get usage statistics for a partner
 *		 Calculation is done according to partner's package
 *		 Additional data returned is a graph points of streaming usage in a timeframe
 *		 The resolution can be "days" or "months".
	 * @param	year	int		 (optional)
	 * @param	month	int		 (optional, default: 1)
	 * @param	resolution	string		 (optional, enum: KalturaReportInterval, default: null)
	 * @return	KalturaPartnerUsage.
	 **/
	getUsage: function(year, month, resolution){
		if(!year)
			year = "";
		if(!month)
			month = 1;
		if(!resolution)
			resolution = null;
		var kparams = new Object();
		kparams.year = year;
		kparams.month = month;
		kparams.resolution = resolution;
		return new KalturaRequestBuilder("partner", "getUsage", kparams);
	},
	
	/**
	 * Get usage statistics for a partner
 *		 Calculation is done according to partner's package.
	 * @return	KalturaPartnerStatistics.
	 **/
	getStatistics: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("partner", "getStatistics", kparams);
	},
	
	/**
	 * Retrieve a list of partner objects which the current user is allowed to access..
	 * @param	partnerFilter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaPartnerListResponse.
	 **/
	listPartnersForUser: function(partnerFilter, pager){
		if(!partnerFilter)
			partnerFilter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (partnerFilter != null)
			kparams.partnerFilter = partnerFilter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("partner", "listPartnersForUser", kparams);
	},
	
	/**
	 * List partners by filter with paging support
 *		 Current implementation will only list the sub partners of the partner initiating the api call (using the current KS).
 *		 This action is only partially implemented to support listing sub partners of a VAR partner..
	 * @param	filter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaPartnerListResponse.
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
		return new KalturaRequestBuilder("partner", "list", kparams);
	},
	
	/**
	 * List partner's current processes' statuses.
	 * @return	KalturaFeatureStatusListResponse.
	 **/
	listFeatureStatus: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("partner", "listFeatureStatus", kparams);
	},
	
	/**
	 * Count partner's existing sub-publishers (count includes the partner itself)..
	 * @param	filter	KalturaPartnerFilter		 (optional, default: null)
	 * @return	int.
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("partner", "count", kparams);
	}
}

/**
 *Class definition for the Kaltura service: permissionItem.
 **/
var KalturaPermissionItemService = {
	/**
	 * Adds a new permission item object to the account.
 *		 This action is available only to Kaltura system administrators..
	 * @param	permissionItem	KalturaPermissionItem		The new permission item (optional)
	 * @return	KalturaPermissionItem.
	 **/
	add: function(permissionItem){
		var kparams = new Object();
		kparams.permissionItem = permissionItem;
		return new KalturaRequestBuilder("permissionitem", "add", kparams);
	},
	
	/**
	 * Retrieves a permission item object using its ID..
	 * @param	permissionItemId	int		The permission item's unique identifier (optional)
	 * @return	KalturaPermissionItem.
	 **/
	get: function(permissionItemId){
		var kparams = new Object();
		kparams.permissionItemId = permissionItemId;
		return new KalturaRequestBuilder("permissionitem", "get", kparams);
	},
	
	/**
	 * Updates an existing permission item object.
 *		 This action is available only to Kaltura system administrators..
	 * @param	permissionItemId	int		The permission item's unique identifier (optional)
	 * @param	permissionItem	KalturaPermissionItem		Id The permission item's unique identifier (optional)
	 * @return	KalturaPermissionItem.
	 **/
	update: function(permissionItemId, permissionItem){
		var kparams = new Object();
		kparams.permissionItemId = permissionItemId;
		kparams.permissionItem = permissionItem;
		return new KalturaRequestBuilder("permissionitem", "update", kparams);
	},
	
	/**
	 * Deletes an existing permission item object.
 *		 This action is available only to Kaltura system administrators..
	 * @param	permissionItemId	int		The permission item's unique identifier (optional)
	 * @return	KalturaPermissionItem.
	 **/
	deleteAction: function(permissionItemId){
		var kparams = new Object();
		kparams.permissionItemId = permissionItemId;
		return new KalturaRequestBuilder("permissionitem", "delete", kparams);
	},
	
	/**
	 * Lists permission item objects that are associated with an account..
	 * @param	filter	KalturaPermissionItemFilter		A filter used to exclude specific types of permission items (optional, default: null)
	 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null)
	 * @return	KalturaPermissionItemListResponse.
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
		return new KalturaRequestBuilder("permissionitem", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: permission.
 **/
var KalturaPermissionService = {
	/**
	 * Adds a new permission object to the account..
	 * @param	permission	KalturaPermission		The new permission (optional)
	 * @return	KalturaPermission.
	 **/
	add: function(permission){
		var kparams = new Object();
		kparams.permission = permission;
		return new KalturaRequestBuilder("permission", "add", kparams);
	},
	
	/**
	 * Retrieves a permission object using its ID..
	 * @param	permissionName	string		The name assigned to the permission (optional)
	 * @return	KalturaPermission.
	 **/
	get: function(permissionName){
		var kparams = new Object();
		kparams.permissionName = permissionName;
		return new KalturaRequestBuilder("permission", "get", kparams);
	},
	
	/**
	 * Updates an existing permission object..
	 * @param	permissionName	string		The name assigned to the permission (optional)
	 * @param	permission	KalturaPermission		Name The name assigned to the permission (optional)
	 * @return	KalturaPermission.
	 **/
	update: function(permissionName, permission){
		var kparams = new Object();
		kparams.permissionName = permissionName;
		kparams.permission = permission;
		return new KalturaRequestBuilder("permission", "update", kparams);
	},
	
	/**
	 * Deletes an existing permission object..
	 * @param	permissionName	string		The name assigned to the permission (optional)
	 * @return	KalturaPermission.
	 **/
	deleteAction: function(permissionName){
		var kparams = new Object();
		kparams.permissionName = permissionName;
		return new KalturaRequestBuilder("permission", "delete", kparams);
	},
	
	/**
	 * Lists permission objects that are associated with an account.
 *		 Blocked permissions are listed unless you use a filter to exclude them.
 *		 Blocked permissions are listed unless you use a filter to exclude them..
	 * @param	filter	KalturaPermissionFilter		A filter used to exclude specific types of permissions (optional, default: null)
	 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null)
	 * @return	KalturaPermissionListResponse.
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
		return new KalturaRequestBuilder("permission", "list", kparams);
	},
	
	/**
	 * Retrieves a list of permissions that apply to the current KS..
	 * @return	string.
	 **/
	getCurrentPermissions: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("permission", "getCurrentPermissions", kparams);
	}
}

/**
 *Class definition for the Kaltura service: playlist.
 **/
var KalturaPlaylistService = {
	/**
	 * Add new playlist
 *		 Note that all entries used in a playlist will become public and may appear in KalturaNetwork.
	 * @param	playlist	KalturaPlaylist		 (optional)
	 * @param	updateStats	bool		indicates that the playlist statistics attributes should be updated synchronously now (optional, default: false)
	 * @return	KalturaPlaylist.
	 **/
	add: function(playlist, updateStats){
		if(!updateStats)
			updateStats = false;
		var kparams = new Object();
		kparams.playlist = playlist;
		kparams.updateStats = updateStats;
		return new KalturaRequestBuilder("playlist", "add", kparams);
	},
	
	/**
	 * Retrieve a playlist.
	 * @param	id	string		 (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 * @return	KalturaPlaylist.
	 **/
	get: function(id, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.id = id;
		kparams.version = version;
		return new KalturaRequestBuilder("playlist", "get", kparams);
	},
	
	/**
	 * Update existing playlist
 *		 Note - you cannot change playlist type. updated playlist must be of the same type..
	 * @param	id	string		 (optional)
	 * @param	playlist	KalturaPlaylist		 (optional)
	 * @param	updateStats	bool		 (optional, default: false)
	 * @return	KalturaPlaylist.
	 **/
	update: function(id, playlist, updateStats){
		if(!updateStats)
			updateStats = false;
		var kparams = new Object();
		kparams.id = id;
		kparams.playlist = playlist;
		kparams.updateStats = updateStats;
		return new KalturaRequestBuilder("playlist", "update", kparams);
	},
	
	/**
	 * Delete existing playlist.
	 * @param	id	string		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("playlist", "delete", kparams);
	},
	
	/**
	 * Clone an existing playlist.
	 * @param	id	string		Id of the playlist to clone (optional)
	 * @param	newPlaylist	KalturaPlaylist		Parameters defined here will override the ones in the cloned playlist (optional, default: null)
	 * @return	KalturaPlaylist.
	 **/
	cloneAction: function(id, newPlaylist){
		if(!newPlaylist)
			newPlaylist = null;
		var kparams = new Object();
		kparams.id = id;
		if (newPlaylist != null)
			kparams.newPlaylist = newPlaylist;
		return new KalturaRequestBuilder("playlist", "clone", kparams);
	},
	
	/**
	 * List available playlists.
	 * @param	filter	KalturaPlaylistFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaPlaylistListResponse.
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
		return new KalturaRequestBuilder("playlist", "list", kparams);
	},
	
	/**
	 * Retrieve playlist for playing purpose.
	 * @param	id	string		 (optional)
	 * @param	detailed	string		 (optional)
	 * @param	playlistContext	KalturaContext		 (optional, default: null)
	 * @param	filter	KalturaMediaEntryFilterForPlaylist		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	array.
	 **/
	execute: function(id, detailed, playlistContext, filter, pager){
		if(!detailed)
			detailed = "";
		if(!playlistContext)
			playlistContext = null;
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.detailed = detailed;
		if (playlistContext != null)
			kparams.playlistContext = playlistContext;
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("playlist", "execute", kparams);
	},
	
	/**
	 * Retrieve playlist for playing purpose, based on content.
	 * @param	playlistType	int		 (optional, enum: KalturaPlaylistType)
	 * @param	playlistContent	string		 (optional)
	 * @param	detailed	string		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	array.
	 **/
	executeFromContent: function(playlistType, playlistContent, detailed, pager){
		if(!detailed)
			detailed = "";
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.playlistType = playlistType;
		kparams.playlistContent = playlistContent;
		kparams.detailed = detailed;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("playlist", "executeFromContent", kparams);
	},
	
	/**
	 * Revrieve playlist for playing purpose, based on media entry filters.
	 * @param	filters	array		 (optional)
	 * @param	totalResults	int		 (optional)
	 * @param	detailed	string		 (optional, default: 1)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	array.
	 **/
	executeFromFilters: function(filters, totalResults, detailed, pager){
		if(!detailed)
			detailed = 1;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filters = filters;
		kparams.totalResults = totalResults;
		kparams.detailed = detailed;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("playlist", "executeFromFilters", kparams);
	},
	
	/**
	 * Retrieve playlist statistics.
	 * @param	playlistType	int		 (optional, enum: KalturaPlaylistType)
	 * @param	playlistContent	string		 (optional)
	 * @return	KalturaPlaylist.
	 **/
	getStatsFromContent: function(playlistType, playlistContent){
		var kparams = new Object();
		kparams.playlistType = playlistType;
		kparams.playlistContent = playlistContent;
		return new KalturaRequestBuilder("playlist", "getStatsFromContent", kparams);
	}
}

/**
 *Class definition for the Kaltura service: report.
 **/
var KalturaReportService = {
	/**
	 * report getGraphs action allows to get a graph data for a specific report..
	 * @param	reportType	string		 (optional, enum: KalturaReportType)
	 * @param	reportInputFilter	KalturaReportInputFilter		 (optional)
	 * @param	dimension	string		 (optional, default: null)
	 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @return	array.
	 **/
	getGraphs: function(reportType, reportInputFilter, dimension, objectIds){
		if(!dimension)
			dimension = null;
		if(!objectIds)
			objectIds = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.dimension = dimension;
		kparams.objectIds = objectIds;
		return new KalturaRequestBuilder("report", "getGraphs", kparams);
	},
	
	/**
	 * report getTotal action allows to get a graph data for a specific report..
	 * @param	reportType	string		 (optional, enum: KalturaReportType)
	 * @param	reportInputFilter	KalturaReportInputFilter		 (optional)
	 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @return	KalturaReportTotal.
	 **/
	getTotal: function(reportType, reportInputFilter, objectIds){
		if(!objectIds)
			objectIds = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.objectIds = objectIds;
		return new KalturaRequestBuilder("report", "getTotal", kparams);
	},
	
	/**
	 * report getBaseTotal action allows to get a the total base for storage reports.
	 * @param	reportType	string		 (optional, enum: KalturaReportType)
	 * @param	reportInputFilter	KalturaReportInputFilter		 (optional)
	 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @return	array.
	 **/
	getBaseTotal: function(reportType, reportInputFilter, objectIds){
		if(!objectIds)
			objectIds = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.objectIds = objectIds;
		return new KalturaRequestBuilder("report", "getBaseTotal", kparams);
	},
	
	/**
	 * report getTable action allows to get a graph data for a specific report..
	 * @param	reportType	string		 (optional, enum: KalturaReportType)
	 * @param	reportInputFilter	KalturaReportInputFilter		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional)
	 * @param	order	string		 (optional, default: null)
	 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @return	KalturaReportTable.
	 **/
	getTable: function(reportType, reportInputFilter, pager, order, objectIds){
		if(!order)
			order = null;
		if(!objectIds)
			objectIds = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.pager = pager;
		kparams.order = order;
		kparams.objectIds = objectIds;
		return new KalturaRequestBuilder("report", "getTable", kparams);
	},
	
	/**
	 * will create a Csv file for the given report and return the URL to access it.
	 * @param	reportTitle	string		The title of the report to display at top of CSV (optional)
	 * @param	reportText	string		The text of the filter of the report (optional)
	 * @param	headers	string		The headers of the columns - a map between the enumerations on the server side and the their display text (optional)
	 * @param	reportType	string		 (optional, enum: KalturaReportType)
	 * @param	reportInputFilter	KalturaReportInputFilter		 (optional)
	 * @param	dimension	string		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @param	order	string		 (optional, default: null)
	 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @return	string.
	 **/
	getUrlForReportAsCsv: function(reportTitle, reportText, headers, reportType, reportInputFilter, dimension, pager, order, objectIds){
		if(!dimension)
			dimension = null;
		if(!pager)
			pager = null;
		if(!order)
			order = null;
		if(!objectIds)
			objectIds = null;
		var kparams = new Object();
		kparams.reportTitle = reportTitle;
		kparams.reportText = reportText;
		kparams.headers = headers;
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.dimension = dimension;
		if (pager != null)
			kparams.pager = pager;
		kparams.order = order;
		kparams.objectIds = objectIds;
		return new KalturaRequestBuilder("report", "getUrlForReportAsCsv", kparams);
	},
	
	/**
	 * Will serve a requested report.
	 * @param	id	string		- the requested id (optional)
	 * @return	string.
	 **/
	serve: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("report", "serve", kparams);
	},
	
	/**
	 * .
	 * @param	id	int		 (optional)
	 * @param	params	array		 (optional, default: null)
	 * @return	KalturaReportResponse.
	 **/
	execute: function(id, params){
		if(!params)
			params = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.params = params;
		return new KalturaRequestBuilder("report", "execute", kparams);
	}
}

/**
 *Class definition for the Kaltura service: responseProfile.
 **/
var KalturaResponseProfileService = {
	/**
	 * Add new response profile.
	 * @param	addResponseProfile	KalturaResponseProfile		 (optional)
	 * @return	KalturaResponseProfile.
	 **/
	add: function(addResponseProfile){
		var kparams = new Object();
		kparams.addResponseProfile = addResponseProfile;
		return new KalturaRequestBuilder("responseprofile", "add", kparams);
	},
	
	/**
	 * Get response profile by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaResponseProfile.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("responseprofile", "get", kparams);
	},
	
	/**
	 * Update response profile by id.
	 * @param	id	int		 (optional)
	 * @param	updateResponseProfile	KalturaResponseProfile		 (optional)
	 * @return	KalturaResponseProfile.
	 **/
	update: function(id, updateResponseProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.updateResponseProfile = updateResponseProfile;
		return new KalturaRequestBuilder("responseprofile", "update", kparams);
	},
	
	/**
	 * Update response profile status by id.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaResponseProfileStatus)
	 * @return	KalturaResponseProfile.
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("responseprofile", "updateStatus", kparams);
	},
	
	/**
	 * Delete response profile by id.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("responseprofile", "delete", kparams);
	},
	
	/**
	 * List response profiles by filter and pager.
	 * @param	filter	KalturaResponseProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaResponseProfileListResponse.
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
		return new KalturaRequestBuilder("responseprofile", "list", kparams);
	},
	
	/**
	 * Recalculate response profile cached objects.
	 * @param	options	KalturaResponseProfileCacheRecalculateOptions		 (optional)
	 * @return	KalturaResponseProfileCacheRecalculateResults.
	 **/
	recalculate: function(options){
		var kparams = new Object();
		kparams.options = options;
		return new KalturaRequestBuilder("responseprofile", "recalculate", kparams);
	},
	
	/**
	 * Clone an existing response profile.
	 * @param	id	int		 (optional)
	 * @param	profile	KalturaResponseProfile		 (optional)
	 * @return	KalturaResponseProfile.
	 **/
	cloneAction: function(id, profile){
		var kparams = new Object();
		kparams.id = id;
		kparams.profile = profile;
		return new KalturaRequestBuilder("responseprofile", "clone", kparams);
	}
}

/**
 *Class definition for the Kaltura service: schema.
 **/
var KalturaSchemaService = {

}

/**
 *Class definition for the Kaltura service: search.
 **/
var KalturaSearchService = {
	/**
	 * Search for media in one of the supported media providers.
	 * @param	search	KalturaSearch		A KalturaSearch object contains the search keywords, media provider and media type (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaSearchResultResponse.
	 **/
	search: function(search, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.search = search;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("search", "search", kparams);
	},
	
	/**
	 * Retrieve extra information about media found in search action
 *		 Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields..
	 * @param	searchResult	KalturaSearchResult		KalturaSearchResult object extends KalturaSearch and has all fields required for media:add (optional)
	 * @return	KalturaSearchResult.
	 **/
	getMediaInfo: function(searchResult){
		var kparams = new Object();
		kparams.searchResult = searchResult;
		return new KalturaRequestBuilder("search", "getMediaInfo", kparams);
	},
	
	/**
	 * Search for media given a specific URL
 *		 Kaltura supports a searchURL action on some of the media providers.
 *		 This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported).
	 * @param	mediaType	int		 (optional, enum: KalturaMediaType)
	 * @param	url	string		 (optional)
	 * @return	KalturaSearchResult.
	 **/
	searchUrl: function(mediaType, url){
		var kparams = new Object();
		kparams.mediaType = mediaType;
		kparams.url = url;
		return new KalturaRequestBuilder("search", "searchUrl", kparams);
	},
	
	/**
	 * .
	 * @param	searchSource	int		 (optional, enum: KalturaSearchProviderType)
	 * @param	userName	string		 (optional)
	 * @param	password	string		 (optional)
	 * @return	KalturaSearchAuthData.
	 **/
	externalLogin: function(searchSource, userName, password){
		var kparams = new Object();
		kparams.searchSource = searchSource;
		kparams.userName = userName;
		kparams.password = password;
		return new KalturaRequestBuilder("search", "externalLogin", kparams);
	}
}

/**
 *Class definition for the Kaltura service: serverNode.
 **/
var KalturaServerNodeService = {
	/**
	 * Adds a server node to the Kaltura DB..
	 * @param	serverNode	KalturaServerNode		 (optional)
	 * @return	KalturaServerNode.
	 **/
	add: function(serverNode){
		var kparams = new Object();
		kparams.serverNode = serverNode;
		return new KalturaRequestBuilder("servernode", "add", kparams);
	},
	
	/**
	 * Get server node by id.
	 * @param	serverNodeId	int		 (optional)
	 * @return	KalturaServerNode.
	 **/
	get: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "get", kparams);
	},
	
	/**
	 * Update server node by id.
	 * @param	serverNodeId	int		 (optional)
	 * @param	serverNode	KalturaServerNode		Id (optional)
	 * @return	KalturaServerNode.
	 **/
	update: function(serverNodeId, serverNode){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		kparams.serverNode = serverNode;
		return new KalturaRequestBuilder("servernode", "update", kparams);
	},
	
	/**
	 * delete server node by id.
	 * @param	serverNodeId	string		 (optional)
	 * @return	.
	 **/
	deleteAction: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "delete", kparams);
	},
	
	/**
	 * Disable server node by id.
	 * @param	serverNodeId	string		 (optional)
	 * @return	KalturaServerNode.
	 **/
	disable: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "disable", kparams);
	},
	
	/**
	 * Enable server node by id.
	 * @param	serverNodeId	string		 (optional)
	 * @return	KalturaServerNode.
	 **/
	enable: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "enable", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaServerNodeFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaServerNodeListResponse.
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
		return new KalturaRequestBuilder("servernode", "list", kparams);
	},
	
	/**
	 * Update server node status.
	 * @param	hostName	string		 (optional)
	 * @param	serverNode	KalturaServerNode		 (optional, default: null)
	 * @return	KalturaServerNode.
	 **/
	reportStatus: function(hostName, serverNode){
		if(!serverNode)
			serverNode = null;
		var kparams = new Object();
		kparams.hostName = hostName;
		if (serverNode != null)
			kparams.serverNode = serverNode;
		return new KalturaRequestBuilder("servernode", "reportStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: session.
 **/
var KalturaSessionService = {
	/**
	 * Start a session with Kaltura's server.
 *		 The result KS is the session key that you should pass to all services that requires a ticket..
	 * @param	secret	string		Remember to provide the correct secret according to the sessionType you want (optional)
	 * @param	userId	string		 (optional)
	 * @param	type	int		Regular session or Admin session (optional, enum: KalturaSessionType)
	 * @param	partnerId	int		 (optional, default: null)
	 * @param	expiry	int		KS expiry time in seconds (optional, default: 86400)
	 * @param	privileges	string		 (optional, default: null)
	 * @return	string.
	 **/
	start: function(secret, userId, type, partnerId, expiry, privileges){
		if(!userId)
			userId = "";
		if(!type)
			type = 0;
		if(!partnerId)
			partnerId = null;
		if(!expiry)
			expiry = 86400;
		if(!privileges)
			privileges = null;
		var kparams = new Object();
		kparams.secret = secret;
		kparams.userId = userId;
		kparams.type = type;
		kparams.partnerId = partnerId;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new KalturaRequestBuilder("session", "start", kparams);
	},
	
	/**
	 * End a session with the Kaltura server, making the current KS invalid..
	 * @return	.
	 **/
	end: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("session", "end", kparams);
	},
	
	/**
	 * Start an impersonated session with Kaltura's server.
 *		 The result KS is the session key that you should pass to all services that requires a ticket..
	 * @param	secret	string		- should be the secret (admin or user) of the original partnerId (not impersonatedPartnerId). (optional)
	 * @param	impersonatedPartnerId	int		 (optional)
	 * @param	userId	string		- impersonated userId (optional)
	 * @param	type	int		 (optional, enum: KalturaSessionType)
	 * @param	partnerId	int		 (optional, default: null)
	 * @param	expiry	int		KS expiry time in seconds (optional, default: 86400)
	 * @param	privileges	string		 (optional, default: null)
	 * @return	string.
	 **/
	impersonate: function(secret, impersonatedPartnerId, userId, type, partnerId, expiry, privileges){
		if(!userId)
			userId = "";
		if(!type)
			type = 0;
		if(!partnerId)
			partnerId = null;
		if(!expiry)
			expiry = 86400;
		if(!privileges)
			privileges = null;
		var kparams = new Object();
		kparams.secret = secret;
		kparams.impersonatedPartnerId = impersonatedPartnerId;
		kparams.userId = userId;
		kparams.type = type;
		kparams.partnerId = partnerId;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new KalturaRequestBuilder("session", "impersonate", kparams);
	},
	
	/**
	 * Start an impersonated session with Kaltura's server.
 *		 The result KS info contains the session key that you should pass to all services that requires a ticket.
 *		 Type, expiry and privileges won't be changed if they're not set.
	 * @param	session	string		The old KS of the impersonated partner (optional)
	 * @param	type	int		Type of the new KS (optional, enum: KalturaSessionType, default: null)
	 * @param	expiry	int		Expiry time in seconds of the new KS (optional, default: null)
	 * @param	privileges	string		Privileges of the new KS (optional, default: null)
	 * @return	KalturaSessionInfo.
	 **/
	impersonateByKs: function(session, type, expiry, privileges){
		if(!type)
			type = null;
		if(!expiry)
			expiry = null;
		if(!privileges)
			privileges = null;
		var kparams = new Object();
		kparams.session = session;
		kparams.type = type;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new KalturaRequestBuilder("session", "impersonateByKs", kparams);
	},
	
	/**
	 * Parse session key and return its info.
	 * @param	session	string		The KS to be parsed, keep it empty to use current session. (optional, default: null)
	 * @return	KalturaSessionInfo.
	 **/
	get: function(session){
		if(!session)
			session = null;
		var kparams = new Object();
		kparams.session = session;
		return new KalturaRequestBuilder("session", "get", kparams);
	},
	
	/**
	 * Start a session for Kaltura's flash widgets.
	 * @param	widgetId	string		 (optional)
	 * @param	expiry	int		 (optional, default: 86400)
	 * @return	KalturaStartWidgetSessionResponse.
	 **/
	startWidgetSession: function(widgetId, expiry){
		if(!expiry)
			expiry = 86400;
		var kparams = new Object();
		kparams.widgetId = widgetId;
		kparams.expiry = expiry;
		return new KalturaRequestBuilder("session", "startWidgetSession", kparams);
	}
}

/**
 *Class definition for the Kaltura service: stats.
 **/
var KalturaStatsService = {
	/**
	 * Will write to the event log a single line representing the event
 *		 client version - will help interprete the line structure. different client versions might have slightly different data/data formats in the line
 *	event_id - number is the row number in yuval's excel
 *	datetime - same format as MySql's datetime - can change and should reflect the time zone
 *	session id - can be some big random number or guid
 *	partner id
 *	entry id
 *	unique viewer
 *	widget id
 *	ui_conf id
 *	uid - the puser id as set by the ppartner
 *	current point - in milliseconds
 *	duration - milliseconds
 *	user ip
 *	process duration - in milliseconds
 *	control id
 *	seek
 *	new point
 *	referrer
 *		
 *		
 *		 KalturaStatsEvent $event.
	 * @param	event	KalturaStatsEvent		 (optional)
	 * @return	bool.
	 **/
	collect: function(event){
		var kparams = new Object();
		kparams.event = event;
		return new KalturaRequestBuilder("stats", "collect", kparams);
	},
	
	/**
	 * Will collect the kmcEvent sent form the KMC client
 *		 // this will actually be an empty function because all events will be sent using GET and will anyway be logged in the apache log.
	 * @param	kmcEvent	KalturaStatsKmcEvent		 (optional)
	 * @return	.
	 **/
	kmcCollect: function(kmcEvent){
		var kparams = new Object();
		kparams.kmcEvent = kmcEvent;
		return new KalturaRequestBuilder("stats", "kmcCollect", kparams);
	},
	
	/**
	 * .
	 * @param	kalturaCEError	KalturaCEError		 (optional)
	 * @return	KalturaCEError.
	 **/
	reportKceError: function(kalturaCEError){
		var kparams = new Object();
		kparams.kalturaCEError = kalturaCEError;
		return new KalturaRequestBuilder("stats", "reportKceError", kparams);
	},
	
	/**
	 * Use this action to report errors to the kaltura server..
	 * @param	errorCode	string		 (optional)
	 * @param	errorMessage	string		 (optional)
	 * @return	.
	 **/
	reportError: function(errorCode, errorMessage){
		var kparams = new Object();
		kparams.errorCode = errorCode;
		kparams.errorMessage = errorMessage;
		return new KalturaRequestBuilder("stats", "reportError", kparams);
	}
}

/**
 *Class definition for the Kaltura service: storageProfile.
 **/
var KalturaStorageProfileService = {
	/**
	 * Adds a storage profile to the Kaltura DB..
	 * @param	storageProfile	KalturaStorageProfile		 (optional)
	 * @return	KalturaStorageProfile.
	 **/
	add: function(storageProfile){
		var kparams = new Object();
		kparams.storageProfile = storageProfile;
		return new KalturaRequestBuilder("storageprofile", "add", kparams);
	},
	
	/**
	 * .
	 * @param	storageId	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaStorageProfileStatus)
	 * @return	.
	 **/
	updateStatus: function(storageId, status){
		var kparams = new Object();
		kparams.storageId = storageId;
		kparams.status = status;
		return new KalturaRequestBuilder("storageprofile", "updateStatus", kparams);
	},
	
	/**
	 * Get storage profile by id.
	 * @param	storageProfileId	int		 (optional)
	 * @return	KalturaStorageProfile.
	 **/
	get: function(storageProfileId){
		var kparams = new Object();
		kparams.storageProfileId = storageProfileId;
		return new KalturaRequestBuilder("storageprofile", "get", kparams);
	},
	
	/**
	 * Update storage profile by id.
	 * @param	storageProfileId	int		 (optional)
	 * @param	storageProfile	KalturaStorageProfile		Id (optional)
	 * @return	KalturaStorageProfile.
	 **/
	update: function(storageProfileId, storageProfile){
		var kparams = new Object();
		kparams.storageProfileId = storageProfileId;
		kparams.storageProfile = storageProfile;
		return new KalturaRequestBuilder("storageprofile", "update", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaStorageProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaStorageProfileListResponse.
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
		return new KalturaRequestBuilder("storageprofile", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: syndicationFeed.
 **/
var KalturaSyndicationFeedService = {
	/**
	 * Add new Syndication Feed.
	 * @param	syndicationFeed	KalturaBaseSyndicationFeed		 (optional)
	 * @return	KalturaBaseSyndicationFeed.
	 **/
	add: function(syndicationFeed){
		var kparams = new Object();
		kparams.syndicationFeed = syndicationFeed;
		return new KalturaRequestBuilder("syndicationfeed", "add", kparams);
	},
	
	/**
	 * Get Syndication Feed by ID.
	 * @param	id	string		 (optional)
	 * @return	KalturaBaseSyndicationFeed.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("syndicationfeed", "get", kparams);
	},
	
	/**
	 * Update Syndication Feed by ID.
	 * @param	id	string		 (optional)
	 * @param	syndicationFeed	KalturaBaseSyndicationFeed		 (optional)
	 * @return	KalturaBaseSyndicationFeed.
	 **/
	update: function(id, syndicationFeed){
		var kparams = new Object();
		kparams.id = id;
		kparams.syndicationFeed = syndicationFeed;
		return new KalturaRequestBuilder("syndicationfeed", "update", kparams);
	},
	
	/**
	 * Delete Syndication Feed by ID.
	 * @param	id	string		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("syndicationfeed", "delete", kparams);
	},
	
	/**
	 * List Syndication Feeds by filter with paging support.
	 * @param	filter	KalturaBaseSyndicationFeedFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaBaseSyndicationFeedListResponse.
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
		return new KalturaRequestBuilder("syndicationfeed", "list", kparams);
	},
	
	/**
	 * get entry count for a syndication feed.
	 * @param	feedId	string		 (optional)
	 * @return	KalturaSyndicationFeedEntryCount.
	 **/
	getEntryCount: function(feedId){
		var kparams = new Object();
		kparams.feedId = feedId;
		return new KalturaRequestBuilder("syndicationfeed", "getEntryCount", kparams);
	},
	
	/**
	 * request conversion for all entries that doesnt have the required flavor param
 *		 returns a comma-separated ids of conversion jobs.
	 * @param	feedId	string		 (optional)
	 * @return	string.
	 **/
	requestConversion: function(feedId){
		var kparams = new Object();
		kparams.feedId = feedId;
		return new KalturaRequestBuilder("syndicationfeed", "requestConversion", kparams);
	}
}

/**
 *Class definition for the Kaltura service: system.
 **/
var KalturaSystemService = {
	/**
	 * .
	 * @return	bool.
	 **/
	ping: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "ping", kparams);
	},
	
	/**
	 * .
	 * @return	bool.
	 **/
	pingDatabase: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "pingDatabase", kparams);
	},
	
	/**
	 * .
	 * @return	int.
	 **/
	getTime: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getTime", kparams);
	},
	
	/**
	 * .
	 * @return	string.
	 **/
	getVersion: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getVersion", kparams);
	}
}

/**
 *Class definition for the Kaltura service: thumbAsset.
 **/
var KalturaThumbAssetService = {
	/**
	 * Add thumbnail asset.
	 * @param	entryId	string		 (optional)
	 * @param	thumbAsset	KalturaThumbAsset		 (optional)
	 * @return	KalturaThumbAsset.
	 **/
	add: function(entryId, thumbAsset){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.thumbAsset = thumbAsset;
		return new KalturaRequestBuilder("thumbasset", "add", kparams);
	},
	
	/**
	 * Update content of thumbnail asset.
	 * @param	id	string		 (optional)
	 * @param	contentResource	KalturaContentResource		 (optional)
	 * @return	KalturaThumbAsset.
	 **/
	setContent: function(id, contentResource){
		var kparams = new Object();
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new KalturaRequestBuilder("thumbasset", "setContent", kparams);
	},
	
	/**
	 * Update thumbnail asset.
	 * @param	id	string		 (optional)
	 * @param	thumbAsset	KalturaThumbAsset		 (optional)
	 * @return	KalturaThumbAsset.
	 **/
	update: function(id, thumbAsset){
		var kparams = new Object();
		kparams.id = id;
		kparams.thumbAsset = thumbAsset;
		return new KalturaRequestBuilder("thumbasset", "update", kparams);
	},
	
	/**
	 * Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 *		 Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync..
	 * @param	thumbAssetId	string		 (optional)
	 * @return	.
	 **/
	setAsDefault: function(thumbAssetId){
		var kparams = new Object();
		kparams.thumbAssetId = thumbAssetId;
		return new KalturaRequestBuilder("thumbasset", "setAsDefault", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	destThumbParamsId	int		indicate the id of the ThumbParams to be generate this thumbnail by (optional)
	 * @return	KalturaThumbAsset.
	 **/
	generateByEntryId: function(entryId, destThumbParamsId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.destThumbParamsId = destThumbParamsId;
		return new KalturaRequestBuilder("thumbasset", "generateByEntryId", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	thumbParams	KalturaThumbParams		 (optional)
	 * @param	sourceAssetId	string		id of the source asset (flavor or thumbnail) to be used as source for the thumbnail generation (optional, default: null)
	 * @return	KalturaThumbAsset.
	 **/
	generate: function(entryId, thumbParams, sourceAssetId){
		if(!sourceAssetId)
			sourceAssetId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.thumbParams = thumbParams;
		kparams.sourceAssetId = sourceAssetId;
		return new KalturaRequestBuilder("thumbasset", "generate", kparams);
	},
	
	/**
	 * .
	 * @param	thumbAssetId	string		 (optional)
	 * @return	KalturaThumbAsset.
	 **/
	regenerate: function(thumbAssetId){
		var kparams = new Object();
		kparams.thumbAssetId = thumbAssetId;
		return new KalturaRequestBuilder("thumbasset", "regenerate", kparams);
	},
	
	/**
	 * .
	 * @param	thumbAssetId	string		 (optional)
	 * @return	KalturaThumbAsset.
	 **/
	get: function(thumbAssetId){
		var kparams = new Object();
		kparams.thumbAssetId = thumbAssetId;
		return new KalturaRequestBuilder("thumbasset", "get", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @return	array.
	 **/
	getByEntryId: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("thumbasset", "getByEntryId", kparams);
	},
	
	/**
	 * List Thumbnail Assets by filter and pager.
	 * @param	filter	KalturaAssetFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaThumbAssetListResponse.
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
		return new KalturaRequestBuilder("thumbasset", "list", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	url	string		 (optional)
	 * @return	KalturaThumbAsset.
	 **/
	addFromUrl: function(entryId, url){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.url = url;
		return new KalturaRequestBuilder("thumbasset", "addFromUrl", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	fileData	file		 (optional)
	 * @return	KalturaThumbAsset.
	 **/
	addFromImage: function(entryId, fileData){
		var kparams = new Object();
		kparams.entryId = entryId;
		kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("thumbasset", "addFromImage", kparams, kfiles);
	},
	
	/**
	 * .
	 * @param	thumbAssetId	string		 (optional)
	 * @return	.
	 **/
	deleteAction: function(thumbAssetId){
		var kparams = new Object();
		kparams.thumbAssetId = thumbAssetId;
		return new KalturaRequestBuilder("thumbasset", "delete", kparams);
	},
	
	/**
	 * Get download URL for the asset.
	 * @param	id	string		 (optional)
	 * @param	storageId	int		 (optional, default: null)
	 * @param	thumbParams	KalturaThumbParams		 (optional, default: null)
	 * @return	string.
	 **/
	getUrl: function(id, storageId, thumbParams){
		if(!storageId)
			storageId = null;
		if(!thumbParams)
			thumbParams = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.storageId = storageId;
		if (thumbParams != null)
			kparams.thumbParams = thumbParams;
		return new KalturaRequestBuilder("thumbasset", "getUrl", kparams);
	},
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param	id	string		 (optional)
	 * @return	KalturaRemotePathListResponse.
	 **/
	getRemotePaths: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("thumbasset", "getRemotePaths", kparams);
	},
	
	/**
	 * manually export an asset.
	 * @param	assetId	string		 (optional)
	 * @param	storageProfileId	int		 (optional)
	 * @return	KalturaFlavorAsset.
	 **/
	exportAction: function(assetId, storageProfileId){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.storageProfileId = storageProfileId;
		return new KalturaRequestBuilder("thumbasset", "export", kparams);
	}
}

/**
 *Class definition for the Kaltura service: thumbParamsOutput.
 **/
var KalturaThumbParamsOutputService = {
	/**
	 * Get thumb params output object by ID.
	 * @param	id	int		 (optional)
	 * @return	KalturaThumbParamsOutput.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("thumbparamsoutput", "get", kparams);
	},
	
	/**
	 * List thumb params output objects by filter and pager.
	 * @param	filter	KalturaThumbParamsOutputFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaThumbParamsOutputListResponse.
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
		return new KalturaRequestBuilder("thumbparamsoutput", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: thumbParams.
 **/
var KalturaThumbParamsService = {
	/**
	 * Add new Thumb Params.
	 * @param	thumbParams	KalturaThumbParams		 (optional)
	 * @return	KalturaThumbParams.
	 **/
	add: function(thumbParams){
		var kparams = new Object();
		kparams.thumbParams = thumbParams;
		return new KalturaRequestBuilder("thumbparams", "add", kparams);
	},
	
	/**
	 * Get Thumb Params by ID.
	 * @param	id	int		 (optional)
	 * @return	KalturaThumbParams.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("thumbparams", "get", kparams);
	},
	
	/**
	 * Update Thumb Params by ID.
	 * @param	id	int		 (optional)
	 * @param	thumbParams	KalturaThumbParams		 (optional)
	 * @return	KalturaThumbParams.
	 **/
	update: function(id, thumbParams){
		var kparams = new Object();
		kparams.id = id;
		kparams.thumbParams = thumbParams;
		return new KalturaRequestBuilder("thumbparams", "update", kparams);
	},
	
	/**
	 * Delete Thumb Params by ID.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("thumbparams", "delete", kparams);
	},
	
	/**
	 * List Thumb Params by filter with paging support (By default - all system default params will be listed too).
	 * @param	filter	KalturaThumbParamsFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaThumbParamsListResponse.
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
		return new KalturaRequestBuilder("thumbparams", "list", kparams);
	},
	
	/**
	 * Get Thumb Params by Conversion Profile ID.
	 * @param	conversionProfileId	int		 (optional)
	 * @return	array.
	 **/
	getByConversionProfileId: function(conversionProfileId){
		var kparams = new Object();
		kparams.conversionProfileId = conversionProfileId;
		return new KalturaRequestBuilder("thumbparams", "getByConversionProfileId", kparams);
	}
}

/**
 *Class definition for the Kaltura service: uiConf.
 **/
var KalturaUiConfService = {
	/**
	 * UIConf Add action allows you to add a UIConf to Kaltura DB.
	 * @param	uiConf	KalturaUiConf		Mandatory input parameter of type KalturaUiConf (optional)
	 * @return	KalturaUiConf.
	 **/
	add: function(uiConf){
		var kparams = new Object();
		kparams.uiConf = uiConf;
		return new KalturaRequestBuilder("uiconf", "add", kparams);
	},
	
	/**
	 * Update an existing UIConf.
	 * @param	id	int		 (optional)
	 * @param	uiConf	KalturaUiConf		 (optional)
	 * @return	KalturaUiConf.
	 **/
	update: function(id, uiConf){
		var kparams = new Object();
		kparams.id = id;
		kparams.uiConf = uiConf;
		return new KalturaRequestBuilder("uiconf", "update", kparams);
	},
	
	/**
	 * Retrieve a UIConf by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaUiConf.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("uiconf", "get", kparams);
	},
	
	/**
	 * Delete an existing UIConf.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("uiconf", "delete", kparams);
	},
	
	/**
	 * Clone an existing UIConf.
	 * @param	id	int		 (optional)
	 * @return	KalturaUiConf.
	 **/
	cloneAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("uiconf", "clone", kparams);
	},
	
	/**
	 * retrieve a list of available template UIConfs.
	 * @param	filter	KalturaUiConfFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaUiConfListResponse.
	 **/
	listTemplates: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("uiconf", "listTemplates", kparams);
	},
	
	/**
	 * Retrieve a list of available UIConfs.
	 * @param	filter	KalturaUiConfFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaUiConfListResponse.
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
		return new KalturaRequestBuilder("uiconf", "list", kparams);
	},
	
	/**
	 * Retrieve a list of all available versions by object type.
	 * @return	array.
	 **/
	getAvailableTypes: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("uiconf", "getAvailableTypes", kparams);
	}
}

/**
 *Class definition for the Kaltura service: upload.
 **/
var KalturaUploadService = {
	/**
	 * .
	 * @param	fileData	file		The file data (optional)
	 * @return	string.
	 **/
	upload: function(fileData){
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("upload", "upload", kparams, kfiles);
	},
	
	/**
	 * .
	 * @param	fileName	string		 (optional)
	 * @return	KalturaUploadResponse.
	 **/
	getUploadedFileTokenByFileName: function(fileName){
		var kparams = new Object();
		kparams.fileName = fileName;
		return new KalturaRequestBuilder("upload", "getUploadedFileTokenByFileName", kparams);
	}
}

/**
 *Class definition for the Kaltura service: uploadToken.
 **/
var KalturaUploadTokenService = {
	/**
	 * Adds new upload token to upload a file.
	 * @param	uploadToken	KalturaUploadToken		 (optional, default: null)
	 * @return	KalturaUploadToken.
	 **/
	add: function(uploadToken){
		if(!uploadToken)
			uploadToken = null;
		var kparams = new Object();
		if (uploadToken != null)
			kparams.uploadToken = uploadToken;
		return new KalturaRequestBuilder("uploadtoken", "add", kparams);
	},
	
	/**
	 * Get upload token by id.
	 * @param	uploadTokenId	string		 (optional)
	 * @return	KalturaUploadToken.
	 **/
	get: function(uploadTokenId){
		var kparams = new Object();
		kparams.uploadTokenId = uploadTokenId;
		return new KalturaRequestBuilder("uploadtoken", "get", kparams);
	},
	
	/**
	 * Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients)
 *		 Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.
 *		 A parallel upload session should have three stages:
 *		 1. A single upload with resume=false and finalChunk=false
 *		 2. Parallel upload requests each with resume=true,finalChunk=false and the expected resumetAt position.
 *		 If a chunk fails to upload it can be re-uploaded.
 *		 3. After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded 
 *		 with resume=true, finalChunk=true and the expected resumeAt position. In case an UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE exception
 *		 has been returned (indicating not all of the chunks were appended yet) the final request can be retried..
	 * @param	uploadTokenId	string		 (optional)
	 * @param	fileData	file		 (optional)
	 * @param	resume	bool		 (optional, default: false)
	 * @param	finalChunk	bool		 (optional, default: true)
	 * @param	resumeAt	float		 (optional, default: -1)
	 * @return	KalturaUploadToken.
	 **/
	upload: function(uploadTokenId, fileData, resume, finalChunk, resumeAt){
		if(!resume)
			resume = false;
		if(!finalChunk)
			finalChunk = true;
		if(!resumeAt)
			resumeAt = -1;
		var kparams = new Object();
		kparams.uploadTokenId = uploadTokenId;
		kfiles = new Object();
		kfiles.fileData = fileData;
		kparams.resume = resume;
		kparams.finalChunk = finalChunk;
		kparams.resumeAt = resumeAt;
		return new KalturaRequestBuilder("uploadtoken", "upload", kparams, kfiles);
	},
	
	/**
	 * Deletes the upload token by upload token id.
	 * @param	uploadTokenId	string		 (optional)
	 * @return	.
	 **/
	deleteAction: function(uploadTokenId){
		var kparams = new Object();
		kparams.uploadTokenId = uploadTokenId;
		return new KalturaRequestBuilder("uploadtoken", "delete", kparams);
	},
	
	/**
	 * List upload token by filter with pager support. 
 *		 When using a user session the service will be restricted to users objects only..
	 * @param	filter	KalturaUploadTokenFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaUploadTokenListResponse.
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
		return new KalturaRequestBuilder("uploadtoken", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: userEntry.
 **/
var KalturaUserEntryService = {
	/**
	 * Adds a user_entry to the Kaltura DB..
	 * @param	userEntry	KalturaUserEntry		 (optional)
	 * @return	KalturaUserEntry.
	 **/
	add: function(userEntry){
		var kparams = new Object();
		kparams.userEntry = userEntry;
		return new KalturaRequestBuilder("userentry", "add", kparams);
	},
	
	/**
	 * .
	 * @param	id	int		 (optional)
	 * @param	userEntry	KalturaUserEntry		 (optional)
	 * @return	.
	 **/
	update: function(id, userEntry){
		var kparams = new Object();
		kparams.id = id;
		kparams.userEntry = userEntry;
		return new KalturaRequestBuilder("userentry", "update", kparams);
	},
	
	/**
	 * .
	 * @param	id	int		 (optional)
	 * @return	KalturaUserEntry.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("userentry", "delete", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaUserEntryFilter		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaUserEntryListResponse.
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("userentry", "list", kparams);
	},
	
	/**
	 * .
	 * @param	id	string		 (optional)
	 * @return	KalturaUserEntry.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("userentry", "get", kparams);
	},
	
	/**
	 * Submits the quiz so that it's status will be submitted and calculates the score for the quiz.
	 * @param	id	int		 (optional)
	 * @return	KalturaQuizUserEntry.
	 **/
	submitQuiz: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("userentry", "submitQuiz", kparams);
	}
}

/**
 *Class definition for the Kaltura service: userRole.
 **/
var KalturaUserRoleService = {
	/**
	 * Adds a new user role object to the account..
	 * @param	userRole	KalturaUserRole		A new role (optional)
	 * @return	KalturaUserRole.
	 **/
	add: function(userRole){
		var kparams = new Object();
		kparams.userRole = userRole;
		return new KalturaRequestBuilder("userrole", "add", kparams);
	},
	
	/**
	 * Retrieves a user role object using its ID..
	 * @param	userRoleId	int		The user role's unique identifier (optional)
	 * @return	KalturaUserRole.
	 **/
	get: function(userRoleId){
		var kparams = new Object();
		kparams.userRoleId = userRoleId;
		return new KalturaRequestBuilder("userrole", "get", kparams);
	},
	
	/**
	 * Updates an existing user role object..
	 * @param	userRoleId	int		The user role's unique identifier (optional)
	 * @param	userRole	KalturaUserRole		Id The user role's unique identifier (optional)
	 * @return	KalturaUserRole.
	 **/
	update: function(userRoleId, userRole){
		var kparams = new Object();
		kparams.userRoleId = userRoleId;
		kparams.userRole = userRole;
		return new KalturaRequestBuilder("userrole", "update", kparams);
	},
	
	/**
	 * Deletes an existing user role object..
	 * @param	userRoleId	int		The user role's unique identifier (optional)
	 * @return	KalturaUserRole.
	 **/
	deleteAction: function(userRoleId){
		var kparams = new Object();
		kparams.userRoleId = userRoleId;
		return new KalturaRequestBuilder("userrole", "delete", kparams);
	},
	
	/**
	 * Lists user role objects that are associated with an account.
 *		 Blocked user roles are listed unless you use a filter to exclude them.
 *		 Deleted user roles are not listed unless you use a filter to include them..
	 * @param	filter	KalturaUserRoleFilter		A filter used to exclude specific types of user roles (optional, default: null)
	 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null)
	 * @return	KalturaUserRoleListResponse.
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
		return new KalturaRequestBuilder("userrole", "list", kparams);
	},
	
	/**
	 * Creates a new user role object that is a duplicate of an existing role..
	 * @param	userRoleId	int		The user role's unique identifier (optional)
	 * @return	KalturaUserRole.
	 **/
	cloneAction: function(userRoleId){
		var kparams = new Object();
		kparams.userRoleId = userRoleId;
		return new KalturaRequestBuilder("userrole", "clone", kparams);
	}
}

/**
 *Class definition for the Kaltura service: user.
 **/
var KalturaUserService = {
	/**
	 * Adds a new user to an existing account in the Kaltura database.
 *		 Input param $id is the unique identifier in the partner's system..
	 * @param	user	KalturaUser		The new user (optional)
	 * @return	KalturaUser.
	 **/
	add: function(user){
		var kparams = new Object();
		kparams.user = user;
		return new KalturaRequestBuilder("user", "add", kparams);
	},
	
	/**
	 * Updates an existing user object.
 *		 You can also use this action to update the userId..
	 * @param	userId	string		The user's unique identifier in the partner's system (optional)
	 * @param	user	KalturaUser		Id The user's unique identifier in the partner's system (optional)
	 * @return	KalturaUser.
	 **/
	update: function(userId, user){
		var kparams = new Object();
		kparams.userId = userId;
		kparams.user = user;
		return new KalturaRequestBuilder("user", "update", kparams);
	},
	
	/**
	 * Retrieves a user object for a specified user ID..
	 * @param	userId	string		The user's unique identifier in the partner's system (optional, default: null)
	 * @return	KalturaUser.
	 **/
	get: function(userId){
		if(!userId)
			userId = null;
		var kparams = new Object();
		kparams.userId = userId;
		return new KalturaRequestBuilder("user", "get", kparams);
	},
	
	/**
	 * Retrieves a user object for a user's login ID and partner ID.
 *		 A login ID is the email address used by a user to log into the system..
	 * @param	loginId	string		The user's email address that identifies the user for login (optional)
	 * @return	KalturaUser.
	 **/
	getByLoginId: function(loginId){
		var kparams = new Object();
		kparams.loginId = loginId;
		return new KalturaRequestBuilder("user", "getByLoginId", kparams);
	},
	
	/**
	 * Deletes a user from a partner account..
	 * @param	userId	string		The user's unique identifier in the partner's system (optional)
	 * @return	KalturaUser.
	 **/
	deleteAction: function(userId){
		var kparams = new Object();
		kparams.userId = userId;
		return new KalturaRequestBuilder("user", "delete", kparams);
	},
	
	/**
	 * Lists user objects that are associated with an account.
 *		 Blocked users are listed unless you use a filter to exclude them.
 *		 Deleted users are not listed unless you use a filter to include them..
	 * @param	filter	KalturaUserFilter		A filter used to exclude specific types of users (optional, default: null)
	 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null)
	 * @return	KalturaUserListResponse.
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
		return new KalturaRequestBuilder("user", "list", kparams);
	},
	
	/**
	 * Notifies that a user is banned from an account..
	 * @param	userId	string		The user's unique identifier in the partner's system (optional)
	 * @return	.
	 **/
	notifyBan: function(userId){
		var kparams = new Object();
		kparams.userId = userId;
		return new KalturaRequestBuilder("user", "notifyBan", kparams);
	},
	
	/**
	 * Logs a user into a partner account with a partner ID, a partner user ID (puser), and a user password..
	 * @param	partnerId	int		The identifier of the partner account (optional)
	 * @param	userId	string		The user's unique identifier in the partner's system (optional)
	 * @param	password	string		The user's password (optional)
	 * @param	expiry	int		The requested time (in seconds) before the generated KS expires (By default, a KS expires after 24 hours). (optional, default: 86400)
	 * @param	privileges	string		Special privileges (optional, default: *)
	 * @return	string.
	 **/
	login: function(partnerId, userId, password, expiry, privileges){
		if(!expiry)
			expiry = 86400;
		if(!privileges)
			privileges = "*";
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.userId = userId;
		kparams.password = password;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new KalturaRequestBuilder("user", "login", kparams);
	},
	
	/**
	 * Logs a user into a partner account with a user login ID and a user password..
	 * @param	loginId	string		The user's email address that identifies the user for login (optional)
	 * @param	password	string		The user's password (optional)
	 * @param	partnerId	int		The identifier of the partner account (optional, default: null)
	 * @param	expiry	int		The requested time (in seconds) before the generated KS expires (By default, a KS expires after 24 hours). (optional, default: 86400)
	 * @param	privileges	string		Special privileges (optional, default: *)
	 * @return	string.
	 **/
	loginByLoginId: function(loginId, password, partnerId, expiry, privileges){
		if(!partnerId)
			partnerId = null;
		if(!expiry)
			expiry = 86400;
		if(!privileges)
			privileges = "*";
		var kparams = new Object();
		kparams.loginId = loginId;
		kparams.password = password;
		kparams.partnerId = partnerId;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new KalturaRequestBuilder("user", "loginByLoginId", kparams);
	},
	
	/**
	 * Updates a user's login data: email, password, name..
	 * @param	oldLoginId	string		The user's current email address that identified the user for login (optional)
	 * @param	password	string		The user's current email address that identified the user for login (optional)
	 * @param	newLoginId	string		Optional, The user's email address that will identify the user for login (optional)
	 * @param	newPassword	string		Optional, The user's new password (optional)
	 * @param	newFirstName	string		Optional, The user's new first name (optional, default: null)
	 * @param	newLastName	string		Optional, The user's new last name (optional, default: null)
	 * @return	.
	 **/
	updateLoginData: function(oldLoginId, password, newLoginId, newPassword, newFirstName, newLastName){
		if(!newLoginId)
			newLoginId = "";
		if(!newPassword)
			newPassword = "";
		if(!newFirstName)
			newFirstName = null;
		if(!newLastName)
			newLastName = null;
		var kparams = new Object();
		kparams.oldLoginId = oldLoginId;
		kparams.password = password;
		kparams.newLoginId = newLoginId;
		kparams.newPassword = newPassword;
		kparams.newFirstName = newFirstName;
		kparams.newLastName = newLastName;
		return new KalturaRequestBuilder("user", "updateLoginData", kparams);
	},
	
	/**
	 * Reset user's password and send the user an email to generate a new one..
	 * @param	email	string		The user's email address (login email) (optional)
	 * @return	.
	 **/
	resetPassword: function(email){
		var kparams = new Object();
		kparams.email = email;
		return new KalturaRequestBuilder("user", "resetPassword", kparams);
	},
	
	/**
	 * Set initial users password.
	 * @param	hashKey	string		The hash key used to identify the user (retrieved by email) (optional)
	 * @param	newPassword	string		The new password to set for the user (optional)
	 * @return	.
	 **/
	setInitialPassword: function(hashKey, newPassword){
		var kparams = new Object();
		kparams.hashKey = hashKey;
		kparams.newPassword = newPassword;
		return new KalturaRequestBuilder("user", "setInitialPassword", kparams);
	},
	
	/**
	 * Enables a user to log into a partner account using an email address and a password.
	 * @param	userId	string		The user's unique identifier in the partner's system (optional)
	 * @param	loginId	string		The user's email address that identifies the user for login (optional)
	 * @param	password	string		The user's password (optional, default: null)
	 * @return	KalturaUser.
	 **/
	enableLogin: function(userId, loginId, password){
		if(!password)
			password = null;
		var kparams = new Object();
		kparams.userId = userId;
		kparams.loginId = loginId;
		kparams.password = password;
		return new KalturaRequestBuilder("user", "enableLogin", kparams);
	},
	
	/**
	 * Disables a user's ability to log into a partner account using an email address and a password.
 *		 You may use either a userId or a loginId parameter for this action..
	 * @param	userId	string		The user's unique identifier in the partner's system (optional, default: null)
	 * @param	loginId	string		The user's email address that identifies the user for login (optional, default: null)
	 * @return	KalturaUser.
	 **/
	disableLogin: function(userId, loginId){
		if(!userId)
			userId = null;
		if(!loginId)
			loginId = null;
		var kparams = new Object();
		kparams.userId = userId;
		kparams.loginId = loginId;
		return new KalturaRequestBuilder("user", "disableLogin", kparams);
	},
	
	/**
	 * Index an entry by id..
	 * @param	id	string		 (optional)
	 * @param	shouldUpdate	bool		 (optional, default: true)
	 * @return	string.
	 **/
	index: function(id, shouldUpdate){
		if(!shouldUpdate)
			shouldUpdate = true;
		var kparams = new Object();
		kparams.id = id;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("user", "index", kparams);
	},
	
	/**
	 * .
	 * @param	fileData	file		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null)
	 * @param	bulkUploadUserData	KalturaBulkUploadUserData		 (optional, default: null)
	 * @return	KalturaBulkUpload.
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData, bulkUploadUserData){
		if(!bulkUploadData)
			bulkUploadData = null;
		if(!bulkUploadUserData)
			bulkUploadUserData = null;
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadUserData != null)
			kparams.bulkUploadUserData = bulkUploadUserData;
		return new KalturaRequestBuilder("user", "addFromBulkUpload", kparams, kfiles);
	},
	
	/**
	 * Action which checks whther user login.
	 * @param	filter	KalturaUserLoginDataFilter		 (optional)
	 * @return	bool.
	 **/
	checkLoginDataExists: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("user", "checkLoginDataExists", kparams);
	}
}

/**
 *Class definition for the Kaltura service: widget.
 **/
var KalturaWidgetService = {
	/**
	 * Add new widget, can be attached to entry or kshow
 *		 SourceWidget is ignored..
	 * @param	widget	KalturaWidget		 (optional)
	 * @return	KalturaWidget.
	 **/
	add: function(widget){
		var kparams = new Object();
		kparams.widget = widget;
		return new KalturaRequestBuilder("widget", "add", kparams);
	},
	
	/**
	 * Update exisiting widget.
	 * @param	id	string		 (optional)
	 * @param	widget	KalturaWidget		 (optional)
	 * @return	KalturaWidget.
	 **/
	update: function(id, widget){
		var kparams = new Object();
		kparams.id = id;
		kparams.widget = widget;
		return new KalturaRequestBuilder("widget", "update", kparams);
	},
	
	/**
	 * Get widget by id.
	 * @param	id	string		 (optional)
	 * @return	KalturaWidget.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("widget", "get", kparams);
	},
	
	/**
	 * Add widget based on existing widget.
 *		 Must provide valid sourceWidgetId.
	 * @param	widget	KalturaWidget		 (optional)
	 * @return	KalturaWidget.
	 **/
	cloneAction: function(widget){
		var kparams = new Object();
		kparams.widget = widget;
		return new KalturaRequestBuilder("widget", "clone", kparams);
	},
	
	/**
	 * Retrieve a list of available widget depends on the filter given.
	 * @param	filter	KalturaWidgetFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaWidgetListResponse.
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
		return new KalturaRequestBuilder("widget", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: metadata.
 **/
var KalturaMetadataService = {
	/**
	 * Allows you to add a metadata object and metadata content associated with Kaltura object.
	 * @param	metadataProfileId	int		 (optional)
	 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType)
	 * @param	objectId	string		 (optional)
	 * @param	xmlData	string		XML metadata (optional)
	 * @return	KalturaMetadata.
	 **/
	add: function(metadataProfileId, objectType, objectId, xmlData){
		var kparams = new Object();
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.xmlData = xmlData;
		return new KalturaRequestBuilder("metadata_metadata", "add", kparams);
	},
	
	/**
	 * Allows you to add a metadata object and metadata file associated with Kaltura object.
	 * @param	metadataProfileId	int		 (optional)
	 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType)
	 * @param	objectId	string		 (optional)
	 * @param	xmlFile	file		XML metadata (optional)
	 * @return	KalturaMetadata.
	 **/
	addFromFile: function(metadataProfileId, objectType, objectId, xmlFile){
		var kparams = new Object();
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kfiles = new Object();
		kfiles.xmlFile = xmlFile;
		return new KalturaRequestBuilder("metadata_metadata", "addFromFile", kparams, kfiles);
	},
	
	/**
	 * Allows you to add a metadata xml data from remote URL.
	 * @param	metadataProfileId	int		 (optional)
	 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType)
	 * @param	objectId	string		 (optional)
	 * @param	url	string		XML metadata remote url (optional)
	 * @return	KalturaMetadata.
	 **/
	addFromUrl: function(metadataProfileId, objectType, objectId, url){
		var kparams = new Object();
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.url = url;
		return new KalturaRequestBuilder("metadata_metadata", "addFromUrl", kparams);
	},
	
	/**
	 * Allows you to add a metadata xml data from remote URL.
 *		 Enables different permissions than addFromUrl action..
	 * @param	metadataProfileId	int		 (optional)
	 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType)
	 * @param	objectId	string		 (optional)
	 * @param	url	string		XML metadata remote url (optional)
	 * @return	KalturaMetadata.
	 **/
	addFromBulk: function(metadataProfileId, objectType, objectId, url){
		var kparams = new Object();
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.url = url;
		return new KalturaRequestBuilder("metadata_metadata", "addFromBulk", kparams);
	},
	
	/**
	 * Retrieve a metadata object by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaMetadata.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("metadata_metadata", "get", kparams);
	},
	
	/**
	 * Update an existing metadata object with new XML content.
	 * @param	id	int		 (optional)
	 * @param	xmlData	string		XML metadata (optional, default: null)
	 * @param	version	int		Enable update only if the metadata object version did not change by other process (optional, default: null)
	 * @return	KalturaMetadata.
	 **/
	update: function(id, xmlData, version){
		if(!xmlData)
			xmlData = null;
		if(!version)
			version = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.xmlData = xmlData;
		kparams.version = version;
		return new KalturaRequestBuilder("metadata_metadata", "update", kparams);
	},
	
	/**
	 * Update an existing metadata object with new XML file.
	 * @param	id	int		 (optional)
	 * @param	xmlFile	file		XML metadata (optional, default: null)
	 * @return	KalturaMetadata.
	 **/
	updateFromFile: function(id, xmlFile){
		if(!xmlFile)
			xmlFile = null;
		var kparams = new Object();
		kparams.id = id;
		kfiles = new Object();
		kfiles.xmlFile = xmlFile;
		return new KalturaRequestBuilder("metadata_metadata", "updateFromFile", kparams, kfiles);
	},
	
	/**
	 * List metadata objects by filter and pager.
	 * @param	filter	KalturaMetadataFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaMetadataListResponse.
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
		return new KalturaRequestBuilder("metadata_metadata", "list", kparams);
	},
	
	/**
	 * Delete an existing metadata.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("metadata_metadata", "delete", kparams);
	},
	
	/**
	 * Mark existing metadata as invalid
 *		 Used by batch metadata transform.
	 * @param	id	int		 (optional)
	 * @param	version	int		Enable update only if the metadata object version did not change by other process (optional, default: null)
	 * @return	.
	 **/
	invalidate: function(id, version){
		if(!version)
			version = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.version = version;
		return new KalturaRequestBuilder("metadata_metadata", "invalidate", kparams);
	},
	
	/**
	 * Index metadata by id, will also index the related object.
	 * @param	id	string		 (optional)
	 * @param	shouldUpdate	bool		 (optional)
	 * @return	int.
	 **/
	index: function(id, shouldUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("metadata_metadata", "index", kparams);
	},
	
	/**
	 * Action transforms current metadata object XML using a provided XSL..
	 * @param	id	int		 (optional)
	 * @param	xslFile	file		 (optional)
	 * @return	KalturaMetadata.
	 **/
	updateFromXSL: function(id, xslFile){
		var kparams = new Object();
		kparams.id = id;
		kfiles = new Object();
		kfiles.xslFile = xslFile;
		return new KalturaRequestBuilder("metadata_metadata", "updateFromXSL", kparams, kfiles);
	}
}

/**
 *Class definition for the Kaltura service: metadataProfile.
 **/
var KalturaMetadataProfileService = {
	/**
	 * Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type.
	 * @param	metadataProfile	KalturaMetadataProfile		 (optional)
	 * @param	xsdData	string		XSD metadata definition (optional)
	 * @param	viewsData	string		UI views definition (optional, default: null)
	 * @return	KalturaMetadataProfile.
	 **/
	add: function(metadataProfile, xsdData, viewsData){
		if(!viewsData)
			viewsData = null;
		var kparams = new Object();
		kparams.metadataProfile = metadataProfile;
		kparams.xsdData = xsdData;
		kparams.viewsData = viewsData;
		return new KalturaRequestBuilder("metadata_metadataprofile", "add", kparams);
	},
	
	/**
	 * Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type.
	 * @param	metadataProfile	KalturaMetadataProfile		 (optional)
	 * @param	xsdFile	file		XSD metadata definition (optional)
	 * @param	viewsFile	file		UI views definition (optional, default: null)
	 * @return	KalturaMetadataProfile.
	 **/
	addFromFile: function(metadataProfile, xsdFile, viewsFile){
		if(!viewsFile)
			viewsFile = null;
		var kparams = new Object();
		kparams.metadataProfile = metadataProfile;
		kfiles = new Object();
		kfiles.xsdFile = xsdFile;
		kfiles.viewsFile = viewsFile;
		return new KalturaRequestBuilder("metadata_metadataprofile", "addFromFile", kparams, kfiles);
	},
	
	/**
	 * Retrieve a metadata profile object by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaMetadataProfile.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("metadata_metadataprofile", "get", kparams);
	},
	
	/**
	 * Update an existing metadata object.
	 * @param	id	int		 (optional)
	 * @param	metadataProfile	KalturaMetadataProfile		 (optional)
	 * @param	xsdData	string		XSD metadata definition (optional, default: null)
	 * @param	viewsData	string		UI views definition (optional, default: null)
	 * @return	KalturaMetadataProfile.
	 **/
	update: function(id, metadataProfile, xsdData, viewsData){
		if(!xsdData)
			xsdData = null;
		if(!viewsData)
			viewsData = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.metadataProfile = metadataProfile;
		kparams.xsdData = xsdData;
		kparams.viewsData = viewsData;
		return new KalturaRequestBuilder("metadata_metadataprofile", "update", kparams);
	},
	
	/**
	 * List metadata profile objects by filter and pager.
	 * @param	filter	KalturaMetadataProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaMetadataProfileListResponse.
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
		return new KalturaRequestBuilder("metadata_metadataprofile", "list", kparams);
	},
	
	/**
	 * List metadata profile fields by metadata profile id.
	 * @param	metadataProfileId	int		 (optional)
	 * @return	KalturaMetadataProfileFieldListResponse.
	 **/
	listFields: function(metadataProfileId){
		var kparams = new Object();
		kparams.metadataProfileId = metadataProfileId;
		return new KalturaRequestBuilder("metadata_metadataprofile", "listFields", kparams);
	},
	
	/**
	 * Delete an existing metadata profile.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("metadata_metadataprofile", "delete", kparams);
	},
	
	/**
	 * Update an existing metadata object definition file.
	 * @param	id	int		 (optional)
	 * @param	toVersion	int		 (optional)
	 * @return	KalturaMetadataProfile.
	 **/
	revert: function(id, toVersion){
		var kparams = new Object();
		kparams.id = id;
		kparams.toVersion = toVersion;
		return new KalturaRequestBuilder("metadata_metadataprofile", "revert", kparams);
	},
	
	/**
	 * Update an existing metadata object definition file.
	 * @param	id	int		 (optional)
	 * @param	xsdFile	file		XSD metadata definition (optional)
	 * @return	KalturaMetadataProfile.
	 **/
	updateDefinitionFromFile: function(id, xsdFile){
		var kparams = new Object();
		kparams.id = id;
		kfiles = new Object();
		kfiles.xsdFile = xsdFile;
		return new KalturaRequestBuilder("metadata_metadataprofile", "updateDefinitionFromFile", kparams, kfiles);
	},
	
	/**
	 * Update an existing metadata object views file.
	 * @param	id	int		 (optional)
	 * @param	viewsFile	file		UI views file (optional)
	 * @return	KalturaMetadataProfile.
	 **/
	updateViewsFromFile: function(id, viewsFile){
		var kparams = new Object();
		kparams.id = id;
		kfiles = new Object();
		kfiles.viewsFile = viewsFile;
		return new KalturaRequestBuilder("metadata_metadataprofile", "updateViewsFromFile", kparams, kfiles);
	},
	
	/**
	 * Update an existing metadata object xslt file.
	 * @param	id	int		 (optional)
	 * @param	xsltFile	file		XSLT file, will be executed on every metadata add/update (optional)
	 * @return	KalturaMetadataProfile.
	 **/
	updateTransformationFromFile: function(id, xsltFile){
		var kparams = new Object();
		kparams.id = id;
		kfiles = new Object();
		kfiles.xsltFile = xsltFile;
		return new KalturaRequestBuilder("metadata_metadataprofile", "updateTransformationFromFile", kparams, kfiles);
	}
}

/**
 *Class definition for the Kaltura service: documents.
 **/
var KalturaDocumentsService = {
	/**
	 * Add new document entry after the specific document file was uploaded and the upload token id exists.
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional)
	 * @param	uploadTokenId	string		Upload token id (optional)
	 * @return	KalturaDocumentEntry.
	 **/
	addFromUploadedFile: function(documentEntry, uploadTokenId){
		var kparams = new Object();
		kparams.documentEntry = documentEntry;
		kparams.uploadTokenId = uploadTokenId;
		return new KalturaRequestBuilder("document_documents", "addFromUploadedFile", kparams);
	},
	
	/**
	 * Copy entry into new entry.
	 * @param	sourceEntryId	string		Document entry id to copy from (optional)
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null)
	 * @param	sourceFlavorParamsId	int		The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null)
	 * @return	KalturaDocumentEntry.
	 **/
	addFromEntry: function(sourceEntryId, documentEntry, sourceFlavorParamsId){
		if(!documentEntry)
			documentEntry = null;
		if(!sourceFlavorParamsId)
			sourceFlavorParamsId = null;
		var kparams = new Object();
		kparams.sourceEntryId = sourceEntryId;
		if (documentEntry != null)
			kparams.documentEntry = documentEntry;
		kparams.sourceFlavorParamsId = sourceFlavorParamsId;
		return new KalturaRequestBuilder("document_documents", "addFromEntry", kparams);
	},
	
	/**
	 * Copy flavor asset into new entry.
	 * @param	sourceFlavorAssetId	string		Flavor asset id to be used as the new entry source (optional)
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null)
	 * @return	KalturaDocumentEntry.
	 **/
	addFromFlavorAsset: function(sourceFlavorAssetId, documentEntry){
		if(!documentEntry)
			documentEntry = null;
		var kparams = new Object();
		kparams.sourceFlavorAssetId = sourceFlavorAssetId;
		if (documentEntry != null)
			kparams.documentEntry = documentEntry;
		return new KalturaRequestBuilder("document_documents", "addFromFlavorAsset", kparams);
	},
	
	/**
	 * Convert entry.
	 * @param	entryId	string		Document entry id (optional)
	 * @param	conversionProfileId	int		 (optional, default: null)
	 * @param	dynamicConversionAttributes	array		 (optional, default: null)
	 * @return	bigint.
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
		return new KalturaRequestBuilder("document_documents", "convert", kparams);
	},
	
	/**
	 * Get document entry by ID..
	 * @param	entryId	string		Document entry id (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 * @return	KalturaDocumentEntry.
	 **/
	get: function(entryId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		return new KalturaRequestBuilder("document_documents", "get", kparams);
	},
	
	/**
	 * Update document entry. Only the properties that were set will be updated..
	 * @param	entryId	string		Document entry id to update (optional)
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata to update (optional)
	 * @return	KalturaDocumentEntry.
	 **/
	update: function(entryId, documentEntry){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.documentEntry = documentEntry;
		return new KalturaRequestBuilder("document_documents", "update", kparams);
	},
	
	/**
	 * Delete a document entry..
	 * @param	entryId	string		Document entry id to delete (optional)
	 * @return	.
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "delete", kparams);
	},
	
	/**
	 * List document entries by filter with paging support..
	 * @param	filter	KalturaDocumentEntryFilter		Document entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 * @return	KalturaDocumentListResponse.
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
		return new KalturaRequestBuilder("document_documents", "list", kparams);
	},
	
	/**
	 * Upload a document file to Kaltura, then the file can be used to create a document entry..
	 * @param	fileData	file		The file data (optional)
	 * @return	string.
	 **/
	upload: function(fileData){
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("document_documents", "upload", kparams, kfiles);
	},
	
	/**
	 * This will queue a batch job for converting the document file to swf
 *		 Returns the URL where the new swf will be available.
	 * @param	entryId	string		 (optional)
	 * @return	string.
	 **/
	convertPptToSwf: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "convertPptToSwf", kparams);
	},
	
	/**
	 * Replace content associated with the given document entry..
	 * @param	entryId	string		document entry id to update (optional)
	 * @param	resource	KalturaResource		Resource to be used to replace entry doc content (optional)
	 * @param	conversionProfileId	int		The conversion profile id to be used on the entry (optional, default: null)
	 * @return	KalturaDocumentEntry.
	 **/
	updateContent: function(entryId, resource, conversionProfileId){
		if(!conversionProfileId)
			conversionProfileId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.resource = resource;
		kparams.conversionProfileId = conversionProfileId;
		return new KalturaRequestBuilder("document_documents", "updateContent", kparams);
	},
	
	/**
	 * Approves document replacement.
	 * @param	entryId	string		document entry id to replace (optional)
	 * @return	KalturaDocumentEntry.
	 **/
	approveReplace: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "approveReplace", kparams);
	},
	
	/**
	 * Cancels document replacement.
	 * @param	entryId	string		Document entry id to cancel (optional)
	 * @return	KalturaDocumentEntry.
	 **/
	cancelReplace: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "cancelReplace", kparams);
	}
}

/**
 *Class definition for the Kaltura service: virusScanProfile.
 **/
var KalturaVirusScanProfileService = {
	/**
	 * List virus scan profile objects by filter and pager.
	 * @param	filter	KalturaVirusScanProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaVirusScanProfileListResponse.
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
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "list", kparams);
	},
	
	/**
	 * Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object.
	 * @param	virusScanProfile	KalturaVirusScanProfile		 (optional)
	 * @return	KalturaVirusScanProfile.
	 **/
	add: function(virusScanProfile){
		var kparams = new Object();
		kparams.virusScanProfile = virusScanProfile;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "add", kparams);
	},
	
	/**
	 * Retrieve an virus scan profile object by id.
	 * @param	virusScanProfileId	int		 (optional)
	 * @return	KalturaVirusScanProfile.
	 **/
	get: function(virusScanProfileId){
		var kparams = new Object();
		kparams.virusScanProfileId = virusScanProfileId;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "get", kparams);
	},
	
	/**
	 * Update exisitng virus scan profile, it is possible to update the virus scan profile id too.
	 * @param	virusScanProfileId	int		 (optional)
	 * @param	virusScanProfile	KalturaVirusScanProfile		Id (optional)
	 * @return	KalturaVirusScanProfile.
	 **/
	update: function(virusScanProfileId, virusScanProfile){
		var kparams = new Object();
		kparams.virusScanProfileId = virusScanProfileId;
		kparams.virusScanProfile = virusScanProfile;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "update", kparams);
	},
	
	/**
	 * Mark the virus scan profile as deleted.
	 * @param	virusScanProfileId	int		 (optional)
	 * @return	KalturaVirusScanProfile.
	 **/
	deleteAction: function(virusScanProfileId){
		var kparams = new Object();
		kparams.virusScanProfileId = virusScanProfileId;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "delete", kparams);
	},
	
	/**
	 * Scan flavor asset according to virus scan profile.
	 * @param	flavorAssetId	string		 (optional)
	 * @param	virusScanProfileId	int		 (optional, default: null)
	 * @return	int.
	 **/
	scan: function(flavorAssetId, virusScanProfileId){
		if(!virusScanProfileId)
			virusScanProfileId = null;
		var kparams = new Object();
		kparams.flavorAssetId = flavorAssetId;
		kparams.virusScanProfileId = virusScanProfileId;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "scan", kparams);
	}
}

/**
 *Class definition for the Kaltura service: distributionProfile.
 **/
var KalturaDistributionProfileService = {
	/**
	 * Add new Distribution Profile.
	 * @param	distributionProfile	KalturaDistributionProfile		 (optional)
	 * @return	KalturaDistributionProfile.
	 **/
	add: function(distributionProfile){
		var kparams = new Object();
		kparams.distributionProfile = distributionProfile;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "add", kparams);
	},
	
	/**
	 * Get Distribution Profile by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaDistributionProfile.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "get", kparams);
	},
	
	/**
	 * Update Distribution Profile by id.
	 * @param	id	int		 (optional)
	 * @param	distributionProfile	KalturaDistributionProfile		 (optional)
	 * @return	KalturaDistributionProfile.
	 **/
	update: function(id, distributionProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.distributionProfile = distributionProfile;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "update", kparams);
	},
	
	/**
	 * Update Distribution Profile status by id.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaDistributionProfileStatus)
	 * @return	KalturaDistributionProfile.
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "updateStatus", kparams);
	},
	
	/**
	 * Delete Distribution Profile by id.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "delete", kparams);
	},
	
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaDistributionProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaDistributionProfileListResponse.
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
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "list", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaDistributionProfileListResponse.
	 **/
	listByPartner: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "listByPartner", kparams);
	}
}

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

/**
 *Class definition for the Kaltura service: distributionProvider.
 **/
var KalturaDistributionProviderService = {
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaDistributionProviderFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaDistributionProviderListResponse.
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
		return new KalturaRequestBuilder("contentdistribution_distributionprovider", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: genericDistributionProvider.
 **/
var KalturaGenericDistributionProviderService = {
	/**
	 * Add new Generic Distribution Provider.
	 * @param	genericDistributionProvider	KalturaGenericDistributionProvider		 (optional)
	 * @return	KalturaGenericDistributionProvider.
	 **/
	add: function(genericDistributionProvider){
		var kparams = new Object();
		kparams.genericDistributionProvider = genericDistributionProvider;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovider", "add", kparams);
	},
	
	/**
	 * Get Generic Distribution Provider by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaGenericDistributionProvider.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovider", "get", kparams);
	},
	
	/**
	 * Update Generic Distribution Provider by id.
	 * @param	id	int		 (optional)
	 * @param	genericDistributionProvider	KalturaGenericDistributionProvider		 (optional)
	 * @return	KalturaGenericDistributionProvider.
	 **/
	update: function(id, genericDistributionProvider){
		var kparams = new Object();
		kparams.id = id;
		kparams.genericDistributionProvider = genericDistributionProvider;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovider", "update", kparams);
	},
	
	/**
	 * Delete Generic Distribution Provider by id.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovider", "delete", kparams);
	},
	
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaGenericDistributionProviderFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaGenericDistributionProviderListResponse.
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
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovider", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: genericDistributionProviderAction.
 **/
var KalturaGenericDistributionProviderActionService = {
	/**
	 * Add new Generic Distribution Provider Action.
	 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 **/
	add: function(genericDistributionProviderAction){
		var kparams = new Object();
		kparams.genericDistributionProviderAction = genericDistributionProviderAction;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "add", kparams);
	},
	
	/**
	 * Add MRSS transform file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	xslData	string		XSL MRSS transformation data (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 **/
	addMrssTransform: function(id, xslData){
		var kparams = new Object();
		kparams.id = id;
		kparams.xslData = xslData;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addMrssTransform", kparams);
	},
	
	/**
	 * Add MRSS transform file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	xslFile	file		XSL MRSS transformation file (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 **/
	addMrssTransformFromFile: function(id, xslFile){
		var kparams = new Object();
		kparams.id = id;
		kfiles = new Object();
		kfiles.xslFile = xslFile;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addMrssTransformFromFile", kparams, kfiles);
	},
	
	/**
	 * Add MRSS validate file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	xsdData	string		XSD MRSS validatation data (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 **/
	addMrssValidate: function(id, xsdData){
		var kparams = new Object();
		kparams.id = id;
		kparams.xsdData = xsdData;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addMrssValidate", kparams);
	},
	
	/**
	 * Add MRSS validate file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	xsdFile	file		XSD MRSS validatation file (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 **/
	addMrssValidateFromFile: function(id, xsdFile){
		var kparams = new Object();
		kparams.id = id;
		kfiles = new Object();
		kfiles.xsdFile = xsdFile;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addMrssValidateFromFile", kparams, kfiles);
	},
	
	/**
	 * Add results transform file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	transformData	string		transformation data xsl, xPath or regex (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 **/
	addResultsTransform: function(id, transformData){
		var kparams = new Object();
		kparams.id = id;
		kparams.transformData = transformData;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addResultsTransform", kparams);
	},
	
	/**
	 * Add MRSS transform file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	transformFile	file		transformation file xsl, xPath or regex (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 **/
	addResultsTransformFromFile: function(id, transformFile){
		var kparams = new Object();
		kparams.id = id;
		kfiles = new Object();
		kfiles.transformFile = transformFile;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addResultsTransformFromFile", kparams, kfiles);
	},
	
	/**
	 * Get Generic Distribution Provider Action by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "get", kparams);
	},
	
	/**
	 * Get Generic Distribution Provider Action by provider id.
	 * @param	genericDistributionProviderId	int		 (optional)
	 * @param	actionType	int		 (optional, enum: KalturaDistributionAction)
	 * @return	KalturaGenericDistributionProviderAction.
	 **/
	getByProviderId: function(genericDistributionProviderId, actionType){
		var kparams = new Object();
		kparams.genericDistributionProviderId = genericDistributionProviderId;
		kparams.actionType = actionType;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "getByProviderId", kparams);
	},
	
	/**
	 * Update Generic Distribution Provider Action by provider id.
	 * @param	genericDistributionProviderId	int		 (optional)
	 * @param	actionType	int		 (optional, enum: KalturaDistributionAction)
	 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 **/
	updateByProviderId: function(genericDistributionProviderId, actionType, genericDistributionProviderAction){
		var kparams = new Object();
		kparams.genericDistributionProviderId = genericDistributionProviderId;
		kparams.actionType = actionType;
		kparams.genericDistributionProviderAction = genericDistributionProviderAction;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "updateByProviderId", kparams);
	},
	
	/**
	 * Update Generic Distribution Provider Action by id.
	 * @param	id	int		 (optional)
	 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional)
	 * @return	KalturaGenericDistributionProviderAction.
	 **/
	update: function(id, genericDistributionProviderAction){
		var kparams = new Object();
		kparams.id = id;
		kparams.genericDistributionProviderAction = genericDistributionProviderAction;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "update", kparams);
	},
	
	/**
	 * Delete Generic Distribution Provider Action by id.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "delete", kparams);
	},
	
	/**
	 * Delete Generic Distribution Provider Action by provider id.
	 * @param	genericDistributionProviderId	int		 (optional)
	 * @param	actionType	int		 (optional, enum: KalturaDistributionAction)
	 * @return	.
	 **/
	deleteByProviderId: function(genericDistributionProviderId, actionType){
		var kparams = new Object();
		kparams.genericDistributionProviderId = genericDistributionProviderId;
		kparams.actionType = actionType;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "deleteByProviderId", kparams);
	},
	
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaGenericDistributionProviderActionFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaGenericDistributionProviderActionListResponse.
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
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: cuePoint.
 **/
var KalturaCuePointService = {
	/**
	 * Allows you to add an cue point object associated with an entry.
	 * @param	cuePoint	KalturaCuePoint		 (optional)
	 * @return	KalturaCuePoint.
	 **/
	add: function(cuePoint){
		var kparams = new Object();
		kparams.cuePoint = cuePoint;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "add", kparams);
	},
	
	/**
	 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
	 * @param	fileData	file		 (optional)
	 * @return	KalturaCuePointListResponse.
	 **/
	addFromBulk: function(fileData){
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "addFromBulk", kparams, kfiles);
	},
	
	/**
	 * Retrieve an CuePoint object by id.
	 * @param	id	string		 (optional)
	 * @return	KalturaCuePoint.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "get", kparams);
	},
	
	/**
	 * List cue point objects by filter and pager.
	 * @param	filter	KalturaCuePointFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaCuePointListResponse.
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
		return new KalturaRequestBuilder("cuepoint_cuepoint", "list", kparams);
	},
	
	/**
	 * count cue point objects by filter.
	 * @param	filter	KalturaCuePointFilter		 (optional, default: null)
	 * @return	int.
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "count", kparams);
	},
	
	/**
	 * Update cue point by id.
	 * @param	id	string		 (optional)
	 * @param	cuePoint	KalturaCuePoint		 (optional)
	 * @return	KalturaCuePoint.
	 **/
	update: function(id, cuePoint){
		var kparams = new Object();
		kparams.id = id;
		kparams.cuePoint = cuePoint;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "update", kparams);
	},
	
	/**
	 * delete cue point by id, and delete all children cue points.
	 * @param	id	string		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "delete", kparams);
	},
	
	/**
	 * Update cuePoint status by id.
	 * @param	id	string		 (optional)
	 * @param	status	int		 (optional, enum: KalturaCuePointStatus)
	 * @return	.
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: annotation.
 **/
var KalturaAnnotationService = {
	/**
	 * Allows you to add an annotation object associated with an entry.
	 * @param	annotation	KalturaCuePoint		 (optional)
	 * @return	KalturaAnnotation.
	 **/
	add: function(annotation){
		var kparams = new Object();
		kparams.annotation = annotation;
		return new KalturaRequestBuilder("annotation_annotation", "add", kparams);
	},
	
	/**
	 * Update annotation by id.
	 * @param	id	string		 (optional)
	 * @param	annotation	KalturaCuePoint		 (optional)
	 * @return	KalturaAnnotation.
	 **/
	update: function(id, annotation){
		var kparams = new Object();
		kparams.id = id;
		kparams.annotation = annotation;
		return new KalturaRequestBuilder("annotation_annotation", "update", kparams);
	},
	
	/**
	 * List annotation objects by filter and pager.
	 * @param	filter	KalturaCuePointFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaAnnotationListResponse.
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
		return new KalturaRequestBuilder("annotation_annotation", "list", kparams);
	},
	
	/**
	 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
	 * @param	fileData	file		 (optional)
	 * @return	KalturaCuePointListResponse.
	 **/
	addFromBulk: function(fileData){
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("annotation_annotation", "addFromBulk", kparams, kfiles);
	},
	
	/**
	 * Retrieve an CuePoint object by id.
	 * @param	id	string		 (optional)
	 * @return	KalturaCuePoint.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("annotation_annotation", "get", kparams);
	},
	
	/**
	 * count cue point objects by filter.
	 * @param	filter	KalturaCuePointFilter		 (optional, default: null)
	 * @return	int.
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("annotation_annotation", "count", kparams);
	},
	
	/**
	 * delete cue point by id, and delete all children cue points.
	 * @param	id	string		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("annotation_annotation", "delete", kparams);
	},
	
	/**
	 * Update cuePoint status by id.
	 * @param	id	string		 (optional)
	 * @param	status	int		 (optional, enum: KalturaCuePointStatus)
	 * @return	.
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("annotation_annotation", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: quiz.
 **/
var KalturaQuizService = {
	/**
	 * Allows to add a quiz to an entry.
	 * @param	entryId	string		 (optional)
	 * @param	quiz	KalturaQuiz		 (optional)
	 * @return	KalturaQuiz.
	 **/
	add: function(entryId, quiz){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.quiz = quiz;
		return new KalturaRequestBuilder("quiz_quiz", "add", kparams);
	},
	
	/**
	 * Allows to update a quiz.
	 * @param	entryId	string		 (optional)
	 * @param	quiz	KalturaQuiz		 (optional)
	 * @return	KalturaQuiz.
	 **/
	update: function(entryId, quiz){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.quiz = quiz;
		return new KalturaRequestBuilder("quiz_quiz", "update", kparams);
	},
	
	/**
	 * Allows to get a quiz.
	 * @param	entryId	string		 (optional)
	 * @return	KalturaQuiz.
	 **/
	get: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("quiz_quiz", "get", kparams);
	},
	
	/**
	 * List quiz objects by filter and pager.
	 * @param	filter	KalturaQuizFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaQuizListResponse.
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
		return new KalturaRequestBuilder("quiz_quiz", "list", kparams);
	},
	
	/**
	 * sends a with an api request for pdf from quiz object.
	 * @param	entryId	string		 (optional)
	 * @param	quizOutputType	int		 (optional, enum: KalturaQuizOutputType)
	 * @return	string.
	 **/
	getUrl: function(entryId, quizOutputType){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.quizOutputType = quizOutputType;
		return new KalturaRequestBuilder("quiz_quiz", "getUrl", kparams);
	}
}

/**
 *Class definition for the Kaltura service: shortLink.
 **/
var KalturaShortLinkService = {
	/**
	 * List short link objects by filter and pager.
	 * @param	filter	KalturaShortLinkFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaShortLinkListResponse.
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
		return new KalturaRequestBuilder("shortlink_shortlink", "list", kparams);
	},
	
	/**
	 * Allows you to add a short link object.
	 * @param	shortLink	KalturaShortLink		 (optional)
	 * @return	KalturaShortLink.
	 **/
	add: function(shortLink){
		var kparams = new Object();
		kparams.shortLink = shortLink;
		return new KalturaRequestBuilder("shortlink_shortlink", "add", kparams);
	},
	
	/**
	 * Retrieve an short link object by id.
	 * @param	id	string		 (optional)
	 * @return	KalturaShortLink.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("shortlink_shortlink", "get", kparams);
	},
	
	/**
	 * Update exisitng short link.
	 * @param	id	string		 (optional)
	 * @param	shortLink	KalturaShortLink		 (optional)
	 * @return	KalturaShortLink.
	 **/
	update: function(id, shortLink){
		var kparams = new Object();
		kparams.id = id;
		kparams.shortLink = shortLink;
		return new KalturaRequestBuilder("shortlink_shortlink", "update", kparams);
	},
	
	/**
	 * Mark the short link as deleted.
	 * @param	id	string		 (optional)
	 * @return	KalturaShortLink.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("shortlink_shortlink", "delete", kparams);
	}
}

/**
 *Class definition for the Kaltura service: bulk.
 **/
var KalturaBulkService = {
	/**
	 * Get bulk upload batch job by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaBulkUpload.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload_bulk", "get", kparams);
	},
	
	/**
	 * List bulk upload batch jobs.
	 * @param	bulkUploadFilter	KalturaBulkUploadFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaBulkUploadListResponse.
	 **/
	listAction: function(bulkUploadFilter, pager){
		if(!bulkUploadFilter)
			bulkUploadFilter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (bulkUploadFilter != null)
			kparams.bulkUploadFilter = bulkUploadFilter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("bulkupload_bulk", "list", kparams);
	},
	
	/**
	 * Aborts the bulk upload and all its child jobs.
	 * @param	id	int		job id (optional)
	 * @return	KalturaBulkUpload.
	 **/
	abort: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload_bulk", "abort", kparams);
	}
}

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

/**
 *Class definition for the Kaltura service: captionAsset.
 **/
var KalturaCaptionAssetService = {
	/**
	 * Add caption asset.
	 * @param	entryId	string		 (optional)
	 * @param	captionAsset	KalturaCaptionAsset		 (optional)
	 * @return	KalturaCaptionAsset.
	 **/
	add: function(entryId, captionAsset){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.captionAsset = captionAsset;
		return new KalturaRequestBuilder("caption_captionasset", "add", kparams);
	},
	
	/**
	 * Update content of caption asset.
	 * @param	id	string		 (optional)
	 * @param	contentResource	KalturaContentResource		 (optional)
	 * @return	KalturaCaptionAsset.
	 **/
	setContent: function(id, contentResource){
		var kparams = new Object();
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new KalturaRequestBuilder("caption_captionasset", "setContent", kparams);
	},
	
	/**
	 * Update caption asset.
	 * @param	id	string		 (optional)
	 * @param	captionAsset	KalturaCaptionAsset		 (optional)
	 * @return	KalturaCaptionAsset.
	 **/
	update: function(id, captionAsset){
		var kparams = new Object();
		kparams.id = id;
		kparams.captionAsset = captionAsset;
		return new KalturaRequestBuilder("caption_captionasset", "update", kparams);
	},
	
	/**
	 * Get download URL for the asset.
	 * @param	id	string		 (optional)
	 * @param	storageId	int		 (optional, default: null)
	 * @return	string.
	 **/
	getUrl: function(id, storageId){
		if(!storageId)
			storageId = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.storageId = storageId;
		return new KalturaRequestBuilder("caption_captionasset", "getUrl", kparams);
	},
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param	id	string		 (optional)
	 * @return	KalturaRemotePathListResponse.
	 **/
	getRemotePaths: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("caption_captionasset", "getRemotePaths", kparams);
	},
	
	/**
	 * Markss the caption as default and removes that mark from all other caption assets of the entry..
	 * @param	captionAssetId	string		 (optional)
	 * @return	.
	 **/
	setAsDefault: function(captionAssetId){
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		return new KalturaRequestBuilder("caption_captionasset", "setAsDefault", kparams);
	},
	
	/**
	 * .
	 * @param	captionAssetId	string		 (optional)
	 * @return	KalturaCaptionAsset.
	 **/
	get: function(captionAssetId){
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		return new KalturaRequestBuilder("caption_captionasset", "get", kparams);
	},
	
	/**
	 * List caption Assets by filter and pager.
	 * @param	filter	KalturaAssetFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaCaptionAssetListResponse.
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
		return new KalturaRequestBuilder("caption_captionasset", "list", kparams);
	},
	
	/**
	 * .
	 * @param	captionAssetId	string		 (optional)
	 * @return	.
	 **/
	deleteAction: function(captionAssetId){
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		return new KalturaRequestBuilder("caption_captionasset", "delete", kparams);
	}
}

/**
 *Class definition for the Kaltura service: captionParams.
 **/
var KalturaCaptionParamsService = {
	/**
	 * Add new Caption Params.
	 * @param	captionParams	KalturaCaptionParams		 (optional)
	 * @return	KalturaCaptionParams.
	 **/
	add: function(captionParams){
		var kparams = new Object();
		kparams.captionParams = captionParams;
		return new KalturaRequestBuilder("caption_captionparams", "add", kparams);
	},
	
	/**
	 * Get Caption Params by ID.
	 * @param	id	int		 (optional)
	 * @return	KalturaCaptionParams.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("caption_captionparams", "get", kparams);
	},
	
	/**
	 * Update Caption Params by ID.
	 * @param	id	int		 (optional)
	 * @param	captionParams	KalturaCaptionParams		 (optional)
	 * @return	KalturaCaptionParams.
	 **/
	update: function(id, captionParams){
		var kparams = new Object();
		kparams.id = id;
		kparams.captionParams = captionParams;
		return new KalturaRequestBuilder("caption_captionparams", "update", kparams);
	},
	
	/**
	 * Delete Caption Params by ID.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("caption_captionparams", "delete", kparams);
	},
	
	/**
	 * List Caption Params by filter with paging support (By default - all system default params will be listed too).
	 * @param	filter	KalturaCaptionParamsFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaCaptionParamsListResponse.
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
		return new KalturaRequestBuilder("caption_captionparams", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: captionAssetItem.
 **/
var KalturaCaptionAssetItemService = {
	/**
	 * Parse content of caption asset and index it.
	 * @param	captionAssetId	string		 (optional)
	 * @return	.
	 **/
	parse: function(captionAssetId){
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		return new KalturaRequestBuilder("captionsearch_captionassetitem", "parse", kparams);
	},
	
	/**
	 * Search caption asset items by filter, pager and free text.
	 * @param	entryFilter	KalturaBaseEntryFilter		 (optional, default: null)
	 * @param	captionAssetItemFilter	KalturaCaptionAssetItemFilter		 (optional, default: null)
	 * @param	captionAssetItemPager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaCaptionAssetItemListResponse.
	 **/
	search: function(entryFilter, captionAssetItemFilter, captionAssetItemPager){
		if(!entryFilter)
			entryFilter = null;
		if(!captionAssetItemFilter)
			captionAssetItemFilter = null;
		if(!captionAssetItemPager)
			captionAssetItemPager = null;
		var kparams = new Object();
		if (entryFilter != null)
			kparams.entryFilter = entryFilter;
		if (captionAssetItemFilter != null)
			kparams.captionAssetItemFilter = captionAssetItemFilter;
		if (captionAssetItemPager != null)
			kparams.captionAssetItemPager = captionAssetItemPager;
		return new KalturaRequestBuilder("captionsearch_captionassetitem", "search", kparams);
	},
	
	/**
	 * Search caption asset items by filter, pager and free text.
	 * @param	entryFilter	KalturaBaseEntryFilter		 (optional, default: null)
	 * @param	captionAssetItemFilter	KalturaCaptionAssetItemFilter		 (optional, default: null)
	 * @param	captionAssetItemPager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaBaseEntryListResponse.
	 **/
	searchEntries: function(entryFilter, captionAssetItemFilter, captionAssetItemPager){
		if(!entryFilter)
			entryFilter = null;
		if(!captionAssetItemFilter)
			captionAssetItemFilter = null;
		if(!captionAssetItemPager)
			captionAssetItemPager = null;
		var kparams = new Object();
		if (entryFilter != null)
			kparams.entryFilter = entryFilter;
		if (captionAssetItemFilter != null)
			kparams.captionAssetItemFilter = captionAssetItemFilter;
		if (captionAssetItemPager != null)
			kparams.captionAssetItemPager = captionAssetItemPager;
		return new KalturaRequestBuilder("captionsearch_captionassetitem", "searchEntries", kparams);
	}
}

/**
 *Class definition for the Kaltura service: attachmentAsset.
 **/
var KalturaAttachmentAssetService = {
	/**
	 * Add attachment asset.
	 * @param	entryId	string		 (optional)
	 * @param	attachmentAsset	KalturaAttachmentAsset		 (optional)
	 * @return	KalturaAttachmentAsset.
	 **/
	add: function(entryId, attachmentAsset){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.attachmentAsset = attachmentAsset;
		return new KalturaRequestBuilder("attachment_attachmentasset", "add", kparams);
	},
	
	/**
	 * Update content of attachment asset.
	 * @param	id	string		 (optional)
	 * @param	contentResource	KalturaContentResource		 (optional)
	 * @return	KalturaAttachmentAsset.
	 **/
	setContent: function(id, contentResource){
		var kparams = new Object();
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new KalturaRequestBuilder("attachment_attachmentasset", "setContent", kparams);
	},
	
	/**
	 * Update attachment asset.
	 * @param	id	string		 (optional)
	 * @param	attachmentAsset	KalturaAttachmentAsset		 (optional)
	 * @return	KalturaAttachmentAsset.
	 **/
	update: function(id, attachmentAsset){
		var kparams = new Object();
		kparams.id = id;
		kparams.attachmentAsset = attachmentAsset;
		return new KalturaRequestBuilder("attachment_attachmentasset", "update", kparams);
	},
	
	/**
	 * Get download URL for the asset.
	 * @param	id	string		 (optional)
	 * @param	storageId	int		 (optional, default: null)
	 * @return	string.
	 **/
	getUrl: function(id, storageId){
		if(!storageId)
			storageId = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.storageId = storageId;
		return new KalturaRequestBuilder("attachment_attachmentasset", "getUrl", kparams);
	},
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param	id	string		 (optional)
	 * @return	KalturaRemotePathListResponse.
	 **/
	getRemotePaths: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("attachment_attachmentasset", "getRemotePaths", kparams);
	},
	
	/**
	 * .
	 * @param	attachmentAssetId	string		 (optional)
	 * @return	KalturaAttachmentAsset.
	 **/
	get: function(attachmentAssetId){
		var kparams = new Object();
		kparams.attachmentAssetId = attachmentAssetId;
		return new KalturaRequestBuilder("attachment_attachmentasset", "get", kparams);
	},
	
	/**
	 * List attachment Assets by filter and pager.
	 * @param	filter	KalturaAssetFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaAttachmentAssetListResponse.
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
		return new KalturaRequestBuilder("attachment_attachmentasset", "list", kparams);
	},
	
	/**
	 * .
	 * @param	attachmentAssetId	string		 (optional)
	 * @return	.
	 **/
	deleteAction: function(attachmentAssetId){
		var kparams = new Object();
		kparams.attachmentAssetId = attachmentAssetId;
		return new KalturaRequestBuilder("attachment_attachmentasset", "delete", kparams);
	}
}

/**
 *Class definition for the Kaltura service: tag.
 **/
var KalturaTagService = {
	/**
	 * .
	 * @param	tagFilter	KalturaTagFilter		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaTagListResponse.
	 **/
	search: function(tagFilter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.tagFilter = tagFilter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("tagsearch_tag", "search", kparams);
	},
	
	/**
	 * Action goes over all tags with instanceCount==0 and checks whether they need to be removed from the DB. Returns number of removed tags..
	 * @return	int.
	 **/
	deletePending: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("tagsearch_tag", "deletePending", kparams);
	},
	
	/**
	 * .
	 * @param	categoryId	int		 (optional)
	 * @param	pcToDecrement	string		 (optional)
	 * @param	pcToIncrement	string		 (optional)
	 * @return	.
	 **/
	indexCategoryEntryTags: function(categoryId, pcToDecrement, pcToIncrement){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.pcToDecrement = pcToDecrement;
		kparams.pcToIncrement = pcToIncrement;
		return new KalturaRequestBuilder("tagsearch_tag", "indexCategoryEntryTags", kparams);
	}
}

/**
 *Class definition for the Kaltura service: like.
 **/
var KalturaLikeService = {
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @return	bool.
	 **/
	like: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("like_like", "like", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @return	bool.
	 **/
	unlike: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("like_like", "unlike", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	userId	string		 (optional, default: null)
	 * @return	bool.
	 **/
	checkLikeExists: function(entryId, userId){
		if(!userId)
			userId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("like_like", "checkLikeExists", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaLikeFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaLikeListResponse.
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
		return new KalturaRequestBuilder("like_like", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: varConsole.
 **/
var KalturaVarConsoleService = {
	/**
	 * Function which calulates partner usage of a group of a VAR's sub-publishers.
	 * @param	partnerFilter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	usageFilter	KalturaReportInputFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaPartnerUsageListResponse.
	 **/
	getPartnerUsage: function(partnerFilter, usageFilter, pager){
		if(!partnerFilter)
			partnerFilter = null;
		if(!usageFilter)
			usageFilter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (partnerFilter != null)
			kparams.partnerFilter = partnerFilter;
		if (usageFilter != null)
			kparams.usageFilter = usageFilter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("varconsole_varconsole", "getPartnerUsage", kparams);
	},
	
	/**
	 * Function to change a sub-publisher's status.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaPartnerStatus)
	 * @return	.
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("varconsole_varconsole", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: eventNotificationTemplate.
 **/
var KalturaEventNotificationTemplateService = {
	/**
	 * This action allows for the creation of new backend event types in the system. This action requires access to the Kaltura server Admin Console. If you're looking to register to existing event types, please use the clone action instead..
	 * @param	eventNotificationTemplate	KalturaEventNotificationTemplate		 (optional)
	 * @return	KalturaEventNotificationTemplate.
	 **/
	add: function(eventNotificationTemplate){
		var kparams = new Object();
		kparams.eventNotificationTemplate = eventNotificationTemplate;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "add", kparams);
	},
	
	/**
	 * This action allows registering to various backend event. Use this action to create notifications that will react to events such as new video was uploaded or metadata field was updated. To see the list of available event types, call the listTemplates action..
	 * @param	id	int		source template to clone (optional)
	 * @param	eventNotificationTemplate	KalturaEventNotificationTemplate		overwrite configuration object (optional, default: null)
	 * @return	KalturaEventNotificationTemplate.
	 **/
	cloneAction: function(id, eventNotificationTemplate){
		if(!eventNotificationTemplate)
			eventNotificationTemplate = null;
		var kparams = new Object();
		kparams.id = id;
		if (eventNotificationTemplate != null)
			kparams.eventNotificationTemplate = eventNotificationTemplate;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "clone", kparams);
	},
	
	/**
	 * Retrieve an event notification template object by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaEventNotificationTemplate.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "get", kparams);
	},
	
	/**
	 * Update an existing event notification template object.
	 * @param	id	int		 (optional)
	 * @param	eventNotificationTemplate	KalturaEventNotificationTemplate		 (optional)
	 * @return	KalturaEventNotificationTemplate.
	 **/
	update: function(id, eventNotificationTemplate){
		var kparams = new Object();
		kparams.id = id;
		kparams.eventNotificationTemplate = eventNotificationTemplate;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "update", kparams);
	},
	
	/**
	 * Update event notification template status by id.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaEventNotificationTemplateStatus)
	 * @return	KalturaEventNotificationTemplate.
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "updateStatus", kparams);
	},
	
	/**
	 * Delete an event notification template object.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "delete", kparams);
	},
	
	/**
	 * list event notification template objects.
	 * @param	filter	KalturaEventNotificationTemplateFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaEventNotificationTemplateListResponse.
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
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "list", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaEventNotificationTemplateListResponse.
	 **/
	listByPartner: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "listByPartner", kparams);
	},
	
	/**
	 * Dispatch event notification object by id.
	 * @param	id	int		 (optional)
	 * @param	scope	KalturaEventNotificationScope		 (optional)
	 * @return	int.
	 **/
	dispatch: function(id, scope){
		var kparams = new Object();
		kparams.id = id;
		kparams.scope = scope;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "dispatch", kparams);
	},
	
	/**
	 * Action lists the template partner event notification templates..
	 * @param	filter	KalturaEventNotificationTemplateFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaEventNotificationTemplateListResponse.
	 **/
	listTemplates: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "listTemplates", kparams);
	}
}

/**
 *Class definition for the Kaltura service: externalMedia.
 **/
var KalturaExternalMediaService = {
	/**
	 * Add external media entry.
	 * @param	entry	KalturaExternalMediaEntry		 (optional)
	 * @return	KalturaExternalMediaEntry.
	 **/
	add: function(entry){
		var kparams = new Object();
		kparams.entry = entry;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "add", kparams);
	},
	
	/**
	 * Get external media entry by ID..
	 * @param	id	string		External media entry id (optional)
	 * @return	KalturaExternalMediaEntry.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "get", kparams);
	},
	
	/**
	 * Update external media entry. Only the properties that were set will be updated..
	 * @param	id	string		External media entry id to update (optional)
	 * @param	entry	KalturaExternalMediaEntry		External media entry object to update (optional)
	 * @return	KalturaExternalMediaEntry.
	 **/
	update: function(id, entry){
		var kparams = new Object();
		kparams.id = id;
		kparams.entry = entry;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "update", kparams);
	},
	
	/**
	 * Delete a external media entry..
	 * @param	id	string		External media entry id to delete (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "delete", kparams);
	},
	
	/**
	 * List media entries by filter with paging support..
	 * @param	filter	KalturaExternalMediaEntryFilter		External media entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 * @return	KalturaExternalMediaEntryListResponse.
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
		return new KalturaRequestBuilder("externalmedia_externalmedia", "list", kparams);
	},
	
	/**
	 * Count media entries by filter..
	 * @param	filter	KalturaExternalMediaEntryFilter		External media entry filter (optional, default: null)
	 * @return	int.
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "count", kparams);
	}
}

/**
 *Class definition for the Kaltura service: scheduleEvent.
 **/
var KalturaScheduleEventService = {
	/**
	 * Allows you to add a new KalturaScheduleEvent object.
	 * @param	scheduleEvent	KalturaScheduleEvent		 (optional)
	 * @return	KalturaScheduleEvent.
	 **/
	add: function(scheduleEvent){
		var kparams = new Object();
		kparams.scheduleEvent = scheduleEvent;
		return new KalturaRequestBuilder("schedule_scheduleevent", "add", kparams);
	},
	
	/**
	 * Retrieve a KalturaScheduleEvent object by ID.
	 * @param	scheduleEventId	int		 (optional)
	 * @return	KalturaScheduleEvent.
	 **/
	get: function(scheduleEventId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		return new KalturaRequestBuilder("schedule_scheduleevent", "get", kparams);
	},
	
	/**
	 * Update an existing KalturaScheduleEvent object.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleEvent	KalturaScheduleEvent		Id (optional)
	 * @return	KalturaScheduleEvent.
	 **/
	update: function(scheduleEventId, scheduleEvent){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleEvent = scheduleEvent;
		return new KalturaRequestBuilder("schedule_scheduleevent", "update", kparams);
	},
	
	/**
	 * Mark the KalturaScheduleEvent object as deleted.
	 * @param	scheduleEventId	int		 (optional)
	 * @return	KalturaScheduleEvent.
	 **/
	deleteAction: function(scheduleEventId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		return new KalturaRequestBuilder("schedule_scheduleevent", "delete", kparams);
	},
	
	/**
	 * Mark the KalturaScheduleEvent object as cancelled.
	 * @param	scheduleEventId	int		 (optional)
	 * @return	KalturaScheduleEvent.
	 **/
	cancel: function(scheduleEventId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		return new KalturaRequestBuilder("schedule_scheduleevent", "cancel", kparams);
	},
	
	/**
	 * List KalturaScheduleEvent objects.
	 * @param	filter	KalturaScheduleEventFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaScheduleEventListResponse.
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
		return new KalturaRequestBuilder("schedule_scheduleevent", "list", kparams);
	},
	
	/**
	 * Add new bulk upload batch job.
	 * @param	fileData	file		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadICalJobData		 (optional, default: null)
	 * @return	KalturaBulkUpload.
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData){
		if(!bulkUploadData)
			bulkUploadData = null;
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		return new KalturaRequestBuilder("schedule_scheduleevent", "addFromBulkUpload", kparams, kfiles);
	}
}

/**
 *Class definition for the Kaltura service: scheduleResource.
 **/
var KalturaScheduleResourceService = {
	/**
	 * Allows you to add a new KalturaScheduleResource object.
	 * @param	scheduleResource	KalturaScheduleResource		 (optional)
	 * @return	KalturaScheduleResource.
	 **/
	add: function(scheduleResource){
		var kparams = new Object();
		kparams.scheduleResource = scheduleResource;
		return new KalturaRequestBuilder("schedule_scheduleresource", "add", kparams);
	},
	
	/**
	 * Retrieve a KalturaScheduleResource object by ID.
	 * @param	scheduleResourceId	int		 (optional)
	 * @return	KalturaScheduleResource.
	 **/
	get: function(scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleresource", "get", kparams);
	},
	
	/**
	 * Update an existing KalturaScheduleResource object.
	 * @param	scheduleResourceId	int		 (optional)
	 * @param	scheduleResource	KalturaScheduleResource		Id (optional)
	 * @return	KalturaScheduleResource.
	 **/
	update: function(scheduleResourceId, scheduleResource){
		var kparams = new Object();
		kparams.scheduleResourceId = scheduleResourceId;
		kparams.scheduleResource = scheduleResource;
		return new KalturaRequestBuilder("schedule_scheduleresource", "update", kparams);
	},
	
	/**
	 * Mark the KalturaScheduleResource object as deleted.
	 * @param	scheduleResourceId	int		 (optional)
	 * @return	KalturaScheduleResource.
	 **/
	deleteAction: function(scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleresource", "delete", kparams);
	},
	
	/**
	 * List KalturaScheduleResource objects.
	 * @param	filter	KalturaScheduleResourceFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaScheduleResourceListResponse.
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
		return new KalturaRequestBuilder("schedule_scheduleresource", "list", kparams);
	},
	
	/**
	 * Add new bulk upload batch job.
	 * @param	fileData	file		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadCsvJobData		 (optional, default: null)
	 * @return	KalturaBulkUpload.
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData){
		if(!bulkUploadData)
			bulkUploadData = null;
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		return new KalturaRequestBuilder("schedule_scheduleresource", "addFromBulkUpload", kparams, kfiles);
	}
}

/**
 *Class definition for the Kaltura service: scheduleEventResource.
 **/
var KalturaScheduleEventResourceService = {
	/**
	 * Allows you to add a new KalturaScheduleEventResource object.
	 * @param	scheduleEventResource	KalturaScheduleEventResource		 (optional)
	 * @return	KalturaScheduleEventResource.
	 **/
	add: function(scheduleEventResource){
		var kparams = new Object();
		kparams.scheduleEventResource = scheduleEventResource;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "add", kparams);
	},
	
	/**
	 * Retrieve a KalturaScheduleEventResource object by ID.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleResourceId	int		 (optional)
	 * @return	KalturaScheduleEventResource.
	 **/
	get: function(scheduleEventId, scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "get", kparams);
	},
	
	/**
	 * Update an existing KalturaScheduleEventResource object.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleResourceId	int		 (optional)
	 * @param	scheduleEventResource	KalturaScheduleEventResource		 (optional)
	 * @return	KalturaScheduleEventResource.
	 **/
	update: function(scheduleEventId, scheduleResourceId, scheduleEventResource){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		kparams.scheduleEventResource = scheduleEventResource;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "update", kparams);
	},
	
	/**
	 * Mark the KalturaScheduleEventResource object as deleted.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleResourceId	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(scheduleEventId, scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "delete", kparams);
	},
	
	/**
	 * List KalturaScheduleEventResource objects.
	 * @param	filter	KalturaScheduleEventResourceFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaScheduleEventResourceListResponse.
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
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: scheduledTaskProfile.
 **/
var KalturaScheduledTaskProfileService = {
	/**
	 * Add a new scheduled task profile.
	 * @param	scheduledTaskProfile	KalturaScheduledTaskProfile		 (optional)
	 * @return	KalturaScheduledTaskProfile.
	 **/
	add: function(scheduledTaskProfile){
		var kparams = new Object();
		kparams.scheduledTaskProfile = scheduledTaskProfile;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "add", kparams);
	},
	
	/**
	 * Retrieve a scheduled task profile by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaScheduledTaskProfile.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "get", kparams);
	},
	
	/**
	 * Update an existing scheduled task profile.
	 * @param	id	int		 (optional)
	 * @param	scheduledTaskProfile	KalturaScheduledTaskProfile		 (optional)
	 * @return	KalturaScheduledTaskProfile.
	 **/
	update: function(id, scheduledTaskProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.scheduledTaskProfile = scheduledTaskProfile;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "update", kparams);
	},
	
	/**
	 * Delete a scheduled task profile.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "delete", kparams);
	},
	
	/**
	 * List scheduled task profiles.
	 * @param	filter	KalturaScheduledTaskProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaScheduledTaskProfileListResponse.
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
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "list", kparams);
	},
	
	/**
	 * .
	 * @param	scheduledTaskProfileId	int		 (optional)
	 * @param	maxResults	int		 (optional, default: 500)
	 * @return	int.
	 **/
	requestDryRun: function(scheduledTaskProfileId, maxResults){
		if(!maxResults)
			maxResults = 500;
		var kparams = new Object();
		kparams.scheduledTaskProfileId = scheduledTaskProfileId;
		kparams.maxResults = maxResults;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "requestDryRun", kparams);
	},
	
	/**
	 * .
	 * @param	requestId	int		 (optional)
	 * @return	KalturaObjectListResponse.
	 **/
	getDryRunResults: function(requestId){
		var kparams = new Object();
		kparams.requestId = requestId;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "getDryRunResults", kparams);
	}
}

/**
 *Class definition for the Kaltura service: integration.
 **/
var KalturaIntegrationService = {
	/**
	 * Dispatch integration task.
	 * @param	data	KalturaIntegrationJobData		 (optional)
	 * @param	objectType	string		 (optional, enum: KalturaBatchJobObjectType)
	 * @param	objectId	string		 (optional)
	 * @return	int.
	 **/
	dispatch: function(data, objectType, objectId){
		var kparams = new Object();
		kparams.data = data;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		return new KalturaRequestBuilder("integration_integration", "dispatch", kparams);
	},
	
	/**
	 * .
	 * @param	id	int		integration job id (optional)
	 * @return	.
	 **/
	notify: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("integration_integration", "notify", kparams);
	}
}
// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platfroms allow them to do with
// text.
//
// Copyright (C) 2006-2011  Kaltura Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// @ignore
// ===================================================================================================

/**
 * Utility global method for extending javascript for allowing easier Inheritance.
 * This method should be called directly after defining the class or object, before extending it's prototype. 
 * @param parentClassOrObject		the parent class or object to inherit from.
 * @return	the object or class being created (the child class).
 */
Function.prototype.inheritsFrom = function( parentClassOrObject ){ 
	if ( parentClassOrObject.constructor == Function ) 
	{ 
		//Normal Inheritance 
		this.prototype = new parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype.parentClass = parentClassOrObject.prototype;
	} 
	else 
	{ 
		//Pure Virtual Inheritance 
		this.prototype = parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype.parentClass = parentClassOrObject;
	} 
	return this;
}

/**
 * Sorts an array by key, maintaining key to data correlations. This is useful mainly for associative arrays. 
 * @param arr 	The array to sort.
 * @return		The sorted array.
 */
function ksort(arr) {
  var sArr = [];
  var tArr = [];
  var n = 0;
  for (i in arr)
	  tArr[n++] = i+' |'+arr[i];
  tArr = tArr.sort();
  for (var i=0; i<tArr.length; i++) {
	var x = tArr[i].split(' |');
    sArr[x[0]] = x[1];
  }
  return sArr;
}

/**
 * Implement to get Kaltura Client logs
 * 
 */
function IKalturaLogger(){
}
IKalturaLogger.prototype.log = function(msg){
	if (console && console.log){
		console.log(msg);
	}
};

/**
 * Kaltura client constructor
 * 
 */
function KalturaClientBase(){
}

/**
 * Kaltura client init
 * @param KalturaConfiguration config
 */
KalturaClientBase.prototype.init = function(config){
    this.config = config;
    var logger = this.config.getLogger();
	if (logger) {
		this.shouldLog = true;	
	}
};

KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSON = 1;
KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_XML = 2;
KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_PHP = 3;
KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSONP = 9;

/**
 * @param KalturaConfiguration The Kaltura Client - this is the facade through which all service actions should be called.
 */
KalturaClientBase.prototype.config = null;
	
/**
 * @param object Kaltura general request arguments
 */
KalturaClientBase.prototype.requestData = {};
	
/**
 * @param boolean	should the client log all actions.
 */
KalturaClientBase.prototype.shouldLog = false;
	
/**
 * getter for the referenced configuration object. 
 * @return KalturaConfiguration
 */
KalturaClientBase.prototype.getConfig = function(){
	return this.config;
};

/**
 * @param KalturaConfiguration config	setter for the referenced configuration object.
 */
KalturaClientBase.prototype.setConfig = function(config){
	this.config = config;
	logger = this.config.getLogger();
	if (logger instanceof IKalturaLogger){
		this.shouldLog = true;	
	}
};

/**
 * return a new multi-request builder
 */
KalturaClientBase.prototype.startMultiRequest = function(){
	return new KalturaMultiRequestBuilder(this);
};

/**
 * @param string msg	client logging utility. 
 */
KalturaClientBase.prototype.log = function(msg){
	if (this.shouldLog)
		this.config.getLogger().log(msg);
};

/**
 * Constructs new Kaltura configuration object
 */
function KalturaConfiguration(){
}

KalturaConfiguration.prototype.logger		= null;
KalturaConfiguration.prototype.serviceUrl	= 'http://www.kaltura.com';
KalturaConfiguration.prototype.serviceBase 	= '/api_v3/service';

/**
 * Set logger to get kaltura client debug logs.
 * @param IKalturaLogger log
 */
KalturaConfiguration.prototype.setLogger = function(log){
	this.logger = log;
};

/**
 * Gets the logger (Internal client use)
 * @return IKalturaLogger
 */
KalturaConfiguration.prototype.getLogger = function(){
	return this.logger;
};

function KalturaRequestBuilder(service, action, data, files){
	if(!service)
		return;
	
	this.service = service;
	this.action = action;
	this.data = data;
	this.files = files;
	this.requestData = {};
}

KalturaRequestBuilder.prototype.callback = null;

/**
 * Sign array of parameters for requests validation (CRC).
 * @param array params		service action call parameters that will be sent on the request.
 * @return string			a hashed signed signature that can identify the sent request parameters.
 */
KalturaRequestBuilder.prototype.signature = function(params){
	params = ksort(params);
	var str = '';
	for(var v in params) {
		var k = params[v];
		if(typeof(k) === 'object' || $.isArray(k))
			k = this.signature(k);
		
		str += v + k;
	}
	return MD5(str);
};

/**
 * send the http request.
 * @return array 							the results and errors inside an array.
 */
KalturaRequestBuilder.prototype.doHttpRequest = function(client){
	var json = this.getData(true);
	var callback = this.callback;
	var url = this.getUrl(client);

	client.log('URL: ' + url);
	client.log('Request JSON: ' + JSON.stringify(json));
	
	$.ajax({
	    type: 'POST',
	    url: url,
	    crossDomain: true,
	    data: JSON.stringify(json),
	    contentType: 'application/json',
	    dataType: 'json',
	    success: function(json, textStatus, jqXHR) {
	    	client.log('Response JSON: ' + JSON.stringify(json));
	    	
	    	if(json && typeof(json) === 'object' && json.code && json.message){
		    	if(callback)
		    		callback(false, json);
		    	else
		    		throw new Error(json.message);
	    	}
	    	else if(callback)
	    		callback(true, json);
	    },
	    error: function (responseData, textStatus, errorThrown) {
	    	if(callback)
	    		callback(false, errorThrown);
	    	else
	    		throw errorThrown;
	    }
	});
};

KalturaRequestBuilder.prototype.sign = function(){
	var signature = this.signature(this.data);
	this.data.kalsig = signature;
};

KalturaRequestBuilder.prototype.getUrl = function(client){
	var url = client.config.serviceUrl + client.config.serviceBase;
	url += '/' + this.service + '/action/' + this.action;
	
	return url;
};

KalturaRequestBuilder.prototype.getData = function(sign){
	this.data.format = KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSON;

	$.extend(this.data, this.requestData);

	if(sign)
		this.sign();
	
	return this.data;
};

KalturaRequestBuilder.prototype.execute = function(client, callback){
	var requestData = $.extend({}, client.requestData); // clone client requestData
	this.requestData = $.extend(requestData, this.requestData); // merge client requestData with current requestData
	
	this.completion(callback);
	this.doHttpRequest(client);
};

KalturaRequestBuilder.prototype.completion = function(callback){
	this.callback = callback;
	return this;
};

KalturaRequestBuilder.prototype.add = function(requestBuilder){
	var multiRequestBuilder = new KalturaMultiRequestBuilder();
	multiRequestBuilder.add(this);
	multiRequestBuilder.add(requestBuilder);
	return multiRequestBuilder;
};



function KalturaMultiRequestBuilder(){
	this.requestData = {};
	this.requests = [];
}

KalturaMultiRequestBuilder.inheritsFrom (KalturaRequestBuilder);

KalturaMultiRequestBuilder.prototype.completion = function(callback){
	var This = this;
	if(callback){
		This.callback = callback;
	}
	else {
		This.callback = function(success, results){
			if(!success) {
				throw new Error(results);
			}

			for(var i = 0; i < This.requests.length; i++){
				if(This.requests[i].callback){
					if(results[i] && typeof(results[i]) == 'object' && results[i].code && results[i].message)
						This.requests[i].callback(false, results[i]);
					else
						This.requests[i].callback(true, results[i]);
				}
			}
		};
	}
	
	return this;
};

KalturaMultiRequestBuilder.prototype.add = function(requestBuilder){
	this.requests.push(requestBuilder);
};

KalturaMultiRequestBuilder.prototype.getUrl = function(client){
	var url = client.config.serviceUrl + client.config.serviceBase;
	url += '/multirequest';
	
	return url;
};

KalturaMultiRequestBuilder.prototype.getData = function(){
	this.data = {
		format: KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSON
	}
	
	for(var i = 0; i < this.requests.length; i++){
		this.data[i] = this.requests[i].getData();
		this.data[i].service = this.requests[i].service;
		this.data[i].action = this.requests[i].action;
	}

	$.extend(this.data, this.requestData);
	
	this.sign();
	return this.data;
};

/**
*
*  MD5 (Message-Digest Algorithm)
*  http://www.webtoolkit.info/
*
**/
 
var MD5 = function (string) {
 
	function RotateLeft(lValue, iShiftBits) {
		return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
	}
 
	function AddUnsigned(lX,lY) {
		var lX4,lY4,lX8,lY8,lResult;
		lX8 = (lX & 0x80000000);
		lY8 = (lY & 0x80000000);
		lX4 = (lX & 0x40000000);
		lY4 = (lY & 0x40000000);
		lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
		if (lX4 & lY4) {
			return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
		}
		if (lX4 | lY4) {
			if (lResult & 0x40000000) {
				return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			}
		} else {
			return (lResult ^ lX8 ^ lY8);
		}
 	}
 
 	function F(x,y,z) { return (x & y) | ((~x) & z); }
 	function G(x,y,z) { return (x & z) | (y & (~z)); }
 	function H(x,y,z) { return (x ^ y ^ z); }
	function I(x,y,z) { return (y ^ (x | (~z))); }
 
	function FF(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function GG(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function HH(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function II(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function ConvertToWordArray(string) {
		var lWordCount;
		var lMessageLength = string.length;
		var lNumberOfWords_temp1=lMessageLength + 8;
		var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
		var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
		var lWordArray=Array(lNumberOfWords-1);
		var lBytePosition = 0;
		var lByteCount = 0;
		while ( lByteCount < lMessageLength ) {
			lWordCount = (lByteCount-(lByteCount % 4))/4;
			lBytePosition = (lByteCount % 4)*8;
			lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
			lByteCount++;
		}
		lWordCount = (lByteCount-(lByteCount % 4))/4;
		lBytePosition = (lByteCount % 4)*8;
		lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
		lWordArray[lNumberOfWords-2] = lMessageLength<<3;
		lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
		return lWordArray;
	};
 
	function WordToHex(lValue) {
		var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
		for (lCount = 0;lCount<=3;lCount++) {
			lByte = (lValue>>>(lCount*8)) & 255;
			WordToHexValue_temp = "0" + lByte.toString(16);
			WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
		}
		return WordToHexValue;
	};
 
	function Utf8Encode(string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	};
 
	var x=Array();
	var k,AA,BB,CC,DD,a,b,c,d;
	var S11=7, S12=12, S13=17, S14=22;
	var S21=5, S22=9 , S23=14, S24=20;
	var S31=4, S32=11, S33=16, S34=23;
	var S41=6, S42=10, S43=15, S44=21;
 
	string = Utf8Encode(string);
 
	x = ConvertToWordArray(string);
 
	a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
 
	for (k=0;k<x.length;k+=16) {
		AA=a; BB=b; CC=c; DD=d;
		a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
		d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
		c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
		b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
		a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
		d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
		c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
		b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
		a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
		d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
		c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
		b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
		a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
		d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
		c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
		b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
		a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
		d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
		c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
		b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
		a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
		d=GG(d,a,b,c,x[k+10],S22,0x2441453);
		c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
		b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
		a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
		d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
		c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
		b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
		a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
		d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
		c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
		b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
		a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
		d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
		c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
		b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
		a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
		d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
		c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
		b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
		a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
		d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
		c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
		b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
		a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
		d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
		c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
		b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
		a=II(a,b,c,d,x[k+0], S41,0xF4292244);
		d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
		c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
		b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
		a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
		d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
		c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
		b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
		a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
		d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
		c=II(c,d,a,b,x[k+6], S43,0xA3014314);
		b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
		a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
		d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
		c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
		b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
		a=AddUnsigned(a,AA);
		b=AddUnsigned(b,BB);
		c=AddUnsigned(c,CC);
		d=AddUnsigned(d,DD);
	}
 
	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
 
	return temp.toLowerCase();
}

/**
 * The Kaltura Client - this is the facade through which all service actions should be called.
 * @param config the Kaltura configuration object holding partner credentials (type: KalturaConfiguration).
 */
function KalturaClient(config){
	this.init(config);
	this.setClientTag('ajax:16-09-07');
	this.setApiVersion('3.3.0');
}
KalturaClient.inheritsFrom (KalturaClientBase);
/**
 * The client constructor.
 * @param config the Kaltura configuration object holding partner credentials (type: KalturaConfiguration).
 */
KalturaClient.prototype.init = function(config){
	//call the super constructor:
	KalturaClientBase.prototype.init.apply(this, arguments);
};

/**
 * @param string $clientTag
 */
KalturaClient.prototype.setClientTag = function(clientTag){
	this.requestData.clientTag = clientTag;
};

/**
 * @return string
 */
KalturaClient.prototype.getClientTag = function(){
	return this.requestData.clientTag;
};

/**
 * @param string $apiVersion
 */
KalturaClient.prototype.setApiVersion = function(apiVersion){
	this.requestData.apiVersion = apiVersion;
};

/**
 * @return string
 */
KalturaClient.prototype.getApiVersion = function(){
	return this.requestData.apiVersion;
};

/**
 * Impersonated partner id
 * 
 * @param int $partnerId
 */
KalturaClient.prototype.setPartnerId = function(partnerId){
	this.requestData.partnerId = partnerId;
};

/**
 * Impersonated partner id
 * 
 * @return int
 */
KalturaClient.prototype.getPartnerId = function(){
	return this.requestData.partnerId;
};

/**
 * Kaltura API session
 * 
 * @param string $ks
 */
KalturaClient.prototype.setKs = function(ks){
	this.requestData.ks = ks;
};

/**
 * Kaltura API session
 * 
 * @return string
 */
KalturaClient.prototype.getKs = function(){
	return this.requestData.ks;
};

/**
 * Kaltura API session
 * 
 * @param string $sessionId
 */
KalturaClient.prototype.setSessionId = function(sessionId){
	this.requestData.ks = sessionId;
};

/**
 * Kaltura API session
 * 
 * @return string
 */
KalturaClient.prototype.getSessionId = function(){
	return this.requestData.ks;
};

/**
 * @param string $clientTag
 */
KalturaRequestBuilder.prototype.setClientTag = function(clientTag){
	this.requestData.clientTag = clientTag;
};

/**
 * @return string
 */
KalturaRequestBuilder.prototype.getClientTag = function(){
	return this.requestData.clientTag;
};

/**
 * @param string $apiVersion
 */
KalturaRequestBuilder.prototype.setApiVersion = function(apiVersion){
	this.requestData.apiVersion = apiVersion;
};

/**
 * @return string
 */
KalturaRequestBuilder.prototype.getApiVersion = function(){
	return this.requestData.apiVersion;
};

/**
 * Impersonated partner id
 * 
 * @param int $partnerId
 */
KalturaRequestBuilder.prototype.setPartnerId = function(partnerId){
	this.requestData.partnerId = partnerId;
};

/**
 * Impersonated partner id
 * 
 * @return int
 */
KalturaRequestBuilder.prototype.getPartnerId = function(){
	return this.requestData.partnerId;
};

/**
 * Kaltura API session
 * 
 * @param string $ks
 */
KalturaRequestBuilder.prototype.setKs = function(ks){
	this.requestData.ks = ks;
};

/**
 * Kaltura API session
 * 
 * @return string
 */
KalturaRequestBuilder.prototype.getKs = function(){
	return this.requestData.ks;
};

/**
 * Kaltura API session
 * 
 * @param string $sessionId
 */
KalturaRequestBuilder.prototype.setSessionId = function(sessionId){
	this.requestData.ks = sessionId;
};

/**
 * Kaltura API session
 * 
 * @return string
 */
KalturaRequestBuilder.prototype.getSessionId = function(){
	return this.requestData.ks;
};

/**
 * Response profile - this attribute will be automatically unset after every API call.
 * 
 * @param KalturaBaseResponseProfile $responseProfile
 */
KalturaRequestBuilder.prototype.setResponseProfile = function(responseProfile){
	this.requestData.responseProfile = responseProfile;
};

/**
 * Response profile - this attribute will be automatically unset after every API call.
 * 
 * @return KalturaBaseResponseProfile
 */
KalturaRequestBuilder.prototype.getResponseProfile = function(){
	return this.requestData.responseProfile;
};

