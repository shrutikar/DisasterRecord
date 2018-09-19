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
    // map.setFilter('Shelter/Food/Supplies Need',['all',start_filter,end_filter]);
    // map.setFilter('Medical/Rescue Help Need',['all',start_filter,end_filter]);
    //map.setFilter('Utility/Infrastructure Problem',['all',start_filter,end_filter]);
  }
);

// $(".agg_list li").on( "click", function(evt) {
//     console.log('Clicked list. '+this.id);
//     });



$(document).on("click", "#close_zero", function() {
  // $('#zero_container').empty();
  $(".zero").removeClass("animated slideInRight");
  $(".zero").addClass("animated slideOutRight");
  setTimeout(function() {
    $("#map").css("z-index", "0");
  }, 700);
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
