
/**
 *Class definition for the Kaltura service: householdLimitations.
 **/
var KalturaHouseholdLimitationsService = {
	/**
	 * Get the limitation module by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("householdlimitations", "get", kparams);
	}
}
