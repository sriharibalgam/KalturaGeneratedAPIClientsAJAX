
/**
 *Class definition for the Kaltura service: accessControl.
 **/
var KalturaAccessControlService = {
	/**
	 * Add new Access Control Profile.
	 * @param	accessControl	KalturaAccessControl		 (optional)
	 * @return	KalturaAccessControl.
	 **/
	add: function(accessControl){
		var kparams = new Object();
		kparams.accessControl = accessControl;
		return new KalturaRequestBuilder("accesscontrol", "add", kparams);
	},
	
	/**
	 * Get Access Control Profile by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaAccessControl.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrol", "get", kparams);
	},
	
	/**
	 * Update Access Control Profile by id.
	 * @param	id	int		 (optional)
	 * @param	accessControl	KalturaAccessControl		 (optional)
	 * @return	KalturaAccessControl.
	 * @return	.
	 * @return	.
	 **/
	update: function(id, accessControl){
		var kparams = new Object();
		kparams.id = id;
		kparams.accessControl = accessControl;
		return new KalturaRequestBuilder("accesscontrol", "update", kparams);
	},
	
	/**
	 * Delete Access Control Profile by id.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrol", "delete", kparams);
	},
	
	/**
	 * List Access Control Profiles by filter and pager.
	 * @param	filter	KalturaAccessControlFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaAccessControlListResponse.
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
		return new KalturaRequestBuilder("accesscontrol", "list", kparams);
	}
}
