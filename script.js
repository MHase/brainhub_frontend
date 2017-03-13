$(document).ready(function(){

	//volume control
	var val = $('.range').val();
	$('.range').css(
		'background',
		'linear-gradient(to right, #ffffff 0%, #ffffff ' + val + '%, #ed5e74 ' + val + '%, #ed5e74 100%)'
	);

	$('.range').on('change mousemove', function() {
    var val = $(this).val();
    $(this).css(
      'background',
      'linear-gradient(to right, #ffffff 0%, #ffffff ' + val + '%, #ed5e74 ' + val + '%, #ed5e74 100%)'
    );
  });

	$('.playlist').show();
	$('#player').hide();

	//playlisy toggle
	// $('.playlist').hide();
	// $('#player').show();
	$('body').on('click','#menu',function(){
	  $('.playlist').slideDown();
		$('#player').fadeOut();
	});
	$('body').on('click','.back',function(){
	  $('.playlist').slideUp();
		$('#player').fadeIn();
	});



	var songs = [
		["3:16", "Icona Pop", "Still Don't Know"],
		["2:35", "Icona Pop", "I Love It"],
		["2:50", "Icona Pop", "Girlfriend"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:07", "Icona Pop", "We got the World"],
		["3:24", "Icona Pop", "Nights Like This"]
	];
	for (var s in songs) {
		var song = songs[s];
		for (var temp=0; temp<song.length; temp=+3) {
			var song_div = document.createElement('div');
			song_div.className = "song";
			var time_title = document.createElement('p');
			time_title.className = "playlist_title";
			time_title.innerHTML = song[temp] + " | " + song[temp+1];
			var artist = document.createElement('p');
			artist.className = "playlist_artist";
			artist.innerHTML = song[temp+2];
			song_div.appendChild(time_title);
			song_div.appendChild(artist);
			song_div.appendChild(document.createElement("hr"));
			$('.songs').append(song_div);
		}
	}


	$('.song_playlist').bind('scroll', function()
    {
      if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight)
      {
				$('.bottom_playlist').css(
		      'background',
		      'none'
		    );
      } else {
				$('.bottom_playlist').css(
		      'background',
		      'linear-gradient(to top, rgba(250,250,250, 1), rgba(0, 0, 0, 0))'
		    );
			}
    });


});
