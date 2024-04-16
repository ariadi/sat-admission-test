import { unstable_noStore as noStore } from 'next/cache';


export async function fetchUser() {
  noStore();

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user data.');
  }
}

export async function fetchToDo() {
  noStore();

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await res.json()
    return data;
  }
  catch (error) {
    console.error('Fetching Error:', error);
    throw new Error('Failed to fetch user data.');
  }
}




const ITEMS_PER_PAGE = 10;
export async function fetchFilteredUser(
  query: string,
  currentPage: number,
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await res.json()
    return data;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchUserPages(query: string) {
  noStore();
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await res.json()

    const totalPages = Math.ceil(data.length) / ITEMS_PER_PAGE;
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of users .');
  }
}

export async function fetchUserById(id: string) {
  noStore();
  try {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return data
     
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

