/**
 * A 3D column chart with negative values.
 * Tapping or hovering a column will highlight it.
 */
Ext.define('KitchenSink.view.charts.bar3d.Negative', {
    extend: 'Ext.Panel',
    xtype: 'bar-negative-3d',
    requires: ['Ext.chart.theme.Muted'],
    controller: 'bar-negative-3d',
    // <example>
    // Content between example tags is omitted from code preview.
    otherContent: [{
        type: 'Controller',
        path: 'classic/samples/view/charts/bar3d/NegativeController.js'
    }, {
        type: 'Store',
        path: 'app/store/Earnings.js'
    }],
    bodyStyle: 'background: transparent !important',
    layout: 'fit',
    // </example>

    width: 650,
    height: 600,

    tbar: [
        '->',
        {
            text: Ext.os.is.Desktop ? 'Download' : 'Preview',
            handler: 'onDownload'
        }
    ],

    items: {
        xtype: 'cartesian',
        flipXY: true,
        reference: 'chart',
        captions: {
            title: 'Profits and Losses'
        },
        theme: 'muted',
        store: {
            type: 'earnings'
        },
        downloadServerUrl: '//svg.sencha.io',
        innerPadding: '8 0 0 0',
        interactions: ['itemhighlight'],
        animation: false,
        axes: [{
            type: 'numeric3d',
            position: 'bottom',
            fields: 'gaming',
            grid: {
                odd: {
                    fillStyle: 'rgba(255, 255, 255, 0.06)'
                },
                even: {
                    fillStyle: 'rgba(0, 0, 0, 0.05)'
                }
            }
        }, {
            type: 'category3d',
            position: 'left',
            fields: 'quarter',
            grid: true
        }],
        series: [{
            type: 'bar3d',
            xField: 'quarter',
            yField: 'gaming',
            highlightCfg: {
                saturationFactor: 0
            },
            label: {
                fillStyle: 'white',
                fontWeight: 'bold',
                field: 'gaming',
                display: 'insideEnd'
            },
            renderer: 'onSeriesRender'
        }]
    }

});