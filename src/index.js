const mainImage = document.querySelector(".product-1 img");

const selectedThumbnail = document.querySelectorAll(".product-photo");

for (let i = 0; i < selectedThumbnail.length; i++) {
  selectedThumbnail[i].addEventListener("click", executeMe);
  function executeMe() {
    const images = [
      "images/image-product-1.jpg",
      "images/image-product-3.jpg",
      "images/image-product-4.jpg",
      "images/image-product-2.jpg",
    ];

    mainImage.src = images[i];
  }
}

const plusButton = document.querySelector(".plus-btn");
const itemCount = document.querySelector(".zero-btn strong").innerText;
const minusButton = document.querySelector(".minus-btn");
let productCount = Number(itemCount);

plusButton.addEventListener("click", incrementMe);

function incrementMe() {
  itemCount.innerText = productCount++;

  document.querySelector(".zero-btn strong").innerText = productCount;
  return;
}

minusButton.addEventListener("click", decrementMe);

function decrementMe() {
  if (productCount > 0) {
    itemCount.innerText = productCount--;

    document.querySelector(".zero-btn strong").innerText = productCount;
    return;
  } else {
    return;
  }
}

const addProduct = document.querySelector(".add-to-cart");

addProduct.addEventListener("click", productProcess);

function productProcess() {
  const myCart = document.querySelector(".shopping-cart");
  if (productCount !== 0) {
    const myCartDefault = (document.querySelector(
      ".shopping-cart p"
    ).style.display = "none");
  }

  // create checkout elements

  const checkOutItem = document.createElement("div");
  const checkOutInfo = document.createElement("div");

  const checkOutImage = document.createElement("img");
  const checkOutInfoText = document.createElement("div");
  const checkOutdelete = document.createElement("i");
  const productName = document.createElement("h6");
  const priceContainer = document.createElement("div");
  const checkOutItemMultiple = document.createElement("span");
  const checkOutItemPrice = document.createElement("span");
  const checkOutItemString = document.createElement("span");
  const checkOutItemCount = document.createElement("span");
  const productTotalAmount = document.createElement("span");

  // appending element

  checkOutItem.appendChild(checkOutInfo);

  checkOutInfo.appendChild(checkOutImage);
  checkOutInfo.appendChild(checkOutInfoText);
  checkOutInfo.appendChild(checkOutdelete);
  checkOutInfoText.appendChild(productName);

  checkOutInfoText.appendChild(priceContainer);
  priceContainer.appendChild(checkOutItemMultiple);
  priceContainer.appendChild(productTotalAmount);
  checkOutItemMultiple.appendChild(checkOutItemPrice);
  checkOutItemMultiple.appendChild(checkOutItemString);
  checkOutItemMultiple.appendChild(checkOutItemCount);

  // Asigning id for styling

  checkOutItem.setAttribute("id", "my-product");
  checkOutItem.setAttribute("class", "my-product");
  checkOutInfo.setAttribute("id", "product-info");
  checkOutInfoText.setAttribute("id", "product-card");
  priceContainer.setAttribute("id", "total-amount");
  checkOutdelete.setAttribute("class", "fas fa-trash-alt");
  productTotalAmount.setAttribute("class", "final-amount");
  checkOutItemCount.setAttribute("class", "final-count");
  productTotalAmount.setAttribute("class", "final-amount");

  //set content

  const productTitle = document.querySelector(".showcase-heading");
  let productPrice = document.querySelector(".price strong").innerText;

  const itemCountNow = document.querySelector(".zero-btn strong").textContent;
  let itemCountNowNumber = Number(itemCountNow);
  let realProductPrice = productPrice.substr(1, productPrice.length - 1);
  console.log(realProductPrice);

  // check

  const checkProductname = document.querySelectorAll("#product-card h6");

  console.log(checkProductname);
  console.log(productTitle);
  if (checkProductname.length !== 0) {
    for (let p = 0; p < checkProductname.length; p++) {
      console.log(checkProductname[p].textContent === productTitle.textContent);

      if (checkProductname[p].textContent === productTitle.textContent) {
        const productTotalAmount = document.querySelector(".final-amount");
        const checkOutItemCount = document.querySelector(".final-count");

        let totalCount =
          Number(checkOutItemCount.textContent) + itemCountNowNumber;
        productTotalAmount.textContent =
          "$" + (totalCount * realProductPrice).toFixed(2);
        checkOutItemCount.textContent = totalCount;
      }
      // if (checkProductname[p].textContent !== productTitle.textContent)
      else {
        productName.textContent = productTitle.innerText;
        checkOutImage.src = mainImage.src;
        checkOutItemPrice.textContent = productPrice;
        checkOutItemString.textContent = "x ";
        checkOutItemCount.textContent = itemCountNowNumber;

        productTotalAmount.textContent =
          "$" + (realProductPrice * productCount).toFixed(2);
        myCart.appendChild(checkOutItem);
      }
    }
  } else {
    productName.textContent = productTitle.innerText;
    checkOutImage.src = mainImage.src;
    checkOutItemPrice.textContent = productPrice;
    checkOutItemString.textContent = "x ";
    checkOutItemCount.textContent = itemCountNowNumber;

    productTotalAmount.textContent =
      "$" + (realProductPrice * productCount).toFixed(2);
    myCart.appendChild(checkOutItem);
  }
}

