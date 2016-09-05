
/**
 *Class definition for the Kaltura service: accessControlProfile.
 **/
var KalturaAccessControlProfileService = {
	/**
	 * Add new access control profile.
	 * @param	accessControlProfile	KalturaAccessControlProfile		 (optional)
	 * @return	KalturaAccessControlProfile.
	 **/
	add: function(accessControlProfile){
		var kparams = new Object();
		kparams.accessControlProfile = accessControlProfile;
		return new KalturaRequestBuilder("accesscontrolprofile", "add", kparams);
	},
	
	/**
	 * Get access control profile by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaAccessControlProfile.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrolprofile", "get", kparams);
	},
	
	/**
	 * Update access control profile by id.
	 * @param	id	int		 (optional)
	 * @param	accessControlProfile	KalturaAccessControlProfile		 (optional)
	 * @return	KalturaAccessControlProfile.
	 **/
	update: function(id, accessControlProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.accessControlProfile = accessControlProfile;
		return new KalturaRequestBuilder("accesscontrolprofile", "update", kparams);
	},
	
	/**
	 * Delete access control profile by id.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrolprofile", "delete", kparams);
	},
	
	/**
	 * List access control profiles by filter and pager.
	 * @param	filter	KalturaAccessControlProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaAccessControlProfileListResponse.
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
		return new KalturaRequestBuilder("accesscontrolprofile", "list", kparams);
	}
}
