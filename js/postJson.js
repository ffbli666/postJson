(function($) {
    $.postJson = function ( url, data, callback, type ) { 
        type = type || 'json';
        if ( jQuery.isFunction( data ) ) {
            type = type || callback;
            callback = data;
            data = undefined;
        }

        return jQuery.ajax({
            url: url,
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: type,
            data: JSON.stringify(data),
            success: callback
        });         
    };  
})(jQuery)