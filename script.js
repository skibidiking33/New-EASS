var input = document.querySelector("input");
function rammerheadclicked() {
    window.open("https://www.membean.gq");
}

function interstellarclicked() {
    window.open("https://skibidiking33.github.com/interszteallat");
}

function gotowebsite() {
    var setUrl = input.value;
    if (setUrl.trim() !== "") {
        if (!setUrl.startsWith("http://") && !setUrl.startsWith("https://")) {
            setUrl = "https://" + setUrl;
        }
        window.open(setUrl, '_blank');
    }
}


