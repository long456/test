<?php
session_start();
include_once 'connection.php';
?>
 
<?php

    $list_id=$_GET['a'];
    $new=$_GET['new_task'];
    $status="no";
    $query = "insert into task(task_name,id_list,status) values (:name,:id,:status)";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':name',$new);
    $stmt->bindParam(':id',$list_id);
    $stmt->bindParam(':status',$status);
    $stmt->execute();

    $query = "select * from task where id_list ='$list_id' ";
    $stmt = $conn->query($query);
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $stmt->execute(array('name' => 'a'));
    
    while ($row = $stmt->fetch()){
    $myObj= new StdClass;
    $myObj->id = $row['id'];
    $myObj->name = $row['task_name'];
    $myObj->status = $row['status'];
    $myObj->note = $row['note'];
    $myObj->date = $row['date'];

    $myJSON = json_encode($myObj);

    echo $myJSON;
    }

?>