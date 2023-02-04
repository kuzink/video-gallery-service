export default {

	BASE_URL: "http://localhost:8080",

	REDUX_STORE_EVENTS: {

		SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
		RESET_ALERTS: 'RESET_ALERTS',

		SET_ITEMS: 'SET_ITEMS',
		RESET_ITEMS: 'RESET_ITEMS',
		SET_ITEM_NAME: 'SET_ITEM_NAME',
		RESET_ITEM_NAME: 'RESET_ITEM_NAME',
		SET_SEARCH_TEXT: 'SET_SEARCH_TEXT',
		RESET_SEARCH_TEXT: 'RESET_SEARCH_TEXT',
		SET_SORT_BY: 'SET_SORT_BY',
		RESET_SORT_BY: 'RESET_SORT_BY',
		SET_IS_GRID_VIEW: 'SET_IS_GRID_VIEW',

		SET_SLIDES: 'SET_SLIDES',
		RESET_SLIDES: 'RESET_SLIDES',
		SET_RETRIEVE_SLIDES_REQUEST_STATUS: 'SET_RETRIEVE_SLIDES_REQUEST_STATUS'
	},

	PAGE_NUMBER_DEFAULT_VALUE: 1,
	PAGE_SIZE_DEFAULT_VALUE: 24,
	PAGE_SIZE_OPTIONS: [
		{
			value: 6,
			label: 'Show 6'
		},
		{
			value: 12,
			label: 'Show 12'
		},
		{
			value: 18,
			label: 'Show 18'
		},
		{
			value: 24,
			label: 'Show 24'
		},
		{
			value: 'all',
			label: 'Show all'
		}
	],
	SORT_CRITERIA_DEFAULT_VALUE: 'nameUp',
	SORT_CRITERIA_OPTIONS: [
		{
			value: 'nameUp',
			label: 'Sort by name ↑'
		},
		{
			value: 'nameDown',
			label: 'Sort by name ↓'
		},
		{
			value: 'sizeUp',
			label: 'Sort by size ↑'
		},
		{
			value: 'sizeDown',
			label: 'Sort by size ↓'
		}
	],
	SEARCH__DEFAULT_VALUE: ''
};
