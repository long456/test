<?php
include_once 'connection.php';

$name=$_GET['list_name'];
$id_user=$_GET['id_user'];
$query = "insert into list(list_name,id_users) values (:name,:id)";
$stmt = $conn->prepare($query);
$stmt->bindParam(':name',$name);
$stmt->bindParam(':id',$id_user);
$stmt->execute();

$query = "select * from list where id_users ='$id_user' ";
$stmt = $conn->query($query);
$stmt->setFetchMode(PDO::FETCH_ASSOC);
$stmt->execute(array('name' => 'a'));
while ($row = $stmt->fetch()){
    $myObj= new StdClass;
    $myObj->id = $row['id'];
    $myObj->name = $row['list_name'];
    $myObj->id_user = $row['id_users'];

    $myJSON = json_encode($myObj);

    echo $myJSON;
}
?>