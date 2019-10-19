let elements = [];
let isActive = ((el) => {
  console.log();
  let element = document.getElementById(el);

  if(!element.classList.contains('active-element')){

    console.log('do you get here???');
    element.classList.add("active-element");
    console.log("Before Push",elements);
    elements.push(el);
    console.log("After Push",elements);
    if (element.classList.contains('active-element')){
      console.log('Query', document.querySelectorAll('.save-music-options'));
      document.getElementById('save-music-options').style.display="flex";

      console.log("After display flex", elements);
    }
  }
  else {
    console.log('wot u do???');
    // element.classList.remove("active-element");
    console.log("Before removeClass", elements);
    element.className = element.className.replace(new RegExp('(?:^|\\s)'+ 'active-element' + '(?:\\s|$)'), ' ');
    console.log("Before Splice", elements);
    // elements.splice(elements.indexOf(el), 1 );
    let index = elements.indexOf(el);
    if (index !== -1) elements.splice(index, 1);
    console.log("After Splice", elements);
    if (!element.classList.contains('active-element')){
      if (elements.length === 0) {
        document.getElementById('save-music-options').style.display = "none";
      }
    }
  }


});

function openFestivals(evt, type)  {
  let i, festivalContainer, festivalTab;
  festivalContainer = document.getElementsByClassName("festival-container");
  for (i = 0; i < festivalContainer.length; i++) {
    festivalContainer[i].style.display = "none";
  }
  festivalTab = document.getElementsByClassName("festival-tab");
  for (i = 0; i < festivalTab.length; i++) {
    festivalTab[i].className = festivalTab[i].className.replace(" active", "");
  }
  document.getElementById(type).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Get the modal
let modal = document.getElementById('myModal');
let modal2 = document.getElementById('joinGroup');

// Get the button that opens the modal
let btn = document.getElementById("modal-button");
let btn2 = document.getElementById("join-group");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let span2 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
if(btn) {
  btn.onclick = function() {
    modal.style.display = "block";
  };
}
if(btn2) {
  btn2.onclick = function() {
    modal2.style.display = "block";
  };
}

if(span2){
  span2.onclick = function() {
    modal2.style.display = "none";
  };
}

// When the user clicks on <span> (x), close the modal
if(span){
  span.onclick = function() {
    modal.style.display = "none";
  };
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};


let coll = document.getElementsByClassName("group");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    let group = this.firstElementChild;
    let icon = group.firstElementChild;

    if (content.style.display === "block") {
      content.style.display = "none";
      icon.src="../Media/Icons/ArrowUp.svg";
    } else {
      content.style.display = "block";
      icon.src="../Media/Icons/ArrowDown.svg";
    }
  });
}
//
// let remove = document.getElementsByClassName("group-done");
// remove.addEventListener("click", function() {
//   alert("(I will add a safety check.) Removed");
// });

