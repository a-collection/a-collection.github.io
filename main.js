function searching() {
    var input, autocomplete, ul, li, a, i;
    input = document.getElementById("search");
    autocomplete = input.value.toUpperCase();
    ul = document.getElementById("webappList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(autocomplete) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}