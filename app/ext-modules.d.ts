declare module 'git-describe' {
  export function gitDescribe(...args: any[]): Promise<void>;
}

declare module 'default-shell' {
  const val: string;
  export default val;
}
