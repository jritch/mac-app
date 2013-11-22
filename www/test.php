<?php
$username="root";
$database="app_data";
$arrName=array();
$arrLat=array();
$arrLong=array();


mysql_connect("localhost",$username);
@mysql_select_db($database) or die( "Unable to select database");

$term = $_POST['term'];

$query="SELECT * FROM community WHERE postal='$term' ";
$result=mysql_query($query);
$num=mysql_numrows($result);

		if ($num == 0){
			$query="SELECT * FROM community WHERE city='$term'";
			$result=mysql_query($query);
			$num2=mysql_numrows($result);
			
			for($j=0;$j<$num2;$j++)
			{
				$arrName[]=mysql_result($result, $j, "name");
				$arrLat[]=mysql_result($result, $j, "lat");
				$arrLong[]=mysql_result($result, $j, "lng");
				$arrAvg[]=mysql_result($result, $j, "avg");
				
			}
			$arrBoss2=array($arrName, $arrLat, $arrLong, $arrAvg);
			echo json_encode($arrBoss2);
		}

		else{
			for($i=0;$i<$num;$i++)
			{
				$arrName[]=mysql_result($result, $i, "name");
				$arrLat[]=mysql_result($result, $i, "lat");
				$arrLong[]=mysql_result($result, $i, "lng");
				$arrAvg[]=mysql_result($result, $i, "avg");
			}
			$arrBoss=array($arrName, $arrLat, $arrLong, $arrAvg);
			echo json_encode($arrBoss);
		}
		
mysql_close();

?>