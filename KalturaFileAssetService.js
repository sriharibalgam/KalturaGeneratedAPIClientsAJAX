
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
	 * @return	.
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
	 * @return	.
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
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
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
