
$('#newStickyNote-btn').click(function () {

    var noteTitle = $("#note-title").val();
    var noteCont = $("#note-content").val();

    //Clear out text after adding note
    $("#note-title").val("");
    $("#note-content").val("");

    //append new note as first child
    $('#stickyNotes-row').prepend('<div id=sticky-note class="col-lg-3 col-md-6 col-sm-12">'
        + '<div class="card" mx-auto>'
        + '<div class="card-body">'
        + '<h4 class="card-title">' + noteTitle + '</h4>'
        + '<p class="card-text" style="padding-top: 3rem;">' + noteCont + '</p>'
        + '</div>'
        + '</div>'
        + '</div>');

    //hide modal once user clicks button to add note
    $('#stickyNoteModal').modal('hide');


});

