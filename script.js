function rammerheadclicked() {
    window.open("https://nadiasproxy.nex.sh/");
}

function interstellarclicked() {
    window.open("https://skibidiking33.github.io/interszteallat");
}

function gnClicked() {
    window.open("https://gnhustgames.github.io/");
}

function googleClicked() {
    window.open("https://google.com/");

}

function gotowebsite() {
    var setUrl = document.getElementById("input").value;
    if (setUrl.trim() !== "") {
        if (!setUrl.startsWith("http://") && !setUrl.startsWith("https://")) {
            setUrl = "https://" + setUrl;
        }
        window.open(setUrl);
    }
}



