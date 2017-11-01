
/**
 *Class definition for the Kaltura service: eSearch.
 **/
var KalturaESearchService = {
	/**
	 * .
	 * @param	searchItem	KalturaESearchItem		 (optional)
	 **/
	getAllowedSearchTypes: function(searchItem){
		var kparams = new Object();
		kparams.searchItem = searchItem;
		return new KalturaRequestBuilder("elasticsearch_esearch", "getAllowedSearchTypes", kparams);
	},
	
	/**
	 * .
	 * @param	searchParams	KalturaESearchObject		 (optional)
	 * @param	pager	KalturaPager		 (optional, default: null)
	 **/
	searchCategory: function(searchParams, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.searchParams = searchParams;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("elasticsearch_esearch", "searchCategory", kparams);
	},
	
	/**
	 * .
	 * @param	searchParams	KalturaESearchObject		 (optional)
	 * @param	pager	KalturaPager		 (optional, default: null)
	 **/
	searchEntry: function(searchParams, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.searchParams = searchParams;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("elasticsearch_esearch", "searchEntry", kparams);
	},
	
	/**
	 * .
	 * @param	searchParams	KalturaESearchObject		 (optional)
	 * @param	pager	KalturaPager		 (optional, default: null)
	 **/
	searchUser: function(searchParams, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.searchParams = searchParams;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("elasticsearch_esearch", "searchUser", kparams);
	}
}
