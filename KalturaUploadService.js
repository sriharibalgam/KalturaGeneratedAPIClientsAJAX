
/**
 *Class definition for the Kaltura service: upload.
 **/
var KalturaUploadService = {
	/**
	 * .
	 * @param	fileName	string		 (optional)
	 **/
	getUploadedFileTokenByFileName: function(fileName){
		var kparams = new Object();
		kparams.fileName = fileName;
		return new KalturaRequestBuilder("upload", "getUploadedFileTokenByFileName", kparams);
	}
}
