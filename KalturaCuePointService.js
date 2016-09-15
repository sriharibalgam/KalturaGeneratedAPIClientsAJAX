
/**
 *Class definition for the Kaltura service: cuePoint.
 **/
var KalturaCuePointService = {
	/**
	 * Allows you to add an cue point object associated with an entry.
	 * @param	cuePoint	KalturaCuePoint		 (optional)
	 * @return	KalturaCuePoint.
	 **/
	add: function(cuePoint){
		var kparams = new Object();
		kparams.cuePoint = cuePoint;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "add", kparams);
	},
	
	/**
	 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
	 * @param	fileData	file		 (optional)
	 * @return	KalturaCuePointListResponse.
	 **/
	addFromBulk: function(fileData){
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "addFromBulk", kparams, kfiles);
	},
	
	/**
	 * Retrieve an CuePoint object by id.
	 * @param	id	string		 (optional)
	 * @return	KalturaCuePoint.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "get", kparams);
	},
	
	/**
	 * List cue point objects by filter and pager.
	 * @param	filter	KalturaCuePointFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaCuePointListResponse.
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
		return new KalturaRequestBuilder("cuepoint_cuepoint", "list", kparams);
	},
	
	/**
	 * count cue point objects by filter.
	 * @param	filter	KalturaCuePointFilter		 (optional, default: null)
	 * @return	int.
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "count", kparams);
	},
	
	/**
	 * Update cue point by id.
	 * @param	id	string		 (optional)
	 * @param	cuePoint	KalturaCuePoint		 (optional)
	 * @return	KalturaCuePoint.
	 **/
	update: function(id, cuePoint){
		var kparams = new Object();
		kparams.id = id;
		kparams.cuePoint = cuePoint;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "update", kparams);
	},
	
	/**
	 * delete cue point by id, and delete all children cue points.
	 * @param	id	string		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "delete", kparams);
	},
	
	/**
	 * Update cuePoint status by id.
	 * @param	id	string		 (optional)
	 * @param	status	int		 (optional, enum: KalturaCuePointStatus)
	 * @return	.
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "updateStatus", kparams);
	},
	
	/**
	 * Clone cuePoint with id to given entry.
	 * @param	id	string		 (optional)
	 * @param	entryId	string		 (optional)
	 * @return	KalturaCuePoint.
	 **/
	cloneAction: function(id, entryId){
		var kparams = new Object();
		kparams.id = id;
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "clone", kparams);
	}
}
