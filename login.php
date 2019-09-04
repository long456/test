<?php
session_start();
include_once 'connection.php';

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $pass = $_POST['password'];

    if($name !="" && $pass !="") {

        
        $query = "select * from users where ten=:name and matkhau=:pass";
        
        $stmt = $conn->prepare($query); 

        $stmt->execute(array(':name' => $_POST['name'], ':pass'=> $_POST['password']));

        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        $row = $stmt->fetch();

        $_SESSION['id']=$row['id'];


        if($stmt->rowCount() == 1  ){
            $_SESSION["name"]= $_POST['name'];
            header("location:master_page.php");

        }  else{
            echo 'incorect name or password';
        }   
    }
    else{
        echo 'pls enter name and passowrd';
    }
}



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>login</title>
    <link rel="stylesheet" href="login_wunderlis.css" type="text/css">
</head>
<body>
    <div id="title">This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. Learn more</div>
    <div id="logo"></div>
    <div id=login_tab>
        <form action="login.php" method="post" name="login">
            <div id="base">
                <div class="login_row">
                        <span class="login_icon">
                            <svg width="21px" height="18px" viewBox="0 0 21 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-248.000000, -339.000000)" stroke-linecap="round" stroke="#2B88D9" stroke-linejoin="round">
                                        <g transform="translate(231.000000, 238.000000)">
                                            <g transform="translate(0.000000, 20.000000)">
                                                <g transform="translate(0.000000, 20.000000)">
                                                    <g transform="translate(0.000000, 60.000000)">
                                                        <path d="M37,4.46153846 C37,3.10153846 35.8663333,2 34.4666667,2 L20.5333333,2 C19.1336667,2 18,3.10153846 18,4.46153846 L18,15.5384615 C18,16.8984615 19.1336667,18 20.5333333,18 L34.4666667,18 C35.8663333,18 37,16.8984615 37,15.5384615 L37,4.46153846 L37,4.46153846 Z M20.5333333,4.46153846 L27.5,11.2307692 L34.4666667,4.46153846"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <input type="text" name="name">
                    </div>
                    <div class="login_row">
                        <span class="login_icon">
                            <svg width="21px" height="25px" viewBox="0 0 21 25" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-247.000000, -396.000000)" stroke-linecap="round" stroke="#2B88D9" stroke-linejoin="round">
                                        <g transform="translate(231.000000, 238.000000)">
                                            <g transform="translate(0.000000, 20.000000)">
                                                <g transform="translate(0.000000, 20.000000)">
                                                    <g transform="translate(0.000000, 119.000000)">
                                                        <path d="M36,12.9375 C36,12.144 35.3452308,11.5 34.5384615,11.5 L18.4615385,11.5 C17.6547692,11.5 17,12.144 17,12.9375 L17,21.5625 C17,22.356 17.6547692,23 18.4615385,23 L34.5384615,23 C35.3452308,23 36,22.356 36,21.5625 L36,12.9375 L36,12.9375 Z M19.9230769,11.5 L19.9230769,6.46875 C19.9230769,2.8965625 22.8680769,0 26.5,0 C30.1319231,0 33.0769231,2.8965625 33.0769231,6.46875 L33.0769231,11.5 L19.9230769,11.5 Z M22.8461538,8.625 L22.8461538,6.46875 C22.8461538,4.4835625 24.4816154,2.875 26.5,2.875 C28.5183846,2.875 30.1538462,4.4835625 30.1538462,6.46875 L30.1538462,8.625"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <input type="password" name="password">
                    </div>
                    <div>
                        <button type="submit" name="submit">Đăng nhập</button>
                    </div>
            </div>
        </form>
    </div>
</body>



