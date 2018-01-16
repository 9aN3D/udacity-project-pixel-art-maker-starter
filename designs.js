// Select color input


// Select size input


// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
    let inputHight = $('#input_height').val();
    let inputWidth = $('#input_width').val();
    let pixelCanvas =$('#pixel_canvas');
    
    if( (inputHight>=100 || inputHight<0) || (inputWidth>=100 || inputWidth<0)){
        alert('Enter an integer between 1 and 100');
        return true;
    };
    
    $('tr').remove();
    
    for(let i=0; i< inputHight; i++) {
        pixelCanvas.append('<tr></tr>');
        
    };
    
    pixelCanvas.children('tr').each(function() {
        for (let j=0;j<inputWidth;j++) {
            $(this).append('<td class="cell"></td>');
            
        }
    });
    
    /*
    function rgb_to_hex (color) {
        var rgb = color.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
        return (rgb && rgb.length === 4) ? "#" + ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : color;
    };
    
    $('.cell').click( function(evt) {
        let color = $(this).css('background-color');
        let currentColor =$('#colorPicker').val();
        
        currentColor !== rgb_to_hex(color) ? $(evt.target).css( 'background', currentColor): $(evt.target).removeAttr('style');
    });
    */
    
    $('.cell').click( function(evt) {
        let currentColor =$('#colorPicker').val();
        
        $(evt.target).css( 'background', currentColor);
    });
    
    $('.cell').dblclick( function(evt) {
        $(evt.target).removeAttr('style');
    });
    
    $('.cell').mousedown(function(evt){
        let colorMous = $('#colorPicker').val();
        if(evt.buttons){
            $(this).css('background-color',colorMous);
        }
    });
    
    $('.cell').mouseover(function(evt){
        let colorMous = $('#colorPicker').val();
        if(evt.buttons){
            $(this).css('background-color', colorMous);
        }
    });
    
    return false;

};


$('#submit_button').click(makeGrid);



