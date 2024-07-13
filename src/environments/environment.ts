export const environment: Environment = {
  production: false,
  apiUrl: 'http://localhost:8888/api/v1'
};
export interface Environment {
  production: boolean;
  apiUrl: string;
}
