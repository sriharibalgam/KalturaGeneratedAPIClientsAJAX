
/**
 *Class definition for the Kaltura service: scheduleEvent.
 **/
var KalturaScheduleEventService = {
	/**
	 * Allows you to add a new KalturaScheduleEvent object.
	 * @param	scheduleEvent	KalturaScheduleEvent		 (optional)
	 * @return	KalturaScheduleEvent.
	 **/
	add: function(scheduleEvent){
		var kparams = new Object();
		kparams.scheduleEvent = scheduleEvent;
		return new KalturaRequestBuilder("schedule_scheduleevent", "add", kparams);
	},
	
	/**
	 * Retrieve a KalturaScheduleEvent object by ID.
	 * @param	scheduleEventId	int		 (optional)
	 * @return	KalturaScheduleEvent.
	 **/
	get: function(scheduleEventId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		return new KalturaRequestBuilder("schedule_scheduleevent", "get", kparams);
	},
	
	/**
	 * Update an existing KalturaScheduleEvent object.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleEvent	KalturaScheduleEvent		Id (optional)
	 * @return	KalturaScheduleEvent.
	 **/
	update: function(scheduleEventId, scheduleEvent){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleEvent = scheduleEvent;
		return new KalturaRequestBuilder("schedule_scheduleevent", "update", kparams);
	},
	
	/**
	 * Mark the KalturaScheduleEvent object as deleted.
	 * @param	scheduleEventId	int		 (optional)
	 * @return	KalturaScheduleEvent.
	 **/
	deleteAction: function(scheduleEventId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		return new KalturaRequestBuilder("schedule_scheduleevent", "delete", kparams);
	},
	
	/**
	 * Mark the KalturaScheduleEvent object as cancelled.
	 * @param	scheduleEventId	int		 (optional)
	 * @return	KalturaScheduleEvent.
	 **/
	cancel: function(scheduleEventId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		return new KalturaRequestBuilder("schedule_scheduleevent", "cancel", kparams);
	},
	
	/**
	 * List KalturaScheduleEvent objects.
	 * @param	filter	KalturaScheduleEventFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaScheduleEventListResponse.
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
		return new KalturaRequestBuilder("schedule_scheduleevent", "list", kparams);
	},
	
	/**
	 * Add new bulk upload batch job.
	 * @param	fileData	file		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadICalJobData		 (optional, default: null)
	 * @return	KalturaBulkUpload.
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData){
		if(!bulkUploadData)
			bulkUploadData = null;
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		return new KalturaRequestBuilder("schedule_scheduleevent", "addFromBulkUpload", kparams, kfiles);
	}
}
