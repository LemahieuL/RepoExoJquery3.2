$('#button1').click(function(){
    var number = Number($('#value').val());
    number += 1
    $('#value').attr('value', number)
  })
  $('#button2').click(function(){
      var number = Number($('#value').val());
      number += -1
      $('#value').attr('value', number)
    })
