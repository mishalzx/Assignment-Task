'use client'
import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { UserService } from '../../../../api'


const HomeTable = () => {
    const [count, setCount] = useState('');

    const getPromotes = async () => {
        const res = await UserService.getmember();
        setCount(res);
        console.log(res);
    }

    useEffect(() => {
        getPromotes();
    }, []);

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent prompts.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.isArray(count) && count.map((career: any, index: number) => {
                        return (

                                <TableRow key={index}>
                                    <TableCell className="font-medium">{career.id}</TableCell>
                                    <TableCell>{career.name}</TableCell>
                                    <TableCell className="text-right">
                                        {career.createdAt}
                                    </TableCell>
                                </TableRow>

                        );
                    })}
                </TableBody>
            </Table>

        </div>
    )
}

export default HomeTable