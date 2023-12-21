document.addEventListener('DOMContentLoaded', function() {
    const frontBtn = document.getElementById('frontBtn');
    const backBtn = document.getElementById('backBtn');
    
    const companyLogo = document.querySelector('#logo');
    companyLogo.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const cLogo = event.target.result;
                localStorage.setItem('cLogo', cLogo);
            };
            reader.readAsDataURL(file);
        }
    });

    const staffPassport = document.querySelector('#passport');
    staffPassport.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const sPassport = event.target.result;
                localStorage.setItem('sPassport', sPassport);
            };
            reader.readAsDataURL(file);
        }
    });

    const staffSignature = document.querySelector('#staff-signature');
    staffSignature.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const sSignature = event.target.result;
                localStorage.setItem('sSignature', sSignature);
            };
            reader.readAsDataURL(file);
        }
    });

    const companySignature = document.querySelector('#company-signature');
    companySignature.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const companySig = event.target.result;
                localStorage.setItem('companySig', companySig);
            };
            reader.readAsDataURL(file);
        }
    });

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

    const companyName = document.querySelector('#companyName').value;
    const staffName = document.querySelector('#staffName').value;
    const staffPosition = document.querySelector('#staff-position').value;
    const countryCode = document.querySelector('#country-code').value;
    const staffPhoneNumber = document.querySelector('#staffNumber').value;
    const staffContact = countryCode + staffPhoneNumber;
    const staffEmail = document.querySelector('#staff-email').value;
    
     //Code to retrieve the data input for the back page
    const certificationText = document.querySelector('#certificationText').value;
    const backCompanyName = document.querySelector('#company-name').value;
    const companyAddress = document.querySelector('#company-address').value;
    const backcountryCode = document.querySelector('#b-country-code').value;
    const companyPhoneNumber = document.querySelector('#companyPhoneNumber').value;
    const companyContact = backcountryCode + companyPhoneNumber;
    const companyEmail = document.querySelector('#company-email').value;
    


    //code to store the front page input for transfer to front page
    
    localStorage.setItem('cName', companyName);
    localStorage.setItem('sName', staffName);
    localStorage.setItem('sPosition', staffPosition);
    localStorage.setItem('sContact', staffContact);
    localStorage.setItem('sEmail', staffEmail);

    //code to store the front page input for transfer to front page
    localStorage.setItem('cText', certificationText);
    localStorage.setItem('bcName', backCompanyName);
    localStorage.setItem('cAddress', companyAddress);
    localStorage.setItem('cContact', companyContact);
    localStorage.setItem('cEmail', companyEmail);

    window.location.href = 'index.html';
};


