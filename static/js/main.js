
$('input[name="daterange"]').daterangepicker(
  {
    minYear: 2000,
    maxYear: 3000,
    timePicker: true,
    ranges: {
      Today: [moment(), moment()],
      Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
      "Last 7 Days": [moment().subtract(6, "days"), moment()],
      "Last 30 Days": [moment().subtract(29, "days"), moment()],
      "This Month": [moment().startOf("month"), moment().endOf("month")],
      "Last Month": [
        moment()
          .subtract(1, "month")
          .startOf("month"),
        moment()
          .subtract(1, "month")
          .endOf("month")
      ]
    },
    alwaysShowCalendars: true,
    startDate: "12/01/2015",
    endDate: "01/29/2016",
    opens: "left"
  },
  function(start, end, label) {
    var st = start.valueOf();
    var ed = end.valueOf();
    console.log(typeof st);
    console.log(typeof ed);
    var start_filter = [">=", "uxtm", st];
    var end_filter = ["<", "uxtm", ed];
    console.log(st + " " + ed);
    // $('.three').css('display','block');
    
     map.setFilter('Shelter/Food/Supplies Need',['all',start_filter,end_filter]);
     map.setFilter('Medical/Rescue Help Need',['all',start_filter,end_filter]);
    //map.setFilter('Utility/Infrastructure Problem',['all',start_filter,end_filter]);
  }
);


// $('#daterange').daterangepicker();
$('.daterangepicker').append("<div class='three'><div id='heatmapPlaceholder'><div id='cal-heatmap' style=''></div></div></div>");


$('#daterange').on('show.daterangepicker', function(ev, picker) {
  //do something, like clearing an input
  $('.three').css('display','block');
  console.log("opened");
});
$('#daterange').on('hide.daterangepicker', function(ev, picker) {
  //do something, like clearing an input
  $('.three').css('display','none');
  console.log("closed");
});

// $(".agg_list li").on( "click", function(evt) {
//     console.log('Clicked list. '+this.id);
//     });


// $(document).on("click", 'input[name="daterange"]', function() {
  

//   var display=$('.three').css("display");
//   if (display=='none'){
//     $('.three').css('display','block');
//   }
//   else{
//     $('.three').css('display','none');
//   }
// });


$(document).on("click", "#close_zero", function() {
  // $('#zero_container').empty();
  $(".zero").removeClass("animated slideInRight");
  $(".zero").addClass("animated slideOutRight");
  setTimeout(function() {
    $("#map").css("z-index", "0");
  }, 700);
  // $('#close_zero').css('display','none');
});

$('.two').click(function() {
    $(".zero").removeClass("animated slideInRight");
  $(".zero").addClass("animated slideOutRight");
  setTimeout(function() {
    $("#map").css("z-index", "0");
  }, 700)
});

$('.zero').scroll(function() {
    $('#zero_top').css('top', $(this).scrollTop() + "px");
});


$(document).on("click", ".plus", function(e) {
 
 id='#'+e.target.id.split("-")[1];
 console.log(id);
 var display=$(id).css("display");
 console.log(display);

 if (display=='none'){
  $(id).removeClass("animated fadeOutUp");
 $(id).css("display", "block");
 
 $(this).attr('src', '/static/minus.png');
}
else{
  $(id).addClass("animated fadeOutUp");

  
  setTimeout(function() {
    $(id).css("display", "none");
  }, 600)
  $(this).attr('src', '/static/plus.png');
}
});

$(document).on("click", "#wc_img", function(e){
  // var URL = $.myURL("index", $(this).attr("src"));
  window.open($(this).attr("src"),'_blank','',''); 
});

