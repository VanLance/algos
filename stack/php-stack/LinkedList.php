<?php

namespace algos\php\stack;

class Node {
    public $value;
    public ?Node $next;
    public ?Node $prev;
    
    function __construct($value){
        $this->value = $value;
        $this->next = null;
        $this->prev = null;
    }   
}

class LinkedList{
    public ?Node $head;
    public ?Node $tail;
    
    function __construct()
    {
        $this->head = null;
        $this->tail = null;
    }
    
    public function push($val){
        $node = new Node($val);
    
        if( $this->head == null){
            $this->head = $node;
        } elseif ( $this->tail == null){
            $this->tail = $node;
            $this->head->next = $node;
            $node->prev = $this->head;
        } else {
            $this->tail->next = $node;
            $node->prev = $this->tail;
            $this->tail = $node;
        }
    }
    
    function pop(){
        if( $this->head == null) {return;}
    
        elseif ($this->tail == null){
            $this->head = null;
        } elseif ($this->tail->prev == $this->head){
            $this->tail = null;
        }else {
            $this->tail = $this->tail->prev;
            $this->tail->next = null;
        }
    }
    function top(){
        if($this->head && !$this->tail){
            return $this->head->value;
        }
        return $this->tail->value;
    }
}