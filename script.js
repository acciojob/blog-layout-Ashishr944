//your JS code here. If required.
function setEqualHeight() {
    const columns = document.querySelectorAll(".column");

    let maxHeight = 0;

    columns.forEach(function (column) {
        column.style.height = "auto";
        maxHeight = Math.max(maxHeight, column.offsetHeight);
    });

    columns.forEach(function (column) {
        column.style.height = maxHeight + "px";
    });
}

window.addEventListener("load", setEqualHeight);
window.addEventListener("resize", setEqualHeight);