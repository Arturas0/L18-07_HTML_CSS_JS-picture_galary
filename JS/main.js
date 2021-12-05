var mainImage = document.querySelector("#main-imageId");
var secondaryImage = document.querySelectorAll(".secondary-image");

secondaryImage.forEach(function (a) {
    a.addEventListener("click", function (e) {
        var mainImageUrl = mainImage.getAttribute("src");
        var mainImageAlt = mainImage.getAttribute("alt");
        var currentCaption = e.target.alt;
        var currentImageSrc = e.target.src;
        var currentImageLongDesc = e.target.longDesc;

        mainImage.setAttribute("src", currentImageSrc);
        mainImage.setAttribute("alt", currentCaption);
        mainImage.setAttribute("longDesc", currentImageLongDesc);
        var figcaption = document.getElementsByTagName("figcaption")[0];
        figcaption.innerHTML = currentCaption;
        var author = document.getElementById("author");
        var refreshAuthor = author.setAttribute("href", currentImageLongDesc)

        //pakeičiame paspausto paveikslo url ir alt parametrus į pagrindinio paveikslo parametrus
        e.target.src = mainImageUrl;
        e.target.alt = mainImageAlt;
    });
});