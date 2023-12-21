
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

const downloadButton = document.getElementById("downloadBtn");
const front = document.getElementById("front");
const backdownloadButton = document.getElementById("backdownloadBtn");
const back = document.getElementById("back");

downloadButton.addEventListener("click", () => {
    html2canvas(front, {
      allowTaint: true,
      useCORS: true,
      letterRendering: true,
      scale: 2, // Increase resolution by 2x
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "downloaded_image.jpg";
      link.href = canvas.toDataURL("image/jpeg");
      link.click();
    });
  });

  backdownloadButton.addEventListener("click", () => {
    html2canvas(back, {
      allowTaint: true,
      useCORS: true,
      letterRendering: true,
      scale: 2, // Increase resolution by 2x
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "downloaded_image.jpg";
      link.href = canvas.toDataURL("image/jpeg");
      link.click();
    });
  });


