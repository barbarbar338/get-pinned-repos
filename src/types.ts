export interface ILanguage {
	name: string;
	color: string;
	id: string;
}

export interface ILicenseCondition {
	key: string;
	label: string;
	description: string;
}

export interface ILicenseLimitation extends ILicenseCondition {}

export interface ILicensePermission extends ILicenseCondition {}

export interface ILicense {
	description: string;
	conditions: ILicenseCondition[];
	key: string;
	limitations: ILicenseLimitation[];
	name: string;
	permissions: ILicensePermission[];
	pseudoLicense: boolean;
	url: string;
}

export interface IUserStatus {
	createdAt: string;
	emoji: string;
	expiresAt: string;
	indicatesLimitedAvailability: boolean;
	message: string;
}

export interface IUser {
	avatarUrl: string;
	bio: string;
	createdAt: string;
	email: string;
	websiteUrl: string;
	url: string;
	updatedAt: string;
	twitterUsername: string;
	status: IUserStatus;
	name: string;
	login: string;
}

export interface IRelease {
	author: IUser;
	createdAt: string;
	description: string;
	isDraft: boolean;
	isLatest: boolean;
	isPrerelease: boolean;
	name: string;
	publishedAt: string;
	updatedAt: string;
	url: string;
}

export interface IPinnedRepo {
	name: string;
	url: string;
	stargazersCount: number;
	primaryLanguage: ILanguage;
	description: string;
	createdAt: string;
	forkCount: number;
	homepageUrl: string;
	id: string;
	isArchived: boolean;
	isFork: boolean;
	isInOrganization: boolean;
	isTemplate: boolean;
	languages: ILanguage[];
	licenseInfo: ILicense;
	latestRelease: IRelease;
}
