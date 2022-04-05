var url = $request.url.replace(/language=[A-Za-z0-9_-]+/ig, 'language=zh');

$done({url: url, headers: $request.headers });
