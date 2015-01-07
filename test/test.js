/**
 * Created by wjkim on 1/6/15.
 */

Connection = require('./../lib/xsclient')

var XenServerClient = new Connection('IP_ADDR', PORT);

/*
XenServerClient.loginWithPassword('root','ancl@2014', function(error, sessionRef){
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
XenServerClient.logout('OpaqueRef:fba734d0-ad0f-8eec-f5ac-4caf5708fb22', function(error, message){
    if(error) {
        console.log(error);
    } else {
        console.log(message);
    }
});
*/

/*
XenServerClient.loginWithPassword('root', 'ancl@2014', function(error, sessionRef){
    if(error){
        console.log(error);
    } else {
        XenServerClient.getRecord(sessionRef,'OpaqueRef:a4f64f29-fa77-d347-f3c7-960b4a475e84', function(error, record){
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
XenServerClient.loginWithPassword('root', 'ancl@2014', function(error, sessionRef){
    if(error){
        console.log(error);
    } else {
        console.log(sessionRef);
        XenServerClient.getByUuid(sessionRef,'a9d498fc-dd66-b2a4-ab2e-829c3ffa9924', function(error, vm){
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
