document.addEventListener('DOMContentLoaded', function() {
    const frontBtn = document.getElementById('frontBtn');
    const backBtn = document.getElementById('backBtn');

});


    frontBtn.addEventListener('click', (e) => {
    e.preventDefault();
    saveInput();
});

    backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    saveInput();
});

    const saveInput = () => {
    const companyLogo = document.querySelector('#logo').value;
    const companyName = document.querySelector('#companyName').value;
    const staffPassport = document.querySelector('#passport').value;
    const staffName = document.querySelector('#staffName').value;
    const staffPosition = document.querySelector('#staff-position').value;
    const countryCode = document.querySelector('#country-code').value;
    const staffPhoneNumber = document.querySelector('#staffNumber').value;
    const staffContact = countryCode + staffPhoneNumber;
    const staffEmail = document.querySelector('#staff-email').value;
    const staffSignature = document.querySelector('#staff-signature').value;


    //Code to retrieve the data input for the back page
    const certificationText = document.querySelector('#certificationText').value;
    const backCompanyName = document.querySelector('#company-name').value;
    const companyAddress = document.querySelector('#company-address').value;
    const backcountryCode = document.querySelector('#b-country-code').value;
    const companyPhoneNumber = document.querySelector('#companyPhoneNumber').value;
    const companyContact = backcountryCode + companyPhoneNumber;
    const companyEmail = document.querySelector('#company-email').value;
    const companySignature = document.querySelector('#company-signature').value;

    //code to store the front page input for transfer to front page
    localStorage.setItem('cLogo', companyLogo);
    localStorage.setItem('cName', companyName);
    localStorage.setItem('sPassport', staffPassport);
    localStorage.setItem('sName', staffName);
    localStorage.setItem('sPosition', staffPosition);
    localStorage.setItem('sContact', staffContact);
    localStorage.setItem('sEmail', staffEmail);
    localStorage.setItem('sSignature', staffSignature);



    //code to store the front page input for transfer to front page
    localStorage.setItem('cText', certificationText);
    localStorage.setItem('bcName', backCompanyName);
    localStorage.setItem('cAddress', companyAddress);
    localStorage.setItem('cContact', companyContact);
    localStorage.setItem('cEmail', companyEmail);
    localStorage.setItem('cSignature', companySignature);

    window.location.href = 'index.html';
};




// backBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     const certificationText = document.querySelector('#certificationText').value;
//     const backCompanyName = document.querySelector('#company-name').value;
//     const companyAddress = document.querySelector('#company-address').value;
//     const backcountryCode = document.querySelector('#b-country-code').value;
//     const companyPhoneNumber = document.querySelector('#companyPhoneNumber').value;
//     const companyContact = backcountryCode + companyPhoneNumber;
//     const companyEmail = document.querySelector('#company-email').value;
//     const companySignature = document.querySelector('#company-signature').value;


//     //code to store the front page input for transfer to front page
//     localStorage.setItem('cText', certificationText);
//     localStorage.setItem('bcName', backCompanyName);
//     localStorage.setItem('cAddress', companyAddress);
//     localStorage.setItem('cContact', companyContact);
//     localStorage.setItem('cEmail', companyEmail);
//     localStorage.setItem('cSignature', companySignature);

//     window.location.href = 'index.html';
//     // localStorage.setItem('cName', companyName);
//     // window.location.href = 'index.html';
// });
