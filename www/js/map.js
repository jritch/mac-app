function getPinImage(pinColor)
{
  return new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
      new google.maps.Size(21, 34),
      new google.maps.Point(0,0),
      new google.maps.Point(10, 34));
}

function getPinShadow()
{
  return new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
      new google.maps.Size(40, 37),
      new google.maps.Point(0, 0),
      new google.maps.Point(12, 35));
}

function resultsToArray(components, resultsArray){
      i = 0; street =""; number = ""; intersection = "";
      for(j=components.length; i<j; i++){
        type = components[i].types[0];
        if (type == "country"){
          resultsArray["country"] = components[i].long_name;
        } 
        else if (type == "locality"){
          resultsArray["city"] = components[i].long_name;
        }
        else if (type == "administrative_area_level_1"){
          resultsArray["state"] = components[i].long_name;
        }
        else if (type == "postal_code"){
          resultsArray["postal"] = components[i].long_name;
        }
        else if (type == "route"){
            street = components[i].long_name;
        }
        else if (type == "street_number"){
            number = components[i].long_name;
        }
        else if (type == "intersection"){
            intersection = components[i].long_name;
        }
      }
      if (street && number) {
        resultsArray["address"] = number + " " + street;
      }
      else if (intersection) {
        resultsArray["address"] = intersection;
      }
      else if (street){
        resultsArray["address"] = street;
      }
      console.log(resultsArray);
      return resultsArray;
    }