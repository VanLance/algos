<?php

function binarySearch(array $nums, int $target ){
    
    $leftPointer = 0;
    $rightPointer = count($nums) -1;

    while ($leftPointer <= $rightPointer){

        $middlePointer = intdiv(($leftPointer + $rightPointer), 2);

        if ($nums[$middlePointer] < $target){
            $leftPointer = $middlePointer + 1;
        }
        elseif ($nums[$middlePointer] > $target){
            $rightPointer = $middlePointer -1;
        }
        else return $middlePointer;
    }

    return -1;
}

echo binarySearch([1,2,3,4,5],0) . " " . -1 . "\n";
echo binarySearch([1,2,3,4,5],1) . " " . 0 . "\n";
echo binarySearch([1,2,3,4,5],2) . " " . 1 . "\n";
echo binarySearch([1,2,3,4,5],3) . " " . 2 . "\n";
echo binarySearch([1,2,3,4,5],4) . " " . 3 . "\n";
echo binarySearch([1,2,3,4,5],5) . " " . 4 . "\n";
echo binarySearch([1,2,3,4,5,6],6) . " " . 5 . "\n";
echo binarySearch([1,2,3,4,5],7) . " " . -1 . "\n";