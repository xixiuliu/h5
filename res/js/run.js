// JavaScript Document

(function($) {
	// 预加载
	function loadSource(hash,callback) {
		var totalLen = imgHash.length,
			doneLen = 0,
			per = 0;
		for (var i = 0; i < imgHash.length; i++) {
			(function() {
				var img = new Image();
				img.src = imgHash[i];
				img.onload = function() {
					doneLen++;
					per = parseInt(doneLen / totalLen * 100);
					$('.loading .per').html(per + '%');
					if (doneLen >= totalLen) callback();
				}
				img.onerror = function() {
					doneLen++;
					per = parseInt(doneLen / totalLen * 100);
					$('.loading .per').html(per + '%');
					if (doneLen >= totalLen) callback();
				}
			})();
		}
		
	}
	loadSource(imgHash,run);
})(jQuery);


function run(){
	//loading
	$('.loading').animate({
		opacity: 0
	}, 1000, function() {
		$(this).remove();
	});
	var winW = $('body').width();
	var winH = $('body').height();
	//music	
	music.play();
	var musicFlag = true;
	$('.music_box').click(function(){
		$('.music_icon').toggleClass("off");
		if(musicFlag){music.pause();}
		else(music.play())
		musicFlag = !musicFlag;
	});
	
	$('.slide1_box').width(winW);
	$('.slide1_box').height(winH);
	
	
	var mySwiper = new Swiper('#vslide', {
		slideActiveClass: 'active',
		nextButton: '#arrow',
		direction: 'vertical',
		autoplayDisableOnInteraction:false,
		autoplayStopOnLast:true,
		observer:true,
		initialSlide :0,
        onSlideChangeStart: function(swiper){
            if(swiper.activeIndex == 3){
                $("#arrow").hide();
            }else{
                $("#arrow").show();
            }
        }
	});
	
	var mySmlSwiper = new Swiper('#hslide', {
		slideActiveClass: 's3_active',
		direction: 'horizontal',
		autoplayDisableOnInteraction:true,
		autoplayStopOnLast:true,
		initialSlide :0,
        observer:true
	});
	
	$('.sml_link01').click(function(){
        shwoHslide(0);
	});
	$('.sml_link02').click(function(){
        shwoHslide(1);
	});
	$('.sml_link03').click(function(){
        shwoHslide(3);
	});
	$('.sml_link04').click(function(){
        shwoHslide(2);
	});
	
	$('.explain_btn').click(function(){
        $("#hslide").hide();
		$(".icon01").hide();
		$(".icon02").hide();
		$(".icon03").hide();
        $("#vslide").show();
		mySmlSwiper.slideTo(0,1000,false);
		mySwiper.unlockSwipes();
		$('#arrow').show();
	});

    function shwoHslide(index){
        $("#hslide").show();
        $(".icon01").show();
        $(".icon02").show();
        $(".icon03").show();
        $("#vslide").hide();
        mySmlSwiper.slideTo(index,1000,false);
        mySwiper.lockSwipes();
        $('#arrow').hide();
    }
	
	$('.explain_cont').height(winH*0.52);

    // new IScrzoll('#wrapper1', {
    //     scrollbars: true,
    //     mouseWheel: true,
    //     interactiveScrollbars: true,
    //     shrinkScrollbars: 'scale',
    //     fadeScrollbars: false
    // });
    // new IScroll('#wrapper2', {
    //     scrollbars: true,
    //     mouseWheel: true,
    //     interactiveScrollbars: true,
    //     shrinkScrollbars: 'scale',
    //     fadeScrollbars: false
    // });
    // new IScroll('#wrapper3', {
    //     scrollbars: true,
    //     mouseWheel: true,
    //     interactiveScrollbars: true,
    //     shrinkScrollbars: 'scale',
    //     fadeScrollbars: false
    // });
    // new IScroll('#wrapper4', {
    //     scrollbars: true,
    //     mouseWheel: true,
    //     interactiveScrollbars: true,
    //     shrinkScrollbars: 'scale',
    //     fadeScrollbars: false
    // });
	
}

$(document).ready(function(e) {
    var winW = $('body').width();
	var winH = $('body').height();
	$('.slide1_box').width(winW);
	$('.slide1_box').height(winH);	
	$('.slide2_box').width(winW);
	$('.slide2_box').height(winH);
	$('.slide3_box').width(winW);
	$('.slide3_box').height(winH);
	$('.slide4_box').width(winW);
	$('.slide4_box').height(winH);
	$('.hslide').width(winW);
    $('.hslide').height(winH);
	
	
});