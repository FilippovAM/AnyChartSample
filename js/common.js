/**
 * Created by developer on 16.05.2016.
 */
'use strict';

(function () {

    function fib() {
        var n = prompt('Please enter the number of Fibonacci', '');
        var a = 1;
        var b = 1;
        var c = a + b;
        var strFib = '1' + ' 1';

        var el = $('#fib');

        for (var i = 3; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;

            strFib += ' ' + c;
        }

        hideSectionTextBeforeBuildChart(el);
        el.text(strFib);

    }

    var charts = {
        lineChart: function () {

            var el = $('#lineChart');
            var container = el.selector.slice(1);

            anychart.onDocumentLoad(function () {

                var chart = anychart.lineChart([
                    ['January', 10000],
                    ['February', 12000],
                    ['March', 18000],
                    ['April', 11000],
                    ['May', 9000]
                ]);

                chart.title('Line Chart');

                chart.xAxis().title('Sales');
                chart.yAxis().title('Month');

                hideSectionTextBeforeBuildChart(el);
                chart.container(container).draw();

                $('#clear').on('click', function () {
                    chart.dispose();
                    chart = null;
                });
            });

        },
        pieChart: function () {

            var el = $('#pieChart');
            var container = el.selector.slice(1);

            anychart.onDocumentLoad(function () {
                var chart = anychart.pie([
                    ["Chocolate", 5],
                    ["Rhubarb compote", 2],
                    ["Crope Suzette", 2],
                    ["American blueberry", 2],
                    ["Buttermilk", 1]
                ]);

                chart.title("Pie Chart");

                hideSectionTextBeforeBuildChart(el);
                chart.container(container).draw();

                $('#clear').on('click', function () {
                    chart.dispose();
                    chart = null;
                });
            });

        }

    };

    function hideSectionTextBeforeBuildChart(el) {
        el.prev('p').hide();
    }

    $(document).ready(function () {
        fib();

        charts.lineChart();
        charts.pieChart();

        $('#clear').on('click', function () {
            $('#fib').text('');
            $('.wrapper').find('.section').find('p').show();
        });

    });

})();

