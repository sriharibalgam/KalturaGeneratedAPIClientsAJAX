
/**
 *Class definition for the Kaltura service: annotation.
 **/
var KalturaAnnotationService = {
	/**
	 * Allows you to add an annotation object associated with an entry.
	 * @param	annotation	KalturaCuePoint		 (optional)
	 * @return	KalturaAnnotation.
	 **/
	add: function(annotation){
		var kparams = new Object();
		kparams.annotation = annotation;
		return new KalturaRequestBuilder("annotation_annotation", "add", kparams);
	},
	
	/**
	 * Update annotation by id.
	 * @param	id	string		 (optional)
	 * @param	annotation	KalturaCuePoint		 (optional)
	 * @return	KalturaAnnotation.
	 * @return	.
	 **/
	update: function(id, annotation){
		var kparams = new Object();
		kparams.id = id;
		kparams.annotation = annotation;
		return new KalturaRequestBuilder("annotation_annotation", "update", kparams);
	},
	
	/**
	 * List annotation objects by filter and pager.
	 * @param	filter	KalturaCuePointFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaAnnotationListResponse.
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
		return new KalturaRequestBuilder("annotation_annotation", "list", kparams);
	},
	
	/**
	 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
	 * @param	fileData	file		 (optional)
	 * @return	KalturaCuePointListResponse.
	 * @return	.
	 * @return	.
	 **/
	addFromBulk: function(fileData){
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("annotation_annotation", "addFromBulk", kparams, kfiles);
	},
	
	/**
	 * Retrieve an CuePoint object by id.
	 * @param	id	string		 (optional)
	 * @return	KalturaCuePoint.
	 * @return	.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("annotation_annotation", "get", kparams);
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
		return new KalturaRequestBuilder("annotation_annotation", "count", kparams);
	},
	
	/**
	 * delete cue point by id, and delete all children cue points.
	 * @param	id	string		 (optional)
	 * @return	.
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("annotation_annotation", "delete", kparams);
	},
	
	/**
	 * Update cuePoint status by id.
	 * @param	id	string		 (optional)
	 * @param	status	int		 (optional, enum: KalturaCuePointStatus)
	 * @return	.
	 * @return	.
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("annotation_annotation", "updateStatus", kparams);
	},
	
	/**
	 * Clone cuePoint with id to given entry.
	 * @param	id	string		 (optional)
	 * @param	entryId	string		 (optional)
	 * @return	KalturaCuePoint.
	 * @return	.
	 * @return	.
	 **/
	cloneAction: function(id, entryId){
		var kparams = new Object();
		kparams.id = id;
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("annotation_annotation", "clone", kparams);
	}
}
