<?php

function mergeSort(array $nums): array {

    if(count($nums) <= 1) return $nums;

    $middle = floor(count($nums) / 2);
    $leftHalf = array_slice($nums, 0, $middle);
    $rightHalf = array_slice($nums, $middle);

    $leftHalf = mergeSort($leftHalf);
    $rightHalf = mergeSort($rightHalf);


    $leftPoint = 0;
    $rightPoint = 0;
    $originalPoint = 0;
    

    while($leftPoint < count($leftHalf) && $rightPoint < count($rightHalf))
    {
        $leftValue = $leftHalf[$leftPoint];
        $rightValue = $rightHalf[$rightPoint];

        if($leftValue < $rightValue)
        { 
            $nums[$originalPoint] = $leftValue;
            $leftPoint++;
        }  
        else 
        {
            $nums[$originalPoint] = $rightValue;
            $rightPoint++;
        }

        $originalPoint++;
    }
    while($leftPoint < count($leftHalf))
    {
        $leftValue = $leftHalf[$leftPoint];

        $nums[$originalPoint] = $leftValue;
        $leftPoint++;
        
        $originalPoint++;
    }
    while($rightPoint < count($rightHalf))
    {
        $rightValue = $rightHalf[$rightPoint];

        $nums[$originalPoint] = $rightValue;
        $rightPoint++;
        
        $originalPoint++;
    }

    return $nums;
}

print_r(mergeSort([8,7,4,3,2,1]));