import { INodeProperties } from 'n8n-workflow';
import { aggregateNodeMethods } from '../helpers/methods';
import * as contacts from './contacts';
import * as companies from './companies';

const resourceSelect: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Contact',
				value: 'contact',
			},
			{
				name: 'Company',
				value: 'company',
			},
		],
		default: 'contact',
	},
];

const properties: INodeProperties[] = [
	...resourceSelect,
	...contacts.properties,
	...companies.properties,
];

const methods = aggregateNodeMethods([
	contacts.methods,
	companies.methods,
]);

const functions = {
	contacts: contacts.functions,
	companies: companies.functions,
}

export { properties, methods, functions };
