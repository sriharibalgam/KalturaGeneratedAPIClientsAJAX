
/**
 *Class definition for the Kaltura service: liveChannelSegment.
 **/
var KalturaLiveChannelSegmentService = {
	/**
	 * Add new live channel segment.
	 * @param	liveChannelSegment	KalturaLiveChannelSegment		 (optional)
	 * @return	KalturaLiveChannelSegment.
	 **/
	add: function(liveChannelSegment){
		var kparams = new Object();
		kparams.liveChannelSegment = liveChannelSegment;
		return new KalturaRequestBuilder("livechannelsegment", "add", kparams);
	},
	
	/**
	 * Get live channel segment by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaLiveChannelSegment.
	 * @return	.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livechannelsegment", "get", kparams);
	},
	
	/**
	 * Update live channel segment by id.
	 * @param	id	int		 (optional)
	 * @param	liveChannelSegment	KalturaLiveChannelSegment		 (optional)
	 * @return	KalturaLiveChannelSegment.
	 * @return	.
	 **/
	update: function(id, liveChannelSegment){
		var kparams = new Object();
		kparams.id = id;
		kparams.liveChannelSegment = liveChannelSegment;
		return new KalturaRequestBuilder("livechannelsegment", "update", kparams);
	},
	
	/**
	 * Delete live channel segment by id.
	 * @param	id	int		 (optional)
	 * @return	.
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livechannelsegment", "delete", kparams);
	},
	
	/**
	 * List live channel segments by filter and pager.
	 * @param	filter	KalturaLiveChannelSegmentFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaLiveChannelSegmentListResponse.
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
		return new KalturaRequestBuilder("livechannelsegment", "list", kparams);
	}
}
