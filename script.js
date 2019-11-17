// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
var textWrapper1 = document.querySelector('.ml4');
var textWrapper2 = document.querySelector('.ml5');
var textWrapper2 = document.querySelector('.ml6');

anime.timeline({loop: 0})
  .add({
    targets: '.ml3 ',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 1,
    duration: 500,
    delay: 1000
  });
anime.timeline({loop: 0})
.add({
    targets: '.ml4 ',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml4',
    opacity: 1,
    duration: 500,
    delay: 1000
  });

anime.timeline({loop: 0})
  .add({
    targets: '.ml5 ',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml5',
    opacity: 1,
    duration: 500,
    delay: 1000
  });

anime.timeline({loop: 0})
  .add({
    targets: '.ml6 ',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml6',
    opacity: 1,
    duration: 500,
    delay: 1000
  });

// SCROLL EFFECT

const targets = document.querySelectorAll('.animate');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {
      console.log('😍');

      if (entry.isIntersecting) {
        const img = entry.target;

        img.classList.add('fade');

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad)

//Letters 

const targets2 = document.querySelectorAll('.animation');

const lazyLoad2 = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {
      console.log('😍');

      if (entry.isIntersecting) {
        const img = entry.target;

        img.classList.add('fading');

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets2.forEach(lazyLoad2)

// Typewriter effect along with scrolling effect

const targets3 = document.querySelectorAll('.letter_animation');

const lazyLoad3 = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {
      console.log('😍');

      if (entry.isIntersecting) {
        const img = entry.target;

        img.classList.add('letter_fading');

        // Wrap every letter in a span
        var textWrapper = document.querySelector('.content1 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
          .add({
            targets: '.content1',
            scaleY: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 300
          })
          .add({
            targets: '.content1 .letter',
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 300,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
            })
          observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets3.forEach(lazyLoad3)


const targets4 = document.querySelectorAll('.letter_animation');

const lazyLoad4 = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {
      console.log('😍');

      if (entry.isIntersecting) {
        const img = entry.target;

        img.classList.add('letter_fading');

        // Wrap every letter in a span
        var textWrapper = document.querySelector('.content2 .letters2');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
          .add({
            targets: '.content2',
            scaleY: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 300
          })
          .add({
            targets: '.content2 .letter',
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 300,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
            })
          observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets4.forEach(lazyLoad4)

const targets5 = document.querySelectorAll('.para_animate');

const lazyLoad5 = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {
      console.log('😍');

      if (entry.isIntersecting) {
        const img = entry.target;

        img.classList.add('para_fade');

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets5.forEach(lazyLoad5)