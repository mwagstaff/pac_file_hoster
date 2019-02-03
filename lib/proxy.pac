function FindProxyForURL(url, host) {
 
    if (shExpMatch(host, "*.*cus.co.uk")) return "104.127.38.135";

    return "DIRECT";
     
}