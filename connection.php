<?php
    $dsn = 'mysql:host=localhost;dbname=wunderlist';
    $username = 'root';
    $password = '';
    

    try{
        $conn = new PDO($dsn,$username,$password);
        // echo "ok";
    } catch (PDOException $e){
        $error = $e->getMessage();
        echo $error;
    }

?>