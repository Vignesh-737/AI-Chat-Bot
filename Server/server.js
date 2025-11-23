const express=require("express");
const cors=require("cors");
require("dotenv").config();
const Groq=require("groq-sdk");
const groq=new Groq({apiKey:process.env.GROQ_API_KEY});
const app=express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server is running...");
})

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const completion = await groq.chat.completions.create({
      model: "groq/compound",
      messages: [
        { role: "user", content: userMessage }
      ]
    });

    const aiReply = completion.choices[0].message.content;

    res.json({ reply: aiReply });

  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "AI error occurred." });
  }
});

const PORT=process.env.port || 5000;

app.listen(PORT,()=>{
    console.log("Server running on port",PORT);
});