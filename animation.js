let scroll = document.getElementById("scroll")
scroll.style.visibility = "visibile";
windows.addEventListener("scroll", event => {
    let percent = window.scrollY/(document.body.clientHeight - window.innerHeight);
    scroll.style.left = percent * 100 + "%"
});