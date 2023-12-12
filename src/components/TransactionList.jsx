import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/Firebase';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const unsubscribe = getList();

        return () => unsubscribe();
    }, []);

    function getList() {
        const transactionListRef = collection(db, 'my transaction');

        const unsubscribe = onSnapshot(transactionListRef, (snapshot) => {
            const updatedTransactions = snapshot.docs.map((doc) => {
                const data = doc.data();
                return {
                    id: doc.id,
                    name: data.name,
                    amount: data.amount,
                    created: data.created ? data.created.toDate() : null,
                };
            });
            setTransactions(updatedTransactions);
        }, (error) => {
            console.error('Error getting transactions: ', error.message);
        });

        return unsubscribe;
    }

    const filteredTransactions = transactions.filter((item) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
            item.name.toLowerCase().includes(searchTermLower) ||
            item.amount.toString().includes(searchTermLower) ||
            (item.created !== null &&
                item.created.toLocaleString().includes(searchTermLower))
        );
    });

    return (
        <div className='ml-16 mt-16'>
            <h2 className='text-2xl'>My Transactions</h2>
            <div className="mb-4 flex justify-end items-center">
                <label className="mr-2">Search:</label>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border px-2 py-1 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <table className="min-w-full border border-collapse border-gray-300">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Date</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.map((item, index) => (
                        <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">
                                {item.created !== null && item.created !== undefined && (
                                    <span>{item.created.toLocaleString()}</span>
                                )}
                            </td>
                            <td className="border px-4 py-2">{item.name}</td>
                            <td className="border px-4 py-2">{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionList;
