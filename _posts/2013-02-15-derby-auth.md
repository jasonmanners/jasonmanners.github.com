---
layout: post
title: Setting up Derby Auth
---

{{ page.title }}
================
This is a test, the real to come
There were several changes made to the queryAccess commands and fixes to the provider auth login.

store.queryAccess callback now accepts all parameters from the correlated expose, with the last 2 arguments being accept and err.
For example:
```javascript
store.queryAccess('users', 'withEmail', function(email, accept, err) {
    return accept(true); // for now
});
```

Accept and err can also be defined as
```javascript
var accept = arguments[arguments.length-2]
var err    = arguments[arguments.length-1]
    
return accept(true)
```

Also updated provider auth login to use a user query and corresponding model.at(0).
