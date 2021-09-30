var url = $request.url.replace(/downloads\.php%3F/g, 'downloads.php?');

$done({url: url, headers: $request.headers });
