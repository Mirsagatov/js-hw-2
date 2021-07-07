var elParagraph = document.querySelector('.paragraph');
var dollarCurrency =  9433.34;
var euroCurrency = 10354.03;

var planeTicketdollar = 500;
var hotelFeedollar = 250;
var planeTicketeuro = 120;

alert(`\n                                      ------Welcome------\n\nIn this short program, you can find out whether you have enough money for travel or not.`);

alert(`\nYou can see the following basic payments:\n\n- Round-trip air ticket - $ 500\n- Hotel fee (for the full duration of the trip) - $ 250\n- For museums and entertainment venues - 120 euros`);

alert(`\nCurrency exchanges:\n\n$ 1 = 9433.34 soums \n1 euro = 10354.03 soums`);

var userName = String(prompt(`\n\nPlease enter your Name:`));
var userMoney = Number(prompt(`\n\n${userName} enter the amount of money you have available for trip:`));
 
totalFee = ((planeTicketdollar+hotelFeedollar)*dollarCurrency)+(planeTicketdollar*euroCurrency);

if(userMoney>=totalFee) {
    if(userMoney==totalFee) {
        elParagraph.textContent = `Let's go ${userName}.\nYou have enough money\n\nThank you for using our service`;
        console.log(elParagraph.textContent);
    }
    else {
        extraMoney = userMoney-totalFee;
        elParagraph.textContent = `Let's go ${userName}.\n You have extra ${extraMoney} soums\n\nThank you for using our service`;
        console.log(elParagraph.textContent);
    }
}
else {
    money = totalFee-userMoney;
    elParagraph.textContent = `${userName}, you have to be patient.\n You need ${money} soums\n\nThank you for using our service`
    console.log(elParagraph.textContent);
}
