function donationMethodOne() {
    document.getElementById("giftCardForm").style.display="block";
    document.getElementById("basketForm").style.display="none"; 
}

document.getElementById('giftCard').onclick = donationMethodOne;

function donationMethodTwo() {
    document.getElementById("basketForm").style.display="block";
    document.getElementById("giftCardForm").style.display="none";
}
document.getElementById('basket').onclick = donationMethodTwo;
function doSomething(){
    var testvar; 
    //alert('hey');
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        //alert(url);
        chrome.tabs.query(
            { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
            function(tabs) {
              const { id: tabId } = tabs[0].url;
              if (url=="https://www.amazon.ca/gp/cart/view.html?ref_=nav_cart"){
                  //alert("true");
                let code = "document.getElementsByClassName('a-size-medium a-color-base sc-price sc-white-space-nowrap')[0].innerHTML";
                chrome.tabs.executeScript(tabId, { code }, function (result) {
                  // result has the return value from `code`
                  testvar=result;
                  testvar = JSON.stringify(testvar);
                  //alert(testvar);
                  //["$24.15"]
                  testvar = testvar.replace('["','');
                  testvar = testvar.replace('$','');
                  testvar = testvar.replace('"]','');
                  testvar = parseFloat(testvar);
                  difference = shippingCost-testvar;
                  diff=difference.toFixed(2)
                  roundedValues = Math.ceil((diff+1) / 10)*10;
                  if (diff<5){
                      document.getElementById("difference").innerHTML=
                      "$5.00";
                      document.getElementById("roundedDifference").innerHTML= 
                      "$" + roundedValues;
                      document.getElementById("basketRoundedDifference").innerHTML= 
                      "$" + roundedValues;
                      roundedxtwo = Math.ceil((diff+1) / 10)*20;
                        document.getElementById("basketRoundedDifferenceTwo").innerHTML= 
                        "$" + roundedxtwo;
                     roundedxfour = Math.ceil((diff+1) / 10)*40;
                        document.getElementById("basketRoundedDifferenceThree").innerHTML= 
                        "$" + roundedxfour;
                  }
                  else if (diff==35){
                    document.getElementById("difference").innerHTML=
                    "$" + diff;
                    document.getElementById("roundedDifference").innerHTML= 
                    "$40";
                    document.getElementById("basketRoundedDifference").innerHTML= 
                    "$40";
                    document.getElementById("basketRoundedDifferenceTwo").innerHTML= 
                    "$80";
                    document.getElementById("basketRoundedDifferenceThree").innerHTML= 
                    "$160";
                  }
                  else {
                      //alert(diff);
                      document.getElementById("difference").innerHTML=
                      "$" + diff;
                      document.getElementById("roundedDifference").innerHTML= 
                      "$" + roundedValues;
                      document.getElementById("basketRoundedDifference").innerHTML= 
                      "$" + roundedValues;
                      roundedxtwo = Math.ceil((diff+1) / 10)*20;
                        document.getElementById("basketRoundedDifferenceTwo").innerHTML= 
                        "$" + roundedxtwo;
                        roundedxfour = Math.ceil((diff+1) / 10)*40;
                        document.getElementById("basketRoundedDifferenceThree").innerHTML= 
                        "$" + roundedxfour;
                  }
                  if (diff<=0) {
                    document.getElementById("recommmendation").innerHTML=
                    "$0.00";
                    document.getElementById("roundedDifference").innerHTML= 
                    "$25.00";
                    document.getElementById("basketRoundedDifference").innerHTML= 
                    "$30";
                    document.getElementById("basketRoundedDifferenceTwo").innerHTML= 
                    "$60";
                    document.getElementById("basketRoundedDifferenceThree").innerHTML= 
                    "$120";
                  }
                  else{
                    document.getElementById("recommmendation").innerHTML=
                    "$ " + diff;
                  }
                });
              }
              else {
                let code = "document.getElementsByClassName('a-size-base a-color-price a-text-bold')[0].innerHTML";
                chrome.tabs.executeScript(tabId, { code }, function (result) {
                  // result has the return value from `code`
                  testvar=result;
                  testvar = JSON.stringify(testvar);
                  testvar = testvar.replace('["\\','');
                  testvar = testvar.replace('n$','');
                  testvar = testvar.replace('\\','');
                  testvar = testvar.replace('n"]','');
                  testvar = parseFloat(testvar);
                  difference = shippingCost-testvar;
                  diff=difference.toFixed(2)
                  roundedValues = Math.ceil((diff+1) / 10)*10;
                  if (diff<5){
                      document.getElementById("difference").innerHTML=
                      "$5.00";
                      document.getElementById("roundedDifference").innerHTML= 
                      "$" + roundedValues;
                      document.getElementById("basketRoundedDifference").innerHTML= 
                      "$" + roundedValues;
                      roundedxtwo = Math.ceil((diff+1) / 10)*20;
                        document.getElementById("basketRoundedDifferenceTwo").innerHTML= 
                        "$" + roundedxtwo;
                     roundedxfour = Math.ceil((diff+1) / 10)*40;
                        document.getElementById("basketRoundedDifferenceThree").innerHTML= 
                        "$" + roundedxfour;
                  }
                  else {
                    document.getElementById("difference").innerHTML=
                    "$" + diff;
                    document.getElementById("roundedDifference").innerHTML= 
                    "$" + roundedValues;
                    document.getElementById("basketRoundedDifference").innerHTML= 
                    "$" + roundedValues;
                    roundedxtwo = Math.ceil((diff+1) / 10)*20;
                    document.getElementById("basketRoundedDifferenceTwo").innerHTML= 
                    "$" + roundedxtwo;
                    roundedxfour = Math.ceil((diff+1) / 10)*40;
                    document.getElementById("basketRoundedDifferenceThree").innerHTML= 
                    "$" + roundedxfour;
                  }
                  if (diff<=0) {
                    document.getElementById("recommmendation").innerHTML=
                    "$0.00";
                    document.getElementById("roundedDifference").innerHTML= 
                    "$25.00";
                    document.getElementById("basketRoundedDifference").innerHTML= 
                    "$30";
                    document.getElementById("basketRoundedDifferenceTwo").innerHTML= 
                    "$60";
                    document.getElementById("basketRoundedDifferenceThree").innerHTML= 
                    "$120";
                  }
                  else if (diff==35) {
                    //alert("test");
                    document.getElementById("recommmendation").innerHTML=
                    "$ " + diff;
                    document.getElementById("roundedDifference").innerHTML= 
                    "$40";
                    document.getElementById("basketRoundedDifference").innerHTML= 
                    "$40";
                    document.getElementById("basketRoundedDifferenceTwo").innerHTML= 
                    "$80";
                    document.getElementById("basketRoundedDifferenceThree").innerHTML= 
                    "$160";
                  }
                  else if (diff>0){
                    document.getElementById("recommmendation").innerHTML=
                    "$ " + diff;
                  }
                  else {
                    document.getElementById("recommmendation").innerHTML=
                    "$35.00";
                    document.getElementById("difference").innerHTML=
                    "$35";
                    document.getElementById("roundedDifference").innerHTML= 
                    "$40";
                    document.getElementById("basketRoundedDifference").innerHTML= 
                    "$40";
                    document.getElementById("basketRoundedDifferenceTwo").innerHTML= 
                    "$80";
                    document.getElementById("basketRoundedDifferenceThree").innerHTML= 
                    "$160";
                  }
                });
              }
              //a-size-medium a-color-base sc-price sc-white-space-nowrap
              // http://infoheap.com/chrome-extension-tutorial-access-dom/
              
            }
        );
        
    });   
    
    
   //difference = shippingCost - testvar;
   //alert(testvar);
}
/*
document.addEventListener('DOMContentLoaded', function () {
    
    chrome.runtime.getBackgroundPage(function (bg) {
        var code = bg.code;
        alert(code);
    });
    
});
*/

