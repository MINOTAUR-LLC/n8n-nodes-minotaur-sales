import { INodePropertyOptions } from 'n8n-workflow';
import { properties } from './properties';
import { functions } from './functions';

const option: INodePropertyOptions = {
	name: 'Get List of Contacts',
	value: 'list',
	description: 'Gets the list of all Contacts',
	routing: {
		request: {
			method: 'POST',
			url: '=/api/ext/contacts/list',
		},
	},
};

export { option, properties, functions };
