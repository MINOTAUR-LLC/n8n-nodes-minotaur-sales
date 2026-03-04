import { IExecuteFunctions, INodeExecutionData, NodeApiError } from 'n8n-workflow';

async function list(this: IExecuteFunctions, i: number): Promise<INodeExecutionData[][]> {
	const returnData: INodeExecutionData[] = [];

	try {
		const limit = this.getNodeParameter('limit', i) as number;

		const cities = (this.getNodeParameter('location_locality', i) as string[]) ?? [];
		const regions = (this.getNodeParameter('location_region', i) as string[]) ?? [];
		const countries = (this.getNodeParameter('location_country', i) as string[]) ?? [];

		const filters = Object.assign(
			{},
			{
				location_locality: cities ? [cities] : [],
			},
			{
				location_region: regions ? [regions] : [],
			},
			{
				location_country: countries ? [countries] : [],
			},
		);

		const response = await this.helpers.httpRequestWithAuthentication.call(this, 'minotaurApi', {
			method: 'POST',
			url: 'https://api.minotaursales.io/api/ext/company/list',
			body: {
				filters,
				paginate: {
					page: 1,
					limit,
				},
			},
			json: true,
		});

		const results = response || [];

		for (const result of results) {
			returnData.push({
				json: result,
				pairedItem: { item: i },
			});
		}
	} catch (error) {
		if (this.continueOnFail()) {
			returnData.push({
				json: { error: error.message },
				pairedItem: { item: i },
			});
			return [returnData];
		}
		throw new NodeApiError(this.getNode(), error);
	}

	return [returnData];
}

export const functions: {
	[key: string]: (this: IExecuteFunctions, i: number) => Promise<INodeExecutionData[][]>;
} = {
	list,
};
