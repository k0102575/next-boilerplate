import type { NextPage } from 'next';
import { useState } from 'react';
import $axios from '@/libs/axios';

interface Props {
  name: string;
}

const Example500Page: NextPage = () => {
  const [data, setData] = useState<Props>({ name: '' });

  const handleClick = async () => {
    try {
      const resp = await $axios({
        url: 'http://127.0.0.1/test',
        method: 'get',
      });

      setData(resp?.data);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        버튼
      </button>
      {data && <p>{data?.name}</p>}
    </>
  );
};

export default Example500Page;
