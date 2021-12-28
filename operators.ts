interface Person {
  name: string,
  age: number
}

type PersonKeys = keyof Person;

let newName: PersonKeys = 'name';
newName = 'age';

// newName = 'job';

type User = {
  _id: number,
  name: string,
  email: string,
  createAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'

type UserKeysNoMeta1 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1: UserKeysNoMeta = 'name';
// u1 = '_id';