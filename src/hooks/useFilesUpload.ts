import type { AxiosRequestConfig } from 'axios';
import { useCallback } from 'react';
import { UPLOAD_URL } from '../environment/env';
import { request } from '../helpers/request';
export const useFilesUpload = (config: AxiosRequestConfig) => {
  const upload = useCallback(
    (files: any) => {
      const formData = new FormData();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      files.map((file: any) => {
        formData.append('files[]', file);
        return true;
      });

      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      return new Promise((resolve, reject) => {
        return request
          .post(UPLOAD_URL ?? '', formData, {
            ...config,
            headers: {
              ...config?.headers,
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((res) => {
            if (res.status === 200 || res.status === 201) {
              return resolve(res.data);
            }
          })
          .catch((err) => {
            return reject(err.message);
          });
      });
    },
    [config],
  );
  return [upload];
};
