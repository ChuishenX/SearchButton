document.getElementsByTagName('head')[0].innerHTML += '<style>.search{color:#fff;display:inline-block;vertical-align:middle;min-width:2.5em;margin-bottom:0;border:1px solid #fff;border-radius:.5em;font-weight:400;font-size:.75em;line-height:1.5;text-align:center;white-space:nowrap;cursor:pointer;-webkit-user-select:none;user-select:none;transition-duration:.4s;touch-action:manipulation;height:30px}</style>';
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
