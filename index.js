function formatBytes(bytes) {
    if(bytes === 0) return '0 Bytes';
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${parseFloat(bytes / Math.pow(1024, i)).toFixed(2)}${sizes[i]}`
}

function toOrdinal(number) {
    number = number.toString();
    if (number.endsWith(11) || number.endsWith(12) || number.endsWith(13)) return number + 'th';
    if (number.endsWith(1)) return number + 'st';
    else if (number.endsWith(2)) return number + 'nd';
    else if (number.endsWith(3)) return number + 'rd';
    else return number + 'th';
}

function generateKey(len, an) {
    an = an && an.toLowerCase();
    var str = "",
    i = 0,

    min = an == "a" ? 10 : 0,
    max = an == "n" ? 10 : 62;

    for (; i++ < len;) {
        var r = Math.random() * (max - min) + min << 0;
            str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
        }
    return str;
}

function toCapital(string) {
    string.charAt(0).toUpperCase() + string.slice(1)
}


module.exports = { formatBytes, toOrdinal, generateKey, toCapital }