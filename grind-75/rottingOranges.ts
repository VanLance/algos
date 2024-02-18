type coord = {
  dist: number
  seen: boolean
}

function orangesRotting(grid: number[][]): number {
    const distances: {[k:string]: coord} = {}
    let fresh = 0
    for( let i = 0; i < grid.length; i++){
		for( let j = 0; j < grid[i].length; j++){
        distances[JSON.stringify([i,j])] = { dist: Number.POSITIVE_INFINITY, seen: false }
        if (grid[i][j] === 1){
          fresh++
        }
      }
    }
    if (!fresh) return 0

	walk(grid, 0, 0, 0, distances)
	console.log(distances)
	return -1
};

function walk(grid: number[][], x:number, y:number, distance: number, distances: {[k:string]: coord}): void{
	if( x < 0 || x == grid.length || y < 0 || y == grid[x].length) {
		return
	}
	
	const cordString = JSON.stringify([x,y])
	const currentCord = distances[cordString]
	if( currentCord.seen ) {
		return
	}
	
	distances[cordString].seen = true

	if( grid[x][y] === 2 ){
		distances[cordString].dist = 0
	}

	walk(grid, x+1, y, distance, distances)
	walk(grid, x, y+1, distance, distances)
	walk(grid, x-1, y, distance, distances)
	walk(grid, x, y-1, distance, distances)

	const directions = [
		distances[JSON.stringify([x+1, y])],
		distances[JSON.stringify([x, y+1])],
		distances[JSON.stringify([x-1, y])],
		distances[JSON.stringify([x, y-1])]
	]
	let smallest = Number.POSITIVE_INFINITY
	directions.forEach( coord => {
		if (coord){
			smallest = Math.min(coord.dist, smallest)
		}
	})
	distances[cordString].dist = Math.min(smallest + 1, currentCord.dist)

}

orangesRotting([[2,1,1],[1,1,0],[0,1,1]])