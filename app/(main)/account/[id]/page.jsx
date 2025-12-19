import React from 'react'
import { getAccountWithTransactions } from '@/actions/accounts'
import { notFound } from 'next/navigation';


const AccountsPage = async ({params}) => {
  const { id } = await params;

  const accountData = await getAccountWithTransactions(id);

  if(!accountData){
    notFound();
  }
  
  return  <div>{id}</div>;
  
}

export default AccountsPage