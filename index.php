<?php

    if ($_SERVER['REQUEST_METHOD'] == 'POST') 
    {
        $donationmethod = $_POST["method"];
        $fname = $_POST["first-name"];
        $lname = $_POST["last-name"];
        $giftcardvalue = $_POST["value"];
        /*$typeofbasket = $_POST["baskettype"];
        $basketvalue = $_POST["bvalue"];*/
    
    }
    /*$fs = fopen("index.txt", "a");
    fwrite .= ($fs, $donationmethod, $fname, $lname, $giftcardvalue, $typeofbasket, $basketvalue, \n)
    fclose($fs); */

    if(!isset($error)){

        # Title of the CSV
        $Content = "first-name, last-name\n";

        //set the data of the CSV
        $Content .= "$donationmethod, $fname, $lname, $giftcardvalue\n";

        # set the file name and create CSV file
        $FileName = "formdata.csv";
        echo $Content;
        exit();
    
    }
?>