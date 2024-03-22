export interface IErrorMessageAPI {
  message: string;
  statusCode: number;
  response: Response;
}

const apiClient = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T | IErrorMessageAPI> => {
  try {
    const response = await fetch(`/api/${endpoint}`, options);
    if (!response.ok) {
      const errorData: IErrorMessageAPI = {
        message: "Error occurred",
        statusCode: response.status,
        response: response,
      };
      throw new Error(JSON.stringify(errorData));
    }
    const responseData: T = await response.json();

    return responseData || ({} as T);
  } catch (error) {
    throw new Error("Error message: " + error);
  }
};

export default apiClient;
