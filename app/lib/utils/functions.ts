export const spreadExcept = <T extends object, K extends keyof T>(
   obj: T,
   keysToExclude: K[]
): Omit<T, K> => {
   return (Object.keys(obj) as Array<keyof T>).reduce((acc, key) => {
      if (!keysToExclude.includes(key as K)) {
         (acc as Record<Exclude<keyof T, K>, T[keyof T]>)[key as Exclude<keyof T, K>] = obj[key];
      }
      return acc;
   }, {} as Omit<T, K>);
};

export const underlineSpaces = (text?: string) => {
   if (text) {
      const underlinedText = text.replace(/ /g, "_");
      return underlinedText;
   } else {
      return undefined;
   }
};
