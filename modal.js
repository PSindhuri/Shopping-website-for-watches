$(document).ready(function() {
    $(".ui-dialog").dialog({
            height: 350,
            width: 500,
            modal: true,
            autoOpen: false,
            buttons: [{text: "Done", click: function() 
               {$(this).dialog('close');}
                      }]
                    });



    
    $('#open').bind('click', function($e) {       
            $("#ui-dialog").dialog('open');
            });
            
    
    });   
