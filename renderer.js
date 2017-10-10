//document.write("Hey")
function doSomething() {
    alert('whoa');
    document.querySelector('#clicker').innerHTML = "woo";
};

document.querySelector('#clicker').addEventListener('click', doSomething);