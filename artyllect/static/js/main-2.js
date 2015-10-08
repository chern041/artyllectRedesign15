(function($) {
	$(document).ready(function(){
		var windowHeight = $(window).height();
		var navContainer = $('.nav-container');
		var navIcon = $('.nav-icon');
		var mainNavItem = $('.main-nav a');
		var mainFooter = $('.main-footer');
		var mainWrapper = $('.main-wrapper');
		var navIndicator = $('.nav-indicator');
		var navIndicatorItem = $('.nav-indicator .nav-dot');
		var intro = $('.intro');
		var brands = $('.brands');
		var team = $('.team');
		var communities = $('.communities');
		var contact = $('.contact');
		var mainHeaderHeight = $('.main-header').outerHeight();
		var mainContent = $('.main-content');
		var mainContentChildren = ('.main-content > .main-wrapper')
		var introPosTop = 0;
		var brandPosTop = windowHeight;
		var teamPosTop = (2 * windowHeight) + mainHeaderHeight;
		var communitiesPosTop = (3 * windowHeight) + mainHeaderHeight;
		var contactPosTop = (4 * windowHeight) + mainHeaderHeight;
		var scrollSensibility = 100;
		var options = {};
		var navItemIndex;
		var lastScrollTop = 0;
		var contact = $('.contact');
		var card = $('.card');
		var body = $('body');
		var dotIndex = 0;
		var clickedMainNav = false;

		card.flip({trigger: "hover"});

		navIcon.click(function(){
			navContainer.toggle('fold', options,'slow');
			mainFooter.toggle();
			navIndicator.toggle()
		});

		mainContent.children(mainWrapper).each(function(){
			$(this).height(windowHeight);
		});

	    mainNavItem.on('click', function(event) {
	    	event.preventDefault();
	    	navContainer.toggle('fold', options,'slow');
			mainFooter.toggle();
			navIndicator.toggle();
			navItemIndex = $(this).parent().index();
			//clickedMainNav = true;
	        body.scrollTo(((windowHeight * navItemIndex)+(mainHeaderHeight*2)), 0,
	        		{
	        			onAfterFirst: function(){
	        				clickedMainNav = false;
	        				
	        			},
	        			onAfter: function(){
	        				dotIndex = navItemIndex;
	        				activeNavIndicator();
	        				alert('done');
	        				clickedMainNav = true;
	        			}
	        		});
	    });

	    $(window).scroll(function(){
	    	var scrollPos = $(this).scrollTop();
			console.log('scrollPos ' + scrollPos);
			if(clickedMainNav == false){
				scrollSectionRange(scrollPos);
			}
			lastScrollTop = scrollPos;
	    });
		
		var scrollSectionRange = function($scrollPos){
			scrollPos = $scrollPos;
			if(scrollPos > parseInt(introPosTop + scrollSensibility) &&  scrollPos < parseInt(brandPosTop - scrollSensibility)){
				var localFlag = false;
				if (localFlag == false){
					scrollPos > lastScrollTop ? dotIndex = 1 : dotIndex = 0;
					initCustomScrollTo(scrollPos);
					localFlag = true;
				}
				console.log("first " + parseInt(introPosTop + scrollSensibility));
			}
			else if(scrollPos > parseInt(brandPosTop+scrollSensibility+11)  &&  scrollPos < parseInt(teamPosTop - scrollSensibility-11)){
				var localFlag = false;
				if (localFlag == false){
					scrollPos > lastScrollTop ? dotIndex = 2 : dotIndex = 1;
					initCustomScrollTo(scrollPos);
					localFlag = true;
				}
				console.log("second " + parseInt(brandPosTop + scrollSensibility+11));
			}
			else if(scrollPos > (teamPosTop+scrollSensibility+11) && scrollPos < parseInt(communitiesPosTop - scrollSensibility-11)){
				var localFlag = false;
				if (localFlag == false){
					scrollPos > lastScrollTop ? dotIndex = 3 : dotIndex = 2;
					initCustomScrollTo(scrollPos);
					localFlag = true;
				}
				console.log("third " + parseInt(teamPosTop + scrollSensibility+11));
			}
			else if(scrollPos > parseInt(communitiesPosTop + scrollSensibility+30) && scrollPos < parseInt(contactPosTop - scrollSensibility-3000)){
				var localFlag = false;
				if (localFlag == false){
					scrollPos > lastScrollTop ? dotIndex = 4 : dotIndex = 3;
					initCustomScrollTo(scrollPos);
					localFlag = true;
				}
				console.log("fourth " + parseInt(communitiesPosTop + scrollSensibility+30) );
			}
			else if(scrollPos > parseInt(contactPosTop + scrollSensibility+11) && scrollPos < parseInt(communitiesPosTop - scrollSensibility)){
				var localFlag = false;
				if (localFlag == false){
					scrollPos > lastScrollTop ? dotIndex = 4 : dotIndex = 3;
					initCustomScrollTo(scrollPos);
					localFlag = true;
				}
				console.log("fifth " + parseInt(contactPosTop + scrollSensibility+11));
			}
		}

		var activeNavIndicator = function(){
			navIndicator.children().removeClass('active');
			var activeDot = ".nav-indicator .nav-dot:eq(" + dotIndex + ")";
			$(activeDot).addClass('active');
		}

		var initCustomScrollTo = function($scrollPos){
			activeNavIndicator();
			customScrollTo($scrollPos);
			
		}
		
		var customScrollTo = function($scrollPos){
			$scrollPos > lastScrollTop ? body.scrollTo("+="+windowHeight+"px",{duration:0}) : body.scrollTo("-="+windowHeight+"px",{duration:0});
		}

		
	
		
	});
})(jQuery);