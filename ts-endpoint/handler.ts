import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const authentication = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "authentication",
        input: event,
      },
      null,
      2
    ),
  };
};
