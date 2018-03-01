

$( window ).on( "load", function() {
    $("#overlay").animate({"bottom":"100vh"},600);



    var toggle = false;
    var lastActive = "#main";

    function resetPage(){
            $("#main").animate({"bottom":"0%"},0);
            $("#main").animate({"right":"100%"},0);
            $("#about-content").animate({"top":"100%"},0);
            $("#about-content").animate({"right":"0%"},0);
            $("#proshow-content").animate({"bottom":"100%"},0);
            $("#proshow-content").animate({"right":"0%"},0);
    }

    if(window.innerWidth<=768){var anim = 400;}else{var anim=600;}

    function animateMenu(callback){
        if(window.innerWidth<=768){var anim = 400;}else{var anim=600;}
        if(toggle==false){
            $("#menu").css("background-image","url('./static/img/close.png')");
            $(lastActive).animate( {"right":"100%"},anim);
            $("#menu-content").animate({"left":"0%"},anim);
            toggle = true;
            callback();
        }else{
            $("#menu").css("background-image","url('./static/img/hamburger.png')");
            $(lastActive).animate( {"right":"0%"},anim );
            $("#menu-content").animate({"left":"100%"},anim);
            toggle = false;
            callback(); 
        }
    }

    $( "#menu" ).on( "click", function() {
            animateMenu();
    });

    $( "#home" ).on( "click", function() {
        if(lastActive == "#main"){
            animateMenu();
        }else{
            resetPage();
            lastActive = "#main";
            animateMenu();
        }
    });
    $( "#home-mob" ).on( "click", function() {
        if(lastActive == "#main"){
            animateMenu();
        }else{
            resetPage();
            lastActive = "#main";
            animateMenu();
        }
    });
    $( "#about" ).on( "click", function() {
        function animateAbout(){
            setTimeout(function() {
                $("#main").animate( {"bottom":"100%"},anim );
                $("#about-content").animate({"top":"0%"},anim);            
              }, anim);
        }
        if(lastActive == "#main"){
            animateMenu(animateAbout);
            console.log('hello');
            lastActive = "#about-content";
        }else{
            resetPage();
            lastActive = "#main";
            animateMenu(animateAbout);
            lastActive = "#about-content";
        }
    });
    $( "#about-mob" ).on( "click", function() {
        function animateAbout(){
            setTimeout(function() {
                $("#main").animate( {"bottom":"100%"},anim );
                $("#about-content").animate({"top":"0%"},anim);            
              }, anim);
        }
        if(lastActive == "#main"){
            animateMenu(animateAbout);
            console.log('hello');
            lastActive = "#about-content";
        }else{
            resetPage();
            lastActive = "#main";
            animateMenu(animateAbout);
            lastActive = "#about-content";
        }
    });
    $( "#proshow" ).on( "click", function() {
        function animateProshow(){
            setTimeout(function() {
                $("#main").animate( {"bottom":"-100%"},anim );
                $("#proshow-content").animate({"bottom":"0%"},anim);            
              }, anim);
        }
        if(lastActive == "#main"){
            animateMenu(animateProshow);
            console.log('hello');
            lastActive = "#proshow-content";
        }else{
            resetPage();
            lastActive = "#main";
            animateMenu(animateProshow);
            lastActive = "#proshow-content";
        }
    });
    $( "#proshow-mob" ).on( "click", function() {
        function animateProshow(){
            setTimeout(function() {
                $("#main").animate( {"bottom":"-100%"},anim );
                $("#proshow-content").animate({"bottom":"0%"},anim);            
              }, anim);
        }
        if(lastActive == "#main"){
            animateMenu(animateProshow);
            console.log('hello');
            lastActive = "#proshow-content";
        }else{
            resetPage();
            lastActive = "#main";
            animateMenu(animateProshow);
            lastActive = "#proshow-content";
        }
    });
    $( "#sponsors" ).on( "click", function() {
        window.open('https://sponsors.dhwani.org.in');
    });
    $( "#sponsors-mob" ).on( "click", function() {
        window.open('https://sponsors.dhwani.org.in');
    });
    $( "#contact-fb" ).on( "click", function() {
        window.open('https://facebook.com/dhwanifest');
    });
    $( "#fb" ).on( "click", function() {
        window.open('https://facebook.com/dhwanifest');
    });
    $( "#contact-twitter" ).on( "click", function() {
        window.open('https://twitter.com/dhwanifest');
    });
    $( "#contact-insta" ).on( "click", function() {
        window.open('https://instagram.com/dhwanifest');
    });
    $( "#insta" ).on( "click", function() {
        window.open('https://instagram.com/dhwanifest');
    });
    $( "#contact-youtube" ).on( "click", function() {
        window.open('https://www.youtube.com/channel/UCUGXXOIJVE6jpuQY2EubYTA');
    });
    $( "#you" ).on( "click", function() {
        window.open('https://www.youtube.com/channel/UCUGXXOIJVE6jpuQY2EubYTA');
    });
    $( "#contact" ).on( "click", function() {
        function animateContact(){
            setTimeout(function() {
                $("#main").animate( {"right":"-100%"},anim );
                $("#contact-content").animate({"right":"0%"},anim);            
              }, anim);
        }
        if(lastActive == "#main"){
            animateMenu(animateContact);
            console.log('hello');
            lastActive = "#contact-content";
        }else{
            resetPage();
            lastActive = "#main";
            animateMenu(animateContact);
            lastActive = "#contact-content";
        }
    });
    $( "#contact-mob" ).on( "click", function() {
        function animateContact(){
            setTimeout(function() {
                $("#main").animate( {"right":"-100%"},anim );
                $("#contact-content").animate({"right":"0%"},anim);            
              }, anim);
        }
        if(lastActive == "#main"){
            animateMenu(animateContact);
            console.log('hello');
            lastActive = "#contact-content";
        }else{
            resetPage();
            lastActive = "#main";
            animateMenu(animateContact);
            lastActive = "#contact-content";
        }
    });
});

$( document ).ready(function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    $('#container').css({"width":width,"height":height});

    var colors = new Array(
    [62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]);
    
    var step = 0;
    //color table indices for: 
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0,1,2,3];
    
    //transition speed
    var gradientSpeed = 0.002;
    
    function updateGradient()
    {
    
    if ( $===undefined ) return;
    
    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];
    
    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb("+r1+","+g1+","+b1+")";
    
    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb("+r2+","+g2+","+b2+")";
    
    $('#gradient').css({
    background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
        background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];
        
        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        
    }
    }
    
    setInterval(updateGradient,10);
    
});