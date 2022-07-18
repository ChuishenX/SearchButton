document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"><style>.search {position: relative;margin-top: 1em;margin-bottom: 1em;padding: 5px;padding-left: 0;border-radius: 4px;-webkit-border-radius: 4px;font-size: 0.9375rem;background: none;display: block;line-height: 1.6;}.search::before {position: absolute;top: calc(50% - 24px * 0.5);left: 4px;width: 24px;height: 24px;text-align: center;font-weight: 600;line-height: 24px;vertical-align: middle;}</style>';
function searching() {
    var searches = document.getElementsByTagName('search');
    for (var i = 0; i < searches.length; i++) {
        searches[i].className = 'search';
        var type = searches[i].getAttribute('type');
        var content = searches[i].getAttribute('content')
        searchesJson={
            baidu: {
                name: '百度',
                color: 'blue',
                url: 'https://www.baidu.com/s?wd='
            },
            google: {
                name: '谷歌',
                color: 'green',
                url: 'https://www.google.com/search?q='
            },
            sogou: {
                name: '搜狗',
                color: 'pink',
                url: 'https://www.sogou.com/web?query='
            },
            s360: {
                name: '360',
                color: 'lime',
                url: 'https://www.so.com/s?q='
            },
            bing: {
                name: '必应',
                color: 'gold',
                url: 'https://cn.bing.com/search?q='
            },
            github: {
                name: 'github',
                color: 'black',
                url: 'https://github.com/search?q='
            },
            yandex: {
                name: 'yandex',
                color: 'red',
                url: 'https://yandex.com/search/?text='
            }
        }
        searches[i].innerHTML = '<div><button class="search" style="background-color: '+searchesJson[type].color+';" onclick="window.open(`'+searchesJson[type].url + content +'`)" title="请点击使用'+searchesJson[type].name+'搜索该关键词">搜索'+content+'</button></div>';
    }
}
//页面加载后运行
if (window.onload) {
    window.onload += function () {
        searching()
    }
} else {
    window.onload = function () {
        searching()
    }
}

// <search type="baidu" content="1234"></search>