var subtotal = 23; /* scraped */
var shippingCost = 35;
var difference = shippingCost - subtotal;
var diff;
var roundedValues;
doSomething();
var roundedxtwo;
var roundedxfour;

function enableCustomValue() {
    document.getElementById("valueInput").disabled=false; 
}

document.getElementById("customValue").onclick = enableCustomValue;

function changeValue() {
    document.getElementById("recommendedValue").value = difference;
}
document.getElementById("recommendedValue").onclick = changeValue;

function changeRoundedValue() {
    document.getElementById("tenthValue").value = roundedValues;
}

document.getElementById("tenthValue").onclick = changeRoundedValue;

function changeroundedxone() {
    document.getElementById("tenthxoneValue").value = roundedValues;
}

document.getElementById("tenthxoneValue").onclick = changeroundedxone;


function fillValue() {
    document.getElementById("customValue").value = document.getElementById("valueInput").value;
}
document.getElementById("valueInput").onchange = fillValue;

function changeroundedxtwo() {
    document.getElementById("tenthxtwoValue").value = roundedxtwo;
}

document.getElementById("tenthxtwoValue").onclick = changeroundedxtwo;

function changeroundedxfour() {
    document.getElementById("tenthxfourValue").value = roundedxfour;
}

document.getElementById("tenthxfourValue").onclick = changeroundedxfour;

function cardSubmit() {
    var fname = document.getElementById("first-name").value;
    var chosenValue = document.getElementsByName("value");

    for (i=0; i < chosenValue.length; i++) {
        if (chosenValue[i].checked && chosenValue[i].value == difference){
            //alert(difference.toFixed(2));
            var chosenval = chosenValue[i].value;
            chosenval = parseFloat(chosenval);
            var rounded_diff = chosenval.toFixed(2);
            //alert(typeof(chosenval));
            if (rounded_diff<5) {
                document.getElementById("cardMessage").innerHTML = 
                "Thanks " + fname + ", your $5.00" + " gift card has been added to your cart! The product will be sent to us and we will use it to purchase necessities to donate to local charities."
            }
            else {
                document.getElementById("cardMessage").innerHTML = 
                "Thanks " + fname + ", your $" + rounded_diff + " gift card has been added to your cart! The product will be sent to us and we will use it to purchase necessities to donate to local charities."
            }
        }
        else if (chosenValue[i].checked){
            document.getElementById("cardMessage").innerHTML = 
            "Thanks " + fname + ", your $" + chosenValue[i].value + " gift card has been added to your cart! The product will be sent to us and we will use it to purchase necessities to donate to local charities."
        }      
    }
}

