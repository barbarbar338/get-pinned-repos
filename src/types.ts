export interface IRes {
	user: {
		pinnedItems: {
			nodes: IPinnedRepo[];
		};
	};
}

export interface ILanguage {
	name: string;
	color: string;
	id: string;
}

export interface IPinnedRepo {
	name: string;
	url: string;
	stargazerCount: number;
	primaryLanguage?: ILanguage;
	description: string;
	createdAt: string;
	forkCount: number;
	homepageUrl: string;
	id: string;
	isArchived: boolean;
	isFork: boolean;
	isInOrganization: boolean;
	isTemplate: boolean;
	languages?: ILanguage[];
}
