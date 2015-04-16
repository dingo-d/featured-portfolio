jQuery(document).ready(function($) {

    var $content = $(".featured_portfolio");
    var $loaded_content = $("#portfolio_content_details");
    var $item_selector = $(".featured_item");
    var $close = $("#close_wrapper");

    $('#close_wrapper').on('click', function() {
        $loaded_content.slideToggle('slow').removeClass("open");
        $('#pointer').hide();
    });

    $content.imagesLoaded( function() {
        $item_selector.on('click', function(){
            var $this = $(this);
            leftOffset = parseInt($this.offset().left+$this.width()/2, 10);
            $('#pointer').css({'left': leftOffset, 'display': 'inline-block'});

            var element_number = $this.data('number');
            var insert_after = (Math.ceil(element_number/4)*4)-1;

            $loaded_content.detach().insertAfter($item_selector.eq(insert_after));

            var thumbnail = $this.data('thumbnail');
            var name = $this.data('name');
            var link_to = $this.data('link_to');
            var date = $this.data('date');
            var description = $this.data('description');
            var cat = $this.data('cat');
            var client = $this.data('client');
            var skills = $this.data('skills');

            $loaded_content.find('.gallery_post_image').html(thumbnail);
            $loaded_content.find('.gallery_post_title').html(name);
            $loaded_content.find('.gallery_post_linkto a').attr("href", link_to);
            $loaded_content.find('.gallery_post_date').html(date);
            $loaded_content.find('.gallery_post_description p').html(description);
            $loaded_content.find('.gallery_post_category .cat_names').html(cat);
            $loaded_content.find('.gallery_post_client .client_names').html(client);
            $loaded_content.find('.gallery_post_skill .skills_names').html(skills);

            if (!$this.hasClass("current")) {
                $this.addClass("current");
                $loaded_content.slideDown('slow').addClass("open");
            } else{
                $(".current").removeClass("current");
                $loaded_content.slideUp('slow').removeClass("open");
            }

            setTimeout(function(){
                $('html, body').animate({
                    scrollTop: $loaded_content.offset().top-300}, 500);
            }, 500);

        });

    });

});
