interface DecodeOptions {
  complete?: boolean | undefined;
  json?: boolean | undefined;
}

interface CompleteInter {
  complete: true
}

interface JsonInter {
  json: true
}

interface JwtHeader {
  alg: string | Angorithm;
  typ: string | undefined;
  // ......
}

export interface JwtPayload {
  [key: string]: any;
  iss: string | undefined;
  sub: string | undefined;
  // ......
}

export interface Jwt {
  header: JwtHeader;
  payload: JwtPayload;
  signature: string;
}

export function decode(token: string, options: DecodeOptions & { complete: true, json: true }): Jwt;
export function decode(token: string, options: DecodeOptions & { json: true }): null | JwtPayload;
export function decode(token: string, options?: DecodeOptions): null | JwtPayload | string | Jwt {
  
}