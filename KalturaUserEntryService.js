
/**
 *Class definition for the Kaltura service: userEntry.
 **/
var KalturaUserEntryService = {
	/**
	 * Adds a user_entry to the Kaltura DB..
	 * @param	userEntry	KalturaUserEntry		 (optional)
	 * @return	KalturaUserEntry.
	 **/
	add: function(userEntry){
		var kparams = new Object();
		kparams.userEntry = userEntry;
		return new KalturaRequestBuilder("userentry", "add", kparams);
	},
	
	/**
	 * .
	 * @param	id	int		 (optional)
	 * @param	userEntry	KalturaUserEntry		 (optional)
	 * @return	.
	 **/
	update: function(id, userEntry){
		var kparams = new Object();
		kparams.id = id;
		kparams.userEntry = userEntry;
		return new KalturaRequestBuilder("userentry", "update", kparams);
	},
	
	/**
	 * .
	 * @param	id	int		 (optional)
	 * @return	KalturaUserEntry.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("userentry", "delete", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaUserEntryFilter		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaUserEntryListResponse.
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("userentry", "list", kparams);
	},
	
	/**
	 * .
	 * @param	id	string		 (optional)
	 * @return	KalturaUserEntry.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("userentry", "get", kparams);
	},
	
	/**
	 * Submits the quiz so that it's status will be submitted and calculates the score for the quiz.
	 * @param	id	int		 (optional)
	 * @return	KalturaQuizUserEntry.
	 **/
	submitQuiz: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("userentry", "submitQuiz", kparams);
	}
}
