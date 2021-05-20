import { useMeQuery } from 'src/graphql/queries/me.generated';

export const useCurrentUser = () => {
  const { data: fetchme } = useMeQuery({ fetchPolicy: 'cache-and-network', onError: (err) => console.log(err) });
  return fetchme?.me;
};
