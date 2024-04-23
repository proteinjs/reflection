type ClassConstructor<T> = new (...args: any[]) => T

export function instanceOf<T>(obj: any, cls: ClassConstructor<T>): boolean {
  return obj.constructor.name === cls.name;
}