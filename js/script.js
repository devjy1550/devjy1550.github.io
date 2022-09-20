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

  new Swiper('.personal-swiper', {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: '.ps-view-prev',
      nextEl: '.ps-view-next'
    },
    pagination : {
      type: 'bullets',
      el: '.psn-sw-pgnt',
    }

  })


  new Swiper('.study-swiper', {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: '.st-view-prev',
      nextEl: '.st-view-next'
    },
    pagination : {
      type: 'bullets',
      el: '.st-sw-pgnt',
    }
  })





  var bar = new ProgressBar.Circle(html, {
    color: '#034EA2',
    trailColor: '#E9F8F0',
    trailWidth: 1,
    duration: 2500,
    easing: 'bounce',
    strokeWidth: 12,
    from: {
      color: '#034EA2',
      a: 0
    },
    to: {
      color:'#034EA2',
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
    color: '#034EA2',
    trailColor: '#E9F8F0',
    trailWidth: 1,
    duration: 2500,
    easing: 'bounce',
    strokeWidth: 12,
    from: {
      color: '#034EA2',
      a: 0
    },
    to: {
      color:'#034EA2',
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
    color: '#034EA2',
    trailColor: '#E9F8F0',
    trailWidth: 1,
    duration: 2500,
    easing: 'bounce',
    strokeWidth: 12,
    from: {
      color: '#034EA2',
      a: 0
    },
    to: {
      color:'#034EA2',
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
    color: '#034EA2',
    trailColor: '#E9F8F0',
    trailWidth: 1,
    duration: 2500,
    easing: 'bounce',
    strokeWidth: 12,
    from: {
      color: '#034EA2',
      a: 0
    },
    to: {
      color:'#034EA2',
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
    color: '#034EA2',
    trailColor: '#E9F8F0',
    trailWidth: 1,
    duration: 2500,
    easing: 'bounce',
    strokeWidth: 12,
    from: {
      color: '#034EA2',
      a: 0
    },
    to: {
      color:'#034EA2',
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
    color: '#034EA2',
    trailColor: '#E9F8F0',
    trailWidth: 1,
    duration: 2500,
    easing: 'bounce',
    strokeWidth: 12,
    from: {
      color: '#034EA2',
      a: 0
    },
    to: {
      color:'#034EA2',
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
    color: '#034EA2',
    trailColor: '#E9F8F0',
    trailWidth: 1,
    duration: 2500,
    easing: 'bounce',
    strokeWidth: 12,
    from: {
      color: '#034EA2',
      a: 0
    },
    to: {
      color:'#034EA2',
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
}