
/**
 *Class definition for the Kaltura service: serverNode.
 **/
var KalturaServerNodeService = {
	/**
	 * Adds a server node to the Kaltura DB..
	 * @param	serverNode	KalturaServerNode		 (optional)
	 **/
	add: function(serverNode){
		var kparams = new Object();
		kparams.serverNode = serverNode;
		return new KalturaRequestBuilder("servernode", "add", kparams);
	},
	
	/**
	 * delete server node by id.
	 * @param	serverNodeId	string		 (optional)
	 **/
	deleteAction: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "delete", kparams);
	},
	
	/**
	 * Disable server node by id.
	 * @param	serverNodeId	string		 (optional)
	 **/
	disable: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "disable", kparams);
	},
	
	/**
	 * Enable server node by id.
	 * @param	serverNodeId	string		 (optional)
	 **/
	enable: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "enable", kparams);
	},
	
	/**
	 * Get server node by id.
	 * @param	serverNodeId	int		 (optional)
	 **/
	get: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "get", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaServerNodeFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
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
		return new KalturaRequestBuilder("servernode", "list", kparams);
	},
	
	/**
	 * Update server node status.
	 * @param	hostName	string		 (optional)
	 * @param	serverNode	KalturaServerNode		 (optional, default: null)
	 **/
	reportStatus: function(hostName, serverNode){
		if(!serverNode)
			serverNode = null;
		var kparams = new Object();
		kparams.hostName = hostName;
		if (serverNode != null)
			kparams.serverNode = serverNode;
		return new KalturaRequestBuilder("servernode", "reportStatus", kparams);
	},
	
	/**
	 * Update server node by id.
	 * @param	serverNodeId	int		 (optional)
	 * @param	serverNode	KalturaServerNode		Id (optional)
	 **/
	update: function(serverNodeId, serverNode){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		kparams.serverNode = serverNode;
		return new KalturaRequestBuilder("servernode", "update", kparams);
	}
}
