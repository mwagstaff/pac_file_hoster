function FindProxyForURL(url, host) {
 
    if (dnsDomainIs(host, "api.marcus.co.uk")) return "104.127.38.135";

    return "DIRECT";
     
}