import { INodePropertyOptions } from 'n8n-workflow';
import { properties } from './properties';
import { functions } from './functions';

const option: INodePropertyOptions = {
	name: 'Get List of Companies',
	value: 'list',
	description: 'Gets the list of all Companies',
	routing: {
		request: {
			method: 'POST',
			url: '=/api/ext/company/list',
		},
	},
};

export { option, properties, functions };
