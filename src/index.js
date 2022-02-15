const axios = require("axios");
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());
app.use(cors());

const hostname = "https://apisandbox.cieloecommerce.cielo.com.br";
const merchantId = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const merchantKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

app.post("/sales", async (request, response) => {
  const url = `${hostname}/1/sales/`;

  try {
    const axiosResponse = await axios({
      method: "post",
      headers: {
        MerchantId: `${merchantId}`,
        MerchantKey: `${merchantKey}`,
        ContentType: "application/json",
        RequestId: uuidv4(),
      },
      url,
      data: request.body,
    });

    console.log("SUCCESS ", axiosResponse.data);
  } catch (error) {
    console.log("ERROR ", error.response.data);
  }

  return response.status(201).json();
});

module.exports = {
  app,
};
