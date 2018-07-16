let browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

for (let browser in browsers) {
    console.log(browser);
}

for (let i in browsers) {
    console.log(browsers[i]);
}

for (let browser of browsers) {
    console.log(browser);
}
