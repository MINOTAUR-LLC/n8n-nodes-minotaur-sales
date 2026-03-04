import { INodeProperties } from 'n8n-workflow';

export const properties: INodeProperties[] = [
	// CONTACT FIELDS
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
				resource: ['contact'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'City',
		name: 'location_locality',
		type: 'string',
		default: '',
		description: 'City names to filter contacts by',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Regions/States',
		name: 'location_region',
		type: 'string',
		default: '',
		description: 'Regions or states to filter contacts by',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Countries',
		name: 'location_country',
		type: 'string',
		default: '',
		description: 'Country names to filter contacts by',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Company Names',
		name: 'company',
		type: 'string',
		default: '',
		description: 'Company names to filter contacts by',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Industries',
		name: 'industry',
		type: 'string',
		default: '',
		description: 'Industries to filter contacts by',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Job Titles',
		name: 'job_title',
		type: 'string',
		default: '',
		description: 'Job titles to filter contacts by',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['list'],
			},
		},
	},

	{
		displayName: 'Postal Codes',
		name: 'location_postal_code',
		type: 'string',
		default: '',
		description: 'Postal codes to filter contacts by',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['list'],
			},
		},
	},
];
