
/**
 *Class definition for the Kaltura service: assetFile.
 **/
var KalturaAssetFileService = {
	/**
	 * get KalturaAssetFileContext.
	 * @param	id	string		Asset file identifier (optional)
	 **/
	getContext: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("assetfile", "getContext", kparams);
	}
}
