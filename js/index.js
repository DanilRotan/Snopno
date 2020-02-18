   	new WOW({
   		mobile: false
   	}).init();


   	$(document).ready(function(){
   		$("#menu, #menu-mobile").on("click","a", function (event) {
   			event.preventDefault();
   			var id  = $(this).attr('href'),
   			top = $(id).offset().top;
   			$('body,html').animate({scrollTop: top}, 700);
   		});
   		$("#button").on("click","a", function (event) {
   			event.preventDefault();
   			var id  = $(this).attr('href'),
   			top = $(id).offset().top;
   			$('body,html').animate({scrollTop: top}, 700);
   		});


   		$('.menu-btn').on('click', function(event){
   			event.preventDefault();
   			$(this).toggleClass('menu-btn-active');
   			$('.menu-nav').toggleClass('menu-nav_active');
   		})


   		$('.more-button').click(function(e){
   			e.preventDefault();
   			$(this).parents('.card').find('.card-text-details').addClass('card-text-details-visible');
   		});
   		$('.close-button').click(function(e){
   			e.preventDefault();
   			$(this).parents('.card').find('.card-text-details').removeClass('card-text-details-visible');
   		});


   		if ($(document).scrollTop() > 800) {
   			$('.to-top').removeClass('hidden');
   		};
   		$(window).scroll(function(){
   			if ($(window).scrollTop() > 800) {
   				$('.to-top').removeClass('hidden');
   			} else {
   				$('.to-top').addClass('hidden');
   			}
   		});


   		var mySwiper1 = new Swiper ('.info-slider .swiper-container', {
   			loop: true,
   			slidesPerView: 2,	    

   			navigation: {
   				nextEl: '.right',
   				prevEl: '.left',
   			},

   		})

   		var mySwiper2 = new Swiper ('.slider-left .swiper-container', {
   			loop: true,
   			slidesPerView: 1,	    

   			navigation: {
   				nextEl: '.next',
   				prevEl: '.prev',
   			},
   			autoplay: {
   				delay: 5000,
   				disableOnInteraction: false
   			},
   			effect: 'fade',
   			allowTouchMove: false

   		})

   		var mySwiper3 = new Swiper ('.slider-right .swiper-container', {
   			loop: true,
   			slidesPerView: 1,	    

   			navigation: {
   				nextEl: '.next',
   				prevEl: '.prev',
   			},
   			autoplay: {
   				delay: 5000,
   				disableOnInteraction: false
   			},
   			effect: 'flip',
   			allowTouchMove: false

   		})
   	})
   	function toTop() {
   		$('html').animate({
   			scrollTop: 0
   		}, 500);
   	}

   	form.addEventListener('submit', submitHandler);

   	function submitHandler (e){
   		e.preventDefault();
   		var name = e.target.querySelector(".name").value;
   		var subject = e.target.querySelector(".subject").value;
   		var email = e.target.querySelector(".email").value;
   		var message = e.target.querySelector(".message").value;

   		var item = {name,subject,email,message};
   		console.log("Имя: ", name);
   		console.log("Предмет: ", subject);
   		console.log("Почта: ", email);
   		console.log("Сообщение: ", message);
   	}

   	var hellopreloader = document.getElementById("hellopreloader_preload");
   	function fadeOutnojquery(el){
   		el.style.opacity = 1;
   		var interhellopreloader = setInterval(function(){
   			el.style.opacity = el.style.opacity - 0.05;
   			if (el.style.opacity <=0.05){ 
   				clearInterval(interhellopreloader);
   				hellopreloader.style.display = "none";
   			}},16);
   	}window.onload = function(){
   		setTimeout(function(){
   			fadeOutnojquery(hellopreloader);
   		},500);};


