
document.addEventListener('DOMContentLoaded', function() {
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
    const companySig = localStorage.getItem('cSignature');

    alert("HI, CLASS" + " " + certText + " " + bcompanyName + " " + companyA 
    + " " + companyC + " " + companyE + " " + companySig);

});