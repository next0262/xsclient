/**
 * Created by wjkim on 1/6/15.
 */
xmlrpc = require('xmlrpc');

function XenServerClient(host, port){

    this.client = xmlrpc.createClient({ host: host, port: port, path: '/'});

}
//multi session available
XenServerClient.prototype.loginWithPassword = function (username, password, callback){
    this.client.methodCall('session.login_with_password', [username, password], function (error, response) {
        if(error){
         callback(new Error('BadServerResponse'));
        }
        if (response.Status == "Success")
        {
            callback(null,response.Value);

        } else{
            callback(new Error(response.ErrorDescription.toString()));
        }
    });
};
//empty value
XenServerClient.prototype.logout = function (sessionRef, callback){
   this.client.methodCall('session.logout', [sessionRef], function(error, response){
       if(error){
           callback(new Error('BadServerResponse'));
       }
       if (response.Status == "Success")
       {
           callback(null,"Logout Success");
       } else{
           callback(new Error(response.ErrorDescription.toString()));
       }
   });
};

XenServerClient.prototype.getByUuid= function (sessionRef, uuid, callback){
    this.client.methodCall('VM.get_by_uuid', [sessionRef, uuid], function(error, response){
        if(error){
            callback(new Error('BadServerResponse'));
        }
        if (response.Status == "Success")
        {
            callback(null, response.Value);
        } else{
            callback(new Error(response.ErrorDescription.toString()));
        }
    });
};

XenServerClient.prototype.getByNameLabel= function (sessionRef, nameLabel, callback){
    this.client.methodCall('VM.get_by_name_label', [sessionRef, nameLabel], function(error, response){
        if(error){
            callback(new Error('BadServerResponse'));
        }
        if (response.Status == "Success")
        {
            callback(null, response.Value);
        } else{
            callback(new Error(response.ErrorDescription.toString()));
        }
    });
};


XenServerClient.prototype.getALLRecords = function (sessionRef, callback){
    this.client.methodCall('VM.get_all_records', [sessionRef], function(error, response){
        if(error){
            callback(new Error('BadServerResponse'));
        }
        if (response.Status == "Success")
        {
            callback(null, response.Value);
        } else{
            callback(new Error(response.ErrorDescription.toString()));
        }
    });
};

XenServerClient.prototype.getRecord = function (sessionRef, vmRef, callback){
    this.client.methodCall('VM.get_record', [sessionRef, vmRef], function(error, response){
        if(error){
            callback(new Error('BadServerResponse'));
        }
        if (response.Status == "Success")
        {
            callback(null, response.Value);
        } else{
            callback(new Error(response.ErrorDescription.toString()));
        }
    });
};

XenServerClient.prototype.getProtocol = function (sessionRef, consoleRef, callback){
    this.client.methodCall('console.get_protocol', [sessionRef, consoleRef], function(error, response){
        if(error){
            callback(new Error('BadServerResponse'));
        }
        if (response.Status == "Success")
        {
            callback(null, response.Value);
        } else{
            callback(new Error(response.ErrorDescription.toString()));
        }
    });
};

XenServerClient.prototype.getLocation= function (sessionRef, consoleRef, callback){
    this.client.methodCall('console.get_location', [sessionRef, consoleRef], function(error, response){
        if(error){
            callback(new Error('BadServerResponse'));
        }
        if (response.Status == "Success")
        {
            callback(null, response.Value);
        } else{
            callback(new Error(response.ErrorDescription.toString()));
        }
    });
};


module.exports = XenServerClient