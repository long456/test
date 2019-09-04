<?php
session_start();
include_once 'connection.php';


?>


<?php

    $id_task=$_GET['id_task'];
    $new=$_GET['name_sub_task'];
    $status="no";
    $query = "insert into sub_task(sub_task_name,id_main_task,status) values (:name,:id,:status)";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':name',$new);
    $stmt->bindParam(':id',$id_task);
    $stmt->bindParam(':status',$status);
    $stmt->execute();

    $query = "select * from sub_task where id_main_task ='$id_task' ";
    $stmt = $conn->query($query);
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $stmt->execute(array('name' => 'a'));
    while ($row = $stmt->fetch()){
        $myObj= new StdClass;
        $myObj->id = $row['id'];
        $myObj->sub_name = $row['sub_task_name'];
        $myObj->id_task = $row['id_main_task'];
        $myObj->status = $row['status'];

        $myJSON = json_encode($myObj);

        echo $myJSON;
    }

?>