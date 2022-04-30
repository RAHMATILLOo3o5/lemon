$(document).ready(function () {
    $('.collap').click(function (e) {
        e.preventDefault();
        $('.collaps').toggleClass('d-none');
        $('collap').toggleClass('d-none');
    });
});