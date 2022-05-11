import { useEffect } from 'react';

const useScript = (url: string, data: any, id: string) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    if (id) script.id = id;

    if (data) {
      data.forEach((prop: any) => {
        script.dataset[prop.name] = prop.value;
      });
    }

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [data, id, url]);
};

export default useScript;
