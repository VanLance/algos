import { BSTNode } from "./bst";

function compareTrees(node1: BSTNode<number>|undefined, node2: BSTNode<number>|undefined):boolean{
 if (node1 === undefined && node2 === undefined){
  return true
 }
 if (node1 === undefined || node2 === undefined){
  return false
 } 
 if(node1.value !== node2.value) {
  return false
 }
 return compareTrees(node1.left, node2.left) && compareTrees(node1.right, node2.right) 
}