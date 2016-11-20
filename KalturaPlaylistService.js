
/**
 *Class definition for the Kaltura service: playlist.
 **/
var KalturaPlaylistService = {
	/**
	 * Add new playlist
 *		 Note that all entries used in a playlist will become public and may appear in KalturaNetwork.
	 * @param	playlist	KalturaPlaylist		 (optional)
	 * @param	updateStats	bool		indicates that the playlist statistics attributes should be updated synchronously now (optional, default: false)
	 * @return	KalturaPlaylist.
	 **/
	add: function(playlist, updateStats){
		if(!updateStats)
			updateStats = false;
		var kparams = new Object();
		kparams.playlist = playlist;
		kparams.updateStats = updateStats;
		return new KalturaRequestBuilder("playlist", "add", kparams);
	},
	
	/**
	 * Retrieve a playlist.
	 * @param	id	string		 (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 * @return	KalturaPlaylist.
	 * @return	.
	 * @return	.
	 **/
	get: function(id, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.id = id;
		kparams.version = version;
		return new KalturaRequestBuilder("playlist", "get", kparams);
	},
	
	/**
	 * Update existing playlist
 *		 Note - you cannot change playlist type. updated playlist must be of the same type..
	 * @param	id	string		 (optional)
	 * @param	playlist	KalturaPlaylist		 (optional)
	 * @param	updateStats	bool		 (optional, default: false)
	 * @return	KalturaPlaylist.
	 * @return	.
	 * @return	.
	 **/
	update: function(id, playlist, updateStats){
		if(!updateStats)
			updateStats = false;
		var kparams = new Object();
		kparams.id = id;
		kparams.playlist = playlist;
		kparams.updateStats = updateStats;
		return new KalturaRequestBuilder("playlist", "update", kparams);
	},
	
	/**
	 * Delete existing playlist.
	 * @param	id	string		 (optional)
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("playlist", "delete", kparams);
	},
	
	/**
	 * Clone an existing playlist.
	 * @param	id	string		Id of the playlist to clone (optional)
	 * @param	newPlaylist	KalturaPlaylist		Parameters defined here will override the ones in the cloned playlist (optional, default: null)
	 * @return	KalturaPlaylist.
	 * @return	.
	 * @return	.
	 **/
	cloneAction: function(id, newPlaylist){
		if(!newPlaylist)
			newPlaylist = null;
		var kparams = new Object();
		kparams.id = id;
		if (newPlaylist != null)
			kparams.newPlaylist = newPlaylist;
		return new KalturaRequestBuilder("playlist", "clone", kparams);
	},
	
	/**
	 * List available playlists.
	 * @param	filter	KalturaPlaylistFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaPlaylistListResponse.
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
		return new KalturaRequestBuilder("playlist", "list", kparams);
	},
	
	/**
	 * Retrieve playlist for playing purpose.
	 * @param	id	string		 (optional)
	 * @param	detailed	string		 (optional)
	 * @param	playlistContext	KalturaContext		 (optional, default: null)
	 * @param	filter	KalturaMediaEntryFilterForPlaylist		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	array.
	 **/
	execute: function(id, detailed, playlistContext, filter, pager){
		if(!detailed)
			detailed = "";
		if(!playlistContext)
			playlistContext = null;
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.detailed = detailed;
		if (playlistContext != null)
			kparams.playlistContext = playlistContext;
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("playlist", "execute", kparams);
	},
	
	/**
	 * Retrieve playlist for playing purpose, based on content.
	 * @param	playlistType	int		 (optional, enum: KalturaPlaylistType)
	 * @param	playlistContent	string		 (optional)
	 * @param	detailed	string		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	array.
	 **/
	executeFromContent: function(playlistType, playlistContent, detailed, pager){
		if(!detailed)
			detailed = "";
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.playlistType = playlistType;
		kparams.playlistContent = playlistContent;
		kparams.detailed = detailed;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("playlist", "executeFromContent", kparams);
	},
	
	/**
	 * Revrieve playlist for playing purpose, based on media entry filters.
	 * @param	filters	array		 (optional)
	 * @param	totalResults	int		 (optional)
	 * @param	detailed	string		 (optional, default: 1)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	array.
	 **/
	executeFromFilters: function(filters, totalResults, detailed, pager){
		if(!detailed)
			detailed = 1;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filters = filters;
		kparams.totalResults = totalResults;
		kparams.detailed = detailed;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("playlist", "executeFromFilters", kparams);
	},
	
	/**
	 * Retrieve playlist statistics.
	 * @param	playlistType	int		 (optional, enum: KalturaPlaylistType)
	 * @param	playlistContent	string		 (optional)
	 * @return	KalturaPlaylist.
	 **/
	getStatsFromContent: function(playlistType, playlistContent){
		var kparams = new Object();
		kparams.playlistType = playlistType;
		kparams.playlistContent = playlistContent;
		return new KalturaRequestBuilder("playlist", "getStatsFromContent", kparams);
	}
}
