var default_id = 0;
var songs = [
	{time:"3:16", artist:"Icona Pop", title:"Still Don't Know"},
	{time:"2:35", artist:"Icona Pop", title:"I Love It"},
	{time:"2:50", artist:"Icona Pop", title:"Girlfriend"},
	{time:"3:07", artist:"Icona Pop", title:"We got the World"},
	{time:"3:07", artist:"Icona Pop", title:"We got the World which we deserve"},
	{time:"3:24", artist:"Icona Pop", title:"Nights Like This"},
	{time:"4:08", artist:"Daft Punk", title:"Get Lucky"},
	{time:"4:46", artist:"Justing Timberlake", title:"Can't Stop The Feeling"},
	{time:"4:07", artist:"Pharrel Williams", title:"Happy"}
];

$(document).ready(function(){

	var container = document.getElementsByClassName('song_playlist');
	Ps.initialize(container[0]);
// $('.song_playlist').perfectScrollbar();

	volumeControl();
	songTime();
	playlistToggle();
	generatePlaylist();
	$('.btn.next').click(function() {nextSong();});
	$('.btn.previous').click(function() {previousSong();});






	$('.song').click(function(){

			var song_id = $(this).attr('id');
			$('.bottom > h1').text(songs[song_id].artist);
			$('.bottom > p').text(songs[song_id].title);
			$('.playlist').slideUp();
			$('#player').fadeIn();
			songTime();

	});









	$('.song_playlist').bind('scroll', function()
    {
			console.log(Math.ceil($(this).scrollTop()) + " " + $(this).innerHeight() + " " + $(this)[0].scrollHeight);
      if(Math.ceil($(this).scrollTop()) + $(this).innerHeight() >= $(this)[0].scrollHeight)
				$('.bottom_playlist').css('visibility', 'hidden');
      else
				$('.bottom_playlist').css('visibility', 'visible');
    });

	$('.play').on('click', function(){
		if($(this).children('i').hasClass('fa-play'))
			$(this).children('i').removeClass('fa-play').addClass('fa-pause');
		else
			$(this).children('i').removeClass('fa-pause').addClass('fa-play');
	});




});

function playlistToggle() {
	$('.playlist').show();
	$('#player').hide();
	$('body').on('click','#menu',function(){
	  $('.playlist').slideDown();
		$('#player').fadeOut();
	});
	$('body').on('click','.back',function(){
	  $('.playlist').slideUp();
		$('#player').fadeIn();
	});
}

function generatePlaylist() {

	for (var s in songs) {
		var song_div = document.createElement('div');
			song_div.className = "btn song";
			song_div.id = s;
		var time_title = document.createElement('p');
			time_title.className = "playlist_title";
			time_title.innerHTML = songs[s].time + " | " + songs[s].artist;
		var artist = document.createElement('p');
			artist.className = "playlist_artist";
			artist.innerHTML = songs[s].title;
// <div class="btn round-button play"><i class="fa fa-play fa-2x" aria-hidden="true"></i></div>
		var fav = document.createElement('div');
			fav.className = 'btn song_icon song_fav';
		var i_heart = document.createElement('i');
			i_heart.className = "fa fa-heart";
			fav.appendChild(i_heart);
		var shar = document.createElement('div');
			shar.className = 'btn song_icon song_shar';
		var i_share = document.createElement('i');
		i_share.className = "fa fa-share-alt";
		shar.appendChild(i_share);

		song_div.appendChild(fav);
		song_div.appendChild(shar);
		song_div.appendChild(time_title);
		song_div.appendChild(artist);
		song_div.appendChild(document.createElement("hr"));
		$('.songs').append(song_div);
	}
}

function volumeControl() {
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
}


function nextSong() {
	var id = default_id + 1;
	if(id == songs.length) id = 0;
	$('.bottom > h1').text(songs[id].artist);
	$('.bottom > p').text(songs[id].title);
	default_id = id;
}

function previousSong() {
	var id = default_id - 1;
	if(id < 0) id = songs.length-1;
	$('.bottom > h1').text(songs[id].artist);
	$('.bottom > p').text(songs[id].title);
	default_id = id;
}


function songTime() {
	var can = document.getElementById('canvas'),
		 c = can.getContext('2d');


	var posX = can.width / 2,
			posY = can.height / 2,
			fps = 1000 / 200,
			procent = 0,
			oneProcent = 360 / 100,
			result = oneProcent * Math.floor((Math.random() * 100) + 1);

	arcMove();

	function arcMove(){
		var deegres = 0;
		var acrInterval = setInterval (function() {
			deegres += 1;
			c.clearRect( 0, 0, can.width, can.height );
			procent = deegres / oneProcent;



			c.beginPath();
			c.arc( posX, posY, 130, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
			c.strokeStyle = '#fff';
			c.lineWidth = '24';
			c.stroke();

			c.beginPath();
			c.strokeStyle = '#b1b1b1';
			c.lineWidth = '24';
			c.arc( posX, posY, 130, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
			c.stroke();
			if( deegres >= result ) clearInterval(acrInterval);
		}, fps);

	}


}
