const $ = s => document.querySelector(s)
const boxEl = $('#box')

$('#coverColor').oninput = function (e) {
    $('.cover-bg').style.background = e.target.value
}

$('#boxW').oninput = width
$('#boxWNum').oninput = width

function width(e) {
    boxEl.style.width = e.target.value + 'px'
    $('#boxW').value = e.target.value
    $('#boxWNum').value = e.target.value
}