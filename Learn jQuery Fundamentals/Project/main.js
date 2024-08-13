$(document).ready(()=> {

    $('#cart').on('click',  () =>{
       $('#cartMenu').show();
        $('.dropdown-menu').mouseleave(()=> { 
            $('#cartMenu').hide();
        });
    });
    
    
    $('#account').on('click', () =>{
      $('#accountMenu').show();
        $('.dropdown-menu').mouseleave(()=> { 
            $('#accountMenu').hide();
        });
    });


    $('#help').on('click', () =>{
       $('#helpMenu').show();
        $('.dropdown-menu').mouseleave(()=> { 
            $('#helpMenu').hide(); 
        });
    });
});
