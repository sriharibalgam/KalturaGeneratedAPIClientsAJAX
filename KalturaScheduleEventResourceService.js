
/**
 *Class definition for the Kaltura service: scheduleEventResource.
 **/
var KalturaScheduleEventResourceService = {
	/**
	 * Allows you to add a new KalturaScheduleEventResource object.
	 * @param	scheduleEventResource	KalturaScheduleEventResource		 (optional)
	 * @return	KalturaScheduleEventResource.
	 **/
	add: function(scheduleEventResource){
		var kparams = new Object();
		kparams.scheduleEventResource = scheduleEventResource;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "add", kparams);
	},
	
	/**
	 * Retrieve a KalturaScheduleEventResource object by ID.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleResourceId	int		 (optional)
	 * @return	KalturaScheduleEventResource.
	 * @return	.
	 **/
	get: function(scheduleEventId, scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "get", kparams);
	},
	
	/**
	 * Update an existing KalturaScheduleEventResource object.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleResourceId	int		 (optional)
	 * @param	scheduleEventResource	KalturaScheduleEventResource		 (optional)
	 * @return	KalturaScheduleEventResource.
	 * @return	.
	 **/
	update: function(scheduleEventId, scheduleResourceId, scheduleEventResource){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		kparams.scheduleEventResource = scheduleEventResource;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "update", kparams);
	},
	
	/**
	 * Mark the KalturaScheduleEventResource object as deleted.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleResourceId	int		 (optional)
	 * @return	.
	 * @return	.
	 **/
	deleteAction: function(scheduleEventId, scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "delete", kparams);
	},
	
	/**
	 * List KalturaScheduleEventResource objects.
	 * @param	filter	KalturaScheduleEventResourceFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaScheduleEventResourceListResponse.
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
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "list", kparams);
	}
}
