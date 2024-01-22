const { gql, GraphQLClient } = require("graphql-request");

/**
 * Repo language
 * @typedef {Object} ILanguage
 * @property {string} name Language name code
 * @property {string} color Language color
 * @property {string} id Language id in Github database
 */

/**
 * Pinned Repo type
 * @typedef {Object} IPinnedRepo
 * @property {string} name Repo name
 * @property {string} url Repo URL
 * @property {string} stargazerCount Stargazer count
 * @property {ILanguage?} primaryLanguage Repo primary language
 * @property {string} description Repo description
 * @property {string} createdAt Repo creation date
 * @property {number} forkCount Repo fork count
 * @property {string} homepageUrl Repo homepage url
 * @property {string} id Repo id
 * @property {boolean} isArchived Is repo archived?
 * @property {boolean} isFork Is repo a fork of another repo?
 * @property {boolean} isInOrganization Is repo in an organization?
 * @property {boolean} isTemplate Is repo a template?
 * @property {Array<ILanguage>?} languages All languages used in repo
 */

/**
 * Response Type, includes the pinned repos
 * @typedef {Object} IRes
 * @property {Object} user Github user GQL response
 * @property {Object} user.pinnedItems Github user pinned repo GQL reponse
 * @property {Array<IPinnedRepo>} user.pinnedItems.nodes All pinned items
 */

/**
 * @class
 * @classdesc Main client class
 */
class Client {
	static _token;
	static _client = new GraphQLClient("https://api.github.com/graphql");

	/**
	 * Sets the global access token
	 * @param {string} token Github personal access token
	 * @returns {void}
	 */
	static setToken(token) {
		this._token = token;
		this._client.setHeader("Authorization", `Bearer ${token}`);
	}

	/**
	 * Gets the specified user's pinned repos
	 * @param {string} username User to fetch pinned repos of
	 * @returns {Array<IPinnedRepo>} All pinned repos
	 */
	static async getPinnedRepos(username) {
		if (!this._token)
			throw new Error(
				"You must set your GitHub API token first. use setToken(token)",
			);

		const query = gql`
            {
                user(login: "${username}") {
                    pinnedItems(first: 6, types: REPOSITORY) {
                        nodes {
                            ... on Repository {
                                name
                                url
                                stargazerCount
                                primaryLanguage {
                                    name
                                    color
                                    id
                                }
                                description
                                createdAt
                                forkCount
                                homepageUrl
                                id
                                isArchived
                                isFork
                                isInOrganization
                                isTemplate
                                languages(first: 100) {
                                    edges {
                                        node {
                                            name
                                            id
                                            color
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `;

		/**
		 * @type {IRes}
		 * @ignore
		 */
		const res = await this._client.request(query);

		const repos = res.user.pinnedItems.nodes.map((repo) => {
			const languages = repo.languages.edges.map((edge) => edge.node);
			delete repo.languages;
			repo.languages = languages;

			return repo;
		});

		return repos;
	}
}

module.exports = { Client };
