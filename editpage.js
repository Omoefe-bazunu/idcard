

document.addEventListener('DOMContentLoaded', function() {
    const frontBtn = document.getElementById('frontBtn');

    frontBtn.addEventListener('click', function(event) {
        event.preventDefault();

            // Get Front page inputs
        const companyLogo = document.querySelector('#logo').value;
        const frontCompanyName = document.querySelector('#companyName').value;
        const staffPassport = document.querySelector('#passport').value;
        const staffName = document.querySelector('#staffName').value;
        const staffPosition = document.querySelector('#staff-position').value;
        const countryCode = document.querySelector('#country-code').value;
        const staffPhoneNumber = document.querySelector('#staffNumber').value;
        const staffContact = countryCode + staffPhoneNumber;
        const staffEmail = document.querySelector('#staff-email').value;
        const staffSignature = document.querySelector('#staff-signature').value;
        const certificationText = document.querySelector('#certificationText').value;
        const backCompanyName = document.querySelector('#company-name').value;
        const companyAddress = document.querySelector('#company-address').value;
        const backcountryCode = document.querySelector('#b-country-code').value;
        const companyPhoneNumber = document.querySelector('#companyPhoneNumber').value;
        const companyContact = backcountryCode + companyPhoneNumber;
        const companyEmail = document.querySelector('#company-email').value;
        const companySignature = document.querySelector('#company-signature').value;

        const storedInputData = {
        companyLogo: companyLogo,          
        frontCompanyName: frontCompanyName,
        staffPassport: staffPassport,
        staffName: staffName,
        staffPosition: staffPosition,
        staffContact: staffContact,
        staffEmail: staffEmail,
        staffSignature: staffSignature,
        certificationText: certificationText,
        backCompanyName: backCompanyName,
        companyAddress: companyAddress,
        companyContact: companyContact,
        companyEmail: companyEmail,
        companySignature: companySignature
        };

        localStorage.setItem('storedInputData', JSON.stringify(storedInputData));
        window.location.href = 'index.html';
    });
});

    
//code for the image inputs
// document.addEventListener('DOMContentLoaded', function() {
//     const imageInput = document.getElementById('imageInput');

//     imageInput.addEventListener('change', function(event) {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(event) {
//                 const imageData = event.target.result;
//                 localStorage.setItem('imageData', imageData);
//             };
//             reader.readAsDataURL(file);
//         }
//     });
// });

