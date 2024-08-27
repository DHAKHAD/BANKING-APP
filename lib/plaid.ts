import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";
const configuration = new Configuration({
  basePath: PlaidEnvironments.sendbox,
  baseOptions: {
    Headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET,
    },
  },
});
export const plaidClient = new PlaidApi(configuration);
