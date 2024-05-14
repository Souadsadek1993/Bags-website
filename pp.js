var allProducts = document.querySelectorAll(".products .card");

var div = document.querySelector("#div1");

var btn = document.querySelector("#btn1");

var pricecontent = document.querySelector("#totalPrice");
var totalPrice = 0;

allProducts.forEach(function (item) {
  item.onclick = function () {
    totalPrice += parseInt(item.getAttribute("price"));
    div.innerHTML += item.textContent + " <br>";

    if (div.innerHTML != "") {
      btn.style.display = "block";
    }
  };
});

btn.onclick = function () {
  pricecontent.innerHTML = totalPrice;
};
