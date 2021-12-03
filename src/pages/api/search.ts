import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const KEY = '6cdb5ef618424898bd8c9705f7e8acc9'

const API = async (req: NextApiRequest, res: NextApiResponse) => {
  const search = req.body.q
  const { data } = await axios.get(`https://g.tenor.com/v1/search?q=${search}&key=${KEY}`)

  res.json({ data: data.results[0].media[0].gif })
}

export default API
