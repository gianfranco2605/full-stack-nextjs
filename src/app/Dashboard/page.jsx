"use client"

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import useSWR from 'swr';



const Dashboard = () => {

  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {

  //   async function getData()  {
  //     setIsLoading(true);
  //     // revalidate data each 10 seconds
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: 'no-store' });
    
  //     if( !res.ok ) {
  //       setError(true);
  //     }

  //     const data = await res.json();
    
  //     setData(data);
  //     setIsLoading(false);
  //   };

  //   getData();

  // }, [])

  // or react query

  // SRW library from nextjs
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);

  console.log(data);

  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard;