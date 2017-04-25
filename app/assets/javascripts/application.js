// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
        $(document).ready(function(){
            $('#district_country_id').on('change', function(){
                var value = $('#district_country_id option:selected').val();
               $.ajax(value,{
                   success: function(response){
                       
                   }
                   

               });

            });

            $('#user_country_id').on('change', function(){
                var value = $('#user_country_id option:selected').val();
               $.ajax('updatestates/'+value,{
                   success: function(response){
                       
                   }
                   

               });

            });
            $('#user_state_id').on('change', function(){
                var value = $('#user_state_id option:selected').val();
               $.ajax('updatedistrict/'+value,{
                   success: function(response){
                       
                   }
                   

               });

            });


        });
