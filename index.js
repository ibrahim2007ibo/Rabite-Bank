
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
} 
function search(){

  }
  inputsrc.onclick=function(){
    input.style.width="100%"
    input.style.padding="18px"
  
  
  }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

 //When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target ==input) {
    inputsrc.style.width = "0";

  }  else   {
    inputsrc.style.width = "100%";
  }
}
$(document).ready(function () {
  $("#currency2").hide()
  $("#icon-off").hide()


  $("#konver1").click(function () {
    $("#currency2").show()
    $("#currency1").hide()

  })
  $("#konver2").click(function () {
    $("#currency1").show()
    $("#currency2").hide()

  })
  $("#icon-on").click(function () {
    $("#icon-on").hide()
    $("#icon-off").show()

  })
  $("#icon-off").click(function () {
    $("#icon-off").hide()
    $("#icon-on").show()

  })
})


  function calculateAnnuity(month = 6, interest = 14, amount = 5000) {
    const i = interest / 100 / 12;
    let pow = i + 1;
    const n = month;
    pow = Math.pow(pow, -n);
    const annuity = (i / (1 - pow)) * amount;
    return annuity;
  }


$(function () {

  let $document = $(document);
  let selector = '[data-rangeslider]';
  let $element = $(selector);

  // For ie8 support
  let textContent = ('textContent' in document) ? 'textContent' : 'innerText';
  
  function setValue(element,value){
      let input = element.parentElement.firstElementChild
      input.value = value
      let kreditmebleg = document.getElementById("kreditmebleg").value
      let ay = document.getElementById("ay").value
      let faiz = document.getElementById("faiz").value
      let ayliq = document.getElementById("ayliq")
      let annuity = calculateAnnuity(ay,faiz,kreditmebleg)
      ayliq.innerHTML = annuity.toFixed(2)
  }

  // Example functionality to demonstrate a value feedback
  function valueOutput(element) {
      let value = element.value;
      setValue(element,value)
  }

  $document.on('input', 'input[type="range"], ' + selector, function (e) {
      let deyer = e.target
      valueOutput(deyer);
  });



  // Basic rangeslider initialization
  $element.rangeslider({

      // Deactivate the feature detection
      polyfill: false,


      // Callback function
      onInit: function () {
          valueOutput(this.$element[0]);
      },

      // Callback function
      onSlide: function (position, value) {
          valueOutput(value)
      },

  });

});

let say =document.getElementById("say")
let deyis =document.getElementById("deyis")
let buy =document.getElementById("buy")
let select1=document.getElementById("select1")
let select2=document.getElementById("select2")


function change(){
  let x
  x = say.value
  say.value=buy.value
  buy.value=x
  let y
  y = select1.value
  select1.value=select2.value
  select2.value=y
}
