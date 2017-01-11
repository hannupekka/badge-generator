$(function() {
    var sheetId = window.location.search.substr(1);
    if (sheetId.length > 0) {
        $("#spreadsheet").val(sheetId);
    }
});