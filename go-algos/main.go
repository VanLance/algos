package main

import (
	"fmt"
)

func main(){
	// testBsSlice()
	testCb()
}

func testCb(){
	fmt.Println(crystalBall([]bool{false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true}))
	fmt.Println(crystalBall([]bool{false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true}))
}

func testBsSlice(){
	fmt.Println(bs_slice([]int{1,2,3,4,5,6}, 5))
	fmt.Println(bs_slice([]int{1,2,3,4,5,6}, 4))
	fmt.Println(bs_slice([]int{1,2,3,4,5,6}, 2))
	fmt.Println(bs_slice([]int{1,2,3,4,5,6}, 6))
	fmt.Println(bs_slice([]int{1,2,3,4,5,6}, 7))
}