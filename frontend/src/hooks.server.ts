import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import { AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET } from '$env/static/private';

export const { handle } = SvelteKitAuth({
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
	]
});
