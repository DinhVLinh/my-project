function handleSlider() {
  const wrapperElement = document.querySelector(".sliderWrapper");
  const navItemList = document.querySelectorAll(".navBottom__item");

  navItemList.forEach((navItem, index) => {
    navItem.addEventListener("click", () => {
      wrapperElement.style.transform = `translateX(${-100 * index}vw)`;
    });
  });
}

function handleProduct() {
  const products = [
    {
      id: 1,
      title: "Air Force",
      price: 199,
      colors: [
        {
          code: "black",
          img: "./access/img/air.png",
        },

        {
          code: "darkblue",
          img: "./access/img/air2.png",
        },
      ],
    },

    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./access/img/jordan.png",
        },

        {
          code: "green",
          img: "./access/img/jordan2.png",
        },
      ],
    },

    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./access/img/blazer.png",
        },

        {
          code: "green",
          img: "./access/img/blazer2.png",
        },
      ],
    },

    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./access/img/crater.png",
        },

        {
          code: "lightgray",
          img: "./access/img/crater2.png",
        },
      ],
    },

    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./access/img/hippie.png",
        },

        {
          code: "black",
          img: "./access/img/hippie2.png",
        },
      ],
    },
  ];

  const wrapperElement = document.querySelector(".sliderWrapper");
  const navItemList = document.querySelectorAll(".navBottom__item");
  let choosenProduct = products[0];
  const currentImgProduct = document.querySelector(".product__img");
  const currentTitleProduct = document.querySelector(".product__title");
  const currentPriceProduct = document.querySelector(".product__price");
  const currentColorsProduct = document.querySelectorAll(".color");
  const currentSizesProduct = document.querySelectorAll(".size");

  navItemList.forEach((navItem, index) => {
    navItem.addEventListener("click", () => {
      wrapperElement.style.transform = `translateX(${-100 * index}vw)`;

      choosenProduct = products[index];
      currentTitleProduct.textContent = choosenProduct.title;
      currentPriceProduct.textContent = `$${choosenProduct.price}`;
      currentImgProduct.src = choosenProduct.colors[0].img;

      // assing new color
      currentColorsProduct.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;

        // change color
        color.addEventListener("click", () => {
          currentImgProduct.src = choosenProduct.colors[index].img;
        });
      });
    });
  });

  // handle size
  currentSizesProduct.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentSizesProduct.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });
}

function showModal(){
    const modal = document.querySelector('.modal')
    const buyButton = document.querySelector('.product__buy')
    if(buyButton){
        buyButton.addEventListener('click', () => {
            modal.hidden = false
        })
    }
}
function hiddenModal(){
    const modal = document.querySelector('.modal')
    const overlay = document.querySelector('.modal__overlay')
    const closeButton = document.querySelector('.payment__close')
    const checkOutButton = document.querySelector('.payment__checkout')
    let buttonList = []
    buttonList.push(overlay,checkOutButton,closeButton)

    for(const button of buttonList){
        if(button){
            button.addEventListener('click', () => {
                modal.hidden = true
            })
        }
    }
}

(() => {
  handleSlider();
  handleProduct();
  showModal()
  hiddenModal()
})();
