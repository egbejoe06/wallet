import { defineStore } from "pinia";

export const useStore = defineStore("store",{
    state: () => ({
        articles: [],
        selectedArticle: null,
        search: "sports",
      }),
    actions: {
        setSearch(newValue) {
          this.search = newValue;},
          async fetchNews(searchTerm = this.search) { // Use default parameter
            const apiUrl = `https://api.worldnewsapi.com/search-news?api-key=d63b30de905647b0b7405f745cd0072c&text=${searchTerm}&language=en&offset=5&number=20`;
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                this.articles = data.news;
                if (this.articles.length > 0) {
                    this.selectedArticle = this.articles[0];
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        async updateSearchAndFetchNews(newValue) {
            this.setSearch(newValue);
            await this.fetchNews();
        },
        select(article) {
            this.selectedArticle = article;
          },
      },
})