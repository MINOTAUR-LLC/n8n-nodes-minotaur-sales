import {
	NodeConnectionTypes,
	type INodeType,
	type INodeTypeDescription,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';
import { methods } from './Minotaur.methods';
import { properties } from './Minotaur.properties';
import { functions } from './resources';

export class Minotaur implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Minotaur API',
		name: 'minotaur',
		icon: { light: 'file:../../icons/minotaur.svg', dark: 'file:../../icons/minotaur.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Minotaur API',
		defaults: {
			name: 'Minotaur API',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'minotaurApi', required: true }],
		properties,
	};

	methods = methods;
	
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const length = items.length;

		try {
			// Execution based on selected resource and operation
			for (let i = 0; i < length; i++) {
				try {
					switch (resource) {
						case 'contact':
							{
								if (operation in functions.contacts) {
									const result = await functions.contacts[operation].call(this, i);
									returnData.push(...result[0]);
								}
							}
							break;
						case 'company':
							{
								if (operation in functions.companies) {
									const result = await functions.companies[operation].call(this, i);
									returnData.push(...result[0]);
								}
							}
							break;
					}
				} catch (error) {
					if (this.continueOnFail()) {
						const executionData = this.helpers.constructExecutionMetaData(
							this.helpers.returnJsonArray({ error: error.message }),
							{ itemData: { item: i } },
						);
						returnData.push(...executionData);
						continue;
					}
					throw error;
				}
			}
			return [returnData];
		} catch (error) {
			if (this.continueOnFail()) {
				return [this.helpers.returnJsonArray({ error: error.message })];
			}
			throw error;
		}
	}
}
