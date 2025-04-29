<?php

function isValidAnagram(string $s, string $t)
{
    $letter_hash = [];

        for($i = 0; $i < strlen($s); $i++)
        {
            if(isset($letter_hash[$s[$i]])) $letter_hash[$s[$i]]++;
            else $letter_hash[$s[$i]] = 1;
        }
        
        for($i = 0; $i < strlen($t); $i++)
        {
            if(!isset($letter_hash[$t[$i]])) return false;

            $letter_hash[$t[$i]]--;
            if($letter_hash[$t[$i]] < 0) return false;
        }

        foreach($letter_hash as $k => $v)
        {
            echo $k;
            if( $v != 0) return false;
        }

        return true;
    }