//checkoutbutton
addProduct.addEventListener("click", () => {
  const itemInCartButton = document.querySelectorAll(".check-out");
  const cartItem = document.querySelector(".shopping-cart");

  for (let z = 0; z < itemInCartButton.length; z++) {
    itemInCartButton[z].remove();
  }

  let itemInCart = document.querySelector(".shopping-cart").lastChild;
  const checkOutbutton = document.createElement("button");
  checkOutbutton.innerText = "Checkout";
  checkOutbutton.setAttribute("class", "check-out");

  itemInCart.insertAdjacentElement("afterend", checkOutbutton);
  // console.log(cartItem.children);
  // if (cartItem.children.contains("div")) {
  // } else {
  //   itemInCartButton.classList.add("hidden");
  // }

  // check out code
  const checkPayOut = document.querySelector(".check-out");

  checkPayOut.addEventListener("click", function () {
    const overlay = document.querySelector(".over-lay");
    console.log(overlay);
    overlay.style.display = "grid";
    const payOutAmountArray = [];
    const payOutItemArray = [];
    const payOutItemCountArray = [];
    const amount = document.querySelectorAll(".final-amount");
    const itemName = document.querySelectorAll("#product-card h6");
    const itemTotal = document.querySelectorAll(".final-count");
    itemName.forEach(function (item) {
      payOutItemArray.push(item.textContent);
    });
    amount.forEach(function (item) {
      payOutAmountArray.push(item.textContent);
    });
    itemTotal.forEach(function (item) {
      payOutItemCountArray.push(item.textContent);
    });
    const checkOutTitle = document.querySelector(".checkout-title");

    const AmountPayable = document.querySelector(".amount-payable");
    const checkOutContainer = document.createElement("div");
    const checkOutContainerNames = document.createElement("div");
    const checkOutContainerCount = document.createElement("div");
    const checkOutContainerPrice = document.createElement("div");
    checkOutContainer.setAttribute("class", "pp");
    checkOutContainer.appendChild(checkOutContainerNames);
    checkOutContainer.appendChild(checkOutContainerCount);
    checkOutContainer.appendChild(checkOutContainerPrice);
    checkOutTitle.appendChild(checkOutContainer);

    payOutItemArray.forEach(function (item) {
      const nameContainer = document.createElement("p");
      nameContainer.textContent = item;
      checkOutContainerNames.appendChild(nameContainer);
    });
    payOutItemCountArray.forEach(function (item) {
      const nameContainer = document.createElement("p");
      nameContainer.textContent = item;
      checkOutContainerCount.appendChild(nameContainer);
    });
    payOutAmountArray.forEach(function (item) {
      const nameContainer = document.createElement("p");
      nameContainer.textContent = item;
      checkOutContainerPrice.appendChild(nameContainer);
    });

    let payable = 0;

    for (let q = 0; q < payOutAmountArray.length; q++) {
      const amountNumber = Number(
        payOutAmountArray[q].substr(1, payOutAmountArray[q].length - 1)
      );
      console.log(amountNumber);

      payable = payable + amountNumber;
      console.log(payable);
      AmountPayable.textContent = "$" + payable.toFixed(2);
    }

    console.log(payOutItemArray);
    console.log(payOutAmountArray);
    console.log(payOutItemCountArray);

    const payBtn = document.querySelector(".pay");
    payBtn.addEventListener("click", function () {
      checkOutTitle.removeChild(checkOutContainer);
      const clearItemsOnCart = document.querySelectorAll("#my-product div");
      clearItemsOnCart.forEach(function (item) {
        item.remove();
      });
      checkPayOut.remove();

      overlay.style.display = "none";
    });
  });
});

