
/**
 *Class definition for the Kaltura service: serverNode.
 **/
var KalturaServerNodeService = {
	/**
	 * Adds a server node to the Kaltura DB..
	 * @param	serverNode	KalturaServerNode		 (optional)
	 * @return	KalturaServerNode.
	 **/
	add: function(serverNode){
		var kparams = new Object();
		kparams.serverNode = serverNode;
		return new KalturaRequestBuilder("servernode", "add", kparams);
	},
	
	/**
	 * Get server node by id.
	 * @param	serverNodeId	int		 (optional)
	 * @return	KalturaServerNode.
	 * @return	.
	 **/
	get: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "get", kparams);
	},
	
	/**
	 * Update server node by id.
	 * @param	serverNodeId	int		 (optional)
	 * @param	serverNode	KalturaServerNode		Id (optional)
	 * @return	KalturaServerNode.
	 **/
	update: function(serverNodeId, serverNode){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		kparams.serverNode = serverNode;
		return new KalturaRequestBuilder("servernode", "update", kparams);
	},
	
	/**
	 * delete server node by id.
	 * @param	serverNodeId	string		 (optional)
	 * @return	.
	 * @return	.
	 **/
	deleteAction: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "delete", kparams);
	},
	
	/**
	 * Disable server node by id.
	 * @param	serverNodeId	string		 (optional)
	 * @return	KalturaServerNode.
	 * @return	.
	 **/
	disable: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "disable", kparams);
	},
	
	/**
	 * Enable server node by id.
	 * @param	serverNodeId	string		 (optional)
	 * @return	KalturaServerNode.
	 * @return	.
	 **/
	enable: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "enable", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaServerNodeFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaServerNodeListResponse.
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
	 * @return	KalturaServerNode.
	 **/
	reportStatus: function(hostName, serverNode){
		if(!serverNode)
			serverNode = null;
		var kparams = new Object();
		kparams.hostName = hostName;
		if (serverNode != null)
			kparams.serverNode = serverNode;
		return new KalturaRequestBuilder("servernode", "reportStatus", kparams);
	}
}
