import { FunctionsType } from './type/functionsType';

interface FunctionI {
  data: FunctionsType;
  loading: boolean;
  error: string | null;
}
const initialState: FunctionI = {};
