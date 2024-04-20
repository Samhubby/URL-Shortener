import { nanoid } from "nanoid";
import URLModel from "../model/urlModel.js";


export async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  const shortID = nanoid(8);
  if (!body.url) return res.status(400).json({ error: "Please enter url" });
  //Creating document in Short-URL collection
  URLModel.create({
    shortId: shortID,
    redirectURL: body.url,
    visitedHistory: [],
  });
  return res.render('home',{ id: shortID })
 
}

//Updating history based on user click
export async function handleInsertURL(req, res)  {
    const id = req.params.id;
    const entry = await URLModel.findOneAndUpdate(
      {
        shortId: id,
      },
      {
        $push: {
          visitedHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(entry.redirectURL);
  }


//Checking totalClicks of a URL
export  async function handleTotalClick(req, res)  {
    const id = req.params.id;
    const entry = await URLModel.findOne({ shortId: id });
    res.json({ totalClicks: entry.visitedHistory.length });
  }
