import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class MinotaurApi implements ICredentialType {
	name = 'minotaurApi';

	displayName = 'Minotaur API';

	icon: Icon = { light: 'file:../icons/minotaur.svg', dark: 'file:../icons/minotaur.dark.svg' };

	documentationUrl =
		'https://github.com/MINOTAUR-LLC/n8n-nodes-fetch-contacts?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=X-API-Key {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			// baseURL: 'https://api.minotaursales.io',
			baseURL: 'http://localhost:8005',
			url: '/api/ext/ping',
		},
	};
}
