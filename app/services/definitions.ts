// https://jsonplaceholder.typicode.com/users/
export type User = {
  id: string;
  name: string;
  email: string;
  address: [string];
  phone: string;
  website: string;
  company: string
};


//https://jsonplaceholder.typicode.com/todos
export type Todo = {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
}

//https://jsonplaceholder.typicode.com/albums
export type Albums = {
  userId: string;
  id: string;
  title: string;
}

//https://jsonplaceholder.typicode.com/users/
export type Photos = {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumnailUrl: string;
}


export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};
