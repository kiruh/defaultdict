const defaultdict = (getDefault) =>
  new Proxy(
    {},
    {
      get: (target, key) => {
        if (!Reflect.has(target, key))
          Reflect.set(
            target,
            key,
            typeof getDefault === "function" ? getDefault() : getDefault
          );
        return Reflect.get(target, key);
      },
    }
  );

module.exports = defaultdict;
