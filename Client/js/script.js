$( document ).ready(function() {
    console.log( "ready!" );
    
    var i = setInterval(check, 1000);
});

function check(){
    console.log( "Checking..." );
    $.ajax({
        url: "/check",
        type: 'GET',
        contentType: 'application/json',    
        success: function (response) {
            console.log('query successful, returned:', response);
            if (response.data === 1)
            {
                $( "#target" ).css( "background-color", "red" );
            }
            else
            {
                $( "#target" ).css( "background-color", "green" );
            }
        },
        error: function (data) {
            console.error('failed get acronyms :(');
        },
        complete: function (data) {
            console.log('finished request');
        }
    });
}
    
$( "#target" ).click(function() {
    console.log( "Handler for .click() called." );
    $.ajax({
        url: "/succeed",
        type: 'GET',
        contentType: 'application/json',    
        success: function (response) {
            console.log('query successful, returned:', response);
            if (response.data === 1)
            {
                $( "#target" ).css( "background-color", "red" );
            }
            else
            {
                $( "#target" ).css( "background-color", "green" );
            }
        },
        error: function (data) {
            console.error('failed get acronyms :(');
        },
        complete: function (data) {
            console.log('finished request');
        }
    });
});