// modules/body.js
import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count">0</p>');

$(document).ready(function() {
  let count = 0;

  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  $('button').on('click', _.debounce(updateCounter, 500));
});
