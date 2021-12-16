/*
chrome.runtime.sendMessage({greeting: "12"}, function(response){
    tabURL = response.navURL;
    alert(tabURL);
});
*/

setTimeout(function(){
    //alert(config);
    /*
    chrome.runtime.sendMessage({greeting: "12"}, function(response){
        tabURL = response.navURL;
        alert(tabURL);
    });
    */
    //var stringArray = config.split(/(\s+)/);
    //alert(config);
    //var stringArray = config.split(/(\s+)/);
    var myArray = config.split(" ");
    //alert(myArray[0]);
    if ( document.getElementById("a-autoid-31").className = ('a-button a-button-toggle a-button-selected') ) {
        //alert("test")
        //document.getElementById("a-autoid-30").classList.remove('a-button a-button-toggle a-button-selected');
        document.getElementById("a-autoid-31").className = "a-button a-button-toggle";
    };
    
   
    document.getElementById('gc-order-form-custom-amount').focus();
    document.getElementById('gc-order-form-custom-amount').value = myArray[0];
    //var element = document.getElementById('gc-order-form-custom-amount');
    /*
    element.addEventListener('focus', function() {
      element.setAttribute('placeholder', '')
    
    })
    */
    document.getElementById('gc-order-form-custom-amount').removeAttribute("placeholder");
    if ( document.getElementById('gc-order-form-custom-amount').className = ('a-input-text gc-order-form-custom-amount') ) {
        //alert("test")
        //document.getElementById("a-autoid-22").classList.remove('a-button a-button-toggle a-button-selected');
        document.getElementById('gc-order-form-custom-amount').className = "a-input-text gc-order-form-custom-amount gc-highlight-field";
    };
    
    //document.getElementById('gc-live-preview-amount').textContent="CDN$5.00";
    
    document.getElementById('gc-order-form-custom-amount').click();
    document.getElementById('gc-order-form-senderName').value = myArray[1];
    document.getElementById('gc-order-form-recipients').value = 'test@gmail.com';
    document.getElementById('gc-mini-design-thumb-2').click();
    
    
    
    var pval = document.getElementById('gc-buy-box-text');
    var spans = pval.getElementsByTagName("span");
},2000);


