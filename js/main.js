//-----------------------------------------------
//Start: get value helper function
//-----------------------------------------------
function getValue(id)
{
    let getValue = document.getElementById(id).value;
    getValue = parseInt(getValue);
    return getValue;
}
//-----------------------------------------------
//End: get value helper function
//-----------------------------------------------

//-----------------------------------------------
//Start: set value helper function
//-----------------------------------------------
function setValue(id, value){
    document.getElementById(id).value = value;
}
//-----------------------------------------------
//End: set value helper function
//-----------------------------------------------

//-----------------------------------------------
//Start: get text (basically this use for get cost)
//-----------------------------------------------
function getText(id)
{
    var getTxt = document.getElementById(id).innerText;
    getTxt = parseFloat(getTxt);
    return getTxt;
}
//-----------------------------------------------
//End: get text (basically this use for get cost)
//-----------------------------------------------

//-----------------------------------------------
//Start: Set text helper function
//-----------------------------------------------
function setText(id, text){
    document.getElementById(id).innerText = text;
}
//-----------------------------------------------
//End: Set text helper function
//-----------------------------------------------

//-----------------------------------------------
//Start: calculation total cost
//-----------------------------------------------
function calculateTotalCost(quantityFirstClass, quantityEconomy){

    var subTotalCost = (quantityFirstClass * 150) + (quantityEconomy * 100);
    var tax = (subTotalCost / 100) * 10;
    var totalCost = subTotalCost + tax;

    setText("sub-total-cost", subTotalCost);
    setText("tax", tax);
    setText("total-cost", totalCost);

}
//-----------------------------------------------
//End: calculation total cost
//-----------------------------------------------

//-----------------------------------------------
//Start: Onchange first class quantity by manually
//-----------------------------------------------
document.getElementById("quantity-first-class").addEventListener("change", function(){
    let quanityIncreaseValue = getValue("quantity-first-class");
    let quantityEconomy = getValue("quantity-economy");
    if(quanityIncreaseValue >= 0){
        calculateTotalCost(quanityIncreaseValue, quantityEconomy);
    }else{
        alert('Invalid Quanitity. Quanity should be more than 0')
        setValue('quantity-first-class', 0);
        quanityIncreaseValue = getValue("quantity-first-class");
        calculateTotalCost(quanityIncreaseValue, quantityEconomy);
    }
})
//-----------------------------------------------
//End: Onchange first class quantity by manually
//-----------------------------------------------

//-----------------------------------------------
//Start: Onchange economy quantity by manually
//-----------------------------------------------
document.getElementById("quantity-economy").addEventListener("change", function(){
    let quanityFirstClass = getValue("quantity-first-class");
    let quantityEconomy = getValue("quantity-economy");
    if(quantityEconomy >= 0){
        calculateTotalCost(quanityFirstClass, quantityEconomy);
    }else{
        alert('Invalid Quanitity. Quanity should be more than 0')
        setValue('quantity-economy', 0);
        quantityEconomy = getValue("quantity-economy")
        calculateTotalCost(quanityFirstClass, quantityEconomy);
    }
})
//-----------------------------------------------
//End: Onchange economy quantity by manually
//-----------------------------------------------

//-----------------------------------------------
//Start: Increasing first class quantity
//-----------------------------------------------
document.getElementById("first-class-increase").addEventListener("click", function(){
    let quanityIncreaseValue = getValue("quantity-first-class");
    let quantityFirstClass = quanityIncreaseValue + 1;
    setValue("quantity-first-class", quantityFirstClass);

    let quantityEconomy = getValue("quantity-economy");
    calculateTotalCost(quantityFirstClass, quantityEconomy);
})
//-----------------------------------------------
//End: Increasing first class quantity
//-----------------------------------------------


//-----------------------------------------------
//Start: Decrease first class quantity
//-----------------------------------------------
document.getElementById("first-class-decrease").addEventListener("click", function(){
    let quanityDecreaseValue = getValue("quantity-first-class");

    if(quanityDecreaseValue > 0){
        let quantityFirstClass = quanityDecreaseValue - 1;
        setValue("quantity-first-class", quantityFirstClass);

        let quantityEconomy = getValue("quantity-economy");
        calculateTotalCost(quantityFirstClass, quantityEconomy);
    }
    
    
})
//-----------------------------------------------
//End: Decrease first class quantity
//-----------------------------------------------


//-----------------------------------------------
//Start: Increase economy quantity
//-----------------------------------------------
document.getElementById("economy-increase").addEventListener("click", function(){
    let quantityIncreaseValue = getValue("quantity-economy");
    let quantityEconomy = quantityIncreaseValue + 1;
    setValue("quantity-economy", quantityEconomy);

    let quantityFirstClass = getValue("quantity-first-class");
    calculateTotalCost(quantityFirstClass, quantityEconomy);
})
//-----------------------------------------------
//End: Increase economy quantity
//-----------------------------------------------

//-----------------------------------------------
//Start: Decrease economy quantity
//-----------------------------------------------
document.getElementById("economy-decrease").addEventListener("click", function(){
    let quantityDecreaseValue = getValue("quantity-economy");
    
    if(quantityDecreaseValue > 0)
    {
        let quantityEconomy = quantityDecreaseValue - 1;
        setValue("quantity-economy",quantityEconomy);

        let quantityFirstClass = getValue("quantity-first-class");
        calculateTotalCost(quantityFirstClass, quantityEconomy);
    }
    
})
//-----------------------------------------------
//End: Decrease economy quantity
//-----------------------------------------------


//-----------------------------------------------
//Start: Book now
//-----------------------------------------------
document.getElementById("submit-book-now").addEventListener("click",function(e){
    e.preventDefault();
    if((getValue("quantity-first-class") == 0 && getValue("quantity-economy") == 0) || getValue("from") == "" || getValue("to") == "" || getValue("departure") == "")
    {
        alert("All field must require");
    }
    else{
        
        var fromWhere = document.getElementById("from").value;
        var whereTo = document.getElementById("to").value;
        var FirstClassSit = getValue("quantity-first-class");
        var economySit = getValue("quantity-economy");
        var total = '$'+document.getElementById("total-cost").innerText;
        var departure = document.getElementById("departure").value;
        var returns = document.getElementById("return").value;
       
        document.getElementById('booking-form').style.display='none';
        document.getElementById('bookingConfirm').style.display='block';

        ///set ticket information
        setText("fromWhere", fromWhere);
        setText("whereTo", whereTo);
        setText("total", total);
        setText("firstClassSit", FirstClassSit);
        setText("economySit", economySit);
        setText("departure-details", departure);
        setText("return-details", returns);
        
        
    }
})
//-----------------------------------------------
//End: Book now
//-----------------------------------------------