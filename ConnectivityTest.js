//复刻重庆佬，key和小白脸大佬，整点薯条大佬的脚本
//自用
let $ = {
Bilibili:'https://www.bilibili.com'
Google:'https://www.google.com/generate_204',
Github:'https://www.github.com'
}

!(async () => {
  let results = await Promise.allSettled([http('Bilibili'), http('Github'), http('Google')])
    。then(results => results.map(result => result.value));

  $done({
    title: 'Network Connectivity Test',
    content: results.join('\n'),
    icon: 'timer',
    'icon-color': '#FF5A9AF9',
  })
})();

function http(req) {
    return new Promise((r) => {
   let time = Date.now();
        $httpClient.post($[req], (err, resp, data) => {
            r(req +
      '\xa0\xa0\xa0\t: ' +
      (Date.now() - time)+' ms');
        });
    });
}
