// This flag is declared to check whether number of times 'addImagesToCarousel' funnction is run. If it is the first time, active class should be added to the dots and carousel images
let flag = 0;

// List of images to be included in carousel. Hardcoded
let carouselImageData = [
  {
    name: 1,
    projectName: "AIS Bungalows",
    url:
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1576493911/HOME_PAGE/01_AIS_Bungalows_b8odz8.jpg"
  },
  {
    name: 2,
    projectName: "AIS Bungalows",
    url:
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1576493911/HOME_PAGE/02_AIS_Bungalows_puzkkg.jpg"
  },
  {
    name: 3,
    projectName: "The Address Club House",
    url:
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1576494093/HOME_PAGE/03_The_Address_Club_House-min_n6z5mj.jpg"
  },
  {
    name: 4,
    projectName: "SSD Mixed Use Building",
    url:
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1576494131/HOME_PAGE/04_SDD_Mixed_Use_Bldg-min_p8o28m.jpg"
  },
  {
    name: 5,
    projectName: "KBR Siri Orchid",
    url:
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1576494530/HOME_PAGE/05_KBR_Siri_Orchid_p1r9pi.jpg"
  },
  {
    name: 6,
    projectName: "Tejo Murthy Appartments",
    url:
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1576493910/HOME_PAGE/06_Tejo_Murthy_Apartments_yxier1.jpg"
  },
  {
    name: 7,
    projectName: "Kindergarten School",
    url:
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1576493911/HOME_PAGE/07_Kindergarten_School_q5m9jn.jpg"
  },
  {
    name: 8,
    projectName: "KBR Anu Orchid",
    url:
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1576494228/HOME_PAGE/08_KBR_Anu_Orchid-min_ykxn6g.jpg"
  },
  {
    name: 9,
    projectName: "Duplex Villas",
    url:
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1576493910/HOME_PAGE/09_Duplex_Villas_cbjlsj.jpg"
  },
  {
    name: 10,
    projectName: "KBR Amulya Orchid",
    url:
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1576494250/HOME_PAGE/10_KBR_Amulya_Orchid_spsea8.jpg"
  }
];

// This function adds images to the carouselImageData. This is called in the array.map function
addImagesToCarousel = object => {
  if (flag == false) {
    // To increase the carousel dots
    $("#carouselDots").append(
      `<li
          data-target="#carouselExampleIndicators"
          data-slide-to="${object.name}"
          class="active"
        ></li>`
    );

    // To increase the carousel image
    $("#carousel-inner").append(
      `<div class="carousel-item active">
      <img
        class="d-block w-100"
        src="${object.url}"
        alt="Slide"
      />
    </div>`
    );
    flag = flag + 1;
  } else {
    // To increase the carousel dots
    $("#carouselDots").append(
      `<li data-target="#carouselExampleIndicators" data-slide-to="${object.name}"></li>`
    );

    // To increase the carousel image
    $("#carousel-inner").append(
      `<div class="carousel-item">
      <img
        class="d-block w-100"
        src="${object.url}"
        alt="Slide"
      />
    </div>`
    );
  }
};

document.addEventListener("keypress", event => {
  if (event.keyCode === 39) {
    $("#nextButton").click();
  } else if (event.keyCode === 37) {
    $("#previousButton").click();
  }
});

// Each element from the 'carouselImageData' array is mapped and the 'addImagesToCarousel'function is performed
carouselImageData.map(addImagesToCarousel);
