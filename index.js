const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
const chars = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"];

function formatBytes(bytes) {
    if (bytes < 1)
        return "0B";
    
    const i = Math.floor(Math.log(bytes) / 6.931471805599453);
    const f = parseFloat(bytes / Math.pow(1024, i)).toFixed(2);
    return `${f % 1 === 0 ? Math.round(f) : f}${sizes[i]}`;
}

function toOrdinal(n) {
  return n+["st","nd","rd"][n%10-1]||"th";
}

function generateKey(length) {
    let str = "";
    while (length-- != 0) str += chars[Math.floor(Math.random() * 62)];
    return str;
}

const toCapital = string => string[0].toUpperCase() + string.slice(1);

module.exports = { formatBytes, toOrdinal, generateKey, toCapital };
