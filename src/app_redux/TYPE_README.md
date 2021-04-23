```ts
// How to set a Generic Set from a 'ParamType'
export type ISet<OtherType> = {
  [Prop in keyof OtherType]: OtherType[Prop];
};
export type SuperSet = ISet<INITIAL_TYPE>;

// How to set a Generic Set with a existend Type
export type ISet2 = {
  [Prop in keyof INITIAL_TYPE]: INITIAL_TYPE[Prop];
};

// For exemple: declare a type, try set diferent type and get error
const S: SuperSet = {} as any;
// ERROR
S.done = '';

type OnlyForm = Pick<INITIAL_TYPE, 'form'>;

const F: OnlyForm = {} as any;
F.form;
```
