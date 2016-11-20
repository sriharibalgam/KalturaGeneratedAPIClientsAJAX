
/**
 *Class definition for the Kaltura service: user.
 **/
var KalturaUserService = {
	/**
	 * Adds a new user to an existing account in the Kaltura database.
 *		 Input param $id is the unique identifier in the partner's system..
	 * @param	user	KalturaUser		The new user (optional)
	 * @return	KalturaUser.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	add: function(user){
		var kparams = new Object();
		kparams.user = user;
		return new KalturaRequestBuilder("user", "add", kparams);
	},
	
	/**
	 * Updates an existing user object.
 *		 You can also use this action to update the userId..
	 * @param	userId	string		The user's unique identifier in the partner's system (optional)
	 * @param	user	KalturaUser		Id The user's unique identifier in the partner's system (optional)
	 * @return	KalturaUser.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	update: function(userId, user){
		var kparams = new Object();
		kparams.userId = userId;
		kparams.user = user;
		return new KalturaRequestBuilder("user", "update", kparams);
	},
	
	/**
	 * Retrieves a user object for a specified user ID..
	 * @param	userId	string		The user's unique identifier in the partner's system (optional, default: null)
	 * @return	KalturaUser.
	 * @return	.
	 **/
	get: function(userId){
		if(!userId)
			userId = null;
		var kparams = new Object();
		kparams.userId = userId;
		return new KalturaRequestBuilder("user", "get", kparams);
	},
	
	/**
	 * Retrieves a user object for a user's login ID and partner ID.
 *		 A login ID is the email address used by a user to log into the system..
	 * @param	loginId	string		The user's email address that identifies the user for login (optional)
	 * @return	KalturaUser.
	 * @return	.
	 * @return	.
	 **/
	getByLoginId: function(loginId){
		var kparams = new Object();
		kparams.loginId = loginId;
		return new KalturaRequestBuilder("user", "getByLoginId", kparams);
	},
	
	/**
	 * Deletes a user from a partner account..
	 * @param	userId	string		The user's unique identifier in the partner's system (optional)
	 * @return	KalturaUser.
	 * @return	.
	 **/
	deleteAction: function(userId){
		var kparams = new Object();
		kparams.userId = userId;
		return new KalturaRequestBuilder("user", "delete", kparams);
	},
	
	/**
	 * Lists user objects that are associated with an account.
 *		 Blocked users are listed unless you use a filter to exclude them.
 *		 Deleted users are not listed unless you use a filter to include them..
	 * @param	filter	KalturaUserFilter		A filter used to exclude specific types of users (optional, default: null)
	 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null)
	 * @return	KalturaUserListResponse.
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
		return new KalturaRequestBuilder("user", "list", kparams);
	},
	
	/**
	 * Notifies that a user is banned from an account..
	 * @param	userId	string		The user's unique identifier in the partner's system (optional)
	 * @return	.
	 * @return	.
	 **/
	notifyBan: function(userId){
		var kparams = new Object();
		kparams.userId = userId;
		return new KalturaRequestBuilder("user", "notifyBan", kparams);
	},
	
	/**
	 * Logs a user into a partner account with a partner ID, a partner user ID (puser), and a user password..
	 * @param	partnerId	int		The identifier of the partner account (optional)
	 * @param	userId	string		The user's unique identifier in the partner's system (optional)
	 * @param	password	string		The user's password (optional)
	 * @param	expiry	int		The requested time (in seconds) before the generated KS expires (By default, a KS expires after 24 hours). (optional, default: 86400)
	 * @param	privileges	string		Special privileges (optional, default: *)
	 * @return	string.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	login: function(partnerId, userId, password, expiry, privileges){
		if(!expiry)
			expiry = 86400;
		if(!privileges)
			privileges = "*";
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.userId = userId;
		kparams.password = password;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new KalturaRequestBuilder("user", "login", kparams);
	},
	
	/**
	 * Logs a user into a partner account with a user login ID and a user password..
	 * @param	loginId	string		The user's email address that identifies the user for login (optional)
	 * @param	password	string		The user's password (optional)
	 * @param	partnerId	int		The identifier of the partner account (optional, default: null)
	 * @param	expiry	int		The requested time (in seconds) before the generated KS expires (By default, a KS expires after 24 hours). (optional, default: 86400)
	 * @param	privileges	string		Special privileges (optional, default: *)
	 * @param	otp	string		the user's one-time password (optional, default: null)
	 * @return	string.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	loginByLoginId: function(loginId, password, partnerId, expiry, privileges, otp){
		if(!partnerId)
			partnerId = null;
		if(!expiry)
			expiry = 86400;
		if(!privileges)
			privileges = "*";
		if(!otp)
			otp = null;
		var kparams = new Object();
		kparams.loginId = loginId;
		kparams.password = password;
		kparams.partnerId = partnerId;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		kparams.otp = otp;
		return new KalturaRequestBuilder("user", "loginByLoginId", kparams);
	},
	
	/**
	 * Updates a user's login data: email, password, name..
	 * @param	oldLoginId	string		The user's current email address that identified the user for login (optional)
	 * @param	password	string		The user's current email address that identified the user for login (optional)
	 * @param	newLoginId	string		Optional, The user's email address that will identify the user for login (optional)
	 * @param	newPassword	string		Optional, The user's new password (optional)
	 * @param	newFirstName	string		Optional, The user's new first name (optional, default: null)
	 * @param	newLastName	string		Optional, The user's new last name (optional, default: null)
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	updateLoginData: function(oldLoginId, password, newLoginId, newPassword, newFirstName, newLastName){
		if(!newLoginId)
			newLoginId = "";
		if(!newPassword)
			newPassword = "";
		if(!newFirstName)
			newFirstName = null;
		if(!newLastName)
			newLastName = null;
		var kparams = new Object();
		kparams.oldLoginId = oldLoginId;
		kparams.password = password;
		kparams.newLoginId = newLoginId;
		kparams.newPassword = newPassword;
		kparams.newFirstName = newFirstName;
		kparams.newLastName = newLastName;
		return new KalturaRequestBuilder("user", "updateLoginData", kparams);
	},
	
	/**
	 * Reset user's password and send the user an email to generate a new one..
	 * @param	email	string		The user's email address (login email) (optional)
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	resetPassword: function(email){
		var kparams = new Object();
		kparams.email = email;
		return new KalturaRequestBuilder("user", "resetPassword", kparams);
	},
	
	/**
	 * Set initial users password.
	 * @param	hashKey	string		The hash key used to identify the user (retrieved by email) (optional)
	 * @param	newPassword	string		The new password to set for the user (optional)
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	setInitialPassword: function(hashKey, newPassword){
		var kparams = new Object();
		kparams.hashKey = hashKey;
		kparams.newPassword = newPassword;
		return new KalturaRequestBuilder("user", "setInitialPassword", kparams);
	},
	
	/**
	 * Enables a user to log into a partner account using an email address and a password.
	 * @param	userId	string		The user's unique identifier in the partner's system (optional)
	 * @param	loginId	string		The user's email address that identifies the user for login (optional)
	 * @param	password	string		The user's password (optional, default: null)
	 * @return	KalturaUser.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	enableLogin: function(userId, loginId, password){
		if(!password)
			password = null;
		var kparams = new Object();
		kparams.userId = userId;
		kparams.loginId = loginId;
		kparams.password = password;
		return new KalturaRequestBuilder("user", "enableLogin", kparams);
	},
	
	/**
	 * Disables a user's ability to log into a partner account using an email address and a password.
 *		 You may use either a userId or a loginId parameter for this action..
	 * @param	userId	string		The user's unique identifier in the partner's system (optional, default: null)
	 * @param	loginId	string		The user's email address that identifies the user for login (optional, default: null)
	 * @return	KalturaUser.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	disableLogin: function(userId, loginId){
		if(!userId)
			userId = null;
		if(!loginId)
			loginId = null;
		var kparams = new Object();
		kparams.userId = userId;
		kparams.loginId = loginId;
		return new KalturaRequestBuilder("user", "disableLogin", kparams);
	},
	
	/**
	 * Index an entry by id..
	 * @param	id	string		 (optional)
	 * @param	shouldUpdate	bool		 (optional, default: true)
	 * @return	string.
	 * @return	.
	 **/
	index: function(id, shouldUpdate){
		if(!shouldUpdate)
			shouldUpdate = true;
		var kparams = new Object();
		kparams.id = id;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("user", "index", kparams);
	},
	
	/**
	 * .
	 * @param	fileData	file		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null)
	 * @param	bulkUploadUserData	KalturaBulkUploadUserData		 (optional, default: null)
	 * @return	KalturaBulkUpload.
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData, bulkUploadUserData){
		if(!bulkUploadData)
			bulkUploadData = null;
		if(!bulkUploadUserData)
			bulkUploadUserData = null;
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadUserData != null)
			kparams.bulkUploadUserData = bulkUploadUserData;
		return new KalturaRequestBuilder("user", "addFromBulkUpload", kparams, kfiles);
	},
	
	/**
	 * Action which checks whther user login.
	 * @param	filter	KalturaUserLoginDataFilter		 (optional)
	 * @return	bool.
	 **/
	checkLoginDataExists: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("user", "checkLoginDataExists", kparams);
	}
}
