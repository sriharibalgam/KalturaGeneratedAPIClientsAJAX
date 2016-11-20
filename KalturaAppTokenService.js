
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
	 * @return	.
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
	 * @return	.
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
	 * @return	.
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
