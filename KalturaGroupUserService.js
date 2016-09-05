
/**
 *Class definition for the Kaltura service: groupUser.
 **/
var KalturaGroupUserService = {
	/**
	 * Add new GroupUser.
	 * @param	groupUser	KalturaGroupUser		 (optional)
	 * @return	KalturaGroupUser.
	 **/
	add: function(groupUser){
		var kparams = new Object();
		kparams.groupUser = groupUser;
		return new KalturaRequestBuilder("groupuser", "add", kparams);
	},
	
	/**
	 * delete by userId and groupId.
	 * @param	userId	string		 (optional)
	 * @param	groupId	string		 (optional)
	 * @return	.
	 **/
	deleteAction: function(userId, groupId){
		var kparams = new Object();
		kparams.userId = userId;
		kparams.groupId = groupId;
		return new KalturaRequestBuilder("groupuser", "delete", kparams);
	},
	
	/**
	 * List all GroupUsers.
	 * @param	filter	KalturaGroupUserFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaGroupUserListResponse.
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
		return new KalturaRequestBuilder("groupuser", "list", kparams);
	}
}
