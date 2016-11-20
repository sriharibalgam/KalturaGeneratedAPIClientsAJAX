
/**
 *Class definition for the Kaltura service: flavorAsset.
 **/
var KalturaFlavorAssetService = {
	/**
	 * Add flavor asset.
	 * @param	entryId	string		 (optional)
	 * @param	flavorAsset	KalturaFlavorAsset		 (optional)
	 * @return	KalturaFlavorAsset.
	 * @return	.
	 * @return	.
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
	 * @return	.
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
	 * @return	.
	 * @return	.
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
	 * @return	.
	 * @return	.
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
	 * @return	.
	 * @return	.
	 * @return	.
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
	 * @return	string.
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
