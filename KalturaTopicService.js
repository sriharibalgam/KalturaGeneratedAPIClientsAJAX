
/**
 *Class definition for the Kaltura service: topic.
 **/
var KalturaTopicService = {
	/**
	 * TBD.
	 * @param	id	int		Topic identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("topic", "delete", kparams);
	},
	
	/**
	 * TBD.
	 * @param	id	int		topic id (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("topic", "get", kparams);
	},
	
	/**
	 * TBD.
	 * @param	filter	KalturaTopicFilter		Topics filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Page size and index (optional, default: null)
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
		return new KalturaRequestBuilder("topic", "list", kparams);
	},
	
	/**
	 * TBD.
	 * @param	id	int		 (optional)
	 * @param	automaticIssueNotification	string		 (optional, enum: KalturaTopicAutomaticIssueNotification)
	 **/
	updateStatus: function(id, automaticIssueNotification){
		var kparams = new Object();
		kparams.id = id;
		kparams.automaticIssueNotification = automaticIssueNotification;
		return new KalturaRequestBuilder("topic", "updateStatus", kparams);
	}
}
