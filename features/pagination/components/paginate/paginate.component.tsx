import ReactPaginate from "react-paginate";
import { Root } from "./paginate.styles";

interface PaginateProps {
  pageCount: number;
  handlePageChange: (e: any) => void;
}

export function Paginate({ pageCount, handlePageChange }: PaginateProps) {
  return (
    <Root>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageChange}
        pageRangeDisplayed={1}
        className="paginate"
        activeClassName="active"
      />
    </Root>
  );
}
