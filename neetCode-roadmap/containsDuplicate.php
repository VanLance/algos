<?php

function containsDuplicate($nums) {
    $numMap = [];

    foreach($nums as $num){
        if(isSet($numMap[$num])){
            return true;
        }
        else
        {
            $numMap[$num] = true;
        }
    }
    return false;
}