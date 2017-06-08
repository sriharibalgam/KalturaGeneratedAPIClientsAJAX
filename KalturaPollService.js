
/**
 *Class definition for the Kaltura service: poll.
 **/
var KalturaPollService = {
	/**
	 * Add Action.
	 * @param	pollType	string		 (optional, default: SINGLE_ANONYMOUS)
	 **/
	add: function(pollType){
		if(!pollType)
			pollType = "SINGLE_ANONYMOUS";
		var kparams = new Object();
		kparams.pollType = pollType;
		return new KalturaRequestBuilder("poll_poll", "add", kparams);
	},
	
	/**
	 * Vote Action.
	 * @param	pollId	string		 (optional)
	 * @param	userId	string		 (optional)
	 **/
	getVote: function(pollId, userId){
		var kparams = new Object();
		kparams.pollId = pollId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("poll_poll", "getVote", kparams);
	},
	
	/**
	 * Get Votes Action.
	 * @param	pollId	string		 (optional)
	 * @param	answerIds	string		 (optional)
	 * @param	otherDCVotes	string		json (optional, default: null)
	 **/
	getVotes: function(pollId, answerIds, otherDCVotes){
		if(!otherDCVotes)
			otherDCVotes = null;
		var kparams = new Object();
		kparams.pollId = pollId;
		kparams.answerIds = answerIds;
		kparams.otherDCVotes = otherDCVotes;
		return new KalturaRequestBuilder("poll_poll", "getVotes", kparams);
	},
	
	/**
	 * Vote Action.
	 * @param	pollId	string		 (optional)
	 * @param	userId	string		 (optional)
	 * @param	answerIds	string		 (optional)
	 **/
	vote: function(pollId, userId, answerIds){
		var kparams = new Object();
		kparams.pollId = pollId;
		kparams.userId = userId;
		kparams.answerIds = answerIds;
		return new KalturaRequestBuilder("poll_poll", "vote", kparams);
	}
}
