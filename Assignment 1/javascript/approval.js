$(document).ready(function(){
    
    $("#cInfo").html(`Company Name: ${localStorage.getItem("companyName")}`);
    $("#borwAmt_payment").html(`Borrow Amount: ${localStorage.getItem("borrowAmt")} <br />
                                Payment Terms: ${localStorage.getItem("payTerms")}`);
    let interest = (parseFloat((localStorage.getItem("borrowAmt")) * parseFloat((localStorage.getItem("payTerms")) / 12)))  * 0.03;
    $("#interest").html(`Interest: $ ${interest}`);
    let payment = parseFloat(localStorage.getItem("borrowAmt")) + interest;
    $("#payment").html(`Payment: $${payment}`);
    let profit = payment - parseFloat(localStorage.getItem("borrowAmt"));
    $("#profit").html(`Profit: $${profit}`);
    let decision = document.getElementById("decision").value;

    function upload()
    {
        localStorage.setItem("Interest", interest.value);
        localStorage.setItem("Payment", payment.value);
        localStorage.setItem("profit", profit.value);
        localStorage.setItem("decision", decision);
    }
});