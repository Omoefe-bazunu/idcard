
document.addEventListener('DOMContentLoaded', function() {
    //code to retrieve the data from the localstorage
    const companyL = localStorage.getItem('cLogo');
    const companyN = localStorage.getItem('cName');
    const staffP = localStorage.getItem('sPassport');
    const staffName = localStorage.getItem('sName');
    const staffPosition = localStorage.getItem('sPosition');
    const staffContact = localStorage.getItem('sContact');
    const staffEmail = localStorage.getItem('sEmail');
    const staffSig = localStorage.getItem('sSignature');
    const certText = localStorage.getItem('cText');
    const bcompanyName = localStorage.getItem('bcName');
    const companyA = localStorage.getItem('cAddress');
    const companyC = localStorage.getItem('cContact');
    const companyE = localStorage.getItem('cEmail');
    const companySig = localStorage.getItem('companySig');

    //code to access the innerhtml of the front page
    const frontLogo = document.querySelector('#FrontLogo');

    if (companyL) {
        frontLogo.style.backgroundImage = `url(${companyL})`;
    }
    const frontcompanyName = document.querySelector('#F-companyName').innerHTML = companyN;
    const frontPassport = document.querySelector('#F-passport');
    if (staffP) {
        frontPassport.style.backgroundImage = `url(${staffP})`;
    }
    const frontstaffName = document.querySelector('#F-staffname').innerHTML = staffName;
    const frontStaffPosition = document.querySelector('#F-staffposition').innerHTML = staffPosition;
    const frontStaffPhone = document.querySelector('#F-staffphone').innerHTML = staffContact;
    const frontStaffEmail = document.querySelector('#F-staffemail').innerHMTL = staffEmail;
    const frontStaffSignature = document.querySelector('#F-staffsignature');
    if (staffSig) {
        frontStaffSignature.style.backgroundImage = `url(${staffSig})`;
    }
    const backCertification = document.querySelector('#B-Certification').innerHTML = certText;
    const backCompanyName = document.querySelector('#B-CompanyName').innerHTML = bcompanyName;
    const backCompanyAddress = document.querySelector('#B-CompanyAddress').innerHTML;
    const backCompanyPhoneNumber = document.querySelector('#B-CompanyPhoneNumber').innerHTML = companyC;
    const bEmail = document.querySelector('#B-CompanyEmail').innerHTML = companyE;
    const backCompanySignature = document.querySelector('#B-CompanySignature');
    if (companySig) {
        backCompanySignature.style.backgroundImage = `url(${companySig})`;
    }

});


 
// //DOWNLOAD CODE

// // Add an event listener to the download button for the front div
// document.getElementById('downloadBtn').addEventListener('click', function() {
//     // Call the function to convert and download the front div as an image
//     downloadAsImage('front');
// });

// // // Add an event listener to the download button for the back div
// // document.getElementById('downloadBackAsImage').addEventListener('click', function() {
// //     // Call the function to convert and download the back div as an image
// //     downloadAsImage('back');
// // });

// // Function to convert and download the div content as an image
// function downloadAsImage(divId) {
//     const frontPage = document.getElementById('front');

//     html2canvas(frontPage).then(function(canvas) {
//         // Convert canvas to image
//         const image = canvas.toDataURL('image/png'); // Change format to 'image/jpeg' for JPEG format

//         // Create a temporary link element
//         const downloadLink = document.createElement('a');
//         downloadLink.href = image;
//         downloadLink.download = `${divId}_image.png`; // Change extension to '.jpg' for JPEG format

//         // Append the link to the body
//         document.body.appendChild(downloadLink);

//         // Trigger the download
//         downloadLink.click();

//         // Remove the temporary link from the DOM
//         document.body.removeChild(downloadLink);
//     });
// }
