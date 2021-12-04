circularText("Développeur Front-End", 160, 0,);

function circularText(txt, radius, classIndex) {
  txt = txt.split(""),
  classIndex = document.getElementsByClassName("test")[classIndex];

  var deg = 230 / txt.length,
  origin = -120;

  txt.forEach((ea) => {
    ea = `<h1 style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</h1>`;
    classIndex.innerHTML += ea;
    origin += deg;
  })
}

circularh1("Développeur Front-End", 350, 0,);

function circularh1(txt, radius, classIndex) {
  txt = txt.split(""),
  classIndex = document.getElementsByClassName("test2")[classIndex];

  var deg = 200 / txt.length,
  origin = -150;

  txt.forEach((ea) => {
    ea = `<h1 style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</h1>`;
    classIndex.innerHTML += ea;
    origin += deg;
  })
}
circularh2("Développeur Front-End", 210, 0,);

function circularh2(txt, radius, classIndex) {
  txt = txt.split(""),
  classIndex = document.getElementsByClassName("test3")[classIndex];

  var deg = 230 / txt.length,
  origin = -150;

  txt.forEach((ea) => {
    ea = `<h1 style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</h1>`;
    classIndex.innerHTML += ea;
    origin += deg;
  })
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});