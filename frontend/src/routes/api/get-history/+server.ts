import prisma from '$lib/prisma';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const userEmail = url.searchParams.get('userEmail');

		if (!userEmail) {
			return new Response(JSON.stringify({ error: 'userEmail is required' }), { status: 400 });
		}

		const responseGroups = await prisma.responseGroup.findMany({
			where: { userEmail },
			orderBy: { createdAt: 'desc' }
		});

		return new Response(JSON.stringify(responseGroups), { status: 200 });
	} catch (error) {
		console.error('Error retrieving response groups:', error);
		return new Response(JSON.stringify({ error: 'Failed to retrieve response groups' }), {
			status: 500
		});
	}
};
