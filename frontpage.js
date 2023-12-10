
  // Function to download front section as an image
  
  function downloadFrontAsImage() {
    html2canvas(document.getElementById("front")).then(function(canvas) {
      // Convert canvas to image data
      var imageData = canvas.toDataURL("image/png");
      
      // Create a link element
      var downloadLink = document.createElement("a");
      downloadLink.href = imageData;
      downloadLink.download = "front_image.png";
      downloadLink.click();
    });
  }

  // Function to download back section as an image
  function downloadBackAsImage() {
    html2canvas(document.getElementById("back")).then(function(canvas) {
      // Convert canvas to image data
      var imageData = canvas.toDataURL("image/png");
      
      // Create a link element
      var downloadLink = document.createElement("a");
      downloadLink.href = imageData;
      downloadLink.download = "back_image.png";
      downloadLink.click();
    });
  }

  // Event listener for download button
  document.getElementById("downloadBtn").addEventListener("click", function() {
    // Trigger download functions for front and back sections
   
    downloadFrontAsImage();
    downloadBackAsImage();
  });