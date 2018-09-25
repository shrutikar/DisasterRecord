
var initialHeatmapYear = 1979,
    currentHeatmapYear = 1979,
    fillVolume = function() {
        var heatData = {};
        $.when(
            // // // Fetches the Links & Insert them into the Table
            $.get('/heat', {
                start_date: "2014-12-01", // (+$('input[name="daterange"]').data('daterangepicker').startDate/1000),
                end_date: "2017-12-01", // (+$('input[name="daterange"]').data('daterangepicker').endDate/1000),
                lon: 80.2137836, //ltln.lon,
                lat: 13.0184004,  // ltln.lat
                radius: 500  // radius
            })
            .done(function(data) {
                if (typeof data === 'string') {
                    data = JSON.parse(data);
                }
                data = data['volume'];
                if (data.length > 0) {
                    for (var d in data) {
                        var date = data[d].date.split(/[-T:Z]/ig);
                        if (d === "0") {
                            currentHeatmapYear = initialHeatmapYear = parseInt(date[0]);
                        }
                        heatData[(Date.UTC(date[0], --date[1], ++date[2]) / 1000).toString()] = Math.floor(data[d].count);
                    }
                }
            })).then(function() {
                if (typeof heatData !== 'undefined' && $('#heatmapPlaceholder').length !== 0 &&
                            $('#cal-heatmap').children().length === 0) {
                    var total = _.reduce(heatData,function(num1,num2){ return num1+num2; }),
                        keys = _.keys(heatData),
                        cal = new CalHeatMap(),
                        start_min = new Date(parseInt(keys[0]*1000)),
                        numToDisplay = Math.floor(($("body").width()-100)/105),
                        updateHeatmap = _.debounce( function(){
                            d3.select('#cal-heatmap').remove(); // Removing the calendar from the DOM
                            cal = null; // Deleting the calendar instance
                            cal = new CalHeatMap();
                            $('#heatmapPlaceholder').html('<div id="cal-heatmap" style=""></div>');
                            numToDisplay = Math.floor(($("body").width()-100)/105);
                            drawHeatmap(cal, heatData, start_min, numToDisplay);
                        }, 250);

                    drawHeatmap(cal, heatData, start_min, numToDisplay);
                    var numDataPoints = keys.length;
                    var perDayAvg = total/numDataPoints;
                    var perWeekAvg = perDayAvg*7;
                    var row = '</td><td>'+perDayAvg.toFixed(2)+
                              '</td><td>'+perWeekAvg.toFixed(2)+
                              '</td><td>'+total+
                              '</td></tr>';

                    $('#campaignTableBody').append(row);
                }
        });
    },
    drawHeatmap = function(cal, heatData, start_min, numToDisplay) {
        cal.init({
            itemSelector: '#cal-heatmap',
            start: start_min, // scroll to start
            minDate: start_min,
            range: numToDisplay,
            domain: 'month',
            subDomain: 'day',
            data: heatData,
            itemName: ['Tweet', 'Tweets'],
            cellSize: 15,
            domainDynamicDimension: false,
            tooltip: true,
            highlight: true,
            displayLegend: true,
            legend: [1, 1000, 10000, 100000],
            previousSelector: '#previousSelector-a-previous',
            nextSelector: '#previousSelector-a-next',
            onMinDomainReached: function(hit) {
                if (hit) {
                    $('#previousSelector-a-previous').parent().addClass('disabled');
                    $('#rewind-a-btn').parent().addClass('disabled');
                    $("#lastYear-a-btn").parent().addClass('disabled');
                } else {
                    $('#previousSelector-a-previous').parent().removeClass('disabled');
                    $('#rewind-a-btn').parent().removeClass('disabled');
                    $("#lastYear-a-btn").parent().removeClass('disabled');
                }
            }
        });

        $("#nextYear-a-btn").on("click", function(event) {
            cal.jumpTo(new Date(++currentHeatmapYear, 0));
        });

        $("#lastYear-a-btn").on("click", function(event) {
            cal.jumpTo(new Date(--currentHeatmapYear, 0));
        });

        $("#rewind-a-btn").on("click", function(event) {
            currentHeatmapYear = initialHeatmapYear;
            cal.rewind();
        });

        d3.selectAll(".graph-legend > g")
            .attr("transform", "rotate(0)");
    }

fillVolume();