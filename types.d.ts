/**
 * Repo language
 * @property name - Language name code
 * @property color - Language color
 * @property id - Language id in Github database
 */
declare type ILanguage = {
    name: string;
    color: string;
    id: string;
};

/**
 * Pinned Repo type
 * @property name - Repo name
 * @property url - Repo URL
 * @property stargazerCount - Stargazer count
 * @property primaryLanguage - Repo primary language
 * @property description - Repo description
 * @property createdAt - Repo creation date
 * @property forkCount - Repo fork count
 * @property homepageUrl - Repo homepage url
 * @property id - Repo id
 * @property isArchived - Is repo archived?
 * @property isFork - Is repo a fork of another repo?
 * @property isInOrganization - Is repo in an organization?
 * @property isTemplate - Is repo a template?
 * @property languages - All languages used in repo
 */
declare type IPinnedRepo = {
    name: string;
    url: string;
    stargazerCount: string;
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
};

/**
 * Response Type, includes the pinned repos
 * @property user - Github user GQL response
 * @property user.pinnedItems - Github user pinned repo GQL reponse
 * @property user.pinnedItems.nodes - All pinned items
 */
declare type IRes = {
    user: {
        pinnedItems: {
            nodes: IPinnedRepo[];
        };
    };
};

/**
 * Main client class
 */
declare class Client {
    /**
     * Sets the global access token
     * @param token - Github personal access token
     */
    static setToken(token: string): void;
    /**
     * Gets the specified user's pinned repos
     * @param username - User to fetch pinned repos of
     * @returns All pinned repos
     */
    static getPinnedRepos(username: string): IPinnedRepo[];
}

