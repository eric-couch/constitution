document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".section").forEach(function (div) {
    div.addEventListener("click", function () {
      document.querySelectorAll(".section").forEach(function (otherDiv) {
        otherDiv.style.whiteSpace = "nowrap";
        otherDiv.style.overflow = "hidden";
        otherDiv.style.textOverflow = "ellipsis";
        otherDiv.style.fontSize = "6pt";
        otherDiv.style.color = "black";
        //otherDiv.style.background = "white";
      });
      this.style.whiteSpace = "normal";
      this.style.overflow = "visible";
      this.style.textOverflow = "string";
      this.style.fontSize = "12pt";
      this.style.color = "red";
      //this.style.background = "red";
    });
  });
});
