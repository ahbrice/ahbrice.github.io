"use strict";
/*    JavaScript 7th Edition
      Chapter 5
     Chapter Case Project

	Project4_Brice
      Author: Aubrey Brice
      Date:   4/16/26

      Filename: lightbox.js
*/

window.addEventListener("load", function () {
  let lbImages = document.getElementById("lbImages");
  let mainImage = document.getElementById("mainImage");
  let caption = document.getElementById("caption");
  let currentIndex = 0;

  // Cycle throug photos
  let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

prevBtn.onclick = function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgFiles.length - 1;
  }
  updateMainImage();
};

nextBtn.onclick = function () {
  currentIndex++;
  if (currentIndex >= imgFiles.length) {
    currentIndex = 0;
  }
  updateMainImage();
};

  // Load thumbnails
  for (let i = 0; i < 4; i++) {
    let thumb = document.createElement("img");
    thumb.src = imgFiles[i];
    thumb.alt = imgCaptions[i];

    thumb.onclick = function () {
      currentIndex = i;
      updateMainImage();
    };

    lbImages.appendChild(thumb);
  }

  function updateMainImage() {
    mainImage.src = imgFiles[currentIndex];
    mainImage.alt = imgCaptions[currentIndex];
    caption.textContent = imgCaptions[currentIndex];
  }
});
