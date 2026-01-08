import { INodeProperties } from 'n8n-workflow';

export const properties: INodeProperties[] = [
	// COMPANY FIELDS
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		required: true,
		description: 'Max number of results to return',
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['list'],
			},
		},
	},
	// {
	// 	displayName: 'Company Name',
	// 	name: 'company_name',
	// 	type: 'string',
	// 	default: '',
	// 	description: 'Company names to filter companies by',
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['company'],
	// 			operation: ['list'],
	// 		},
	// 	},
	// },
	// {
	// 	displayName: 'Industry',
	// 	name: 'industry',
	// 	type: 'string',
	// 	default: '',
	// 	description: 'Industries to filter companies by',
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['company'],
	// 			operation: ['list'],
	// 		},
	// 	},
	// },
	{
		displayName: 'City',
		name: 'location_locality',
		type: 'string',
		default: '',
		description: 'Cities to filter companies by',
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Regions/States',
		name: 'location_region',
		type: 'string',
		default: '',
		description: 'Regions or states to filter companies by',
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Countries',
		name: 'location_country',
		type: 'string',
		default: '',
		description: 'Country names to filter companies by',
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['list'],
			},
		},
	},
];
