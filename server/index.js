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
        profilePosts: [{
            imgUrl: "https://sun2.velcom-by-minsk.userapi.com/impg/KLULg2tw94QM2hb6gB3LMpRnUbU6NwFy6hiEZA/ELcvrdGVsrY.jpg?size=320x320&quality=96&sign=21bdd46448ae7b10385887d31063b860&c_uniq_tag=S_r0rxM3gZtfk6Kqm5oY4Biwv0GRt9SDyl6UxqbGbvo&type=album",
            name: "Nikolay",
            surname: "Talish",
            text: "hello world now!",
            likes: 2,
          },
          {
            imgUrl: "https://sun9-87.userapi.com/impg/N4Lc16UToQFI9P7M3zaB1mQziNvtZzbnQpyqhg/OawMOfoW8cQ.jpg?size=320x320&quality=96&sign=80d419ff4265d1d1777c1d3cf2e4b356&c_uniq_tag=O_5m2M9zvls1X-Lt1RSQI33-5oR0U6DKHYRlhmZ6mFE&type=album",
            name: "Maxim",
            surname: "Kyzuk",
            text: "hello world now!",
            likes: 2,
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