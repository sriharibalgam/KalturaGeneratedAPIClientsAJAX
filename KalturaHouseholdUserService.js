
/**
 *Class definition for the Kaltura service: householdUser.
 **/
var KalturaHouseholdUserService = {
	/**
	 * Adds a user to household.
	 * @param	householdUser	KalturaHouseholdUser		User details to add (optional)
	 **/
	add: function(householdUser){
		var kparams = new Object();
		kparams.householdUser = householdUser;
		return new KalturaRequestBuilder("householduser", "add", kparams);
	},
	
	/**
	 * Removes a user from household.
	 * @param	userId	string		The identifier of the user to delete (optional)
	 **/
	deleteAction: function(userId){
		var kparams = new Object();
		kparams.userId = userId;
		return new KalturaRequestBuilder("householduser", "delete", kparams);
	}
}
