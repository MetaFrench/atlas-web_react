// Import jQuery
import $ from 'jquery';

// Wait for the document to be ready
$(document).ready(function() {
    // Add elements to the body
    $('body').append('<p>Holberton Dashboard</p>'); // Paragraph element: Holberton Dashboard
    $('body').append('<p>Dashboard data for the students</p>'); // Paragraph element: Dashboard data for the students
    $('body').append('<button id="start-btn">Click here to get started</button>'); // Button element with text
    $('body').append('<p id="count"></p>'); // Paragraph element with id='count'
    $('body').append('<p>Copyright - Holberton School</p>'); // Another paragraph element
});
