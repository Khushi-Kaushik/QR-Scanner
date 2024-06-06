function domready(fn){
    if(
        document.readyState === 'complete' || document.readyState === 'interactive'
    ){
        setTimeout(fn,1000);
    }
    else{
        document.addEventListener("DOMContentLoaded",fn);
    }
}

domready(function(){
    var qr = document.getElementById('scan')
    function scanQR(text,result){
        window.open(text,result);
        qr.innerHTML = `Follow the above link!!`
        close();
    }
    let htmlscanner = new Html5QrcodeScanner("scan" , {fps : 10}
    );
    htmlscanner.render(scanQR);
});


