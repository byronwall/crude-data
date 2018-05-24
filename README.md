# crude data storage

This is a very crude server which is meant to store key value pairs.  The idea is that an ESP 8266 hits this very simple endpoint with a key value point to store.  It is written to a file.  That file can then be downloaded.

## endpoints

All of the endpoints are simple GET requests.  This is not a good idea but works well enough to go with it for now.

```
http://data.byroni.us/key/value
```

This will store a key value pair into the file.  The idea is that you will send in /time/data

```
http://data.byroni.us/data
```

This will download the data.

```
Same link as above but not repeated here to avoid mistakes
/clear
```

This will clear the file.  There are no checks or bounds on this.  It is immediately destructive.