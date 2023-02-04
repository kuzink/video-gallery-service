import RequestStatus from "../constants/RequestStatus";

export const initialAlert = {
	message: '',
	isError: false
};

export const initialItems = {
	items: [],
	page: {},
	itemName: '',
	searchText: '',
	sortBy: '',
	isGridView: true
};

export const initialRetrieveSlidesRequest = {
	status: RequestStatus.LOADING
};
export const initialSlides = {
	retrieveSlidesRequest: initialRetrieveSlidesRequest,
	slides: []
};