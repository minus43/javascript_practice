const img = document.querySelector('img');

img.addEventListener("mouseover", ()=> {
  img.src = "images/pic-6.jpg";
});

img.addEventListener("mouseout", ()=> {
  img.src = "images/pic-1.jpg";
});
