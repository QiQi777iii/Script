let $ = {
    Google: 'https://www.google.com/generate_204',
    Github: 'https://www.github.com',
    PikPak: 'https://mypikpak.com/',
    Rule34: 'https://rule34video.com',
    MissAV: 'https://missav.com/cn',
    Ehentai: 'https://e-hentai.org/'
}

!(async () => {
    let results = await Promise.allSettled([
        http('Google'), http('Github'), http('PikPak'), http('MissAV'), http('Rule34'), http('Ehentai')
    ]).then(results => results.map((result, index) => {
        // 每两个结果后面加一个换行符，除非是最后一个结果
        return result.value + ((index % 2) && index !== results.length - 1 ? '\n' : '\t');
    }));

    $done({
        title: 'Connectivity Test',
        content: results.join(''), // 已经在上面加了换行，这里不需要再加
        icon: 'timer',
        'icon-color': '#F5F5DC',
    });
})();

function http(req) {
    return new Promise((resolve) => {
        let time = Date.now();
        $httpClient.post($[req], (err, resp, data) => {
            let resultString = req + ' : ' + (Date.now() - time) + ' ms';
            resolve(resultString);
        });
    });
}
