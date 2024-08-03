import { config } from "./config";

export function useAPI() {
    async function getArticles() {
        const articles = await fetch(`https://dev.to/api/articles?username=${config.username}`).then((res) => res.json());

        return articles;
    }

    return {
        getArticles
    }
}
