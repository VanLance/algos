<?php

function bubbleSort(Array $nums): array
{
    $isSorted = false;

    while( !$isSorted )
    {
        $i = 0;
        $j = 1;
        $pass = 1;

        while ($j <= count($nums) - $pass)
        {
            $isSorted = true;

            if($nums[$i] > $nums[$j])
            {
                $tempJ = $nums[$j];
                $nums[$j] = $nums[$i];
                $nums[$i] = $tempJ;

                $isSorted = false;
            }
            $i++;
            $j++;
        }
        $pass++;
    }

    return $nums;
}

print_r( bubbleSort([3,1,8,2,10,9]));