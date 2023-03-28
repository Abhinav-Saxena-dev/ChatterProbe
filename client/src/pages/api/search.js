import { GoogleSearch } from 'google-search-results-nodejs';

const search = new GoogleSearch("afd56e610b45ab4c94da478a5095ccc7a348be79d0891454f44bd417cdb7abe3");

const handler = async (req, res) => {
    const { query } = req.query;

    const params = {
        engine: 'google_scholar',
        q: query,
      };

      try {
        
        await search.json(params, (data) => {
            res.status(200).json({
                data
            });
        });

      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}

export default handler;