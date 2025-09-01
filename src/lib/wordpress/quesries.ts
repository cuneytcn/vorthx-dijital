import { gql } from '@apollo/client';
import { client } from '../apollo.client';
import { Project } from './types';

type ProjectsQueryResult = {
    projects: Project[];
};

async function fetchProjects() {
    const { data } = await client.query<ProjectsQueryResult>({
        query: gql`
            query GetProjects {
                projects {
                    slug
                    title
                    category
                    description
                    longDescription
                    image
                    technologies
                    year
                    status
                    gradient
                    client
                    duration
                    team
                    features
                    challenges
                    solutions
                    results
                    liveUrl
                    githubUrl
                    images
                }
            }
        `,
    });

    if (!data) return [];

    return data.projects;
}

export { fetchProjects };
