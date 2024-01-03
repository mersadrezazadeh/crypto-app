import ServerContext from "server-only-context";

export const [getCurrency, setCurrency] = ServerContext("usd");
export const [getSelectedCoin, setSelectedCoin] = ServerContext("bitcoin");
export const [getPage, setPage] = ServerContext("1");
export const [getPerPage, setPerPage] = ServerContext("bitcoin");
