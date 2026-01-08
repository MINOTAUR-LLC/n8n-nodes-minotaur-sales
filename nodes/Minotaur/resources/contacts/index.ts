import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import * as list from './list';


const operations: INodePropertyOptions[] = [list.option];

export const name = 'Contacts';

const operationSelect: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['contact'],
		},
	},
	default: '',
};

operationSelect.options = operations;

operationSelect.default = operations.length > 0 ? operations[0].value : '';

const properties: INodeProperties[] = [operationSelect, ...list.properties];

const functions = {
	...list.functions
};

const methods = {};

export { properties, methods, functions };
