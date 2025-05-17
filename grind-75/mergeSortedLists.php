<?php

class ListNode {
    public $val = 0;
    public $next = null;
    function __construct($val = 0, $next = null) {
        $this->val = $val;
        $this->next = $next;
    }
}

class Solution {

    function mergeTwoLists($list1, $list2) {

        if(!$list1 && !$list2) return [];

        $head = null;
        $tail = null;

        $head1 = $list1;
        $head2 = $list2;

        while($head1 || $head2){
            $lesserNode = null;

            if(!$head1) {
                $lesserNode = ($head2);
                $head2 = $head2->next;
            }
            elseif(!$head2) {
                $lesserNode = ($head1);
                $head1 = $head1->next;
            }
            elseif($head1->val < $head2->val){
                $lesserNode = ($head1);
                $head1 = $head1->next;
            } else {
                $lesserNode = ($head2);
                $head2 = $head2->next;
            }

            if(!$head) {
                $head = $lesserNode;
            } elseif (!$tail) {
                $tail = $lesserNode;
                $head->next = $tail;
            } else {
                $tail->next = $lesserNode;
                $tail = $lesserNode;
            }                        
        }
        return $head;
    }
}