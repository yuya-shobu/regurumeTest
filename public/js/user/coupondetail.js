//ランキング詳細ページ

    //詳細ページ地図情報表示
$(document).ready(function(){
	var latitude_1 = $("#latitude_1").val();
	var latitude_2 = $("#latitude_2").val();
	var latitude_3 = $("#latitude_3").val();


	var longitude_1 = $("#longitude_1").val();
	var longitude_2 = $("#longitude_2").val();
	var longitude_3 = $("#longitude_3").val();


	var shop_name_1 = $("#shop_name_1").val();
	var shop_name_2 = $("#shop_name_2").val();
	var shop_name_3 = $("#shop_name_3").val();


	var address_1 = $("#address_1").val();
	var address_2 = $("#address_2").val();
	var address_3 = $("#address_3").val();

	function init() {
            var latlng1 = new google.maps.LatLng(latitude_1,longitude_1);
            var opts = {
            zoom: 10,
            center: latlng1,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map_canvas"), opts);
        // 位置情報と表示データの組み合わせ
        var data = new Array();
        data.push({position: new google.maps.LatLng(latitude_1,longitude_1), content: shop_name_1});
        data.push({position: new google.maps.LatLng(latitude_2,longitude_2), content: shop_name_2});
        data.push({position: new google.maps.LatLng(latitude_3,longitude_3), content: shop_name_3});
        for (i = 0; i < data.length; i++) {
            var myMarker = new google.maps.Marker({
              position: data[i].position,
              map: map
            });
            attachMessage(myMarker, data[i].content);
          }
    }
    // ONLOADイベントにセット
    window.onload = init();

});

	//Google Mapsマーカーの表示
    function myMarker(p) {
        var marker = new google.maps.Marker(new google.maps.LatLng(p[0], p[1]));
        google.maps.Event.addListener(marker, "click", function() {
            marker.openInfoWindowHtml(p[2]);
        });
        return marker;
    }

    function attachMessage(marker, msg) {
        google.maps.event.addListener(marker, 'click', function(event) {
          new google.maps.InfoWindow({
            content: msg
          }).open(marker.getMap(), marker);
        });
    }



