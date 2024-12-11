
type Value = any | Promise<any> | null | undefined;

type ToAwaited<T extends Record<string, Value>> = {
  [key in keyof T]: Awaited<T[key]>;
}

export const toAwaitedRecord = async <R extends Record<string, Value>>(promise: R): Promise<ToAwaited<R>> => {
  const keys = Object.keys(promise);
  const values = await Promise.all(Object.values(promise));

  const awaitedObject = keys.reduce((acc, key, index) => {
    acc[key] = values[index];
    return acc;
  }, {} as Record<string, any>);

  return awaitedObject as ToAwaited<R>;
}