document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"><style>.search {box-sizing: content-box;cursor: pointer;padding: 10px 20px 10px;border: 1px solid;border-radius: 3px;font: normal normal bold 16px/normal "华文中宋", "楷体", sans-serif;color: white;}</style>';
function searching() {
    var searches = document.getElementsByTagName('search');
    for (var i = 0; i < searches.length; i++) {
        var type = searches[i].getAttribute('type');
        var content = searches[i].getAttribute('content')
        searchesJson={
            baidu: {
                name: '百度',
                color: 'blue',
                url: 'https://www.baidu.com/s?wd='
            },
            google: {
                name: 'Google',
                color: 'green',
                url: 'https://www.google.com/search?q='
            },
            sogou: {
                name: '搜狗',
                color: 'magenta',
                url: 'https://www.sogou.com/web?query='
            },
            S360: {
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
                name: 'GitHub',
                color: 'black',
                url: 'https://github.com/search?q='
            },
            yandex: {
                name: 'Yandex',
                color: 'crimson',
                url: 'https://yandex.com/search/?text='
            }
        }
        searches[i].innerHTML = '<button class="search" style="background-color: '+
            searchesJson[type].color+';" onclick="window.open(`'+searchesJson[type].url + content +'`)" title="请点击使用'+
            searchesJson[type].name+'搜索该关键词">'+searchesJson[type].name+'搜索"'+content+'"</button>';
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
