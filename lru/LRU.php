<?php

class Node{
    public ?Node $next;
    public ?Node $prev;  

    function __construct(string $value){

        $this->value = $value;
        $this->next = null;
        $this->prev = null;
    }
}

class LRU {
    private ?Node $head;
    private ?Node $tail;
    private array $nodeMap;
    private int $capacity;

    function __construct(int $capacity){
        $this->head = null;
        $this->tail = null;
        $this->nodeMap = [];
        $this->capacity = $capacity;
    }
    
    public function append(string $value){
        
        if(isset($this->nodeMap[$value])){
            $this->updateMostRecent($value);
        }
        else {
            if ($this->isOverCapacity()) 
            {
                $nodeKey = $this->removeLeastRecent();
                $this->removeFromMap($nodeKey);
            }
            $node = $this->addToMap($value);
            $this->queue($node);
        }
    }

    public function queue(Node $node){

        if(!$this->head)
        {
            $this->head = $node;
            $this->tail = $this->head;
            return;
        }
        else
        {
            $tempNode = $this->head;
            $this->head = $node;
            $tempNode->prev = $this->head;
            $this->head->next = $tempNode;
        }
    }

    private function updateMostRecent(string $nodeKey) {
        $nodeUsed = $this->nodeMap[$nodeKey];

        $oldPrevNode = $nodeUsed->prev;
        $oldNextNode = $nodeUsed->next;
        
        $oldPrevNode->next = $oldNextNode;
        $oldNextNode->prev = $oldPrevNode;

        $nodeUsed->next = $this->head;
        $this->head->prev = $nodeUsed;

        $this->head = $nodeUsed;
    }
    
    private function addToMap( string $value ) { 
        $node = new Node($value);
        $this->nodeMap[$value] = new Node($value);

        return $node;
    }

    private function isOverCapacity():bool {
        return count($this->nodeMap) >= $this->capacity;
    }

    public function removeLeastRecent():string{
        $out = "";
        
        if($this->tail){
            $newTail = $this->tail->prev;
            $oldTail = $this->tail;

            $this->tail = $newTail;
            $this->tail->next = null;
            $oldTail->prev = null;

            $out = $oldTail->value;

            $oldTail;
        }

        return $out;
    }

    private function removeFromMap(string $target){
        unset($this->nodeMap[$target]);
    }

}