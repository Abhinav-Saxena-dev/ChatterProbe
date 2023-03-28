import { GoogleSearch } from 'google-search-results-nodejs';

const search = new GoogleSearch("afd56e610b45ab4c94da478a5095ccc7a348be79d0891454f44bd417cdb7abe3");

const handler = async (req, res) => {
    const { query } = req.query;
    
}