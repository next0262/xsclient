/**
 * Created by wjkim on 1/6/15.
 */

Connection = require('./../lib/xsclient')

var XenServerClient = new Connection('IP_ADDR', PORT);

/*
XenServerClient.loginWithPassword('ID', 'PASSWORD', function(error, sessionRef){
    if(error) {
        console.log(error);
    } else {
        console.log(sessionRef);
        XenServerClient.getALLRecords(sessionRef,function(error,recList){
            if(error){
                console.log(error);
            } else{
                var record;
                for(key in recList){
                    if(recList[key].domid > 0)
                        record = recList[key];
                }
                console.log(record);

                var cons;
                conss = record.consoles;
                for(key in conss){
                    XenServerClient.getProtocol(sessionRef, conss[key], function(error, protocol){
                        console.log(protocol);
                        if(protocol =='rfb'){
                            XenServerClient.getLocation(sessionRef, conss[key],function(error, location){
                                console.log(location);
                            });
                        }

                    });

                }
            }
        });
    }
});
*/
/*
XenServerClient.logout('sessionRef', function(error, message){
    if(error) {
        console.log(error);
    } else {
        console.log(message);
    }
});
*/

/*
XenServerClient.loginWithPassword('ID', 'PASSWORD', function(error, sessionRef){
    if(error){
        console.log(error);
    } else {
        XenServerClient.getRecord(sessionRef,'vmRef', function(error, record){
            if(error){
                console.log(error);
            } else {
                console.log(record);
            }
        });
    }
});
*/

/*
XenServerClient.loginWithPassword('ID', 'PASSWORD', function(error, sessionRef){
    if(error){
        console.log(error);
    } else {
        console.log(sessionRef);
        XenServerClient.getByUuid(sessionRef,'UUID', function(error, vm){
            if(error){
                console.log(error);
            } else {
                console.log(vm);
            }
        });
    }
});
 */


XenServerClient.loginWithPassword('ID', 'PASSWORD', function(error, sessionRef){
    if(error){
        console.log(error);
    } else {
        console.log(sessionRef);
        XenServerClient.getALLRecords(sessionRef, function(error, recList){
            if(error){
                console.log(error);
            } else{
                for(key in recList){
                    if(recList[key].domid > 0) {
                        var record = recList[key];
                        console.log(key);
                        console.log(record)
                    }
                }
            }

        });
    }
});
