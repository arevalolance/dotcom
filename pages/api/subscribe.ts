import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.query;

  const FORM_ID = process.env.CONVERTKIT_FORM_ID;
  const API_KEY = process.env.CONVERTKIT_API_KEY;
  const FORM_DATA = { api_key: API_KEY, email };

  if (!email) {
    return res
      .status(400)
      .json(JSON.stringify({ error: "Email address is required" }));
  }

  const result = await fetch(
    `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(FORM_DATA),
    }
  );

  if (result.status >= 400) {
    return res.status(400).json({ error: "Something went wrong." });
  }

  return res.status(200).json({ success: true });
};

export default handler;
