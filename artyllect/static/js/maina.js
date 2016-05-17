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
		var mainHeaderHeight = $('.main-header').height();
		var mainContent = $('.main-content');
		var mainContentChildren = $('.main-content > .main-wrapper')
		var introPosTop = 0;
		var brandPosTop = windowHeight + mainHeaderHeight;
		var teamPosTop = (2 * windowHeight) + mainHeaderHeight;
		var communitiesPosTop = (3 * windowHeight) + mainHeaderHeight;
		var contactPosTop = (4 * windowHeight) + mainHeaderHeight;
		var scrollSensibility = 150;
		var scrollSensibilityTarget = 10;
		var options = {};
		var navItemIndex;
		var lastScrollTop = 0;
		var contact = $('.contact');
		var card = $('.card');
		var body = $('body');
		var dotIndex = 0;
		var clickedMainNav = false;
		var scrollPos = 0;
		var tempFlag = true;
		var page = $("html, body");
		var teamContainer = $(".team-container");
		var teamMember = $(".team-member");
		var description = $(".description");
		var teamDescription = $(".team-member .description");


		teamContainer.children().on("mouseenter", function(){
			var targetDesc = $(this).find(description);
			targetDesc.toggle("clip", 500);

		}).on("mouseleave", function(){
			var targetDesc = $(this).find(description);
			targetDesc.fadeOut("fast");
		});


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
    			onAfter: function(){
    				dotIndex = navItemIndex;
    				activeNavIndicator();
    				clickedMainNav = true;
    			},
    			//onAfterFirst: function(){clickedMainNav = false;}
    		});
	    });

	    
		
		var scrollSectionRange = function(){
			if(scrollPos > (introPosTop + scrollSensibility)  && scrollPos < brandPosTop){
				if(scrollPos > lastScrollTop && scrollPos > (introPosTop + mainHeaderHeight + scrollSensibility)){
					dotIndex = 1;
					console.log('first ' +  scrollPos);
					initCustomScrollTo();
				}
				else if(scrollPos < lastScrollTop && scrollPos < brandPosTop - scrollSensibility){
					dotIndex = 0;
					console.log('first ' +  scrollPos);
					initCustomScrollTo();
				}
				
			}
			else if(scrollPos > brandPosTop + mainHeaderHeight && scrollPos < teamPosTop){
				if(scrollPos > lastScrollTop && scrollPos > (brandPosTop + mainHeaderHeight + scrollSensibility)){
					dotIndex = 2;
					console.log('second ' +  scrollPos);
					initCustomScrollTo();
				}
				else if(scrollPos < lastScrollTop && scrollPos < teamPosTop - scrollSensibility){
					dotIndex = 1;
					console.log('second ' +  scrollPos);
					initCustomScrollTo();
				}
			}
			else if(scrollPos > teamPosTop && scrollPos < communitiesPosTop ){
				if(scrollPos > lastScrollTop && scrollPos > (teamPosTop + mainHeaderHeight + scrollSensibility)){
					dotIndex = 3;
					console.log('third ' +  scrollPos);
					initCustomScrollTo();
				}
				else if(scrollPos < lastScrollTop && scrollPos < communitiesPosTop - scrollSensibility){
					dotIndex = 2;
					console.log('third ' +  scrollPos);
					initCustomScrollTo();
				}
			}
			else if(scrollPos > communitiesPosTop && scrollPos < contactPosTop){
				if(scrollPos > lastScrollTop && scrollPos > (communitiesPosTop + mainHeaderHeight + scrollSensibility)){
					dotIndex = 4;
					console.log('fourth ' +  scrollPos);
					initCustomScrollTo();
				}
				else if(scrollPos < lastScrollTop && scrollPos < contactPosTop - scrollSensibility){
					dotIndex = 3;
					console.log('fourth ' +  scrollPos);
					initCustomScrollTo();
				}
			}
			else if(scrollPos > contactPosTop && scrollPos > contactPosTop + mainHeaderHeight){
				if(scrollPos > lastScrollTop && scrollPos > (contactPosTop + mainHeaderHeight + scrollSensibility)){
					dotIndex = 5;
					console.log('fifth ' +  scrollPos);
					initCustomScrollTo();
				}
			}
		}
		
		var initCustomScrollTo = function(){
			activeNavIndicator();
			customScrollTo();
		}

		var activeNavIndicator = function(){
			navIndicator.children().removeClass('active');
			var activeDot = ".nav-indicator .nav-dot:eq(" + dotIndex + ")";
			$(activeDot).addClass('active');
		}

		var customScrollTo = function(){
			var targetScrollTo = (dotIndex * windowHeight) + (mainHeaderHeight);
			//var targetScrollUP = (dotIndex * windowHeight) + (mainHeaderHeight * 1.5);
			if(scrollPos > lastScrollTop){
				body.scrollTo(targetScrollTo+"px",0, 
				{ 
					onAfter: function(){
						console.log('index  ' +dotIndex+' '+  scrollPos);
    					//alert('done ' + dotIndex);
    				},
    				onAfterFirst: function(){
						//alert('done 1');
					},
					queue:true
    			});
			}
			else{
				body.scrollTo(targetScrollTo+"px", 0,
				{
					onAfter: function(){
						//console.log('index  ' +dotIndex+' '+  scrollPos);
    					//alert('done ' + dotIndex);
    				},
    				onAfterFirst: function(){
						//alert('done 1');
					},
					queue:true
				});
			}
		}

		if($(window).width() > 767){
			$(window).scroll(function(){
		    	scrollPos = $(this).scrollTop();
				scrollSectionRange();
				lastScrollTop = scrollPos;
		    });
		}
		else{
			brands.css('height', 'auto');
			team.css('height', 'auto');
			communities.css('height', 'auto');
		}


	});
})(jQuery);