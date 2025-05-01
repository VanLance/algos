<?php

class GroupAnagrams {

    function solution(array $strs): array 
    {
        $sorted_hash = [];
        
        foreach( $strs as $str )
        {
            $str_array = str_split($str);
            sort($str_array);
            $sorted_string =  implode("", $str_array);

            if(!isset($sorted_hash[$sorted_string]))
            {
                $sorted_hash[$sorted_string] = [$str];
            }
            else
            {
                $sorted_hash[$sorted_string][] = $str;
            }
        }
        return array_values( $sorted_hash);
    }

}