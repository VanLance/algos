package main

type minHeap struct {
	data []int
	length int
}

func (mh *minHeap) add(v int){
	mh.data = append(mh.data, v)
	mh.heapUp(mh.length)
	mh.length++
}

func (mh *minHeap) pop()int{
	out := mh.data[0]
	mh.length--
	mh.heapDown(0)
	return out
}

func (mh minHeap) getRChild(i int)int{
	return i * 2 + 2
}
func (mh minHeap) getLChild(i int)int{
	return i * 2 + 1
}
func (mh minHeap) getParent(i int)int{
	return (i - 1) / 2
}

func (mh *minHeap) heapUp(i int){
	if i == 0{
		return
	}
	parentI := mh.getParent(i)
	parentV := mh.data[parentI]
	currentV := mh.data[i]
	if currentV < parentV {
		mh.data[parentI] = currentV
		mh.data[i] = parentV
		mh.heapUp(parentI)
	}
}

func (mh *minHeap) heapDown(i int){
	lChildInd := mh.getLChild(i)
	rChildInd := mh.getRChild(i)
	if lChildInd >= mh.length{
		return
	}
	lChildV := mh.data[lChildInd]
	if rChildInd == mh.length{
		if lChildV < mh.data[i]{
			mh.data[rChildInd] = mh.data[i]
			mh.data[i] = lChildV
		}
	} else {
		rChildV := mh.data[rChildInd]
		if rChildV < mh.data[lChildInd] && rChildV < mh.data[i] {
			mh.data[rChildInd] = mh.data[i]
			mh.data[i] = rChildV
			mh.heapDown(rChildInd)
			return
		}
		if lChildV < rChildV && lChildV < mh.data[i]{
			mh.data[rChildInd] = mh.data[i]
			mh.data[i] = lChildV
		}
	}
	
}