window.onload = function () {
  // 메뉴버튼 클릭이동
  let gnbBtSet = $(".menu a");
  $.each(gnbBtSet, function () {
    $(this).click(function (e) {
      e.preventDefault();
      let target = $(this).attr("href");
      $("html")
        .stop()
        .animate({
          scrollTop: $(target).offset().top,
        });
    });
  });

  const nowstart = document.querySelector(".talk-start");
  const saying = ["안녕하십니까,"];

  const text = document.querySelector(".talk-on");
  const textlast = document.querySelector(".talk-last");
  const myname = document.querySelector(".myname");
  const textend = document.querySelector(".talk-end");
  const context1 = [
    "꾸준한",
    "현실에 안주하지 않고, 꾸준한 배움을 통해 발전을 꿈꾸는",
  ];
  const context2 = ["프론트엔드 개발자 지망생"];

  const context3 = [" '김 정 용'  "];

  const context4 = ["입니다."];

  const speed = 100;
  let ts = 0;

  const typing = async () => {
    const letter = saying[i].split("");
    while (letter.length) {
      await wait(speed);
      nowstart.innerHTML += letter.shift();
    }

    await wait(600);

    if (saying[ts + 1]) remove();
  };
  const remove = async () => {
    const letter = saying[ts].split("");

    while (letter.length) {
      await wait(speed);

      letter.pop();
      nowstart.innerHTML = letter.join("");
    }
    ts++;
    typing();
  };

  let i = 0;

  const typing1 = async () => {
    const letter = context1[i].split("");
    while (letter.length) {
      await wait(speed);
      text.innerHTML += letter.shift();
    }

    await wait(600);

    if (context1[i + 1]) remove1();
  };
  const remove1 = async () => {
    const letter = context1[i].split("");

    while (letter.length) {
      await wait(speed);

      letter.pop();
      text.innerHTML = letter.join("");
    }
    i++;
    typing1();
  };

  let i2 = 0;
  const typing2 = async () => {
    const letter = context2[i2].split("");
    while (letter.length) {
      await wait(speed);
      textlast.innerHTML += letter.shift();
    }

    await wait(600);

    if (context2[i2 + 1]) remove2();
  };

  let i3 = 0;
  const typing3 = async () => {
    const letter = context3[i2].split("");
    while (letter.length) {
      await wait(speed);
      myname.innerHTML += letter.shift();
    }

    await wait(600);

    if (context3[i3 + 1]) remove3();
  };

  let i4 = 0;
  const typing4 = async () => {
    const letter = context4[i2].split("");
    while (letter.length) {
      await wait(speed);
      textend.innerHTML += letter.shift();
    }

    await wait(600);

    if (context4[i4 + 1]) remove4();
  };

  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  // 초기 실행
  setTimeout(typing, 1800);
  setTimeout(typing1, 3200);
  setTimeout(typing2, 8400);
  setTimeout(typing3, 10050);
  setTimeout(typing4, 11100);

  new Swiper(".life-sw", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 100,
    centeredSlides: true,
    navigation: {
      prevEl: ".life-sw-prev",
      nextEl: ".life-sw-next",
    },
    autoplay: {
      delay: 50000,
      disableOnInteraction: false,
    },
  });

  new Swiper(".pfNedu-sw", {
    speed: 1200,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".pf-pgnt",
      type: "bullets",
    },
  });

  const plSW = new Swiper(".portlist-sw", {
    effect: "coverflow",
    speed: 1500,
    loop: true,
    centeredSlides: true,
    slidesPerView: "3",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      prevEl: ".ptsum-left",
      nextEl: ".ptsum-right",
    },
  });

  const stttSW = new Swiper(".st-desc-sw", {
    speed: 1200,
    loop: true,
    allowTouchMove: false,
    centeredSlides: true,
    slidesPerView: "3",
    pagination: {
      el: ".st-port-pgnt",
      type: "bullets",
    },
  });

  plSW.controller.control = stttSW;

  var bar = new ProgressBar.Circle(html, {
    color: "#F67925",
    trailColor: "#FFE6D6",
    trailWidth: 1,
    duration: 2400,
    easing: "bounce",
    strokeWidth: 12,
    from: {
      color: "#FFE6D6",
      a: 0,
    },
    to: {
      color: "#F67925",
      a: 1,
    },
  });

  var bar2 = new ProgressBar.Circle(css, {
    color: "#008ED8",
    trailColor: "#5DC0FF",
    trailWidth: 1,
    duration: 2400,
    easing: "bounce",
    strokeWidth: 12,
    from: {
      color: "#5DC0FF",
      a: 0,
    },
    to: {
      color: "#008ED8",
      a: 1,
    },
  });

  var bar3 = new ProgressBar.Circle(scss, {
    color: "#CD679A",
    trailColor: "#FFBADD",
    trailWidth: 1,
    duration: 2400,
    easing: "bounce",
    strokeWidth: 12,
    from: {
      color: "#FFBADD",
      a: 0,
    },
    to: {
      color: "#CD679A",
      a: 1,
    },
  });

  var bar4 = new ProgressBar.Circle(js, {
    color: "#FFDC62",
    trailColor: "#FFE596",
    trailWidth: 1,
    duration: 2400,
    easing: "bounce",
    strokeWidth: 12,
    from: {
      color: "#FFE596",
      a: 0,
    },
    to: {
      color: "#FFDC62",
      a: 1,
    },
  });

  var bar5 = new ProgressBar.Circle(jq, {
    color: "#1169AE",
    trailColor: "#95D0FF",
    trailWidth: 1,
    duration: 2400,
    easing: "bounce",
    strokeWidth: 12,
    from: {
      color: "#95D0FF",
      a: 0,
    },
    to: {
      color: "#1169AE",
      a: 1,
    },
  });

  var bar6 = new ProgressBar.Circle(vue, {
    color: "#4DBA87",
    trailColor: "#00FB8B",
    trailWidth: 1,
    duration: 2400,
    easing: "bounce",
    strokeWidth: 12,
    from: {
      color: "  #00FB8B",
      a: 0,
    },
    to: {
      color: "#4DBA87",
      a: 1,
    },
  });

  var bar7 = new ProgressBar.Circle(git, {
    color: "#333333",
    trailColor: "#C5C1C1",
    trailWidth: 1,
    duration: 2400,
    easing: "bounce",
    strokeWidth: 12,
    from: {
      color: "#C5C1C1",
      a: 0,
    },
    to: {
      color: "#333333",
      a: 1,
    },
  });

  var bar8 = new ProgressBar.Circle(bootstrap, {
    color: "#7312F7",
    trailColor: "#BF90FF",
    trailWidth: 1,
    duration: 2400,
    easing: "bounce",
    strokeWidth: 12,
    from: {
      color: "#BF90FF",
      a: 0,
    },
    to: {
      color: "#7312F7",
      a: 1,
    },
  });

  var bar9 = new ProgressBar.Circle(gf, {
    color: "#4AFFE9",
    trailColor: "#A8FFE2",
    trailWidth: 1,
    duration: 2400,
    easing: "bounce",
    strokeWidth: 12,
    from: {
      color: "#A8FFE2",
      a: 0,
    },
    to: {
      color: "#4AFFE9",
      a: 1,
    },
  });

  var bar10 = new ProgressBar.Circle(fm, {
    color: "#3747D6",
    trailColor: "#B1B9FF",
    trailWidth: 1,
    duration: 2400,
    easing: "bounce",
    strokeWidth: 12,
    from: {
      color: "#B1B9FF",
      a: 0,
    },
    to: {
      color: "#3747D6",
      a: 1,
    },
  });

  let skillList = $(".skill-list >li >a");
  let skillDesc = $(".skilldesc-box >.skilldesc");
  $.each(skillList, function (index) {
    $(this).mouseenter(function () {
      skillDesc.eq(index).addClass("skilldesc-active");
    });
    $(this).mouseleave(function () {
      skillDesc.removeClass("skilldesc-active");
    });
    $(this).mousemove(function (e) {
      let x = e.clientX;
      let y = e.clientY;
      skillDesc.css("left", x + 5);
      skillDesc.css("top", y + 5);
    });
  });

  let goTop = $(".gotop");

  goTop.click(function () {
    $(window).scrollTop(0);
  });

  let roadmapBt = $(".mr-control >button");
  let roadmapBtB = $(".mr-control >button>span");
  let roadmapBtT = $(".mr-control >button>p");
  let roadmapBtCT = $(".mr-control >button>i");
  let mrDesc = $(".my-roadmap .map-review ul.mr-content >li");
  let myRoadmap = $(".my-roadmap");

  let roadmapBtTotal = roadmapBt.length;
  let roadmapBtIndex = 0;
  let roadmapSpeed = 2000;

  function changeRoadMap() {
    mrDesc.hide();
    mrDesc.eq(roadmapBtIndex).show();
    roadmapBtB.removeClass("mr-show");
    roadmapBtB.eq(roadmapBtIndex).addClass("mr-show");
    roadmapBtT.removeClass("mr-show");
    roadmapBtT.eq(roadmapBtIndex).addClass("mr-show");
    roadmapBtCT.removeClass("mr-show");
    roadmapBtCT.eq(roadmapBtIndex).addClass("mr-show");

    roadmapBtIndex++;
    if (roadmapBtIndex >= roadmapBtTotal) {
      roadmapBtIndex = 0;
    }
  }
  myRoadmap.mouseenter(function () {
    clearInterval(radmapTimer);
  });

  myRoadmap.mouseleave(function () {
    clearInterval(radmapTimer);
    radmapTimer = setInterval(changeRoadMap, roadmapSpeed);
  });

  let radmapTimer = setInterval(changeRoadMap, roadmapSpeed);
  changeRoadMap();

  $.each(roadmapBt, function (index) {
    $(this).click(function () {
      roadmapBtIndex = index;
      changeRoadMap();
    });
  });

  let lifeBottom = $(".life-bottom");
  let cdCaseTop = $(".case-top >p");
  let cdCaseBottom = $(".case-bottom");
  let cdCaseBottomA = $(".case-bottom p");
  let cdContent = $(".music-content >div");
  let cdContentImg = $(".music-content >div>Img");

  $.each(cdCaseTop, function (index) {
    $(this).click(function () {
      if (cdCaseBottom.eq(index).hasClass("show")) {
        lifeBottom.removeClass("show");
        cdCaseBottom.removeClass("show");
        cdCaseBottomA.removeClass("show");
        cdContent.removeClass("show");
        cdContentImg.removeClass("show");
      } else {
        cdCaseBottom.removeClass("show");
        cdCaseBottomA.removeClass("show");
        cdContent.removeClass("show");
        cdContentImg.removeClass("show");

        lifeBottom.addClass("show");
        cdCaseBottom.eq(index).addClass("show");
        cdCaseBottomA.eq(index).addClass("show");
        cdContent.eq(index).addClass("show");
        cdContentImg.eq(index).addClass("show");
      }
    });
  });

  new Waypoint({
    element: $(".psbNrm"),
    handler: function (direction) {
      if (direction == "down") {
        $(".psb-graphS").addClass("slideExpandUp");
      } else if (direction == "up") {
        $(".psb-graphS").removeClass("slideExpandUp");
      }
    },
    offset: "50%",
  });

  new Waypoint({
    element: $(".skills"),
    handler: function (direction) {
      if (direction == "down") {
        bar.animate(0.98);
        bar2.animate(0.91);
        bar3.animate(0.65);
        bar4.animate(0.82);
        bar5.animate(0.9);
        bar6.animate(0.52);
        bar7.animate(0.76);
        bar8.animate(0.85);
        bar9.animate(0.78);
        bar10.animate(0.5);
      } else if (direction == "up") {
        bar.animate(0.0);
        bar2.animate(0.0);
        bar3.animate(0.0);
        bar4.animate(0.0);
        bar5.animate(0.0);
        bar6.animate(0.0);
        bar7.animate(0.0);
        bar8.animate(0.0);
        bar9.animate(0.0);
        bar10.animate(0.0);
      }
    },
    offset: "50%",
  });

  let cdSleeveFNB = $(".playlist");
  let cdSleeveCover = $(".playlist >i");
  let cdSleeveHover = $(".playlist>p>span");
  let TitleCd = $(".playlist >span");

  let TitleCdHover = $(".playlist>span>p");

  let musicContent = $(".music-box .caseset");
  let musicContentOn = $(".music-box .caseset>p");
  let musicCds = $(".music-content");

  let lifereset = $(".music-content>div>button");

  cdSleeveHover.click(function () {
    cdSleeveCover.addClass("hoverM");
    cdSleeveHover.addClass("hide");
    TitleCd.addClass("hoverM");
    cdSleeveFNB.addClass("hoverM");
    $(".photo-box").addClass("hide");

    TitleCdHover.addClass("hoverM");
  });

  TitleCdHover.click(function () {
    cdSleeveFNB.addClass("gone");
    musicContent.removeClass("caseset");
    musicCds.addClass("show");
  });

  lifereset.click(function () {
    cdSleeveCover.removeClass("hoverM");
    cdSleeveHover.removeClass("hide");
    TitleCd.removeClass("hoverM");
    cdSleeveFNB.removeClass("hoverM");
    cdSleeveFNB.removeClass("gone");

    musicContent.addClass("caseset");
    musicContent.removeClass("show");
    musicContentOn.removeClass("show");

    cdContent.removeClass("show");
    cdContentImg.removeClass("show");

    musicCds.removeClass("show");
    lifeBottom.removeClass("show");
    $(".photo-box").removeClass("hide");
  });

  let photoAlbumClick = $(".photo-box>.photo-album>p");
  let photoAlbumTitle = $(".photo-box>span>.photo-titlepic");
  let photoContent = $(".photo-content");
  let photoSlide = $(".photo-content>div");
  let photoSlidePic = $(".photo-content>div>span.slide-photo");
  let photoAlbumReset = $(".photo-box .photo-album span");

  photoAlbumClick.click(function () {
    photoAlbumClick.addClass("show-photo");
    photoAlbumTitle.addClass("hoverc");
    photoAlbumReset.addClass("reset");
    $(".music-box").addClass("hide");
    $(".photo-box").addClass("music-on");
    photoContent.addClass("show");
  });

  $.each(photoSlide, function (index) {
    $(this).click(function () {
      if (photoSlidePic.eq(index).hasClass("show")) {
        photoSlidePic.removeClass("show");
      } else {
        photoSlidePic.removeClass("show");
        photoSlidePic.eq(index).addClass("show");
      }
    });
  });

  photoAlbumReset.click(function () {
    photoAlbumClick.removeClass("show-photo");
    photoAlbumTitle.removeClass("hoverc");
    photoAlbumReset.removeClass("reset");

    photoContent.removeClass("show");
    photoSlidePic.removeClass("show");

    $(".music-box").removeClass("hide");
    $(".photo-box").removeClass("music-on");
  });
};
$(window).ready(function () {
  AOS.init();
});
