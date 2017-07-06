
/**
 *Class definition for the Kaltura service: notification.
 **/
var KalturaNotificationService = {
	/**
	 * TBD.
	 **/
	initiateCleanup: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("notification", "initiateCleanup", kparams);
	},
	
	/**
	 * TBD.
	 * @param	identifier	string		In case type is "announcement", identifier should be the announcement ID. In case type is "system", identifier should be "login" (the login topic) (optional)
	 * @param	type	string		"announcement" - TV-Series topic, "system" - login topic (optional, enum: KalturaNotificationType)
	 **/
	register: function(identifier, type){
		var kparams = new Object();
		kparams.identifier = identifier;
		kparams.type = type;
		return new KalturaRequestBuilder("notification", "register", kparams);
	},
	
	/**
	 * Registers the device push token to the push service.
	 * @param	pushToken	string		The device-application pair authentication for push delivery (optional)
	 **/
	setDevicePushToken: function(pushToken){
		var kparams = new Object();
		kparams.pushToken = pushToken;
		return new KalturaRequestBuilder("notification", "setDevicePushToken", kparams);
	}
}
