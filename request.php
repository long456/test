<?php
session_start();
include_once 'connection.php';
?>
  
<?php 
$list_id=$_GET['a'];
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





