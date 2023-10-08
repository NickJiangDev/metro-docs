const getGlobalTokenMap = (json: any[]): Record<string, string> => {
  let result: Record<string, string> = {};
  json.forEach(({ children }) => {
    children?.length &&
      children.map(({ name, color }: any) => {
        result[name] = color;
      });
  });
  return result;
};

export default getGlobalTokenMap;
