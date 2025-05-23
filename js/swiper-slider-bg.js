
(function($) {
	'use strict';
      
     /* --------------------------------------------------
      * custom background
      * --------------------------------------------------*/
     function custom_bg() {
        
         $(".jsbg").css('background', function() {
            if ($(this).is('[data-bgimage]')) {
                jQuery(this).addClass("bgcustom");
            }
             return jQuery(this).data('bgimage');
         });
         $(".jsbg").css('background-size', function() {
             return 'cover';
         });

         $(".jsbg").css('background-repeat', function() {
             return 'no-repeat';
         });
          $(".jsbg").css('background-position', function() {
             return 'top center';
         });
     }
    

     $(function(){
           
         custom_bg();
    		
     });

    
 })(jQuery);