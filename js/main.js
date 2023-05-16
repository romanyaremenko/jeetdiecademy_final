// burger-menu
const menuButton = document.querySelector('.header__menu');
const menu = document.querySelector('.side-bar');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuButton.classList.toggle('active')
  if(window.innerWidth <= 680) {
    document.querySelector('body').classList.toggle('hidden')
  }
})


document.querySelectorAll('.side-bar-link').forEach((item)=> {
  item.addEventListener('click',function () {
    if(item.classList.contains('popupOpen')) {
    } else {
      document.querySelector('body').classList.remove('hidden')
      menu.classList.remove('active');
      menuButton.classList.remove('active')
    }
  })
})


// <COPY_LINK> =========================
const copy = document.querySelector('.copy');
const copyLink = document.querySelector('.contract__column-container');
const copyBlock = document.querySelector('.copied__block');
const copyBlock2 = document.querySelector('.copied__block2');

//copyBlock2.addEventListener('mouseover', leaveCopy);
copy.addEventListener('click', clickCopy);
copy.addEventListener('mouseover', hoverCopy);
copy.addEventListener('mouseleave', leaveCopy);


function hoverCopy() {
  copyBlock2.style.display = 'flex';
}

function leaveCopy() {
  copyBlock2.style.display = 'none';
}

function clickCopy() {
  copyBlock2.style.display = 'none';
  navigator.clipboard.writeText(copyLink.innerText);
  copyBlock.classList.toggle('active');
  if (!copyBlock.classList.contains('active')) {
    window.clearTimeout(copyBlock);
    copyBlock.style.display = 'flex';
    copyBlock.style.transition = 'opacity 0.5s ease-in-out';
  } else {
    copyBlock.style.transition = ' none';
    setTimeout(clickCopy, 500);
  }
}


// CARUSEL
const { gsap} = window;

const buttons = {
  prev: document.querySelector(".btn--left"),
  next: document.querySelector(".btn--right"),
};

var buttons2 = {
  prev: document.querySelector(".btn--left2"),
  next: document.querySelector(".btn--right2"),
};

buttons.next.addEventListener("click", () => {
  swapCards("right");
  swapCards2("right");
});

buttons2.next.addEventListener("click", () => {
  swapCards("right");
  swapCards2("right");
});

buttons.prev.addEventListener("click", () => {
  swapCards("left");
  swapCards2("left");
});

buttons2.prev.addEventListener("click", () => {
  swapCards("left");
  swapCards2("left");
});

const cardsContainerEl = document.querySelector(".cards__wrapper");
//const appBgContainerEl = document.querySelector(".app__bg");

const cardsContainerEl2 = document.querySelector(".cards__wrapper2");
//const appBgContainerEl2 = document.querySelector(".app__bg2");

function swapCards(direction) {
  const currentCardEl = cardsContainerEl.querySelector(".current--card");
  const previousCardEl = cardsContainerEl.querySelector(".previous--card");
  const nextCardEl = cardsContainerEl.querySelector(".next--card");

  swapCardsClass();
  function swapCardsClass() {
  currentCardEl.classList.remove("current--card");
  previousCardEl.classList.remove("previous--card");
  nextCardEl.classList.remove("next--card");
  currentCardEl.style.zIndex = "50";

  if (direction === "right") {
    previousCardEl.style.zIndex = "20";
    nextCardEl.style.zIndex = "30";

    currentCardEl.classList.add("previous--card");
    previousCardEl.classList.add("next--card");
    nextCardEl.classList.add("current--card");


  } else if (direction === "left") {
    previousCardEl.style.zIndex = "30";
    nextCardEl.style.zIndex = "20";

    currentCardEl.classList.add("next--card");
    previousCardEl.classList.add("current--card");
    nextCardEl.classList.add("previous--card");
  }
  }
};

