export default async ({app, params}) => {
	const page = await app.$axios.get('/page-'+params.slug+'.json');
	app.store.commit('SET_LAYOUT', page.data.template);
	app.store.commit('SET_PAGE', page.data);
}