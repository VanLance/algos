<?php

function recurseBsSetup(array $nums, int $target){
    return recurseBS($nums, $target, 0, count($nums) - 1);
}

function recurseBS(array $nums, int $target, int $leftPointer, int $rightPointer){

    if($leftPointer > $rightPointer) return -1;

    $middlePointer = intdiv(($leftPointer + $rightPointer), 2);
    
    if ($nums[$middlePointer] < $target){
        return recurseBS($nums, $target, $middlePointer + 1, $rightPointer);
    }
    elseif ($nums[$middlePointer] > $target ){
        return recurseBS($nums, $target, $leftPointer, $rightPointer -1);
    } else  return $middlePointer;
}

echo recurseBsSetup([1,2,3,4,5],0) . " " . -1 . "\n";
echo recurseBsSetup([1,2,3,4,5],1) . " " . 0 . "\n";
echo recurseBsSetup([1,2,3,4,5],2) . " " . 1 . "\n";
echo recurseBsSetup([1,2,3,4,5],3) . " " . 2 . "\n";
echo recurseBsSetup([1,2,3,4,5],4) . " " . 3 . "\n";
echo recurseBsSetup([1,2,3,4,5],5) . " " . 4 . "\n";
echo recurseBsSetup([1,2,3,4,5,6],6) . " " . 5 . "\n";
echo recurseBsSetup([1,2,3,4,5],7) . " " . -1 . "\n";