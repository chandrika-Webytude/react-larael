$(document).ready(function () {

    $('.admin').click(function (e) {
        e.preventDefault();
        $('.logout').toggleClass('password-show');
    });

    $('.side-nav .navbar-item ,.drop-down-item').click(function (e) {
        // e.preventDefault();
        $('.side-nav .navbar-item , .drop-down-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.dashboard-main .navbar-item').click(function () {
        $('.dashboard-main .navbar-item').removeClass('active');
        $(this).addClass('active');
    });

    $(".toggle-sidebar").click(function () {
        $(this).toggleClass('menu-show');
        $('.main .sidebar-nav').toggleClass('sidebar-show');
    });

    $(".custom-date-trigger").click(function (e) {
        e.preventDefault();
        jQuery(this).closest(".dashboard-nav").find(".custom-date").toggleClass("active");
    });

    $(".pagination .page-link").click(function () {
        $(".pagination .page-link").removeClass("active");
        $(this).addClass("active");
    });

    //disapproved pop up open and close
    $('.popup-open').click(function (e) {
        e.preventDefault();
        $('.popup-form [name="id"]').val($(this).closest("form").find('[name="id"]').val());
        $('.popup-form').css({
            display: 'flex',
        });
    });

    $('.popup-close').click(function (e) {
        e.preventDefault();
        $('.popup-form').hide();
    });

    //approced pop up open and close
    $('.approved-popup-open').click(function (e) {
        e.preventDefault();
        $('.approved-popup-form [name="id"]').val($(this).closest("form").find('[name="id"]').val());
        $('.approved-popup-form').css({
            display: 'flex',
        });
    });

    $('.approved-popup-close').click(function (e) {
        e.preventDefault();
        $('.approved-popup-form').hide();
    });

    $(".weby-datepicker").datepicker({
        dateFormat: 'dd-mm-yy'
    });


    $(".birth-date").datepicker({
        dateFormat: 'dd-mm-yy',
        changeYear: true,
        changeMonth: true,
        yearRange: '-72:-18'
    });

    $("#FromDate").datepicker({
        minDate: 0,
        maxDate: "+60D",
        beforeShowDay: $.datepicker.noWeekends,
        firstDay: 1,
        dateFormat: 'dd-mm-yy',
        onSelect: function (selected) {
            $("#ToDate").datepicker("option", "minDate", selected)
        }
    });
    $("#ToDate").datepicker({
        minDate: 0,
        maxDate: "+90D",
        dateFormat: 'dd-mm-yy',
        beforeShowDay: $.datepicker.noWeekends,
        firstDay: 1,
        onSelect: function (selected) {
            $("#FromDate").datepicker("option", "maxDate", selected)
        }
    });

    $("#FromEditDate").datepicker({
        dateFormat: 'dd-mm-yy',
        firstDay: 1,
        beforeShowDay: $.datepicker.noWeekends,
        onSelect: function (selected) {
            $("#ToEditDate").datepicker("option", "minDate", selected)
        }
    });
    $("#ToEditDate").datepicker({
        dateFormat: 'dd-mm-yy',
        firstDay: 1,
        beforeShowDay: $.datepicker.noWeekends,
        onSelect: function (selected) {
            $("#FromEditDate").datepicker("option", "maxDate", selected)
        }
    });


    $('.drop-down').slideUp();
    $('.drop-down-trigger').click(function (e) {
        if (!$(this).closest('.sidebar-item').hasClass('open')) {
            $(this).closest('.side-nav').find('.sidebar-item').removeClass('open');
            $(this).closest('.side-nav').find('.drop-down').slideUp();
        }

        $(this).closest('.sidebar-item').toggleClass('open');
        $(this).next().slideToggle();
        $('.drop-down').removeClass('subOpen');
    });

    // Drop Down Menu
    $('.sidebar-item').on('mouseenter', function () {
        $(this).find('.drop-down').addClass('subOpen');
    });

    $('.sidebar-item').on('mouseleave', function () {
        $(this).find('.drop-down').removeClass('subOpen');
    });

    $('.drop-down-item').click(function () {
        if (!$(this).closest('.sidebar-item').hasClass('open')) {
            $(this).closest('.side-nav').find('.drop-down').slideUp();
            $(this).closest('.side-nav').find('.sidebar-item').removeClass('open');
        }

        $(this).closest('.sidebar-item').toggleClass('open');
        $(this).closest('.drop-down').slideToggle();
    });

    // RADIO BUTTON VALUE SELECTED AFTER PAGE REFRESH AND STORE AS A COOKIES VALUE
    if (localStorage.selected) {
        $('#' + localStorage.selected).attr('checked', true);
    }
    $('.selected').click(function () {
        localStorage.setItem("selected", this.id);
    });

});


function CheckStatus(val) {
    var element = document.getElementById('status');
    if (val == 'past' || val == 'fired')
        element.style.display = 'block';
    else
        element.style.display = 'none';
}

function YesNoBond() {
    var chkYes = document.getElementById("chkYes");
    var contracts = document.getElementById("contracts");
    contracts.style.display = chkYes.checked ? "block" : "none";
}