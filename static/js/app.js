const app = Vue.createApp({
	el: '#app',
	delimiters: ['[[', ']]'],
	data() {
		return {
			tweet: {
				user: '',
				tweet: '',
			},
			tweets: [],
			isLoading: false
		}
	},
	computed: {
		tweetsList() {
			return this.tweets.map(item => {
				return {
					...item,
					tweetdate: new Date(item.tweetdate).toUTCString()
				}
			})
		},
		validate() {
			return this.tweet.user && this.tweet.tweet
		}
	},
	async created() {
		const response =  await fetch('/apis/tweets')
		if (response?.status === 200) {
			this.tweets = await response.json()
		}
	},
	methods: {
		async addNewTweet() {
			this.isLoading = true
			let isValid = this.validate
			if (isValid) {
				let data = this.tweet
				const response = await fetch('/apis/tweets', {
					method: 'POST',
					headers: {
						'Accept': "application/json, text/plain, */*",
						'Content-Type': "application/json;charset=utf-8"
					},
					body: JSON.stringify(data)
				})
				const rData = await response.json()
				if (rData)  {
					this.tweets.push(rData)
				}
			}
			this.isLoading = false
		}
	}
})

app.mount('#app')