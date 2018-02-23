---
title: "Hosting TTL"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "23-02-2018"
category: "configuration"
tags:
    - programming
    - configuration
    - dns
---

# Needs refactoring

TTL stands for Time to Live and is a setting for each DNS record that specifies how long a resolver is supposed to cache the DNS query before the query expires and a new one needs to be done. DNS records specifies where the requests for an entry should be pointed to and how long the record can be cached before it needs to be requested again.

Caching mechanism speeds up the Internet experience when visiting a site and lowers the load on DNS servers around the world. But when a DNS record has been changed and the cache has not been expired then the new lookup won't be done. It's obvious now why the cache needs to be expired. TTL is the interval in which the cache will be expired.

TTL values are always represented in seconds. Most DNS setup configuration services provide you a preset list of values to set your records to. You want to strike the best balance between having a low TTL and high TTL. Some DNS provides might bill you based on how many DNS queries you are doing. A good rule of thumb is never have any TTL higher than 1 day.

* The higher the TTL, the less frequently caching servers need to query authoritative name servers.
* The lower the TTL, the more frequently updates are propagated to other name servers.

## Common Record Types

### A or AAAA Record

A 1 hour TTL is a good compromise between enabling fast changes while taking advantages of DNS caching while someone is visiting your site. If changes to this record are often or need to happen quickly in an emergency, you can usually set it as low as 30 seconds.

### CNAME

Usually, a CNAME record will never be modified. In those scenarios, a 12 hour to 1 day TTL is good compromise as the benefits of caching outweigh need for a faster propagation time.

### MX Record

MX records rarely change, so a 12 hour or 1 day TTL is a good option.

### TXT Records

Safe to set 1 hour to 12 hour range since they rarely change.