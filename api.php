<?php
    
    include('IMDbapi.php');
    $imdb = new IMDbapi('<Insert API Key Here>');

    if(isset($_POST['title']))
    {
        $title_search = $_POST['title'];
        
        // By Title
        echo $data = $imdb->title($title_search,'json');
    }

    // By ID
    $data = $imdb->get('tt0004614','json');  