	function boundingCoordinates(distance, radius, lat, lon) {

		//NOTE: doesn't work for North Pole!!! 
		//Does work for international date-line (180th meridian)

		if (radius < 0 || distance < 0)
			throw new IllegalArgumentException();

		var MIN_LAT = (- Math.PI/2); var MAX_LAT = Math.PI/2; 
		var MIN_LON = - Math.PI; var MAX_LON =  Math.PI;

		var radLat = lat * Math.PI / 180; var radLon = lon * Math.PI / 180;
		var radDist = distance / radius;

		var minLat = radLat - radDist;
		var maxLat = radLat + radDist;

		var minLon; var maxLon;

		if (minLat > MIN_LAT && maxLat < MAX_LAT) 
		{	
			var deltaLon = Math.asin(Math.sin(radDist) /
				Math.cos(radLat));
			
			minLon = radLon - deltaLon;
			if (minLon < MIN_LON) minLon += 2 * Math.PI;

			maxLon = radLon + deltaLon;
			if (maxLon > MAX_LON) maxLon -= 2 * Math.PI;
		} 

		else 
		{
			// a pole is within the distance
			minLat = Math.max(minLat, MIN_LAT);
			maxLat = Math.min(maxLat, MAX_LAT);
			minLon = MIN_LON;
			maxLon = MAX_LON;
		}

		var array = {minLat:(minLat/Math.PI * 180), minLon:(minLon/Math.PI * 180), maxLat:(maxLat/Math.PI * 180), maxLon:(maxLon/Math.PI * 180)};
		return array;
	}

var array = boundingCoordinates(25, 6371, 43.6481, -79.4042);

console.log("minLat = " + array["minLat"] + "\nmaxLat = " + array["maxLat"] + "\nminLon = " + array["minLon"] + "\nmaxLon = " + array["maxLon"]);

table_name = "restaurants"

console.log("SELECT * FROM `" + table_name + "` HAVING (lat >= " + array["minLat"] +
			" AND lat <= "+ array["maxLat"] +") AND (lng >= " + array["minLon"] + " AND lng <=" + array["maxLon"] + ")");
