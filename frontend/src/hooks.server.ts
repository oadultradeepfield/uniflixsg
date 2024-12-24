import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import { AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET, AUTH_SECRET } from '$env/static/private';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '$lib/prisma';

export const { handle } = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		Google({
			clientId: AUTH_GOOGLE_ID,
			clientSecret: AUTH_GOOGLE_SECRET,
			authorization: {
				params: {
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code'
				}
			}
		})
	],
	secret: AUTH_SECRET,
	trustHost: true
});
