/*This file was created to test the posted jobs page
Ensuring that a new job is added with the card layout and that even adding multiple
cards still work with the grid properly and is responsive */

//This function can be used or if you prefer your own with vanilla javascript syntax

$('#newStickyNote-btn').click(function () {

    var noteTitle = $("#note-title").val();
    var noteCont = $("#note-content").val();

    //Clear out text after posting job
    $("#note-title").val("");
    $("#note-content").val("");

    //append new job as first child
    $('#stickyNotes-row').prepend('<div id=sticky-note class="col-lg-3 col-md-6 col-sm-12">'
        + '<div class="card" mx-auto>'
        + '<div class="card-body">'
        + '<h4 class="card-title">' + noteTitle + '</h4>'
        + '<p class="card-text" style="padding-top: 3rem;">' + noteCont + '</p>'
        //email of course will be modified later to be only visible when employer hires a student 
        //otherwise nobody can see it
        + '</div>'
        + '<div class= "note-options" >'
        + '<span data-toggle="tooltip" data-placement="bottom" title="Delete Note" id="deleteNote-btn">'
        + '<i class="fas fa-trash-alt option-icon"></i>'
        + '</span>'
        + '</div >'
        + '</div>'
        + '</div>');

    //hide modal once user clicks button to post job
    $('#stickyNoteModal').modal('hide');

    $('#deleteNote-btn').click(function () {
        $('#sticky-note').remove();
    });
});


$('#deleteNote-btn').click(function () {
    $('#sticky-note').remove();
})
