<?php
include_once 'connection.php';

$name=$_GET['comment'];
$id_task=$_GET['id_task'];
$query = "insert into comment(name,task_id) values (:name,:id)";
$stmt = $conn->prepare($query);
$stmt->bindParam(':name',$name);
$stmt->bindParam(':id',$id_task);
$stmt->execute();

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