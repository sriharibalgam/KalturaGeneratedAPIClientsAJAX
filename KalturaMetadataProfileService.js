
/**
 *Class definition for the Kaltura service: metadataProfile.
 **/
var KalturaMetadataProfileService = {
	/**
	 * Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type.
	 * @param	metadataProfile	KalturaMetadataProfile		 (optional)
	 * @param	xsdData	string		XSD metadata definition (optional)
	 * @param	viewsData	string		UI views definition (optional, default: null)
	 **/
	add: function(metadataProfile, xsdData, viewsData){
		if(!viewsData)
			viewsData = null;
		var kparams = new Object();
		kparams.metadataProfile = metadataProfile;
		kparams.xsdData = xsdData;
		kparams.viewsData = viewsData;
		return new KalturaRequestBuilder("metadata_metadataprofile", "add", kparams);
	},
	
	/**
	 * Retrieve a metadata profile object by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("metadata_metadataprofile", "get", kparams);
	},
	
	/**
	 * Update an existing metadata object.
	 * @param	id	int		 (optional)
	 * @param	metadataProfile	KalturaMetadataProfile		 (optional)
	 * @param	xsdData	string		XSD metadata definition (optional, default: null)
	 * @param	viewsData	string		UI views definition (optional, default: null)
	 **/
	update: function(id, metadataProfile, xsdData, viewsData){
		if(!xsdData)
			xsdData = null;
		if(!viewsData)
			viewsData = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.metadataProfile = metadataProfile;
		kparams.xsdData = xsdData;
		kparams.viewsData = viewsData;
		return new KalturaRequestBuilder("metadata_metadataprofile", "update", kparams);
	},
	
	/**
	 * List metadata profile objects by filter and pager.
	 * @param	filter	KalturaMetadataProfileFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("metadata_metadataprofile", "list", kparams);
	},
	
	/**
	 * List metadata profile fields by metadata profile id.
	 * @param	metadataProfileId	int		 (optional)
	 **/
	listFields: function(metadataProfileId){
		var kparams = new Object();
		kparams.metadataProfileId = metadataProfileId;
		return new KalturaRequestBuilder("metadata_metadataprofile", "listFields", kparams);
	},
	
	/**
	 * Delete an existing metadata profile.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("metadata_metadataprofile", "delete", kparams);
	},
	
	/**
	 * Update an existing metadata object definition file.
	 * @param	id	int		 (optional)
	 * @param	toVersion	int		 (optional)
	 **/
	revert: function(id, toVersion){
		var kparams = new Object();
		kparams.id = id;
		kparams.toVersion = toVersion;
		return new KalturaRequestBuilder("metadata_metadataprofile", "revert", kparams);
	}
}
