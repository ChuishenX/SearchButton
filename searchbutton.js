document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"><style>.search {position: relative;margin-top: 1em;margin-bottom: 1em;padding: 5px;padding-left: 0;border-radius: 4px;-webkit-border-radius: 4px;font-size: 0.9375rem;background: none;display: block;line-height: 1.6;}.search::before {position: absolute;top: calc(50% - 24px * 0.5);left: 4px;width: 24px;height: 24px;text-align: center;font-weight: 600;line-height: 24px;vertical-align: middle;}</style>';
function searching() {
    var searches = document.getElementsByTagName('search');
    for (var i = 0; i < searches.length; i++) {
        searches[i].className = 'search';
        var type = searches[i].getAttribute('type');
        var content = searches[i].getAttribute('content')
        if (type == 'baidu') {
            searches[i].innerHTML = '<div><button class="search" style="background-color: blue;" onclick="window.open('+'\"https://www.baidu.com/s?wd='+ content +'\')" title="请点击使用百度搜索该关键词">搜索'+content+'</button></div>';
        } else if (type == 'google') {
            searches[i].innerHTML = '<div><button class="search" style="background-color: green;" onclick="window.open('+'\'https://www.google.com/search?q='+ content +'\')" title="请点击使用谷歌搜索该关键词">搜索'+content+'</button></div>';
        } else if (type == 'sogou') {
            searches[i].innerHTML = '<div><button class="search" style="background-color: pink;" onclick="window.open('+'\'https://www.sogou.com/web?query='+ content +'\')" title="请点击使用搜狗搜索该关键词">搜索'+content+'</button></div>';
        } else if (type == 'S360') {
            searches[i].innerHTML = '<div><button class="search" style="background-color: lime;" onclick="window.open('+'\'https://www.so.com/s?q='+ content +'\')" title="请点击使用360搜索该关键词">搜索'+content+'</button></div>';
        } else if (type == 'bing') {
            searches[i].innerHTML = '<div><button class="search" style="background-color: gold;" onclick="window.open('+'\'https://www.bing.com/search?q='+ content +'\')" title="请点击使用必应搜索该关键词">搜索'+content+'</button></div>';
        } else if (type == 'github') {
            searches[i].innerHTML = '<div><button class="search" style="background-color: black;" onclick="window.open('+'\'https://github.com/search?q='+ content +'\')" title="请点击使用GitHub搜索该关键词">搜索'+content+'</button></div>';
        } else if (type == 'yandex') {
            searches[i].innerHTML = '<div><button class="search" style="background-color: red;" onclick="window.open('+'\'https://yandex.com/search/?text='+ content +'\')" title="请点击使用Yandex搜索该关键词">搜索'+content+'</button></div>';
        }
    }
}
//页面加载后运行
window.onload = function () {
    searching();
}

// <search type="baidu" content="1234"></search>
