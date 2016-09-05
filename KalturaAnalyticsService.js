
/**
 *Class definition for the Kaltura service: analytics.
 **/
var KalturaAnalyticsService = {
	/**
	 * report query action allows to get a analytics data for specific query dimensions, metrics and filters..
	 * @param	filter	KalturaAnalyticsFilter		the analytics query filter (optional)
	 * @return	KalturaReportResponse.
	 **/
	query: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("analytics", "query", kparams);
	}
}
