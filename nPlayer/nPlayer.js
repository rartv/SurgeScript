var url = $request.url.replace(/language=zh-Hans-CN/g, 'language=zh');

$done({url: url, headers: $request.headers });