document.getElementById("submit").onclick = cardSubmit;

function basketSubmit() {
    var chosenValueb = document.getElementsByName("bvalue");

    for (i=0; i < chosenValueb.length; i++) {
        if (chosenValueb[i].checked){
            document.getElementById("basketMessage").innerHTML = 
            "Thanks, your $" + chosenValueb[i].value + " basket has been added to your cart! The product will be sent to you to deliver to your local charity."
        }      
    }
}

document.getElementById("addtocart").onclick = basketSubmit;

document.getElementById('recommendedValue').addEventListener('click', function(){
    document.getElementById('submit').addEventListener('click',() => {
        var diff = document.getElementById('recommendedValue').value 
        //alert(diff);
        var numdiff = parseFloat(diff);
        numdiff = numdiff.toFixed(2);
        if (numdiff<5){
            diff = "5";
        }
        //alert(document.getElementById('first-name').value);
        var firstname = document.getElementById('first-name').value;
        var string1 = diff.concat(' ', firstname)
        //alert(typeof(string1));
        chrome.tabs.create({ url: 'https://www.amazon.ca/gp/product/B09KXRNRBH/ref=s9_acss_bw_cg_gclptcg_2a1_w?pf_rd_m=A1IM4EOPHS76S7&pf_rd_s=merchandised-search-5&pf_rd_r=NR69RW0CJ0ZQXPFRWHJ4&pf_rd_t=101&pf_rd_p=024d316e-bb81-4e67-bb98-d7a59f0fc683&pf_rd_i=9230166011', active: false },    function(tab)
        {
            chrome.tabs.executeScript(tab.id, {
                code: 'var config = ' + JSON.stringify(string1)
            }, function() {
                chrome.tabs.executeScript(tab.id, {file: 'content.js'});
            });
            //chrome.tabs.remove(tab.id);
        });
        
    });
});


document.getElementById('tenthValue').addEventListener('click', function(){
    //var chosenValuec = document.getElementsByName("value");
    document.getElementById('submit').addEventListener('click',() => {
        var tenthvalinput = document.getElementById('tenthValue').value;
        var firstname = document.getElementById('first-name').value;
        var string1 = tenthvalinput.concat(' ', firstname)
        chrome.tabs.create({ url: 'https://www.amazon.ca/gp/product/B09KXRNRBH/ref=s9_acss_bw_cg_gclptcg_2a1_w?pf_rd_m=A1IM4EOPHS76S7&pf_rd_s=merchandised-search-5&pf_rd_r=NR69RW0CJ0ZQXPFRWHJ4&pf_rd_t=101&pf_rd_p=024d316e-bb81-4e67-bb98-d7a59f0fc683&pf_rd_i=9230166011', active: false },    function(tab)
        {
            chrome.tabs.executeScript(tab.id, {
                code: 'var config = ' + JSON.stringify(string1)
            }, function() {
                chrome.tabs.executeScript(tab.id, {file: 'content.js'});
            });
            //chrome.tabs.remove(tab.id);
        });
    });
});

document.getElementById('customValue').addEventListener('click', function(){
    //var chosenValuec = document.getElementsByName("value");
    document.getElementById('submit').addEventListener('click',() => {
        //alert(document.getElementById('valueInput').value);
        var updateTextTo = document.getElementById('valueInput').value;
        var firstname = document.getElementById('first-name').value;
        var string1 = updateTextTo.concat(' ', firstname)
        chrome.tabs.create({ url: 'https://www.amazon.ca/gp/product/B09KXRNRBH/ref=s9_acss_bw_cg_gclptcg_2a1_w?pf_rd_m=A1IM4EOPHS76S7&pf_rd_s=merchandised-search-5&pf_rd_r=NR69RW0CJ0ZQXPFRWHJ4&pf_rd_t=101&pf_rd_p=024d316e-bb81-4e67-bb98-d7a59f0fc683&pf_rd_i=9230166011', active: false },    function(tab)
            {
                
                chrome.tabs.executeScript(tab.id, {
                    code: 'var config = ' + JSON.stringify(string1)
                }, function() {
                    chrome.tabs.executeScript(tab.id, {file: 'content.js'});
                });
            });
    });
});



var showmap = document.getElementById("nearbyshelters");

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      showmap.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = "@" + position.coords.latitude + "," + position.coords.longitude;
  
    var img_url = "https://www.google.com/maps/search/shelters+near+me/" +latlon+ ",11z/data=!3m1!4b1";
  
    document.getElementById("nearbyshelters").innerHTML = "<img src='"+img_url+"'>"; /*left off here, add link to google maps with shelters*/
}

document.getElementById("nearbyshelters").onclick = getLocation;
