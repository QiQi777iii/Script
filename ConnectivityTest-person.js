//由本群重庆佬提供，key和小白脸大佬修改完善,修改了一下,由整点薯条大佬优化.
//qiqi自用
let $ = {
Google:'https://www.google.com/generate_204',
Github:'https://www.github.com',
OpenAI:'https://openai.com/',
Youtube:'https://www.youtube.com/',
Bilibili:'https://www.bilibili.com',
Mega:'https://mega.io/',
PikPak:'https://mypikpak.com/',
Ehentai:'https://e-hentai.org/'
}

!(async () => {
  let results = await Promise.allSettled([http('Google'), http('Github'), http('OpenAI'), http('Youtube'), http('Bilibili'),http('Mega'),http('PikPak'),http('Ehentai')])
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
      ' : ' +
      (Date.now() - time)+' ms');
        });
    });
}
