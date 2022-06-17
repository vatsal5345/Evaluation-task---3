$(document).ready(function () {
  $('#myform').validate({
    
    rules: {
      name: {
        required: true,
        minlength: 3,
        name_val: true
      },
      age : {
        required:true,
        min:18,
        max:25,
        age_val:true
      },
      email: {
        required: true,
        email1:true
      },
      phone: {
        required: true,
        phone_val:true
      },
      gender: {
        required: true
      },
      pickupTime1 :{

        fun1 : true
      },
      pickupTime2 :{
        fun2 : true
      },
      pickupTime3 :{
        fun3 : true
      },
      pickupTime4 :{
        fun4 : true
      },
      pickupTime5 :{
        fun5 : true
      },
      
      pickupTime6 :{
        fun6 : true
      },
      pickupTime7 :{
        fun7 : true
      },
      nextday:{
        required:true
        // nextday_val:true
      }
      
      
      
    },
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.insertAfter("#other1");
      }
      else { // This is the default behavior of the script for all fields
        error.insertAfter(element);
      }
    },
    

  })
  debugger
  $.validator.addMethod('name_val',function(value){
    return /^[a-zA-Z ]*$/.test(value);
  }, "Please enter a valid name");

  $.validator.addMethod('age_val',function(value){
    return /^[0-9]*$/.test(value);
  }, "Please enter a valid age");

  $.validator.addMethod('email1',function(value){
    return  /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@tntra([\.])io/.test(value);
  }, "Please enter a valid Email address");
  $.validator.addMethod('phone_val',function(value){
    return /[1-9]{1}[0-9]{9}$/.test(value); 
  }, 'Please enter a valid phone number');



  $.validator.addMethod('fun1',function(value){
    // event.preventDefault();
    return $('#sunday').val()=='on' && $('#pickupTime1').val() != 'None';
}, 'Please enter Pick up time');
$.validator.addMethod('fun2',function(value){
  // event.preventDefault();
  return $('#monday').val() == 'on' && $('#pickupTime2').val() != 'None';
}, 'Please enter Pick up time');
$.validator.addMethod('fun3',function(value){
  // event.preventDefault();
  return $('#tuesday').val() == 'on' && $('#pickupTime3').val() != 'None';
}, 'Please enter Pick up time');
$.validator.addMethod('fun4',function(value){
  // event.preventDefault();
  return $('#wednesday').val() == 'on' && $('#pickupTime4').val() != 'None';
}, 'Please enter Pick up time');
$.validator.addMethod('fun5',function(value){
  // event.preventDefault();
  return $('#thrusday').val() == 'on' && $('#pickupTime5').val() != 'None';
}, 'Please enter Pick up time');
$.validator.addMethod('fun6',function(value){
  // event.preventDefault();
  return $('#friday').val() == 'on' && $('#pickupTime6').val() != 'None';
}, 'Please enter Pick up time');
$.validator.addMethod('fun7',function(value){
  // event.preventDefault();
  return $('#saturday').val() == 'on' && $('#pickupTime7').val() != 'None';
}, 'Please enter Pick up time');
$.validator.addMethod('nextday_val',function(value){
  // event.preventDefault();
  if ($('#nextday').checked == true ){
      return false;
  }

}, 'Please select time');
  




 
  
  
  $(function() {
    enable_cb();   // this function will enable all the days
    $("#nextday").click(enable_cb);
    disable_cb();
    $('#nextday').click(disable_cb);
  });
  
