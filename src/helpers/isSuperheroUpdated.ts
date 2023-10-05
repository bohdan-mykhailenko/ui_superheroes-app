export const isSuperheroUpdated = (
  objA: Record<string, any>,
  objB: Record<string, any>,
) => {
  const copyA = { ...objA };
  const copyB = { ...objB };

  delete copyA.images;
  delete copyB.images;
  delete copyB.id;

  const stringA = JSON.stringify(copyA);
  const stringB = JSON.stringify(copyB);

  return stringA === stringB;
};
