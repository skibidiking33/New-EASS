var input = document.querySelector("input");
function rammerheadclicked() {
    window.open("https://nadiasproxy.nex.sh/");
}

function interstellarclicked() {
    window.open("https://skibidiking33.github.io/interszteallat/");
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


