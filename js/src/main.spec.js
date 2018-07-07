require('./main.js');

​
describe('searchEngine', () => {
  it('should return the initial state', () => {
    expect(searchEngine(undefined, {})).toEqual(
      {
		searched: {
		  results: [],
		  filters: {
			page: 0,
			gender: '',
			status: '',
			species: ''
		  },
		  url: '',							
		  normalisedJSON: {
			genders: [],
			species: [],
			statuses: [],
			types: [],				
			episodes: [],
			locations: [],	  
			geo: {},			
			characters: []				
		  },	
		  prevURL: '',
		  nextURL: '',
		  totalPages: '',			
		}
      }
    )
  })
​

  it('should handle DO_SEARCH', () => {
    expect(
      searchEngine([], {
        type: 'DO_SEARCH'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])
​  })


  it('should go to next page', () => {
	  
	const state = searchEngine({},{type:null});	
	const newState = searchEngine({}, {
        type: 'GO_PREVIOUS'
     });
	  
    expect(newState.page).toBeGreaterThanOrEqual((state.page+1));
​  })
	
	
  it('should go to previous page', () => {	
  
    const state 	= searchEngine({},{type:null});	
	const newState  = searchEngine({}, {
        type: 'GO_PREVIOUS'
     });
	  
    expect(newState.page).toBeLessThanOrEqual((state.page-1));
	
​  })
	

})