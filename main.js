$(function() {
    $(".result_example").hide();

    $("#search_by_title").submit(function(e) {
        var title = $("#by_title").val();
        e.preventDefault();

        $(".result_example").hide();
        $(".error").hide();

        $('.status').show().html('<div class="text-center"><h5><img src="loader.gif"> Loading...</h5></div>');

        $.ajax({
            url: "api.php",
            type: "POST",
            data: {
                title: title
            },

            success: function(data, status, xhr) {
                $("#by_title").val("");
                $('.status').show();

                var obj = JSON.parse(data);

                if (obj.status == 'false') {
                    $(".error").show().html('<div class="text-center text-danger"><h5><i class="fa fa-info-circle"></i> Movie Not Found Try With Onother Name!</h5></div>');
                } else {
                    $(".result_example").show();
                    $("#result_example").show().html('<div class="col-md-10"><div class="col-md-5"><li class="list-group-item"><b>ID:</b> ' + obj.imdb_id + '</li><li class="list-group-item"><b>Title:</b> ' + obj.title + '</li><li class="list-group-item"><b>Year:</b> ' + obj.year + '</li><li class="list-group-item"><b>Release Date:</b> ' + obj.released + '</li><li class="list-group-item"><b>RunTime:</b> ' + obj.runtime + '</li><li class="list-group-item"><b>Genre:</b> ' + obj.genre + '</li><li class="list-group-item"><b>Director:</b> ' + obj.director + '</li><li class="list-group-item"><b>Writers:</b> ' + obj.writers + '</li></div><div class="col-md-5"><li class="list-group-item"><b>Actors:</b> ' + obj.actors + '</li><li class="list-group-item"><b>Country:</b> ' + obj.country + '</li><li class="list-group-item"><b>Language:</b> ' + obj.language + '</li><li class="list-group-item"><b>Rating:</b> ' + obj.rating + '</li><li class="list-group-item"><b>Votes:</b> ' + obj.votes + '</li><li class="list-group-item"><b>Production:</b> ' + obj.production + '</li></div></div><div class="col-md-2"><img src="' + obj.poster + '"></div>');
                }
            },

            error: function() {
                $('#error').fadeIn(3000).html('<div class="text-center">error here</div>');
            },

            beforeSend: function() {
                $('.status').html('<div class="text-center"><h5><img src="loader.gif"> Loading...</h5></div>');
            },

            complete: function() {
                $(".status").hide();
            }
        }); // Ajax Close
    });
});