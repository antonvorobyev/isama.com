$(document).ready(function () {

    $("header nav.internal ul li a").each(function () {
        if (this.href == window.location.href) {
            $(this).parent('li').addClass('active');
        }
    });

    $("header nav.internal ul li a").click(function () {
        $('header nav.internal ul li.active').removeClass('active');
        $(this).parent('li').addClass('active');
    });

    //$('#portfolio .categories').quicksand( $('#portfolio .projects > ul > li') );

    //$('#portfolio .projects > ul > li:nth-child(3)').click();

    var $grid,
        $categories,
        categories = [];

    $grid = $('.projects > ul');
    $categories = $('.categories');

    $categories.find('button').on('click', function () {
        var $this = $(this),
            $alreadyChecked,
            checked = [],
            active = 'active',
            isActive;

        // Already checked buttons which are not this one
        $alreadyChecked = $this.siblings('.' + active);

        $this.toggleClass(active);

        // Remove active on already checked buttons to act like radio buttons
        if ($alreadyChecked.length) {
            $alreadyChecked.removeClass(active);
        }

        isActive = $this.hasClass(active);

        if (isActive) {
            checked.push($this.data('categoryFilter'));
        }

        categories = checked;

        filter();
    });

    filter = function () {
        if (hasActiveFilters()) {
            $grid.shuffle('shuffle', function ($el) {
                return itemPassesFilters($el.data());
            });
        } else {
            $grid.shuffle('shuffle', 'all');
        }
    },

        itemPassesFilters = function (data) {


            // If a colors filter is active
            if ((categories.length > 0) && !valueInArray(data.category, categories)) {
                return false;
            }

            return true;
        },

        hasActiveFilters = function () {
            return categories.length > 0;
        },

        valueInArray = function (value, arr) {
            return $.inArray(value, arr) !== -1;
        };

    $grid.shuffle({});

    $('#portfolio .projects > ul > li:nth-child(3) a').click();


    //var $grid = $('#portfolio .projects > ul'),
    //    $sizer = $grid.find('.shuffle__sizer');
    //
    //$grid.shuffle({
    //                  itemSelector: '#portfolio .projects > ul > li',
    //                  sizer: $sizer
    //              });
    //
});