$(document).ready(function() {
    $('.main-header__nav-item:first-child').on({
        click: function() {
            $(this).find('.dropdown-menu').toggle();
        }
    });
});