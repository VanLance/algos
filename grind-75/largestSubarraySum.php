<?php

function largestSubArraySum(array $nums): int{
    $out = $nums[0];
    $maxEnd = $nums[0];

    for( $i = 1; $i < count($nums); $i++){
        $maxEnd = max($maxEnd + $nums[$i], $nums[$i]);
        echo $maxEnd . ': maxEnd\n';
        $out = max($out, $maxEnd);
    }

    return $out;
}


echo largestSubArraySum([4,-1,-3,5,-1,2]);

echo array_sum([4,-1,-2,5,-1,2]);