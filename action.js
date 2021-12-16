//chrome.browserAction.onClicked.addListener(function(tab) { alert('icon clicked')});
//var code = document.getElementsByClassName('a-size-base a-color-price a-text-bold')[0].innerHTML
//var code = 123;
var roundedval;
/*
chrome.runtime.onMessage.addListener( function(request,sender,sendResponse)
{
    if( request.greeting === "12" )
    {
        setTimeout(function(){
            roundedval = request.greeting;
            //alert(roundedval);
            //sendResponse( {navURL:roundedval} );
        },12000);
    }
    else {
        sendResponse( {navURL: roundedval} );
    }
    return true;
});
*/
/*
chrome.runtime.sendMessage({greeting: updateTextTo}, function(){
    chrome.tabs.executeScript(tab.id,
        {
            //code: "alert(document.getElementById('productTitle'))"
            file : "action.js"
        }, () => chrome.runtime.lastError);
});
*/
chrome.runtime.onMessage.addListener( function(request,sender,sendResponse)
{
    if( request.greeting === "12" )
    {
        roundedval = request.greeting;
            //alert(roundedval);
        sendResponse( {navURL:roundedval} );
        
    }
    else {
        sendResponse( {navURL: roundedval} );
    }
    return true;
});









