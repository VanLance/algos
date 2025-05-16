<?php

class Node{

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

    function __construct(int $capacity){
        $this->head = null;
        $this->tail = null;
        $this->nodeMap = [];
    }

    public function queue(string $value){
        $node = new Node($value);
        
        if ($this->isOverCapacity()) 
        {
            $nodeKey = $this->removeLeastRecent();
            $this->removeFromMap($nodeKey);
        }
        $this->addToMap($node);

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
    
    private function addToMap(Node $node){}

    private function isOverCapacity(){}

    public function removeLeastRecent():string{
        $out = "";

        return $out;
    }

    private function removeFromMap(string $target):string{
        $out = "";

        return $out;
    }

}