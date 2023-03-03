import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../Icon";
import { ICoin } from "../../interfaces/ICoin";

type TableProps = {
  data?: ICoin[];
};

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
const TableCellT = styled.td`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px;
`;
const FirstTableCell = styled.td`
  padding-rigth: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 5px;
`;

const TableHeader = styled.th`
  cursor: pointer;
  padding: 10px;
  text-align: end;
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: #ccc;
  }
`;

const TableHeaderName = styled(TableHeader)`
  text-align: left;
`;
const TableHeaderIcon = styled(TableHeader)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const SortIcon = styled.span`
  font-size: 10px;
  margin-left: 5px;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
`;
const Symbol = styled.span`
  color: #a7b1c2;
`;
const Percentage = styled.span<{ color: "#16C784" | "#EA3943" }>`
  color: ${(props) => props.color};
`;

export const Table: React.FC<TableProps> = ({ data }) => {
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [favoritedItems, setFavoritedItems] = useState<{
    [key: number]: boolean;
  }>({});
  
  console.log({favoritedItems})

  const handleHeaderClick = (headerName: string) => {
    if (headerName === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(headerName);
      setSortOrder("asc");
    }
  };

  const sortedData = data?.sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortBy as keyof ICoin] > b[sortBy as keyof ICoin] ? 1 : -1;
    } else {
      return a[sortBy as keyof ICoin] < b[sortBy as keyof ICoin] ? 1 : -1;
    }
  });



  const isFavorited = (id: number, idItem: string) => {
    const favoritedItems = JSON.parse(
      localStorage.getItem("favoriteItems") || "[]"
    );
    const storedArray = JSON.parse(localStorage.getItem("coinsId") || "[]");
  
    const updatedFavoritedItems = favoritedItems.includes(id)
      ? favoritedItems.filter((favId: number) => favId !== id)
      : [...favoritedItems, id];
  
    const updatedStoredArray = storedArray.includes(idItem)
      ? storedArray.filter((item: string) => item !== idItem)
      : [...storedArray, idItem];
  
    setFavoritedItems((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    
    localStorage.setItem("favoriteItems", JSON.stringify(updatedFavoritedItems));
    localStorage.setItem("coinsId", JSON.stringify(updatedStoredArray));
  };
  
  return (
    <StyledTable>
      <thead>
        <TableRow>
          <TableHeader onClick={() => handleHeaderClick("market_cap_rank")}>
            #
            {sortBy === "market_cap_rank" && sortOrder === "asc" && (
              <SortIcon>&uarr;</SortIcon>
            )}
            {sortBy === "market_cap_rank" && sortOrder === "desc" && (
              <SortIcon>&darr;</SortIcon>
            )}
          </TableHeader>
          <TableHeaderName text-align="left">Nome</TableHeaderName>
          <TableHeader>Preço</TableHeader>
          <TableHeader>24h %</TableHeader>
          <TableHeader>7d %</TableHeader>
          <TableHeaderIcon>
            Valor de Mercado
            <Icon variant="info"></Icon>
          </TableHeaderIcon>
        </TableRow>
      </thead>
      <tbody>
        {sortedData?.map((item) => (
          <TableRow key={item.market_cap_rank}>
            <td>
              <FirstTableCell
                onClick={() => isFavorited(item.market_cap_rank, item.id)}
              >
                <Icon
                  variant={
                    favoritedItems[item.market_cap_rank]
                      ? "favorito_ativo"
                      : "favorito"
                  }
                ></Icon>
                {item.market_cap_rank}
              </FirstTableCell>
            </td>

            <td>
              <TableCellT>
                <Icon variant="symbol" imageLink={item.image}></Icon>
                {item.name}
                <Symbol>{item.symbol.toUpperCase()}</Symbol>
              </TableCellT>
            </td>
            <td>
              <TableCell>
                {item.current_price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </TableCell>
            </td>
            <td>
              <TableCell>
                <Icon
                  height="5px"
                  width="9px"
                  variant={
                    item.price_change_percentage_24h < 0
                      ? "queda"
                      : "crescimento"
                  }
                />

                <Percentage
                  color={
                    item.price_change_percentage_24h < 0 ? "#EA3943" : "#16C784"
                  }
                >
                  {item.price_change_percentage_24h}%
                </Percentage>
              </TableCell>
            </td>
            <td>
              <TableCell>{item.market_cap}</TableCell>
            </td>
            <td>
              <TableCell>
                {item.market_cap.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </TableCell>
            </td>
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};