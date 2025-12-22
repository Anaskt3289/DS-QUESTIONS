const { Readable } = require("stream");

app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/plain");

  const stream = new Readable({
    read() {}
  });

  stream.pipe(res);

  stream.push("Hello ");
  setTimeout(() => stream.push("World "), 1000);
  setTimeout(() => stream.push("!!"), 2000);
  setTimeout(() => stream.push(null), 3000);
});

const response = await fetch("https://your-api.com/stream");
const reader = response.body.getReader();

const decoder = new TextDecoder();
while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  console.log("Chunk:", decoder.decode(value));
}
