setTimeout(
    function()
    {
        window.hi.innerHTML+=(' Hi');
    }
,2400);
setTimeout(
    function()
    {
        window.my.innerHTML+=('I'+'\'m Remon Hany');
    }
,3400);

setTimeout(
    function()
    {
        window.iam.innerHTML+=('  I'+'\'m a Front-End Developer'  );
    }
,4400);
setTimeout(
    function()
    {
        window.interest.innerHTML+=('  Interested in Software Technology and Design ');
    }
,5400);
setTimeout(
    function()
    {
        window.now.innerHTML+=('  Now. You You can take a look at my Portfolio , Thank you  ');
    }
,6400);



    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 25,
        grabcursor:true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          540: {
            slidesPerView: 1,
         
          },
          768: {
            slidesPerView: 2,
           
          },
          1024: {
            slidesPerView: 3,
           
          },
        },
      });




      ScrollReveal({
         reset: true,
        distance:'20px',
        duration:900,
         delay:100 
    });
      ScrollReveal().reveal(' h3', { delay:100 ,origin:'top'});
      ScrollReveal().reveal(' .about .row .container .imagee img , .education .row .container .imagee img, .icon', { delay:200 ,origin:'right'});
      ScrollReveal().reveal(' .about .row .container .content ,  .education .row .container .content , .contact .row .container .information', 
      { delay:200 ,origin:'left'});
      ScrollReveal().reveal(' .skills .technical p', { delay:100 ,origin:'top',interval:200});
      ScrollReveal().reveal(' .skills .soft p', { delay:100 ,origin:'top',interval:200});




      let ABB=document.querySelector('#abou');
       let skil=document.querySelector('#skil');
       let Hom=document.querySelector('#hom');
       let PRO=document.querySelector('#proj');
       let EDU=document.querySelector('#educ');
       let CON=document.querySelector('#cont');
       function ho(){
        Hom.style.boxShadow="0 0 5px 5px #fff ";
         skil.style.boxShadow="none ";
         ABB.style.boxShadow="none ";
         EDU.style.boxShadow="none ";
         PRO.style.boxShadow="none ";
         CON.style.boxShadow="none ";
        }
       function pro(){
            PRO.style.boxShadow="0 0 5px 5px #fff ";
             skil.style.boxShadow="none ";
             ABB.style.boxShadow="none ";
             Hom.style.boxShadow="none ";
             EDU.style.boxShadow="none ";
             CON.style.boxShadow="none ";
             
            }
      function abo(){
      ABB.style.boxShadow="0 0 5px 5px #fff ";
       skil.style.boxShadow="none ";
       Hom.style.boxShadow="none ";
       PRO.style.boxShadow="none ";
       EDU.style.boxShadow="none ";
       CON.style.boxShadow="none ";
      }
      function ski(){
        ABB.style.boxShadow="none ";
        skil.style.boxShadow="0 0 5px 5px #fff ";
        Hom.style.boxShadow="none ";
        PRO.style.boxShadow="none ";
        EDU.style.boxShadow="none ";
        CON.style.boxShadow="none ";
      }
      function edu(){
        EDU.style.boxShadow="0 0 5px 5px #fff ";
         skil.style.boxShadow="none ";
         ABB.style.boxShadow="none ";
         Hom.style.boxShadow="none ";
         PRO.style.boxShadow="none ";
         CON.style.boxShadow="none ";
        }
        function con(){
            CON.style.boxShadow="0 0 5px 5px #fff ";
             skil.style.boxShadow="none ";
             ABB.style.boxShadow="none ";
             EDU.style.boxShadow="none ";
             PRO.style.boxShadow="none ";
             Hom.style.boxShadow="none ";
            }
      


            window.onscroll = function()
            { 
                value = scrollY;
                console.log(value);
              if(scrollY >=0 && scrollY <=150)
              {
               Hom.style.boxShadow="0 0 5px 5px #fff ";
               skil.style.boxShadow="none ";
               ABB.style.boxShadow="none ";
               EDU.style.boxShadow="none ";
               PRO.style.boxShadow="none ";
               CON.style.boxShadow="none "
              }
              if(scrollY >=500 && scrollY <=710)
              {
                ABB.style.boxShadow="0 0 5px 5px #fff ";
               skil.style.boxShadow="none ";
                Hom.style.boxShadow="none ";
               EDU.style.boxShadow="none ";
               PRO.style.boxShadow="none ";
               CON.style.boxShadow="none "
              }
              if(scrollY >=1100 && scrollY <=1300)
              {
                 skil.style.boxShadow="0 0 5px 5px #fff ";
               ABB.style.boxShadow="none ";
                Hom.style.boxShadow="none ";
               EDU.style.boxShadow="none ";
               PRO.style.boxShadow="none ";
               CON.style.boxShadow="none "
              }
              if(scrollY >=1780 && scrollY <=1900)
              {
                  PRO.style.boxShadow="0 0 5px 5px #fff ";
               ABB.style.boxShadow="none ";
                Hom.style.boxShadow="none ";
               EDU.style.boxShadow="none ";
              skil.style.boxShadow="none ";
              CON.style.boxShadow="none "
              }
              if(scrollY >=2300 && scrollY <=2500)
              {
                   EDU.style.boxShadow="0 0 5px 5px #fff ";
                  ABB.style.boxShadow="none ";
                Hom.style.boxShadow="none ";
              PRO.style.boxShadow="none ";
              skil.style.boxShadow="none ";
              CON.style.boxShadow="none ";
              }
             if(scrollY >=2800 && scrollY <=3500)
              {
                  CON.style.boxShadow="0 0 5px 5px #fff ";
                   ABB.style.boxShadow="none ";
                   Hom.style.boxShadow="none ";
                   PRO.style.boxShadow="none ";
                   skil.style.boxShadow="none ";
                   EDU.style.boxShadow="none ";
              }
            }
            
            let Btn = document.querySelector('#menu-btn');
            let Nav = document.querySelector('.header .row .navbar');
             function hide(){
                Btn.classList.toggle('fa-times');
                Nav.classList.toggle('i');
             }