function enable_cb() {
    if (this.checked) {
        $("#sunday").removeAttr("disabled");
        $("#monday").removeAttr("disabled");
        $("#tuesday").removeAttr("disabled");
        $("#wednesday").removeAttr("disabled");
        $("#thrusday").removeAttr("disabled");
        $("#friday").removeAttr("disabled");
        $("#saturday").removeAttr("disabled");
    } 
}
function disable_cb(){
    if (!this.checked){
        $("#sunday").attr('disabled',true);
        $("#monday").attr('disabled',true);
        $("#tuesday").attr('disabled',true);
        $("#wednesday").attr('disabled',true);
        $("#thrusday").attr('disabled',true);
        $("#friday").attr('disabled',true);
        $("#saturday").attr('disabled',true);
        $('#pickupTime1').attr('disabled',true);
        $('#pickupTime2').attr('disabled',true);
        $('#pickupTime3').attr('disabled',true);
        $('#pickupTime4').attr('disabled',true);
        $('#pickupTime5').attr('disabled',true);
        $('#pickupTime6').attr('disabled',true);
        $('#pickupTime7').attr('disabled',true);
    }
}



//   now enable each select time based on the day is cheked or not
$(function(){
    enable_cb1();  // this function will enable sunday pickup time
    $('#sunday').click(enable_cb1);
    disable_cb1();
    $("#sunday").click(disable_cb1)
});

function enable_cb1(){
    if (this.checked){
        $('#pickupTime1').removeAttr('disabled');
    }
}
function disable_cb1(){
    if(!this.checked){
        $('#pickupTime1').attr('disabled',true);
    }
}

$(function(){
    enable_cb2();  // this function will enable sunday pickup time
    $('#monday').click(enable_cb2);
    disable_cb2();
    $("#monday").click(disable_cb2)
});

function enable_cb2(){
    if (this.checked){
        $('#pickupTime2').removeAttr('disabled');
    }
}
function disable_cb2(){
    if(!this.checked){
        $('#pickupTime2').attr('disabled',true);
    }
}

$(function(){
    enable_cb3();  // this function will enable sunday pickup time
    $('#tuesday').click(enable_cb3);
    disable_cb1();
    $("#tuesday").click(disable_cb3)
});

function enable_cb3(){
    if (this.checked){
        $('#pickupTime3').removeAttr('disabled');
    }
}
function disable_cb3(){
    if(!this.checked){
        $('#pickupTime3').attr('disabled',true);
    }
}

$(function(){
    enable_cb4();  // this function will enable sunday pickup time
    $('#wednesday').click(enable_cb4);
    disable_cb4();
    $("#wednesday").click(disable_cb4)
});

function enable_cb4(){
    if (this.checked){
        $('#pickupTime4').removeAttr('disabled');
    }
}
function disable_cb4(){
    if(!this.checked){
        $('#pickupTime4').attr('disabled',true);
    }
}

$(function(){
    enable_cb5();  // this function will enable sunday pickup time
    $('#thrusday').click(enable_cb5);
    disable_cb1();
    $("#thrusday").click(disable_cb5)
});

function enable_cb5(){
    if (this.checked){
        $('#pickupTime5').removeAttr('disabled');
    }
}
function disable_cb5(){
    if(!this.checked){
        $('#pickupTime5').attr('disabled',true);
    }
}

$(function(){
    enable_cb6();  // this function will enable sunday pickup time
    $('#friday').click(enable_cb6);
    disable_cb6();
    $("#saturday").click(disable_cb6)
});

function enable_cb6(){
    if (this.checked){
        $('#pickupTime6').removeAttr('disabled');
    }
}
function disable_cb6(){
    if(!this.checked){
        $('#pickupTime6').attr('disabled',true);
    }
}

$(function(){
    enable_cb7();  // this function will enable sunday pickup time
    $('#saturday').click(enable_cb7);
    disable_cb7();
    $("#saturday").click(disable_cb7)
});

function enable_cb7(){
    if (this.checked){
        $('#pickupTime7').removeAttr('disabled');
    }
}
function disable_cb7(){
    if(!this.checked){
        $('#pickupTime7').attr('disabled',true);
    }
}

// location.href='../html/page2.html'  
});
 
