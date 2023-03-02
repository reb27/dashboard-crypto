import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { ICoin } from '../../interfaces/ICoin';


type TableProps = {
    data?: ICoin[]
}

const TableWrapper = styled.div`
  padding: 65px;
`;


const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 10px;
`;
const FirstTableCell = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TableHeader = styled.th`
  cursor: pointer;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: #ccc;
  }
`;

const SortIcon = styled.span`
  font-size: 10px;
  margin-left: 5px;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;


export const Table: React.FC<TableProps> = ({ data }) => {

    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [favoritedItems, setFavoritedItems] = useState<{ [key: number]: boolean }>({});


    const handleHeaderClick = (headerName: string) => {
        if (headerName === sortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(headerName);
            setSortOrder('asc');
        }
    };

    const sortedData = data?.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a[sortBy as keyof ICoin] > b[sortBy as keyof ICoin] ? 1 : -1;
        } else {
            return a[sortBy as keyof ICoin] < b[sortBy as keyof ICoin] ? 1 : -1;
        }
    });

    const isFavorited = (id: number) => {
        setFavoritedItems((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    }
    return (
        <TableWrapper>
            <StyledTable>
                <thead>
                    <TableRow>
                        <TableHeader
                            text-align="end"

                            onClick={() => handleHeaderClick('market_cap_rank')}>
                            #
                            {sortBy === 'market_cap_rank' && sortOrder === 'asc' && <SortIcon>&uarr;</SortIcon>}
                            {sortBy === 'market_cap_rank' && sortOrder === 'desc' && <SortIcon>&darr;</SortIcon>}
                        </TableHeader>
                        <TableHeader>
                            Nome
                        </TableHeader>
                        <TableHeader >
                            Preço
                        </TableHeader>
                        <TableHeader>
                            24h %
                        </TableHeader>
                        <TableHeader>
                            7d %
                        </TableHeader>
                        <TableHeader>
                            Valor de mercado
                        </TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {sortedData?.map((item) => (
                        <TableRow key={item.market_cap_rank}>
                            <FirstTableCell
                                onClick={() => isFavorited(item.market_cap_rank)}>
                                <Icon variant={favoritedItems[item.market_cap_rank] ? 'favorito_ativo' : 'favorito'}></Icon>
                                {item.market_cap_rank}
                            </FirstTableCell>
                            <TableCell>
                                <Icon variant='symbol' imageLink={item.image}></Icon>
                                {item.name}
                                {item.symbol}
                            </TableCell>
                            <TableCell>
                                {item.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                            </TableCell>
                            <TableCell>
                                {item.price_change_percentage_24h}
                            </TableCell>
                            <TableCell>
                                {item.market_cap}
                            </TableCell>
                            <TableCell>
                                {item.market_cap}
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </StyledTable>
        </TableWrapper>
    );
};

