
/**
 *Class definition for the Kaltura service: uploadToken.
 **/
var KalturaUploadTokenService = {
	/**
	 * Adds new upload token to upload a file.
	 * @param	uploadToken	KalturaUploadToken		 (optional, default: null)
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
	 * Deletes the upload token by upload token id.
	 * @param	uploadTokenId	string		 (optional)
	 **/
	deleteAction: function(uploadTokenId){
		var kparams = new Object();
		kparams.uploadTokenId = uploadTokenId;
		return new KalturaRequestBuilder("uploadtoken", "delete", kparams);
	},
	
	/**
	 * Get upload token by id.
	 * @param	uploadTokenId	string		 (optional)
	 **/
	get: function(uploadTokenId){
		var kparams = new Object();
		kparams.uploadTokenId = uploadTokenId;
		return new KalturaRequestBuilder("uploadtoken", "get", kparams);
	},
	
	/**
	 * List upload token by filter with pager support. 
 *		 When using a user session the service will be restricted to users objects only..
	 * @param	filter	KalturaUploadTokenFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("uploadtoken", "list", kparams);
	}
}
