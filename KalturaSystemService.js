
/**
 *Class definition for the Kaltura service: system.
 **/
var KalturaSystemService = {
	/**
	 * Returns country details by the provided IP, if not provided - by the client IP.
	 * @param	ip	string		IP (optional, default: null)
	 **/
	getCountry: function(ip){
		if(!ip)
			ip = null;
		var kparams = new Object();
		kparams.ip = ip;
		return new KalturaRequestBuilder("system", "getCountry", kparams);
	},
	
	/**
	 * Returns current server timestamp.
	 **/
	getTime: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getTime", kparams);
	},
	
	/**
	 * Returns current server version.
	 **/
	getVersion: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getVersion", kparams);
	},
	
	/**
	 * Returns true.
	 **/
	ping: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "ping", kparams);
	}
}
