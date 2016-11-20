
/**
 *Class definition for the Kaltura service: attachmentAsset.
 **/
var KalturaAttachmentAssetService = {
	/**
	 * Add attachment asset.
	 * @param	entryId	string		 (optional)
	 * @param	attachmentAsset	KalturaAttachmentAsset		 (optional)
	 * @return	KalturaAttachmentAsset.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
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
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
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
	 * @return	.
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
	 * @return	.
	 * @return	.
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
	 * @return	.
	 * @return	.
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
	 * @return	.
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
	 * @return	.
	 **/
	deleteAction: function(attachmentAssetId){
		var kparams = new Object();
		kparams.attachmentAssetId = attachmentAssetId;
		return new KalturaRequestBuilder("attachment_attachmentasset", "delete", kparams);
	}
}
