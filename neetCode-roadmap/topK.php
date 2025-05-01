<?php


function topKElements(array $nums, int $k): array
{
    $numHash = [];
    $output = [];

    foreach( $nums as $num )
    {
        $numHash[$num] = ($numHash[$num] ?? 0) + 1;
    }

    $num = 0;
    while($num < $k)
    {
        $max_occurence = max(array_values($numHash));

        foreach($numHash as $key => $occur)
        {
            if( $occur == $max_occurence && $occur != -1){
                $output[] = $key;
                $numHash[$key] = -1;
                
                $num++;
            } 
        }
        
    
    }
    return $output;
}

print_r(topKElements([1,2,2,3,3,8,3], 2));