window.onload = function () {
  new Swiper('.life-sw', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    navigation: {
      prevEl: '.life-sw-prev',
      nextEl: '.life-sw-next'
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  })

  new Swiper('.port-site-view', {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  })

  var bar = new ProgressBar.Circle(html, {
    color: '#ff3f34',
    trailColor: '#E9F8F0',
    trailWidth: 1,
    duration: 2500,
    easing: 'bounce',
    strokeWidth: 6,
    from: {
      color: '#FFE6D6',
      a: 0
    },
    to: {
      color: '#ff3f34',
      a: 1
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 98);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });
  bar.animate(0.98);

  var bar2 = new ProgressBar.Circle(scss, {
    color: '#ffd32a',
    trailColor: '#E9F8F0',
    trailWidth: 1,
    duration: 2500,
    easing: 'bounce',
    strokeWidth: 6,
    from: {
      color: '#FFF9D4',
      a: 0
    },
    to: {
      color: '#ffd32a',
      a: 1
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });
  bar2.animate(0.91);

  var bar3 = new ProgressBar.Circle(js, {
    color: '#04c56b',
    trailColor: '#E9F8F0',
    trailWidth: 1,
    duration: 2500,
    easing: 'bounce',
    strokeWidth: 6,
    from: {
      color: '#CAFCD1',
      a: 0
    },
    to: {
      color: '#04c56b',
      a: 1
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });
  bar3.animate(0.9);


  var bar4 = new ProgressBar.Circle(vue, {
    color: '#00d8d6',
    trailColor: '#E9F8F0',
    trailWidth: 1,
    duration: 2500,
    easing: 'bounce',
    strokeWidth: 6,
    from: {
      color: '  #CAFDEA',
      a: 0
    },
    to: {
      color: '#00d8d6',
      a: 1
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }

  });
  bar4.animate(0.9);


  var bar5 = new ProgressBar.Circle(git, {
    color: '#3d40c6',
    trailColor: '#E9F8F0',
    trailWidth: 1,
    duration: 2500,
    easing: 'bounce',
    strokeWidth: 6,
    from: {
      color: '#D9DAFC',
      a: 0
    },
    to: {
      color: '#3d40c6',
      a: 1
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });
  bar5.animate(0.92);

  var bar6 = new ProgressBar.Circle(bootstrap, {
    color: '#48545f',
    trailColor: '#E9F8F0',
    trailWidth: 1,
    duration: 2500,
    easing: 'bounce',
    strokeWidth: 6,
    from: {
      color: '#EBF3F7',
      a: 0
    },
    to: {
      color: '#48545f',
      a: 1
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });
  bar6.animate(0.94);

  var bar7 = new ProgressBar.Circle(gf, {
    color: '#694fb6',
    trailColor: '#E9F8F0',
    trailWidth: 1,
    duration: 2500,
    easing: 'bounce',
    strokeWidth: 6,
    from: {
      color: '#E9DEFB',
      a: 0
    },
    to: {
      color: '#694fb6',
      a: 1
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });
  bar7.animate(0.93);



  let SkillListSet = $('.skill-list>li');
  
  $.each(SkillListSet, function(index){
    const SkillDesc = $('.skill-list>li>a>p');
    this.addEventListener("mousemove",(x) => {
      
      const SkDescPsLeft = x.clientX;
      const SkDescPsRight = x.clientY; 
      SkillDesc.eq(index).show()
      SkillDesc.style.left = SkDescPsLeft + "px";
      SkillDesc.style.top = SkDescPsRight + "px";
    })

  })

}