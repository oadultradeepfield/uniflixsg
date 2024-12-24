import prisma from '$lib/prisma';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { query, result, userEmail } = await request.json();

		const existingGroup = await prisma.responseGroup.findFirst({
			where: {
				userEmail,
				responsesName: query
			}
		});

		if (existingGroup) {
			return new Response(JSON.stringify(existingGroup), { status: 200 });
		}

		const responseCount = await prisma.responseGroup.count({
			where: { userEmail }
		});

		if (responseCount >= 10) {
			const oldestGroup = await prisma.responseGroup.findFirst({
				where: { userEmail },
				orderBy: { createdAt: 'asc' }
			});

			if (oldestGroup) {
				await prisma.responseGroup.delete({
					where: { id: oldestGroup.id }
				});
			}
		}

		const newResponseGroup = await prisma.responseGroup.create({
			data: {
				userEmail,
				responsesName: query,
				responses: result
			}
		});

		return new Response(JSON.stringify(newResponseGroup), { status: 200 });
	} catch (error) {
		console.error('Error saving to database:', error);
		return new Response(JSON.stringify({ error: 'Failed to save response group' }), {
			status: 500
		});
	}
};
