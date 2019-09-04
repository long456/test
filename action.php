<?php
session_start();
include_once 'connection.php';
    
if(isset($_POST['list-id'])) {
    $_SESSION['list-id']= $_POST['list-id'];
    echo $_SESSION['list-id'];
    
    header("location:master_page.php");
}
if(isset($_POST['new_task'])){
    $list_id=$_SESSION['list-id'];
    $new=$_POST['new_task'];
    $status="no";
    $query = "insert into task(task_name,id_list,status) values (:name,:id,:status)";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':name',$new);
    $stmt->bindParam(':id',$list_id);
    $stmt->bindParam(':status',$status);
    $stmt->execute();
    header("location:master_page.php");
}

if(isset($_POST['task_delete'])){
    $delete=$_POST['task_delete'];
    $query="DELETE FROM task where id = '$delete' ";
    $stmt = $conn->exec($query);
    header("location:master_page.php");
}

if(!isset($_POST['status'])){
    $_POST['status']='no';
    $status=$_POST['status'];
    echo $status;
}else{
echo $_POST['status'];
}
$status=$_POST['status'];
echo $status;
$id_status=$_POST['id-status'];

if(isset($_POST['status'], $_POST['id-status'])){
    $query="UPDATE task SET status='$status' where id = '$id_status' ";
    $stmt = $conn->exec($query);
    header("location:master_page.php");
}

if(isset($_SESSION['a'], $_POST['list_name'])){
    $list_id=$_SESSION['a'];
    $list_name=$_POST['list_name'];

    $query="UPDATE list SET list_name='$list_name' where id = '$list_id' ";
    $stmt = $conn->exec($query);
    header("location:master_page.php");
}
if(isset($_SESSION['list-id'], $_POST['list_name'])){
    $list_id=$_SESSION['list-id'];
    $list_name=$_POST['list_name'];

    $query="UPDATE list SET list_name='$list_name' where id = '$list_id' ";
    $stmt = $conn->exec($query);
    header("location:master_page.php");
}

if(isset($_POST['id_task_change'], $_POST['name_task_change'])){
    $id_task_change=$_POST['id_task_change'];
    $name_task_change= $_POST['name_task_change'];
    $query="UPDATE task SET task_name='$name_task_change' where id = '$id_task_change' ";
    $stmt = $conn->exec($query);
    header("location:master_page.php");
}


if(isset($_POST['id-task-date'], $_POST['task_date'])){
    $id_task_change=$_POST['id-task-date'];
    $task_date= $_POST['task_date'];
    $query="UPDATE task SET date='$task_date' where id = '$id_task_change' ";
    $stmt = $conn->exec($query);
    header("location:master_page.php");
}


// thêm sub task
if(isset($_POST['sub-task'], $_POST['id_task_change'])){
    $task_id=$_POST['id_task_change'];
    $new=$_POST['sub-task'];
    $status="no";
    $query = "insert into sub_task(sub_task_name,id_main_task,status) values (:name,:id,:status)";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':name',$new);
    $stmt->bindParam(':id',$task_id);
    $stmt->bindParam(':status',$status);
    $stmt->execute();
    header("location:master_page.php");
}

// update sub task 
if(isset($_SESSION['id_task'], $_POST['new_sub_task'])){
    $sub_task_id=$_SESSION['a'];
    $sub_task_name=$_POST['new_sub_task'];

    $query="UPDATE sub_task SET sub_task_name='$sub_task_name' where id = '$sub_task_id' ";
    $stmt = $conn->exec($query);
    header("location:master_page.php");

}
// update note
if(isset($_SESSION['id_task'], $_POST['task_note'])){
    $id_task_change=$_SESSION['id_task'];
    $task_note= $_POST['task_note'];
    $query="UPDATE task SET note='$task_note' where id = '$id_task_change' ";
    $stmt = $conn->exec($query);
    header("location:master_page.php");
}


//upload file
if (isset($_FILES['file_upload'])){
    move_uploaded_file($_FILES['file_upload']['tmp_name'],'file_upload/'.$_FILES['file_upload']['name']);
    header("location:master_page.php");
}

if(isset($_POST['id_task'], $_FILES['file_upload'])){
    $file_name=$_FILES['file_upload']['name'];
    $id_task=$_POST['id_task'];
    $query = "insert into file(task_id,link) values (:id,:link)";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':id',$id_task);
    $stmt->bindParam(':link',$file_name);
    $stmt->execute();
    header("location:master_page.php");
}
?>