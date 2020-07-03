	const express = require("express");
	const app = express();
	const NewsAPI = require('newsapi');

	//’’に自分のAPIキーを置きます
	const newsapi = new NewsAPI('4604564d66614f37a4aac01e8789d119');

	app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

	//News APIを利用してトップニュースを取得
    app.get("/data", (req, res) => {
      newsapi.v2.topHeadlines({
	    country: 'jp',
	    category: 'general',
	    pageSize: 40
	  }).then(news => res.send(news));
	});

	app.listen(3000, () => console.log('listening on port ' + 3000));
