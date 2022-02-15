const axios = require("axios");
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());
app.use(cors());

const hostname = "https://api.cieloecommerce.cielo.com.br";
const merchantId = "XXXXXX";
const merchantKey = "XXXXX";

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

    if (!axiosResponse.data) {
      return response.status(404).json({ error: "Invalid return request" });
    }

    return response.status(201).json(axiosResponse.data);
  } catch (error) {
    if (!error.response.data[0].Code) {
      return response.status(404).json({ error: "Invalid error code" });
    }

    response.status(404).json({
      error: `Code: ${error.response.data[0].Code} | Message: ${error.response.data[0].Message}`,
    });
  }
});

module.exports = {
  app,
};
