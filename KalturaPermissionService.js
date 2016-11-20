
/**
 *Class definition for the Kaltura service: permission.
 **/
var KalturaPermissionService = {
	/**
	 * Adds a new permission object to the account..
	 * @param	permission	KalturaPermission		The new permission (optional)
	 * @return	KalturaPermission.
	 * @return	.
	 * @return	.
	 **/
	add: function(permission){
		var kparams = new Object();
		kparams.permission = permission;
		return new KalturaRequestBuilder("permission", "add", kparams);
	},
	
	/**
	 * Retrieves a permission object using its ID..
	 * @param	permissionName	string		The name assigned to the permission (optional)
	 * @return	KalturaPermission.
	 * @return	.
	 **/
	get: function(permissionName){
		var kparams = new Object();
		kparams.permissionName = permissionName;
		return new KalturaRequestBuilder("permission", "get", kparams);
	},
	
	/**
	 * Updates an existing permission object..
	 * @param	permissionName	string		The name assigned to the permission (optional)
	 * @param	permission	KalturaPermission		Name The name assigned to the permission (optional)
	 * @return	KalturaPermission.
	 * @return	.
	 **/
	update: function(permissionName, permission){
		var kparams = new Object();
		kparams.permissionName = permissionName;
		kparams.permission = permission;
		return new KalturaRequestBuilder("permission", "update", kparams);
	},
	
	/**
	 * Deletes an existing permission object..
	 * @param	permissionName	string		The name assigned to the permission (optional)
	 * @return	KalturaPermission.
	 * @return	.
	 **/
	deleteAction: function(permissionName){
		var kparams = new Object();
		kparams.permissionName = permissionName;
		return new KalturaRequestBuilder("permission", "delete", kparams);
	},
	
	/**
	 * Lists permission objects that are associated with an account.
 *		 Blocked permissions are listed unless you use a filter to exclude them.
 *		 Blocked permissions are listed unless you use a filter to exclude them..
	 * @param	filter	KalturaPermissionFilter		A filter used to exclude specific types of permissions (optional, default: null)
	 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null)
	 * @return	KalturaPermissionListResponse.
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
		return new KalturaRequestBuilder("permission", "list", kparams);
	},
	
	/**
	 * Retrieves a list of permissions that apply to the current KS..
	 * @return	string.
	 **/
	getCurrentPermissions: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("permission", "getCurrentPermissions", kparams);
	}
}
