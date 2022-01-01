import { gql, GraphQLClient } from "graphql-request";
import { IPinnedRepo } from "./types";

export class Client {
	static token: string;
	private static client = new GraphQLClient("https://api.github.com/graphql");

	static setToken(token: string) {
		this.token = token;
		this.client.setHeader("Authorization", `Bearer ${token}`);
	}

	static async getPinnedRepos(username: string) {
		if (!this.token)
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
                                owner {
                                    avatarUrl
                                    id
                                    login
                                    url
                                }
                                licenseInfo {
                                    description
                                    conditions {
                                        key
                                        label
                                        description
                                    }
                                    key
                                    limitations {
                                        label
                                        key
                                        description
                                    }
                                    name
                                    nickname
                                    permissions {
                                        label
                                        description
                                        key
                                    }
                                    pseudoLicense
                                    url
                                }
                                latestRelease {
                                    author {
                                        avatarUrl
                                        bio
                                        createdAt
                                        email
                                        websiteUrl
                                        url
                                        updatedAt
                                        twitterUsername
                                        status {
                                            createdAt
                                            emoji
                                            expiresAt
                                            indicatesLimitedAvailability
                                            message
                                        }
                                        name
                                        login
                                    }
                                    createdAt
                                    description
                                    isDraft
                                    isLatest
                                    isPrerelease
                                    name
                                    publishedAt
                                    updatedAt
                                    url
                                }
                            }
                        }
                    }
                }
            }
        `;

		const res = await this.client.request(query);

		const repos: IPinnedRepo[] = res.user.pinnedItems.nodes.map(
			(node: any) => {
				return {
					name: node.name,
					url: node.url,
					stargazersCount: node.stargazerCount,
					primaryLanguage: node.primaryLanguage,
					description: node.description,
					createdAt: node.createdAt,
					forkCount: node.forkCount,
					homepageUrl: node.homepageUrl,
					id: node.id,
					isArchived: node.isArchived,
					isFork: node.isFork,
					isInOrganization: node.isInOrganization,
					isTemplate: node.isTemplate,
					languages: node.languages.edges.map((edge: any) => {
						return {
							name: edge.node.name,
							id: edge.node.id,
							color: edge.node.color,
						};
					}),
					licenseInfo: {
						description: node.licenseInfo.description,
						key: node.licenseInfo.key,
						name: node.licenseInfo.name,
						pseudoLicense: node.licenseInfo.pseudoLicense,
						url: node.licenseInfo.url,
						permissions: node.licenseInfo.permissions,
						limitations: node.licenseInfo.limitations,
						conditions: node.licenseInfo.conditions,
					},
					latestRelease: node.latestRelease,
				} as IPinnedRepo;
			},
		);

		return repos;
	}
}
