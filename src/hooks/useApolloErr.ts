import type { ApolloError } from '@apollo/client';
import Toast from 'react-native-simple-toast';
import flatten from 'flat';

interface KeyErrors {
  [key: string]: string;
}

export enum NetworkStatusCode {
  SUCCESS = 200,
  NOT_FOUND = 404,
  FORBIDDEN = 403,
  SERVER_ERROR = 500,
  AUTHORIZED = 401,
}
export const useApolloError = () => {
  function defaultErrorHandleWithNotification(error: ApolloError) {
    error.graphQLErrors.forEach((graphqlError) => {
      Toast.showWithGravity(graphqlError.message, Toast.SHORT, Toast.BOTTOM);
    });
  }

  function apolloErrors(error: ApolloError, keys: KeyErrors = {}) {
    if (error?.graphQLErrors?.length > 0) {
      error.graphQLErrors.forEach((graphqlError) => {
        const error: KeyErrors = flatten(graphqlError.extensions);
        const errorKey = Object.values(keys).find((v) => typeof error[v] !== 'undefined');
        let content = errorKey ? error[errorKey] : undefined;
        if (content !== 'Unauthorized' && graphqlError.message !== 'Unauthorized') {
          content = content?.split('Error: ')[1];
          graphqlError.message = graphqlError.message.split('Error: ')[1];
          Toast.showWithGravity(graphqlError.message || content || '', Toast.SHORT, Toast.BOTTOM);
        }
      });
    }
  }

  function getApolloErrorStatus(error?: ApolloError) {
    if (!error) {
      return NetworkStatusCode.SUCCESS;
    }
    return error?.graphQLErrors?.[0]?.extensions?.exception.status as NetworkStatusCode;
  }

  return { defaultErrorHandleWithNotification, apolloErrors, getApolloErrorStatus };
};
