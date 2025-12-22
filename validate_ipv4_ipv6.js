/*
IPV4 - 32 bit | Decimal numbers (0-255) | separated by dots | 4 groups (no leading 0 except 0 only value)
>> 192.168.1.1

IPV6 - 128 bit | Hexadecimal value | separated by column | 8 groups
>> 2001:0db8:85a3:0000:0000:8a2e:0370:7334

*/



function isIPv4(s) {
  // Strict IPv4: four decimal numbers 0-255, no leading zeros (except 0 only "0")
  const parts = s.split('.');
  if (parts.length !== 4) return false;

  for (let p of parts) {
    if (p.length === 0 || p.length > 3) return false;
    // must be all digits
    for (let ch of p) {
      if (ch < '0' || ch > '9') return false; // compares with ASCII Value , so if its less than '0' or greater than '9' , then it is some other char
    }
    // no leading zeros unless the part is exactly "0"
    if (p[0] === '0' && p.length > 1) return false;
    const num = Number(p); // safe because we checked digits
    if (num < 0 || num > 255) return false;
  }
  return true;
}

function isIPv6(ip) {
    // Strict IPv6 (no :: compression): exactly 8 groups, each 1-4 hex digits
    const parts = ip.split(':');
    if (parts.length !== 8) return false;

    for (let part of parts) {

        // 1–4 chars required
        if (part.length === 0 || part.length > 4) return false;

        // check each character manually
        for (let ch of part) {
            if (!isHex(ch)) return false;
        }
    }

    return true;
}

function isHex(ch) {
    // 0–9
    if (ch >= '0' && ch <= '9') return true;

    // A–F
    if (ch >= 'A' && ch <= 'F') return true;

    // a–f
    if (ch >= 'a' && ch <= 'f') return true;

    return false;
}


function validateIP(IP) {
  if (isIPv4(IP)) return "ipv4";
  if (isIPv6(IP)) return "ipv6";
  return "Neither";
}