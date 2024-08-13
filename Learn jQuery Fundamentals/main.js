/* $(document).ready(()=> {  // Use .ready() method because it waits 
                         //till the HTML is loaded before adding interactivity wrap all jQuery in here!



 // Targeting by class $('.product-card').show(); 
 
 // Targeting by Class 


 $('#nav-dropdown').hide(); // Targeting by ID

 // jQuery Objects 

 $(document).ready(() => {

  const $navDropdown = $('#nav-dropdown').hide();
  
 });

 // Event Handlers 

 $(document).ready(() => {
  const $menuButton = $('.menu-button');
  const $navDropdown = $('#nav-dropdown');
  $('$menu-button').on('click', ()=> {
    $navDropdown.show();
  })





})
 

}) */

/* Example of jQuery $('.login-button').on('click', () => {
    $('.login-form').toggle();
  }); */





  $(document).ready(() => {
    const $menuButton = $('.menu-button');
    const $navDropdown = $('#nav-dropdown');
  
    $menuButton.on('click', () => {
      $navDropdown.show();
    })
    
    $navDropdown.on('mouseleave', () => {
      $navDropdown.hide();
    })
  })
  
  
  