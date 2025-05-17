<?php

function mergeSort(array $nums): array {
    $middleIndex = floor(count($nums) / 2);
    
    $leftHalf = array_slice( $nums, 0, $middleIndex);
    $rightHalf = array_slice( $nums, $middleIndex);
    
    if(count($leftHalf) > 1) {
        $leftHalf = mergeSort($leftHalf);
    }
    if( count($rightHalf) > 1 ){
        $rightHalf = mergeSort($rightHalf);
    }

    $leftPoint = $rightPoint = $numsPoint = 0;
    
    while( $leftPoint < count($leftHalf) && $rightPoint < count($rightHalf)){
        $leftValue = $leftHalf[$leftPoint];
        $rightValue = $rightHalf[$rightPoint];
    
        if( $leftValue < $rightValue ){
            $nums[$numsPoint] = $leftValue;
            $leftPoint++;
        } else {
            $nums[$numsPoint] = $rightValue; 
            $rightPoint++;
        }
        $numsPoint++;
    }
    
    while($leftPoint < count($leftHalf)){
        $nums[$numsPoint] = $leftHalf[$leftPoint];
        $numsPoint++;
        $leftPoint++;
    }

    while($rightPoint < count($rightHalf)){
        $nums[$numsPoint] = $rightHalf[$rightPoint];
        $numsPoint++;
        $rightPoint++;
    }

    return $nums;
}


print_r(mergeSort([8,7,6,4,3,1]));