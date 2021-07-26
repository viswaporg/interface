(function (document, $) {
    function copyToClipboard(str) {
        var TempText = document.createElement("input");
        TempText.value = str;
        document.getElementById('walletConnect').appendChild(TempText);
        TempText.select();
        document.execCommand("copy");
        document.getElementById('walletConnect').removeChild(TempText);
        toastr.options.progressBar = true;
        toastr.options.closeButton = true;
        toastr.success('Copied to Clipboad!')
    }
    document.addEventListener("DOMContentLoaded", function(event) { 
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = "0" + dd;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
        var countDownDate = new Date("2021-09-25 00:00:00").getTime();
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
        AOS.init();
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    loop: true,
                    dots: false
                },
                465: {
                    items: 2,
                    nav: true,
                    loop: true,
                    margin: 0,
                    nav: true,
                    dots: false
                },
                1024: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 0,
                    nav: true,
                    dots: false
                }
            }
        })
        $('#btnBuy').click(function () {
            $('#walletConnect').modal('show');
        });
        $('#btnClaim').click(function () {
            $('#walletConnect').modal('show');
        });
        $('#btnReferLink').click(function () {
            $('#walletConnect').modal('show');
        });
        $('.refer-link__copy').click(function () {
            copyToClipboard('copied');
        });
        $('#btnWalletConnectCopy').click(function () {
            copyToClipboard('copied');
        });
        $('#mobileMenu a').click(function () {
            $('#overlay-input').prop('checked', false);
        });
    });
})(document, $);
