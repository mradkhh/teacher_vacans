export const getPageCount = async ( totalCount: number, limit: number ) => {
  return Math.ceil(totalCount / limit)
}

export const getPagesArray = ( totalPages: number ) => {
  let results = []
  for ( let i = 1; i <= totalPages; i++ ) {
    results.push(i)
  }

  return results
}