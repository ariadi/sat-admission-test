"use client"
import { User } from '@/app/context/userContext/type';
import React, { ChangeEvent, useEffect, useState} from 'react';
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from 'next/link';

function SelectUser() {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState<String>()


    const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setUser(value)
    }

useEffect(() => {
    async function fetchUsers() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        setUsers(data);
    }

    fetchUsers()
}, [])

  return (
    <>
    <div className='flex'>
      <select 
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm 
        rounded-e-lg border-s-gray-100 dark:border-s-gray-700
        border-s-2 focus:ring-blue-500 focus:border-blue-500 block 
        w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white 
        dark:focus:ring-blue-500 dark:focus:border-blue-500'
        onChange={handleChange}>
        {users.map((u:User) => (
          <option defaultValue={""} key={u.id} value={u.id}>
            {u.name}
          </option>
         
        ))}
      </select>
    </div>
    <br />
    <Link href={`/user/${user}`}>
        <Button className={`w-full md:w-1/3 ${buttonVariants({variant: "default"})}`}>Getting started</Button>
    </Link>
    </>
  );
}

export default SelectUser 

