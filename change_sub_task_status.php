<?php
include_once 'connection.php';


$id_task=$_GET['id_task'];
$status=$_GET['sub'];
$id_sub_task=$_GET['id'];
$query="UPDATE sub_task SET status ='$status' where id ='$id_sub_task' ";
$stmt = $conn->exec($query);

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