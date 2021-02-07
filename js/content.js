/*===== SHOW MENU "TOGGLE BUTTON" =====*/
const showMenu= (toggleId, navId) =>{
    const toggle= document.getElementById(toggleId),
    nav=document.getElementById(navId)
  
  
  if(nav && toggle){
      toggle.addEventListener("click", ()=>{
          nav.classList.toggle('show--menu')
      })
  }
  }
  showMenu("nav-toggle","nav-menu");
  //////////////////////////////////////////////////////////////////////////////////
  
  
  
  /*===== REMOVE MENU MOBILE AFTER CLICK ON THE LINK =====*/
  const navLink =document.querySelectorAll(".nav__link");
  const linkAction= ()=>{
      const navMenu=document.getElementById("nav-menu")
      navMenu.classList.remove("show--menu")
  }
  navLink.forEach( ev => ev.addEventListener("click", linkAction));
  ////////////////////////////////////////////////////////////////////////////////
  
  
  /*===== SCROLL SECTIONS ACTIVE LINK =====*/
  //querySelector => returns a single object with the first HTML element that matches the 'selectors'. If no matching node is found, null is returned
  //querySelectorAll => returns an array/NodeList of objects with all the HTML elements that match the 'selectors' or an empty NodeList if no matches are found.
  
  
  
  function onScroll(event){
    var sections = document.querySelectorAll('#nav-menu a');
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    
    for( var i = 0; i < sections.length; i++ ){
      var currLink = sections[i]; 
      var val = currLink.getAttribute('href');
      var refElement = document.querySelector(val);
        if( refElement.offsetTop <= scrollPos && ( refElement.offsetTop + refElement.offsetHeight > scrollPos)){
          document.querySelector('#nav-menu ul li a').classList.remove('active--link');
          currLink.classList.add('active--link');
        }else{
           currLink.classList.remove('active--link');
         }
    }
    
    
                                                             
      
  };
  
  window.document.addEventListener('scroll', onScroll );
  
  
  
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  /*===== CHANGE BACKGROUND HEADER =====*/ 
  const scrollHeader= ()=>{
      const header=document.getElementById("header");
      if(this.scrollY >=200) {header.classList.add('scroll--header')}
      else{
          header.classList.remove('scroll--header')
      }
  }
  window.addEventListener("scroll",scrollHeader)
  ////////////////////////////////////////////////////////////////////////////////////
  
  
  
  /*===== SHOW SCROLL TOP =====*/ 
  const scrollTop= ()=>{
    const scrollTop=document.getElementById("scroll-top");
    if(this.scrollY >=560) {scrollTop.classList.add('show--scroll')}
    else{
      scrollTop.classList.remove('show--scroll')
    }
  }
  window.addEventListener("scroll",scrollTop)
  ////////////////////////////////////////////////////////////////////////////////////
  
  
  
  /*===== MIXITUP FILTER PORTFOLIO =====*/ 
  var containerEl = document.querySelector('.portfolio__container');
  if (containerEl){
  const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
  });
  }
  /* Link active portfolio */ 
  var numberButtons = document.querySelectorAll(".portfolio__item")
  for (var i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", changeButton.bind(null, i));
  }
  
  function changeButton(selected, e) {
    var oldActive = document.getElementsByClassName("active--portfolio");
    for (var i = 0; i < oldActive.length; i++) {
      oldActive[i].classList.remove("active--portfolio");
    }
    e.target.classList.add("active--portfolio");
  }
  //////////////////////////////////////////////////////////////////////////////////////////////
  
  
  /*===== SWIPER CAROUSEL =====*/ 
  const mySwiper = new Swiper('.reviews__container ', {
    // Optional parameters
    spaceBetween:16,
    loop: true,
    grabCursor:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    breakpoints:{
      640:{
        slidesPerView:2,
      },
      1024:{
        slidesPerView:3,
      },
    }
   
  })
  //////////////////////////////////////////////////////////////////////////////////
  
  
  
  /*===== GSAP ANIMATION =====*/ 
  gsap.from(".home__img", {opacity:0,duraction:2, delay:0.2, x:60})
  gsap.from(".home__data", {opacity:0,duraction:2, delay:0.8, y:25})
  gsap.from(".home__greeting, .home__name, .home__professional , .home__button", {opacity:0,duraction:2, delay:1, y:25, ease:'expo.out', stagger:.2})
  gsap.from(".nav__logo, .nav__toggle", {opacity:0,duraction:2, delay:1.5, y:25, ease:'expo.out', stagger:.2})
  gsap.from(".nav__item", {opacity:0,duraction:2, delay:1.8, y:25, ease:'expo.out', stagger:.2})
  gsap.from(".home__social-icon", {opacity:0,duraction:2, delay:2.3, y:25, ease:'expo.out', stagger:.2})
  
  