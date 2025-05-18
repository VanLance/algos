<?php

namespace algos\php\stack;

class MinStack extends LinkedList {
    private LinkedList $minStack;

    function __construct()
    {
        parent::__construct();
        $this->minStack = new LinkedList();
    }
    public function push($val){
        parent::push($val);

        $this->updateMin($val);
    }

    function pop(){
        parent::pop();
        
        $this->minStack->pop();
    }

    public function updateMin(int $val){
        
        if($this->minStack->head == null){
            $this->minStack->push($val);
        } elseif ($this->minStack->tail == null) {
            $this->minStack->push( 
                $val < $this->minStack->head->value 
                    ? $val 
                    : $this->minStack->head->value
            );
        }else {
            $this->minStack->push( 
                $val < $this->minStack->tail->value 
                    ? $val 
                    : $this->minStack->tail->value
            );
            
        }
    }

    function getMin(){
        return $this->minStack->tail 
            ? $this->minStack->tail->value 
            : $this->minStack->head->value;
    }

}

$minStack = new MinStack();

$minStack->push(4);

print("head: {$minStack->head->value}\n");

$minStack->push(7);

print("head: " . $minStack->head->value . "\n");
print("tail: ". $minStack->tail->value . "\n");

$minStack->push(8);

print("head: " . $minStack->head->value . "\n");
print("tail: ". $minStack->tail->value . "\n");

