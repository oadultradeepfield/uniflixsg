export const loading = $state({
	is_loading: false
});

export const search_query = $state({
	query: '',
	model_name: 'all-MiniLM-L15-v2'
});

export const query_result = $state({
	result: []
});
