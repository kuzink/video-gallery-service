export default {

	BASE_URL: "http://localhost:8080/api",

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

		SET_SIDEBAR_MENU_ACTIVE_ITEM_ID: 'SET_SIDEBAR_MENU_ACTIVE_ITEM_ID',
		RESET_SIDEBAR_MENU_ACTIVE_ITEM_ID: 'RESET_SIDEBAR_MENU_ACTIVE_ITEM_ID'
	},

	PAGE_NUMBER_DEFAULT_VALUE: 1,
	PAGE_SIZE_DEFAULT_VALUE: 12,
	PAGE_SIZE_OPTIONS: [
		{
			value: 4,
			label: 'Show 4'
		},
		{
			value: 8,
			label: 'Show 8'
		},
		{
			value: 12,
			label: 'Show 12'
		},
		{
			value: 20,
			label: 'Show 20'
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
