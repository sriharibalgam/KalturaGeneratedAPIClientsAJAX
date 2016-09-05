
/**
 *Class definition for the Kaltura service: quiz.
 **/
var KalturaQuizService = {
	/**
	 * Allows to add a quiz to an entry.
	 * @param	entryId	string		 (optional)
	 * @param	quiz	KalturaQuiz		 (optional)
	 * @return	KalturaQuiz.
	 **/
	add: function(entryId, quiz){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.quiz = quiz;
		return new KalturaRequestBuilder("quiz_quiz", "add", kparams);
	},
	
	/**
	 * Allows to update a quiz.
	 * @param	entryId	string		 (optional)
	 * @param	quiz	KalturaQuiz		 (optional)
	 * @return	KalturaQuiz.
	 **/
	update: function(entryId, quiz){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.quiz = quiz;
		return new KalturaRequestBuilder("quiz_quiz", "update", kparams);
	},
	
	/**
	 * Allows to get a quiz.
	 * @param	entryId	string		 (optional)
	 * @return	KalturaQuiz.
	 **/
	get: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("quiz_quiz", "get", kparams);
	},
	
	/**
	 * List quiz objects by filter and pager.
	 * @param	filter	KalturaQuizFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaQuizListResponse.
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
		return new KalturaRequestBuilder("quiz_quiz", "list", kparams);
	},
	
	/**
	 * sends a with an api request for pdf from quiz object.
	 * @param	entryId	string		 (optional)
	 * @param	quizOutputType	int		 (optional, enum: KalturaQuizOutputType)
	 * @return	string.
	 **/
	getUrl: function(entryId, quizOutputType){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.quizOutputType = quizOutputType;
		return new KalturaRequestBuilder("quiz_quiz", "getUrl", kparams);
	}
}
