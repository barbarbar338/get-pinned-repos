import { gql, GraphQLClient } from "graphql-request";
import { ILanguage, IPinnedRepo, IRes } from "./types";

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
                            }
                        }
                    }
                }
            }
        `;

		const res = await this.client.request<IRes>(query);

		const repos: IPinnedRepo[] = res.user.pinnedItems.nodes.map((repo) => {
			const languages = (repo.languages as any)?.edges.map(
				(edge: any) => edge.node,
			) as ILanguage[];
			delete repo.languages;
			repo.languages = languages;

			return repo;
		});

		return repos;
	}
}
