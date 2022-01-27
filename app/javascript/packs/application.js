// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import Chart from 'chart.js/auto'
import * as ActiveStorage from "@rails/activestorage"
import "channels"
Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener("turbolinks:load", ()=> {
    const ctx = document.getElementById('myChart');
    const siteData = JSON.parse(document.getElementById('sites_data').dataset.sitesAttr)
    let dataSet = []
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    siteData.forEach((site)=> {
        let plottingData = site.data.map((deal)=> {
           return {x: deal[0], y: deal[1] }
        })
        let color = getRandomColor()
        dataSet.push({label: site.title, backgroundColor: color, borderColor: color, data: plottingData})
    })
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: dataSet
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    }
)