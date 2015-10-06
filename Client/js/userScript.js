var state, local;

$( document ).ready(function() {
    state = true;
    console.log( "ready!" );
    local=window.location.pathname.slice(1,window.location.pathname.length);
    $( "#button" ).html(local);
    $.ajax({
            url: "/post",
            type: 'POST',
            data: JSON.stringify({"user": local}),
            contentType: 'application/json',
            success: function (response) {
                //console.log('query successful, recieved:', response);
            },
            error: function (data) {
              // console.error('failed to retrieve data.');
            },
            complete: function (data) {
              // console.log('query finished');
            }
        });
    
    $( "#button" ).click(function() {
        console.log("here");
        state = !state;
        var color;
        if (state) color = "green";
        else color = "red";
        $( "#button" ).css( "background-color", color );
        $.ajax({
            url: "/state",
            type: 'POST',
            contentType: 'application/json',   
            data: JSON.stringify({"user": local, "state": state}), 
            success: function (response) {
                console.log('query successful, returned:', response);
            },
            error: function (data) {
                console.error('failed get acronyms :(');
            },
            complete: function (data) {
                console.log('finished request');
            }
        });
    });
    
    $( "#delete" ).click(function() {
        $.ajax({
            url: "/delete",
            type: 'POST',
            contentType: 'application/json',   
            data: JSON.stringify({"user": local}), 
            success: function (response) {
                close();
            },
            error: function (data) {
                console.error('failed get acronyms :(');
            },
            complete: function (data) {
                console.log('finished request');
            }
        });
    });
});