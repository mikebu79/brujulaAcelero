var ac = {
	watchID: null,
	options: {frequency:500},
	init: function(){
		alert(1);
		if(!ac.watchID)
			ac.watchID = navigator.accelerometer.watchAcceleration(ac.success, ac.error, ac.options);
	},
	stop: function(){
		if(ac.watchID != null)
			navigator.accelerometer.clearWatch(ac.watchID);
        
        $('#acelerometro .scroll h2').html('Detenido');
	},
	success: function(a){
		alert(2);
		$('#acelerometro .scroll h2').html('X: ' + a.x +
										   'Y: ' + a.y +
										   'Z: ' + a.z);
	},
	error: function(err){
		alert(err.code);
	}
};