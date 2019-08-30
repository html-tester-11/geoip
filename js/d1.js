	 var __m={};
	function geolocate(_val)
	{
	
	__m['ip']=_val.ip;
	__m['hostname']=_val.hostname;
	__m['Ip version']=_val.type;
	__m['Continent']=_val.continent_name;
	__m['Continent Code']=_val.continent_code;
	__m['Country']=_val.country_name;
	__m['Country code']=_val.country_code;
	__m['Region']=_val.region_name;
	__m['Region code']=_val.region_code;
	__m['City']=_val.city;
	__m['Zip code / Pin Code']=_val.zip;
	__m['Latitude']=_val.latitude;
	__m['Longitude']=_val.longitude;
	__m['Capital']=_val.location.capital;
	__m['Geo Id']=_val.location.geoname_id;

	 __m['Country flag']=_val.location.country_flag;
	__m['Country Code']=_val.location.country_flag_emoji;
	__m['Country emoji']=_val.location.country_flag_emoji_unicode;
	__m['Calling Code']=_val.location.calling_code;
	__m['languages']=_val.location.languages;
	__m['Browser name'] =objbrowserName;
__m['Full version ']=objfullVersion;
 __m['Major version']=objBrMajorVersion;
 __m['navigator.appName']=navigator.appName;
 this.__m['navigator.userAgent']=navigator.userAgent;
 
	notify(__m)
	__m__(__m)

}
