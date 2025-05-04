const backtotop_btn = document.getElementById("backtotop-btn")

window.onscroll = function () {
    if (document.documentElement.scrollTop > 700 || document.body.scrollTop > 700) {
        backtotop_btn.setAttribute("class", "slide-in-bottom")
        backtotop_btn.style.visibility = "visible"
    } else {
        backtotop_btn.setAttribute("class", "slide-out-top")
        backtotop_btn.style.visibility = "hidden"
    }
}

backtotop_btn.onclick = function () {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
}