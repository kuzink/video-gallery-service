const VIDEO_CATEGORIES = 'VIDEO_CATEGORIES'; // Be careful when changing, it is used to define videoCategories on server side

export default {

	VIDEO_CATEGORIES: VIDEO_CATEGORIES,

	SIDEBAR_MENU_ITEMS: [
		{
			id: "1",
			title: "Navigation",
			isHead: true
		},
		{
			id: "2",
			type: VIDEO_CATEGORIES,
			title: "Category",
			icon: "bx bxs-category",
			children: []
		},
		{
			id: "6",
			title: "Other",
			icon: "bx bxs-balloon",
			children: [
				{
					id: "7",
					title: "Four"
				},
				{
					id: "8",
					title: "Five"
				},
				{
					id: "9",
					title: "Six"
				}
			]
		},
		{
			id: "10",
			title: "Other",
			isHead: true
		},
		{
			id: "11",
			title: "Cat",
			icon: "bx bxs-cat"
		},
		{
			id: "12",
			title: "Dog",
			icon: "bx bxs-dog"
		},
		{
			id: "13",
			title: "Leaf",
			icon: "bx bxs-leaf"
		},
		{
			id: "14",
			title: "Spa",
			icon: "bx bxs-spa",
		}
	]

};
