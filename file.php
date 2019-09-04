<?php
session_start();
include_once 'connection.php';

$id_task =$_GET['id_task'];

?>


<?php
    $query = "select * from file where task_id ='$id_task' ";
    $stmt = $conn->prepare($query);
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $stmt->execute(array('name' => 'a'));
    while ($row = $stmt->fetch()){
        $myObj= new StdClass;
        $myObj->id = $row['id'];
        $myObj->id_task = $row['task_id'];
        $myObj->link = $row['link'];

        $myJSON = json_encode($myObj);

        echo $myJSON;
    }
?>    


