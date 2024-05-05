'use client'
import React, { useState, useEffect } from "react";
import { UserService } from "../../../../api";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const BoardsSection = () => {
    const [boards, setboards] = useState('');

    const getboardssec = async () => {
        const res = await UserService.getboards();
        setboards(res.boards);
        console.log(res.boards);
    }

    useEffect(() => {
        getboardssec();
    }, []);

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent Boards.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Bcfs Name</TableHead>
                        <TableHead>Name</TableHead>

                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {Array.isArray(boards) && boards.map((board: any, index: number) => (
                        <React.Fragment key={index}>
                            <TableRow>
                                <TableCell className="font-medium">{board.id}</TableCell>
                                <TableCell>{board.name}</TableCell>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell className="text-right">{board.createdAt}</TableCell>
                            </TableRow>
                            {board.bcfs.map((bcf: any, bcfIndex: number) => (
                                bcf.bcfBoards.map((bcfBoard: any, bcfBoardIndex: number) => (
                                    <TableRow key={`${index}-${bcfIndex}-${bcfBoardIndex}`}>
                                        <TableCell colSpan={2}></TableCell>
                                        <TableCell>{bcf.id}</TableCell>
                                        <TableCell>{bcf.name}</TableCell>
                                        <TableCell>{bcfBoard.name}</TableCell>
                                        <TableCell className="text-right">{bcfBoard.createdAt}</TableCell>
                                    </TableRow>
                                ))
                            ))}
                        </React.Fragment>
                    ))}


                </TableBody>
            </Table>
        </div>
    )
}

export default BoardsSection