function swapCards2(direction) {
  const currentCardEl2 = cardsContainerEl2.querySelector(".current--card2");
  const previousCardEl2 = cardsContainerEl2.querySelector(".previous--card2");
  const nextCardEl2 = cardsContainerEl2.querySelector(".next--card2");

  swapCardsClass2();

  function swapCardsClass2() {
    currentCardEl2.classList.remove("current--card2");
    previousCardEl2.classList.remove("previous--card2");
    nextCardEl2.classList.remove("next--card2");

    currentCardEl2.style.zIndex = "50";

    if (direction === "right") {
      previousCardEl2.style.zIndex = "20";
      nextCardEl2.style.zIndex = "30";

      currentCardEl2.classList.add("previous--card2");
      previousCardEl2.classList.add("next--card2");
      nextCardEl2.classList.add("current--card2");

    } else if (direction === "left") {
      previousCardEl2.style.zIndex = "30";
      nextCardEl2.style.zIndex = "20";

      currentCardEl2.classList.add("next--card2");
      previousCardEl2.classList.add("current--card2");
      nextCardEl2.classList.add("previous--card2");
    }
  }
};

function init() {

  let tl = gsap.timeline();

  tl.to(cardsContainerEl.children, {
    "--card-translateY-offset": "0%",
  })
    .to(
    [buttons.prev, buttons.next],
    {
      duration: 0.4,
      pointerEvents: "all",
    },
    "-=0.4"
  )
  tl.to(cardsContainerEl2.children, {
    "--card-translateY-offset": "0%",
    })
    .to(
      [buttons2.prev, buttons2.next],
      {
        duration: 0.4,
        //opacity: 1,
        pointerEvents: "all",
      },
      "-=0.4"
    );
};

const waitForImages = () => {
  gsap.set(cardsContainerEl.children, {
    "--card-translateY-offset": "100vh",
  });


  gsap.set(cardsContainerEl2.children, {
    "--card-translateY-offset": "100vh",
  });

  gsap.set([buttons.prev, buttons.next], {
    pointerEvents: "none",
  });
  gsap.set([buttons2.prev, buttons2.next], {
    pointerEvents: "none",
  });

  init();

};

waitForImages();





$( ".buttons_step1" ).click(function() {
  $( ".step2" ).fadeOut(function (){
    $( ".step1" ).fadeIn();
  });
  $( ".step3" ).fadeOut(function (){
    $( ".step1" ).fadeIn();
  });
});



$( ".buttons_step2" ).click(function() {
  $( ".step1" ).fadeOut(function (){
    $( ".step2" ).fadeIn();
  });
  $( ".step3" ).fadeOut(function (){
    $( ".step2" ).fadeIn();
  });
});



$( ".buttons_step3" ).click(function() {
  $( ".step1" ).fadeOut(function (){
    $( ".step3" ).fadeIn();
  });
  $( ".step2" ).fadeOut(function (){
    $( ".step3" ).fadeIn();
  });
});




$(".popupOpen").click(function (e){
  e.preventDefault()
  $( ".popup" ).fadeIn().css("display", "flex");
  const menuButton = document.querySelector('.header__menu');
  const menu = document.querySelector('.side-bar');
  $('body').css('overflow', 'hidden');
})
$(".popup__btn").click(function (){
  $( ".popup" ).fadeOut();
  $('html, body').css('overflow', 'visible');
})


var header = $('.header__top'),
  scrollPrev = 0;

$(window).scroll(function() {
var scrolled = $(window).scrollTop();
//
if ( scrolled > 200 && scrolled > scrollPrev ) {
header.addClass('out');
menu.classList.remove('active');
menuButton.classList.remove('active')
} else {
header.removeClass('out');
}
scrollPrev = scrolled;
});

var $page = $('html, body');
$('a[href^="#"]').click(function() {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
  return false;
});



// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


function checkWebPSupport(callback) {
  var img = new Image();
  img.onload = function() {
    var isSupported = (img.width > 0) && (img.height > 0);
    callback(isSupported);
  };
  img.onerror = function() {
    callback(false);
  };
  img.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
}

checkWebPSupport(function(isSupported) {
  if (isSupported) {
    document.querySelector('body').classList.add('webp')
  } else {
    console.log('WebP is not supported.');
    document.querySelector('body').classList.add('not-webp')
  }
});
