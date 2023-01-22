import axios, { Axios, AxiosResponse } from "axios";
import { useQueries, UseQueryResult } from "react-query";
import Abilities from "../components/Abilities";

import { Ability, AbilityResponse } from "../types";

type ReturnType = AxiosResponse<AbilityResponse>;

const useAbilities = (
  abilities: Array<Ability>
): Array<UseQueryResult<ReturnType, Error>> => {
  const queries = abilities.map(({ ability }, idx) => ({
    queryKey: ["ability", idx],
    queryFn: () => axios.get(ability.url),
  }));

  return useQueries(queries) as Array<
    UseQueryResult<AxiosResponse<AbilityResponse>, Error>
  >;
};

export default useAbilities;
