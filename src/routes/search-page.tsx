import { useParams } from "react-router-dom";
import SearchList from "../components/SearchList";
import { ListPage, ListWrapper, SideBarWrapper } from "../components/components";
import SearchPageSideBar from "../components/search-side";
import { useSetRecoilState } from "recoil";
import { searchPage } from "../atom";
import { useEffect } from "react";

export type SearchPageProps = {
    category:string;
    search:string;
}
function SearchPage(){
    const { category, search } = useParams<SearchPageProps>();
    const setSearchPage = useSetRecoilState(searchPage);

    setSearchPage(true);
    
    return(
        <ListPage className="listPage">
            <SideBarWrapper>
                <SearchPageSideBar/>
            </SideBarWrapper>
            <ListWrapper className="listWrapper">
                <SearchList category={category? category : "all"} search={search? search : ""}/>
            </ListWrapper>
        </ListPage>
    )
}

export default SearchPage;