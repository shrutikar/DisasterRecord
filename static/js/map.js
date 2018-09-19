$(function() {
  $(".one").addClass("animated slideInRight");
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2hydXRpa2FyIiwiYSI6ImNqZWVraDN3bTFiNzgyeG1rNnlvbWU5YWEifQ.3Uq8vnAz-XUAyL4YJ60l6Q";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v9",
    center: centroid,
    zoom: 9,
    maxZoom: 15
  });
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var layers = [[150, "#f28cb1"], [20, "#f1f075"], [0, "#51bbd6"]];
  // Disable default box zooming.
  map.boxZoom.disable();

  // Create a popup, but don't add it to the map yet.
  var popup = new mapboxgl.Popup({
    closeButton: false
  });

  map.on("load", function() {
    $("#loadingGif").show();

    var canvas = map.getCanvasContainer();

    // Variable to hold the starting xy coordinates
    // when `mousedown` occured.
    var start;

    // Variable to hold the current xy coordinates
    // when `mousemove` or `mouseup` occurs.
    var current;

    // Variable for the draw box element.
    var box;

    var start_LtLg;
    var end_LtLg;

    // Set `true` to dispatch the event before other functions
    // call it. This is necessary for disabling the default map
    // dragging behaviour.
    canvas.addEventListener("mousedown", mouseDown, true);

    // Return the xy coordinates of the mouse position
    function mousePos(e) {
      var rect = canvas.getBoundingClientRect();
      return new mapboxgl.Point(
        e.clientX - rect.left - canvas.clientLeft,
        e.clientY - rect.top - canvas.clientTop
      );
    }
    map.on("mousedown", function(e) {
      start_LtLg = e.lngLat;
    });
    map.on("mouseup", function(e) {
      end_LtLg = e.lngLat;
    });
    map.on("movestart", function(e) {
      console.log("moveend");
      if (box) {
        box.parentNode.removeChild(box);
        box = null;
      }
    });
    function mouseDown(e) {
      // Continue the rest of the function if the shiftkey is pressed.
      if (!(e.shiftKey && e.button === 0)) return;

      // Disable default drag zooming when the shift key is held down.
      map.dragPan.disable();

      // Call functions for the following events
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("keydown", onKeyDown);

      // Capture the first xy coordinates
      start = mousePos(e);
    }

    function onMouseMove(e) {
      // Capture the ongoing xy coordinates
      current = mousePos(e);

      // Append the box element if it doesnt exist
      if (!box) {
        box = document.createElement("div");
        box.classList.add("boxdraw");
        canvas.appendChild(box);
      }

      var minX = Math.min(start.x, current.x),
        maxX = Math.max(start.x, current.x),
        minY = Math.min(start.y, current.y),
        maxY = Math.max(start.y, current.y);

      // Adjust width and xy position of the box element ongoing
      var pos = "translate(" + minX + "px," + minY + "px)";
      box.style.transform = pos;
      box.style.WebkitTransform = pos;
      box.style.width = maxX - minX + "px";
      box.style.height = maxY - minY + "px";
      // console.log(pos);
    }

    function onMouseUp(e) {
      // Capture xy coordinates
      finish([start, mousePos(e)]);
    }

    function onKeyDown(e) {
      // If the ESC key is pressed
      if (e.keyCode === 27) finish();
    }

    function finish(bbox) {
      // map.off('mousemove',mouseMv);
      // console.log(bbox);
      console.log(start_LtLg);
      console.log(end_LtLg);
      // Remove these events now that finish has been called.
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mouseup", onMouseUp);
      map.dragPan.enable();
      $.ajax({
        url: "/chennai/count",
        data: {
          start_date: +$('input[name="daterange"]').data("daterangepicker")
            .startDate,
          end_date: +$('input[name="daterange"]').data("daterangepicker")
            .endDate,
          min_lat: start_LtLg.lat,
          min_lng: start_LtLg.lng,
          max_lat: end_LtLg.lat,
          max_lng: end_LtLg.lng
        },
        success: function(res) {
          $("#agg_content").css("display", "block");
          $(".list_head").addClass("animated flipInX");

          $("#date_holder").text(new Date($.now()));
          console.log(res);
          console.log(res.animals);
          $(".text_agg_list").empty();
          $(".img_agg_list").empty();
          $(".osm_agg_list").empty();
          $(".text_agg_list").append(
            "<li id=rescue_need> rescue_need => " + res.rescue_need + "</li>"
          );
          $(".text_agg_list").append(
            "<li id=shelter_need> shelter_need => " + res.shelter_need + "</li>"
          );

          $(".img_agg_list").append(
            "<li id=animals> animals <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL/SURBVGhD7dhLyExxGMfxccktGxYukSgWxIaIiOykJClFbiFiQakXCxEppZRcI2XhkixYuOdaSoRSosTGBiUScr99f5qnnk5n5j3nvP/OO5P/rz4188yc/5znzLn8z6nExMTExPzPGYYx6PvvXZOmG97iD+6jE5oyc6AmzFo0ZS7AN/IRI9ALPdEU6Y+f8I14XzEDDZ91sJX+7F573zEXDZ3HsBXeiOvuvad/bTkaMuNgK/oLg9AVOjZkPN7AN3Qa+l5DZR9sBa+qkBId9C/hm9EuqH+vO9o92vJ27ZD5qJXBuATfjDxAu8dfOz6gB1rLLLyALafXhdMZIzEB2lJ6XyTnYCt0WIUM6YIzaFMjOt8fgraeDSTfcAtbMRlZGtNYP2BjaLl60ZijcBn+ty8ic/phJz7BD1LLe2hrn6rjNuz7z9EByYzFftxB2vXlLLLsjpUB2I20QXS1fZ2oFbUJadmAtO/LEbT6z2vmqdOiVjY5wDsshGarSh9Mx2Zcg3az5DL16Nqh4ywtyUa+4B5UT/sHU3MefhDRPq0LWL1ogjcT6zNahlrxjegAL3RSmQjfhBxDmfGNHFehaGbjCmywVSgzwRpR/Ll+tQolJmgjOjvYYDtUKDFBG9kGG0zn7TITtBHNbWwwTfAyn/YCxO/WbW5EU4nfsAFHo4wshv2mBDnR3IUNuEUFF82vdGbzDmAKOqJINKPQhdd+8yaC7AktsEEfqeDyCvZZkj47Ct2eToUevqVJPiXxT1T0NGUIgkTXExtYd2qW4bB6W0yCZRH8Z0GvXXthA2sLW1bC6s+gLb8GmnPVe7yT5BvRQW31Gwh6cnkKG1xbzHISVt+lgoue386Dbph0r6IbIO33RpNFW7ZWI9tVCBU9rbCBZSAs/vjQRDFP/O1qKY0sgQ38RIVq/PGhrdsbeVJ6IydgA+9RoZoVsPpDFXKm9Ea0f9vAC1Soxk8f1GzelN6IriEHq/xN1TRYfakKOaOVtOWHqlCNxrK6pkcxMTExMTEx+VKp/AWRnYzEsg1WlAAAAABJRU5ErkJggg==' height='30px'> => " +
              res.animals +
              "</li>"
          );
          $(".img_agg_list").append(
            "<li id=people>  people <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANuSURBVGhD7ZdZqFZVFIBvYRaZIKUWYin11PSaOURJRopCEEWzjxYYDT5J5NBL4kOESqBhQT0YEoFmSBRBSjT3UGAjNDwYpqGGoIWWfV+cBcvDPv+590Jwhf3BBz9rr7P2vmdYe9+hSqVSqVQqlcpZycV4Nz7Z6G9jZw2X46t4Ek+3NPYKTscxzVw8hO0/oO1BnINjkmvxKOYF/4Kv4xvN7zxm7tU4pjgHP8RY5DF8EI0H5+JSdCzyPsD/nStwNb6Nn+AOfBgnYJtbMRb3Dy7ALm5DcyJ/Pra5CB9B53Ru17AK/f5GxKN4HGOy7K94E2Y2YozvNNDDmxj5zxtIWNs5YjzrmpbjsHgcS0WyFrwBg3cxxnxqfXi3I/8dAw2z8ATGWJeP4UCuxL8wLjiAPtKHcBPmsX04DuVjjPg9BnowJ/I/MgDW+gYj7lwb0Lldw28YY3/iTOxkPUbyfpyKmVvwFEbO7Sh2pYg9baCHNRj5djVZhBFzjpsxcynmV24dduLdicQVBgrk9/tZA2BuxL7HeFIlzsMfMPLd9cWFRcw5SuR57JKdfIeRuMRAgecwcjYbgGno487x3HoDW7Bjkef3cBnKFoy4c5RwTZHjWjvZg5HY9Yq8h5Gz1kCDvyOu5tlqbaUTm9/vY86xvQfPYL62hN9K5Firk6cwEt15r8HMAxjjmo8Z4zG/dn3apn3NgnmYx50r0z45uNZOLsEjGMm22ZfQO7GriYXtO3IB+s3knEGa6zWZvZhznNO5XUPe1w6jax3IHZiLlbRQbn+eAr7AUu4gvcZrg6vQ2qXcrGsciHfoNSxdnP0bV6J4bPgZ87gnYPeAxXhdox+qsd8x5/6Ecay3prXzeMlteD52sh3zBfZzzzq78dsmln0CP2/FXsBJ2IVjuXPpZ2gbzjH9Gp3bNeT9S73hRdxBc6IHtvYhbTbm3betx5vh4k0o1VD/gBsx4yvYbibthvAfX2EkeIE9v8QU9HXIBfVFHCl+xO06P6JzlHBNb2HkfolncD3GoI+w77jcbsO2xd4uUmAy/oG51v04iBmYX7Mztoi7MAY+NdCDm1zk61YcLS9jrnUh9uE3Ffl3Ggj8q5Y1LjQwDPKdvNfAKLkPo45Pdji4xlhve9MeMbZce776f8Ro8aOOOtasVCqVSqVSqVQqAxga+heUObqqkyUf0QAAAABJRU5ErkJggg==' height='30px'> => " +
              res.people +
              "</li>"
          );
          $(".img_agg_list").append(
            "<li id=vehicles> vehicles <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMhSURBVGhD7dhZyA1hHMfxQ3bJmhRZkqVkKeLKciFLKcudhJL1ygVlK8SN3CAXrpRSUrhQShI3b0pCJHu2siWFlOW1fn+n93963vGcOXPOLB31/OpT78w88yxn3nnmmSmFhISEhISEhFTSCX3r0AdNkwk4gidoxZ86fcFt7MAgFB79+vvwG74ONuIzlqGwdMAZ+DqThY0oJNvgNnwHSzEC0fvgAqzcprZ9rnHYjHewcj8wHblmFL7BGj2LbqiWc7CyG7SjSobgKazsA3RFbnE79gK9EZekA1Em4yes/FbkkoWwRkTbtVLPQJQDsPK6+Qcj03SHe+nvY3YCV2HnHGrbF2cJvsLOOYHUmYgtOA/9OlZ50d7gJNZjLBJnOFrgq7QZvIau1FqMhjcDoYK+CnTJ9QQvynP8gq8vrlc4Ck0WlRyGFVAlujK7MQtx02xe6Y9FOIhbiBuYVhl6JpXzGHZgnXY0WTSwxYgb2By0O6AndbNHA9NMp4Wn9fsyKhsyVDv+k0yF9fuDdtQaSGfMhGaMVZiGjsgrqlttqC21OQPqQzTqq9v3dhvRgayAZgi3jOjhOBdZR3W696xRH6LL/cQD2Qv3WJTurdXIKmsQN0PJHlgSDWQB3P16nlzBdWjJbfu/Q2+MaTMJqsvqVRtqS226yxdNt/OhJBrIDdg+/T0MFnX8Gez4aaSN6rD6VPd4WLTquAk7fg3KPwP55GzoYXjJ2ZYxiGYe7Lh+yYspuVfDd+9pvWXHRX10l1QfEfsKqyWDL13QyIeHWlSn6vZFffGdI6dQXv/r1dVXQFdL7+vRDICvfBb0wItGU7L7n+PS077yDqNfQc8KzRxaprg32HJEsxN2/CU036fhTvGqO5qVsOPqm/qovqrP1a5gOcdhJ+o7lF5BtXzWTbgf7uvpLqSNplWrTzOW2lBbuj/14UN9sOPHkDiaEd7DTq7mIXohbVTHI/jacOnLS92vwlrLvIWvQtEgslxkjkTcYNSXKWgouvH0ddF9d7+L7eiBrNMTqvserD29cKkP/ZBJ9M3Jt3jLK2or1+9cISEhISEhIc2ZUukv+v42ygEFkf0AAAAASUVORK5CYII=' height='30px'> => " +
              res.vehicles +
              "</li>"
          );

          $(".osm_agg_list").append(
            "<li id=osm_rescue> osm_rescue => " + res.osm_rescue + "</li>"
          );
          $(".osm_agg_list").append(
            "<li id=osm_shelter> osm_shelter => " + res.osm_shelter + "</li>"
          );

          $(".text_agg_list li").addClass("animated fadeIn");
          $(".osm_agg_list li").addClass("animated fadeIn");
          $(".img_agg_list li").addClass("animated fadeIn");
          //   for (var key in res) {
          //     if (res.hasOwnProperty(key)) {
          //         console.log(key + " => " + res[key]);
          //         $(".agg_list").append("<li id="+key+">"+key + " => " + res[key]+"</li>");
          //     }
          // }
        }
      });
    }

    $(document).on("click", ".text_agg_list li", function() {
      console.log("Clicked list. " + this.id);
      $("#zero_container").empty();
      $(".zero").css("display", "block");
      $(".zero").removeClass("animated slideOutRight");
      $(".zero").addClass("animated slideInRight");
      $("#map").css("z-index", "-1");
      $("#zero_topic").empty();
      if (this.id=="rescue_need"){
        $("#zero_topic").append("<img src='/static/ambulance orange.png' height='35px'> <span id='zero_topic_text'>"+this.id+"</span>");
      }
      else {
      $("#zero_topic").append("<img src='/static/shelter-orange.png' height='30px'> <span id='zero_topic_text'>"+this.id+"</span>");
    }
      $.ajax({
        url: "/chennai/data",
        data: {
          start_date: +$('input[name="daterange"]').data("daterangepicker")
            .startDate,
          end_date: +$('input[name="daterange"]').data("daterangepicker")
            .endDate,
          min_lat: start_LtLg.lat,
          min_lng: start_LtLg.lng,
          max_lat: end_LtLg.lat,
          max_lng: end_LtLg.lng,
          q_str: this.id
        },
        success: function(res) {
          console.log(JSON.parse(res));
          response = JSON.parse(res);
          
          if (response["features"].length == 0) {
            $("#zero_container").append(
              "<h3 id='no_data' class='animated rubberBand'>No Data Avaiable</h3>"
            );
          } else {
            response["features"].forEach(function(featr) {
              console.log(featr.properties.text);
              $("#zero_container").append(
                "<div id='twt_content' class='animated flipInX'>" +
                  featr.properties.text +
                  "</div>"
              );
            });
          }

          //   for (var key in response) {
          //     if (Response.hasOwnProperty(key)) {
          //         // console.log(key + " => " + response[key]);
          //         $(".agg_list").append("<li id="+key+">"+key + " => " + response[key]+"</li>");
          //     }
          // }
        }
      });
    });

    // $(document).on("click", ".osm_agg_list li", function() {
    //   console.log("Clicked list. " + this.id);
    //   $("#zero_container").empty();
    //   $(".zero").css("display", "block");
    //   $(".zero").removeClass("animated slideOutRight");
    //   $(".zero").addClass("animated slideInRight");
    //   $("#map").css("z-index", "-1");

    //   $.ajax({
    //     url: "/chennai/data",
    //     data: {
    //       start_date: +$('input[name="daterange"]').data("daterangepicker")
    //         .startDate,
    //       end_date: +$('input[name="daterange"]').data("daterangepicker")
    //         .endDate,
    //       min_lat: start_LtLg.lat,
    //       min_lng: start_LtLg.lng,
    //       max_lat: end_LtLg.lat,
    //       max_lng: end_LtLg.lng,
    //       q_str: this.id
    //     },
    //     success: function(res) {
    //       console.log(JSON.parse(res));
    //       response=JSON.parse(res);

    //       response['features'].forEach(function (featr) {
    //         console.log(featr.properties.text);
    //         $('#zero_container').append("<div id='twt_content' class='animated bounceIn'>"+featr.properties.text+"</div>")
    //     });

    //       //   for (var key in response) {
    //       //     if (Response.hasOwnProperty(key)) {
    //       //         // console.log(key + " => " + response[key]);
    //       //         $(".agg_list").append("<li id="+key+">"+key + " => " + response[key]+"</li>");
    //       //     }
    //       // }
    //     }
    //   });
    // });

    $(document).on("click", ".img_agg_list li", function() {
      console.log("Clicked list. " + this.id);
      $("#zero_container").empty();
      $("#zero_topic").empty();
      $(".zero").css("display", "block");
      $(".zero").removeClass("animated slideOutRight");
      $(".zero").addClass("animated slideInRight");
      $("#map").css("z-index", "-1");
      
      $("#zero_topic").append("<span id='zero_topic_text'>"+this.id+"</span>");

      $.ajax({
        url: "/chennai/data",
        data: {
          start_date: +$('input[name="daterange"]').data("daterangepicker")
            .startDate,
          end_date: +$('input[name="daterange"]').data("daterangepicker")
            .endDate,
          min_lat: start_LtLg.lat,
          min_lng: start_LtLg.lng,
          max_lat: end_LtLg.lat,
          max_lng: end_LtLg.lng,
          q_str: this.id
        },
        success: function(res) {
          console.log(JSON.parse(res));
          response = JSON.parse(res);
          // console.log(response['features'].length);
          
          if (response["features"].length == 0) {
            $("#zero_container").append(
              "<h3 id='no_data' class='animated rubberBand'>No Data Avaiable</h3>"
            );
          } else {
            response["features"].forEach(function(featr) {
              console.log(featr.properties.image[0].imageURL);
              $("#zero_container").append(
                "<div id='twt_content' class='animated flipInX'>" +
                  featr.properties.text +"<br><img src='"+featr.properties.image[0].imageURL+"' height='100px'>"+
                  "</div>"
              );
            });
          }

          //   for (var key in response) {
          //     if (Response.hasOwnProperty(key)) {
          //         // console.log(key + " => " + response[key]);
          //         $(".agg_list").append("<li id="+key+">"+key + " => " + response[key]+"</li>");
          //     }
          // }
        }
      });
    });

    // map.on('mousemove', function(e) {
    //     popup.setLngLat(e.lngLat)
    //         .setText("Demo")
    //         .addTo(map);
    // });
    $("#loadingGif").hide();
  });
  //----------------------------------------------------------------------

  // ---------------------------------------------------------------------
  var pop = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });
});
