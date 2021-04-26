$("#darkThm").click(function(){
    if($(".logonav").hasClass("darka")){
        $(".logonav").removeClass("darka");
        $("a").removeClass("darka");
        $("nav").removeClass("darkNav");
        localStorage.removeItem("color");
    }else{
        $(".logonav").addClass("darka");
        $("nav").addClass("darkNav");
        $("a").addClass("darka");
        localStorage.setItem("color","dark");
    }


});

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("ul li");

    burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
        link.style.animation = "";
        } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
        }s`;
        }
    });

    burger.classList.toggle("toggle");
    });
};

/* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  