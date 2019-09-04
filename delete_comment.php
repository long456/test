<?php
include_once 'connection.php';

$id_task=$_GET['id_task'];
$delete=$_GET['id_comment'];
$query="DELETE FROM comment where id = '$delete' ";
$stmt = $conn->exec($query);

$query = "select * from comment where task_id ='$id_task' ";
$stmt = $conn->query($query);
$stmt->setFetchMode(PDO::FETCH_ASSOC);
$stmt->execute(array('name' => 'a'));
while ($row = $stmt->fetch()){
    $myObj= new StdClass;
    $myObj->id = $row['id'];
    $myObj->name = $row['name'];
    $myObj->id_task = $row['task_id'];

    $myJSON = json_encode($myObj);

    echo $myJSON;
}

?>