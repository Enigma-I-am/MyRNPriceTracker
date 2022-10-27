export interface APIResponse {
  success: boolean;
  message: string;
  data: Data;
}

export interface Data {
  publicKey: string;
  signature: string;
  rates: {[key: string]: Rate};
}

export interface Rate {
  rate: number;
  key: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toAPIResponse(json: string): APIResponse {
    return JSON.parse(json);
  }

  public static aPIResponseToJson(value: APIResponse): string {
    return JSON.stringify(value);
  }
}
