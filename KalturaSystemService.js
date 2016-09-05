
/**
 *Class definition for the Kaltura service: system.
 **/
var KalturaSystemService = {
	/**
	 * .
	 * @return	bool.
	 **/
	ping: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "ping", kparams);
	},
	
	/**
	 * .
	 * @return	bool.
	 **/
	pingDatabase: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "pingDatabase", kparams);
	},
	
	/**
	 * .
	 * @return	int.
	 **/
	getTime: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getTime", kparams);
	},
	
	/**
	 * .
	 * @return	string.
	 **/
	getVersion: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getVersion", kparams);
	}
}
