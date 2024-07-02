/*
 * mouseClick.js(https://github.com/Garihe/mouseClick.js)
 * by Garihe, 2024.07
*/
document.addEventListener('DOMContentLoaded',
function() {
    var namesOrder = 0;
    document.body.addEventListener('click',
    function(mouceClickJS) {
        var names = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"]; //Text contents
        var colors = ["#0080ff", "#ae0000", "#ff359a", "#9f35ff", "#00a600", "#02df82", "#00e3e3", "#9aff02", "#ffd306", "#ff8000"];//Text colors
        var mClickSpan = document.createElement('span');
        mClickSpan.textContent = names[namesOrder];
        namesOrder = (namesOrder + 1) % names.length;
        var mouceClickX = mouceClickJS.pageX,
        mouceClickY = mouceClickJS.pageY;
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        mClickSpan.style.position = 'absolute';
        mClickSpan.style.zIndex = '10000';
        mClickSpan.style.top = (mouceClickY - 20) + 'px';
        mClickSpan.style.left = mouceClickX + 'px';
        mClickSpan.style.fontSize = '16px';//Text size
        mClickSpan.style.color = randomColor;
        mClickSpan.style.userSelect = 'none';
        document.body.appendChild(mClickSpan);
        var originalTop = mouceClickY - 20;
        var currentOpacity = 1;
        var animationInterval = setInterval(function() {
            if (currentOpacity <= 0) {
                clearInterval(animationInterval);
                mClickSpan.parentNode.removeChild(mClickSpan);
                return;
            }
            mClickSpan.style.top = (originalTop - ((originalTop - (mouceClickY - 180)) * (1 - currentOpacity))) + 'px'; //Absolute position where text disappears
            mClickSpan.style.opacity = currentOpacity;
            currentOpacity -= 0.01;//Rate
        },10);//Duration
    });
});