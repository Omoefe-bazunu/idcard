
// // //   // Function to download front section as an image
  
// // //   function downloadFrontAsImage() {
// // //     html2canvas(document.getElementById("front")).then(function(canvas) {
// // //       // Convert canvas to image data
// // //       var imageData = canvas.toDataURL("image/png");
      
// // //       // Create a link element
// // //       var downloadLink = document.createElement("a");
// // //       downloadLink.href = imageData;
// // //       downloadLink.download = "front_image.png";
// // //       downloadLink.click();
// // //     });
// // //   }

// // //   // Function to download back section as an image
// // //   function downloadBackAsImage() {
// // //     html2canvas(document.getElementById("back")).then(function(canvas) {
// // //       // Convert canvas to image data
// // //       var imageData = canvas.toDataURL("image/png");
      
// // //       // Create a link element
// // //       var downloadLink = document.createElement("a");
// // //       downloadLink.href = imageData;
// // //       downloadLink.download = "back_image.png";
// // //       downloadLink.click();
// // //     });
// // //   }

// // //   // Event listener for download button
// // //   document.getElementById("downloadBtn").addEventListener("click", function() {
// // //     // Trigger download functions for front and back sections
   
// // //     downloadFrontAsImage();
// // //     downloadBackAsImage();
// // //   });

  // Update elements on the front page with retrieved values
displaydata = {
    frontLogo: document.querySelector('#FrontLogo'),
    f_companyName: document.querySelector('#F-companyName'),
    f_passport: document.querySelector('#F-passport'),
    f_staffName: document.querySelector('#F-staffname'),
    f_staffposition: document.querySelector('#F-staffposition'),
    f_staffphone: document.querySelector('#F-staffphone'),
    f_staffemail: document.querySelector('#F-staffemail'),
    f_staffSignature: document.querySelector('#F-staffsignature'),
    b_certification: document.querySelector('#B-Certification'),
    b_companyName: document.querySelector('#B-CompanyName'),
    b_companyAddress: document.querySelector('#B-CompanyAddress'),
    b_companyPhoneNumber: document.querySelector('#B-CompanyPhoneNumber'),
    b_companyEmail: document.querySelector('#B-CompanyEmail'),
    b_companySignature: document.querySelector('#B-CompanySignature')
}



document.addEventListener('DOMContentLoaded', function() {
    const inputData = JSON.parse(localStorage.getItem('storedInputData'));

    if (inputData) {
        displaydata.frontLogo.innerHTML = storedInputData.companyLogo,
        displaydata.f_companyName.innerHTML = storedInputData.frontCompanyName,
        displaydata.f_passport.innerHTML = storedInputData.staffPassport,
        displaydata.f_staffName.innerHTML = storedInputData.staffName,
        displaydata.f_staffposition.innerHTML = storedInputData.staffPosition,
        displaydata.f_staffphone.innerHTML = storedInputData.staffContact,
        displaydata.f_staffemail.innerHTML = storedInputData.staffEmail,
        displaydata.f_staffSignature.innerHTML = storedInputData.staffSignature,
        displaydata.b_certification.innerHTML = storedInputData.certificationText,
        displaydata.b_companyName.innerHTML = storedInputData.backCompanyName,
        displaydata.b_companyAddress.innerHTML = storedInputData.companyAddress,
        displaydata.b_companyPhoneNumber.innerHTML = storedInputData.companyContact,
        displaydata.b_companyEmail.innerHTML = storedInputData.companyEmail,
        displaydata.b_companySignature.innetrHTML = storedInputData.companySignature
        }
    // Clear data from localStorage after displaying
    localStorage.removeItem('frontData');
    }

);


    


//code for the image input

    // document.addEventListener('DOMContentLoaded', function() {
    //     const imageContainer = document.getElementById('imageContainer');
    //     const storedImageData = localStorage.getItem('imageData');

    //     if (storedImageData) {
    //         imageContainer.style.backgroundImage = `url(${storedImageData})`;
    //     }
    // });

