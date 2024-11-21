
const contentfetch = document.getElementById('content');
let count = 0;
function play()
{
    count++;
    contentfetch.innerHTML = `clicked ${count}`;
}