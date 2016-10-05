$(function() {


    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Doc a',
            a: 100,
            b: 90
        }, {
            y: 'Doc b',
            a: 75,
            b: 65
        }, {
            y: 'Doc c',
            a: 50,
            b: 40
        }, {
            y: 'Doc d',
            a: 75,
            b: 65
        }, {
            y: 'Doc e',
            a: 50,
            b: 40
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Schools notified', 'Schools Compliant'],
        hideHover: 'auto',
        resize: true
    });
    
});
