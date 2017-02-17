
/**
 *Class definition for the Kaltura service: system.
 **/
var KalturaSystemService = {
	/**
	 * .
	 **/
	getTime: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getTime", kparams);
	},
	
	/**
	 * .
	 **/
	getVersion: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getVersion", kparams);
	},
	
	/**
	 * .
	 **/
	ping: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "ping", kparams);
	},
	
	/**
	 * .
	 **/
	pingDatabase: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "pingDatabase", kparams);
	}
}
