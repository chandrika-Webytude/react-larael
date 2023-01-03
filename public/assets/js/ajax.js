$(document).ready(function () {

  $('#intime').click(function () {
    $(this).prop('disabled', true);
    $intime = $('#intime').val();
    $.ajax({
      url: "include/attendance-ajax.php",
      method: "POST",
      data: {
        intime: $intime,
      },
      success: function (dataabc) {
        window.location.href = "index.php";
      }
    });
  });

  $('#break_in_time').click(function () {
    $break_in_time = $('#break_in_time').val();
    
    $.ajax({
      url: "include/attendance-ajax.php",
      method: "POST",
      data: {
        break_in_time: $break_in_time,
      },
      success: function (dataabc) {
        window.location.href = "index.php";
      }
    });

  });


  $('#break_out_time').click(function () {
    
    $break_out_time = $('#break_out_time').val();

    $.ajax({
      url: "include/attendance-ajax.php",
      method: "POST",
      data: {
        break_out_time: $break_out_time,
      },
      success: function (dataabc) {
        window.location.href = "index.php";
      }
    });

  });


  $('#outtime').click(function () {
    $outtime = $('#outtime').val();

    $.ajax({
      url: "include/attendance-ajax.php",
      method: "POST",
      data: {
        outtime: $outtime,
      },
      success: function (dataabc) {
        window.location.href = "index.php";
      }
    });

  });
})


