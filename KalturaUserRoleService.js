
/**
 *Class definition for the Kaltura service: userRole.
 **/
var KalturaUserRoleService = {
	/**
	 * Retrieving user roles by identifiers, if filter is empty, returns all partner roles.
	 * @param	filter	KalturaUserRoleFilter		 (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("userrole", "list", kparams);
	}
}