// Delete Items

addProduct.addEventListener("click", deleteMe);

function deleteMe() {
  const deleteCheckOutItem = document.querySelectorAll(".fa-trash-alt");
  console.log(deleteCheckOutItem);

  for (let k = 0; k < deleteCheckOutItem.length; k++) {
    deleteCheckOutItem[k].addEventListener("click", () => {
      deleteCheckOutItem[k].parentNode.parentNode.style.display = "none";
    });
  }
}

// Collections Unit
const collectionsProduct = [
  {
    productCompany: "MK20",
    productName: "Women's Elegant Smartwatch",
    description:
      "Dare to express yourself enough? With women's smart watch MK20, you will always look sophisticated and elegant! Incredibly stylish and practical, this smartwatch MK20 is a worthwhile purchase for every modern lady.",
    productImg: [
      "images/mk20watch1.jpg",
      "images/mk20watch2.jpg",
      "images/mk20watch3.jpg",
      "images/mk20watch4.jpg",
    ],
    price: "$400.00",
  },
  {
    productCompany: "Maison Margiela",
    productName: "Replica paint-splatter trainers",
    description:
      "Maison Margiela's white canvas Replica trainers are splattered with slate-blue paint, balancing the label's artistic and industrial influences.",
    productImg: [
      "images/maison.jpg",
      "images/maison2.jpg",
      "images/maison3.jpg",
      "images/maison5.jpg",
    ],
    price: "$450.99",
  },
  {
    productCompany: "Salomon",
    productName: "XT-4 Advanced mesh running trainers",
    description:
      "Embedded with Salomon’s Agile Chassis™ System, these mesh XT-4 Advanced trainers are a comfortable option for trail running that adapts to uneven surfaces.",
    productImg: [
      "images/salomon.jpg",
      "images/salomon2.jpg",
      "images/salomon3.jpg",
      "images/salomon4.jpg",
    ],
    price: "$650.00",
  },
  {
    productCompany: "TOM FORD",
    productName: "T Line camouflage-print leather cardholder",
    description: "Top of the line branded Wallet for any outfit",
    productImg: [
      "images/tom-ford1.jpg",
      "images/tom-ford4.jpg",
      "images/tom-ford5.jpg",
      "images/tomford2.jpg",
    ],
    price: "$200.00",
  },
];

const selectedCollectionProduct = document.querySelectorAll(".item-no");

for (let c = 0; c < selectedCollectionProduct.length; c++) {
  selectedCollectionProduct[c].addEventListener("click", () => {
    // let productIndex = c;
    let companyName = document.querySelector(".showcase-content span");
    let productName = document.querySelector(".showcase-heading");
    let productDescription = document.querySelector(".showcase-text");
    let productPrice = document.querySelector(".price strong");
    let oldPrice = document.querySelector(".old-price s");

    mainImage.src = collectionsProduct[c].productImg[2];
    companyName.textContent = collectionsProduct[c].productCompany;
    productName.textContent = collectionsProduct[c].productName;
    productDescription.textContent = collectionsProduct[c].description;
    productPrice.textContent = collectionsProduct[c].price;
    let realOldPrice = collectionsProduct[c].price.substr(
      1,
      collectionsProduct[c].price.length - 1
    );

    oldPrice.textContent = "$" + (realOldPrice * 2).toFixed(2);

    for (let d = 0; d < selectedThumbnail.length; d++) {
      selectedThumbnail[d].src = collectionsProduct[c].productImg[d];
      selectedThumbnail[d].addEventListener("click", function () {
        mainImage.src = selectedThumbnail[d].src;
      });
    }

    selectedCollectionProduct.forEach((item) => {
      const home = document.getElementById(item.getAttribute("data-link"));
      home.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}
