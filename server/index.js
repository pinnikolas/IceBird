const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/api", (req, res) => {
    return res.json(
      [{
        friendsList: [{
            imgUrl: "https://sun9-87.userapi.com/impg/N4Lc16UToQFI9P7M3zaB1mQziNvtZzbnQpyqhg/OawMOfoW8cQ.jpg?size=320x320&quality=96&sign=80d419ff4265d1d1777c1d3cf2e4b356&c_uniq_tag=O_5m2M9zvls1X-Lt1RSQI33-5oR0U6DKHYRlhmZ6mFE&type=album",
            name: "Maxim",
            surname: "Kyzuk",
            id: 1,
          },
          {
            imgUrl: "https://sun1.velcom-by-minsk.userapi.com/s/v1/ig2/IoYQ3E9b2ZPl8O-HDVLcPJThkqehKFh3GBoTw6dkfxxHtrr9d5YxCKtF_FQpoM11JxZbu7EZd3PrKexknOWCHeV1.jpg?size=100x100&quality=96&crop=370,401,999,999&ava=1",
            name: "Nikita",
            surname: "Kot",
            id: 2,
          },
          {
            imgUrl: "https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/DxVcZXRjbySW-kU4ocDGaKezV2VrhKVgmTjWzqyHQZfqSq2JBitKdUC8coF5cDdS5I7NHS6KWDfwHIDyQSD6AA0B.jpg?size=100x100&quality=95&crop=2,227,958,958&ava=1",
            name: "German",
            surname: "Orekhva",
            id: 3,
          },
          {
            imgUrl: "https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/haZ97KHV4nfvC1Hok7M7MBVYfASfIa7LN1f8KMjUp1qa1NjnmTBfjzibYfgEhL4B8JgC4cM7_2Xx0CznCm6jhY7b.jpg?size=100x100&quality=95&crop=435,0,999,999&ava=1",
            name: "Dmitry",
            surname: "Davydkin",
            id: 4,
          },
          {
            imgUrl: "https://sun1.velcom-by-minsk.userapi.com/s/v1/ig2/hHYgXBpRPgZHRKD9vdK44o-FhksipbD4BbiJAX3nM9Ld0vwO4S4E84BdRrDe3wqlwdiltcehaEGJh5jmvPnPJEgU.jpg?size=100x100&quality=95&crop=160,312,938,938&ava=1",
            name: "Natalya",
            surname: "Metelskaya",
            id: 5,
          },
          {
            imgUrl: "https://sun1.velcom-by-minsk.userapi.com/s/v1/ig2/sgJxEFYHLSK_Nx6YpVZ4G4BiAJDB5fqkyY4WEOn6z5Eqo_Kr_OpyhvVmWVIDCLDqWYFDvi5Pca4rEJZG9-VESB-8.jpg?size=100x100&quality=95&crop=28,0,892,892&ava=1",
            name: "Stanislav",
            surname: "Kasabutsky",
            id: 6,
          },
          {
            imgUrl: "https://sun1.velcom-by-minsk.userapi.com/s/v1/ig2/5u6Gg48yd9yyHmYRHzTPNHBERW4ER-9Z_W3zwGKbg1nB1JnWXVz6ah1TffxqC3u27RtEK8y4TOkaV4YJd41c_qUM.jpg?size=100x100&quality=96&crop=6,6,1263,1263&ava=1",
            name: "Denis",
            surname: "Besarab",
            id: 7,
          },
          {
            imgUrl: "https://sun1.velcom-by-minsk.userapi.com/s/v1/ig2/6Z09Zg4i2AN5mr3jZZbbAik7Su7VzqOWlJbtyzJWOMf_1tfpKFJm5KwAtPoM2_w9HxO6jbIb9GDCFpkPfRQHPa6A.jpg?size=100x100&quality=95&crop=481,801,958,958&ava=1",
            name: "Nikita",
            surname: "Konyukh",
            id: 8,
          },
        ]
      }]
    );
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});