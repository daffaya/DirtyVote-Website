document.addEventListener("DOMContentLoaded", function () {
  var shareBtn = document.getElementById("shareBtn");
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  shareBtn.addEventListener("click", function () {
    var urlToCopy = "https://www.youtube.com/watch?v=RRgLZ66NCmE";
    var tempInput = document.createElement("input");
    tempInput.value = urlToCopy;

    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    modal.style.display = "block";
  });

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
