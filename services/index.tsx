import request, { gql } from "graphql-request";

export const getCarList = async () => {
  const query = gql`
    query cardList {
      carLists {
        createdAt
        publishedAt
        places
        price
        name
        marque
        id
        type
        typeBoite
        updatedAt
        image {
          url
        }
      }
    }
  `
  const result = await request("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clv2l67ya2hxa07wb06oelng4/master", query);

  return result;
}