/** Routes for Dex Screener API calls. */

// const jsonschema = require("jsonschema");
const express = require("express");
const axios = require("axios");

const router = new express.Router();
const http = axios.create({
  baseURL: 'https://api.dexscreener.io/latest/dex'
});

router.get("/pairs/:chainId/:pairAddresses", async function (req, res, next) {
  try {
    const {chainId, pairAddresses} = req.params;
    console.log("🚀 ~ chainId, pairAddresses:", chainId, pairAddresses)
    const result = await http.get(`/pairs/${chainId}/${pairAddresses}`);

    if (result.data) {
      console.log("result: ", result.data)
      return res.json(result.data.pairs)
    } else {
      return res.json(null)
    }
  } catch (err){
    return next(err)
  }
});

router.get("/tokens/:tokenAddreses", async function (req, res, next) {
  try {
    const {tokenAddreses} = req.params;
    const result = await http.get(`/tokens/${tokenAddreses}`);

    if (result.data) {
      console.log("result: ", result.data)
      return res.json(result.data.pairs)
    } else {
      return  res.json(null)
    }
  } catch (err) {
    return next(err);
  }
});

router.get("/search/:searchString", async function (req, res, next) {
  try {
    let {searchString} = req.params;
    searchString = encodeURIComponent(searchString)
    const searchURI = `/search?q=${searchString}`
    const result = await http.get(searchURI);

    if (result.data) {
      console.log("result: ", result.data)
      return res.json(result.data.pairs)
    } else {
      return  res.json(null)
    }
  } catch (err) {
    return next(err);
  }
});






module.exports = router;
