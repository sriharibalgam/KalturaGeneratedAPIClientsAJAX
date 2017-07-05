
/**
 *Class definition for the Kaltura service: subscription.
 **/
var KalturaSubscriptionService = {
	/**
	 * Returns a list of subscriptions requested by Subscription ID or file ID.
	 * @param	filter	KalturaSubscriptionFilter		Filter request (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("subscription", "list", kparams);
	}
}
