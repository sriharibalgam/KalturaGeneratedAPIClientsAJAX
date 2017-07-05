
/**
 *Class definition for the Kaltura service: licensedUrl.
 **/
var KalturaLicensedUrlService = {
	/**
	 * Get the URL for playing an asset - EPG or media (not available for recording for now)..
	 * @param	request	KalturaLicensedUrlBaseRequest		 (optional)
	 **/
	get: function(request){
		var kparams = new Object();
		kparams.request = request;
		return new KalturaRequestBuilder("licensedurl", "get", kparams);
	}
}
