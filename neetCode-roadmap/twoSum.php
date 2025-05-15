<?php

function twoSum(array $nums, int $target): array
{
    $sums_hash = [];

    for($i = 0; $i < count($nums); $i++){

        $num = $nums[$i];
        $difference = $target - $num;

        if(isset($sums_hash[$difference])){
            return [$sums_hash[$difference], $i];
        } else {
            $sums_hash[$num] = $i;
        }
    }
}