$('#myform').submit(function (event) {
  event.preventDefault();

  if(
      $('#name').valid() &&
      $('#age').valid() &&
      $('#phone').valid() &&
      $('#email').valid() &&
      $("input[name='gender']:checked").val() != undefined &&
      (
      $('#pickupTime1').valid() ||
      $('#pickupTime2').valid() ||
      $('#pickupTime3').valid() ||
      $('#pickupTime4').valid() ||
      $('#pickupTime5').valid() ||
      $('#pickupTime6').valid() ||
      $('#pickupTime7').valid() 
      )
      )
  {
    // debugger
    localStorage.setItem('name',$('#name').val());
    localStorage.setItem('age',$('#age').val());
    localStorage.setItem('email',$('#email').val());
    localStorage.setItem('phone',$('#phone').val());
    localStorage.setItem('gender',$("input[name='gender']:checked").val());
      if($('#nextday').prop('checked')== true){
          if($('#sunday').prop('checked')==true && $('#pickupTime1').val() != 'None'){
              
              localStorage.setItem('sunday',$('#pickupTime1').val());    
          }
          if($('#monday').prop('checked') == true && $('#pickupTime2').val() != 'None'){
            // localStorage.setItem('name',$('#name').val());
            // localStorage.setItem('age',$('#age').val());
            // localStorage.setItem('email',$('#email').val());
            // localStorage.setItem('phone',$('#phone').val());
            // localStorage.setItem('gender',$("input[name='gender']:checked").val());
            localStorage.setItem('monday',$('#pickupTime2').val());    
          }
          if($('#tuesday').prop('checked') == true && $('#pickupTime3').val() != 'None'){
            // localStorage.setItem('name',$('#name').val());
            // localStorage.setItem('age',$('#age').val());
            // localStorage.setItem('email',$('#email').val());
            // localStorage.setItem('phone',$('#phone').val());
            // localStorage.setItem('gender',$("input[name='gender']:checked").val());
            localStorage.setItem('tuesday',$('#pickupTime3').val());    
          }
          if($('#wednesday').prop('checked')==true && $('#pickupTime4').val() != 'None'){
            // localStorage.setItem('name',$('#name').val());
            // localStorage.setItem('age',$('#age').val());
            // localStorage.setItem('email',$('#email').val());
            // localStorage.setItem('phone',$('#phone').val());
            // localStorage.setItem('gender',$("input[name='gender']:checked").val());
            localStorage.setItem('wednesday',$('#pickupTime4').val());    
          }
          if($('#thrusday').prop('checked')==true && $('#pickupTime5').val() != 'None'){
            // localStorage.setItem('name',$('#name').val());
            // localStorage.setItem('age',$('#age').val());
            // localStorage.setItem('email',$('#email').val());
            // localStorage.setItem('phone',$('#phone').val());
            // localStorage.setItem('gender',$("input[name='gender']:checked").val());
            localStorage.setItem('thrusday',$('#pickupTime5').val());    
          }
          if($('#friday').prop('checked')==true && $('#pickupTime6').val() != 'None'){
            // localStorage.setItem('name',$('#name').val());
            // localStorage.setItem('age',$('#age').val());
            // localStorage.setItem('email',$('#email').val());
            // localStorage.setItem('phone',$('#phone').val());
            // localStorage.setItem('gender',$("input[name='gender']:checked").val());
            localStorage.setItem('friday',$('#pickupTime6').val());    
          }
          if($('#saturday').prop('checked') == true && $('#pickupTime7').val() != 'None'){
            // localStorage.setItem('name',$('#name').val());
            // localStorage.setItem('age',$('#age').val());
            // localStorage.setItem('email',$('#email').val());
            // localStorage.setItem('phone',$('#phone').val());
            // localStorage.setItem('gender',$("input[name='gender']:checked").val());
            localStorage.setItem('saturday',$('#pickupTime7').val());    
        }
        location.href='../html/page2.html'
        } 
  }


});


  
  
  
  
  

  