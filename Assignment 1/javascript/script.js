$(document).ready(function(){

    document.form.onsubmit = function () {
        return formDetail();
    }
    $("#header").html(`Assignment 1 / Sapna Sapna / 991587033`);
    $("#footer").html(`SapSapna / Davis Campus`);
    
    localStorage.setItem('user', JSON.stringify({
        "compantNames" : document.getElementById("companyName").value,
        "owner": document.getElementById("owner").value,
        "email":document.getElementById("email").value,
        "phoneNumber":document.getElementById("phoneNumber").value,
        "annualSale":document.getElementById("annualSale").value,
        "borrowAmt": document.getElementById("borrowAmt").value,
        "payTerms":  document.getElementById("payTerms").value }));
    

});