
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
