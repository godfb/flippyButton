$( document ).ready(function() {
    console.log( "ready!" );
    
    var i = setInterval(check, 1000);
});

function check(){
    console.log( "Checking..." );
    $.ajax({
        url: "/check",
        type: 'POST',
        contentType: 'application/json',    
        success: function (response) {
            console.log('query successful, returned:', response);
            $( "body" ).empty();
            for (var key in response){
                var color;
                if (response[key]) {color = "green";}
                else {color = "red";}
                $( "body" ).append( '<button style="background-color: ' + color + ';" id="target">' + key + "</button>" );
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