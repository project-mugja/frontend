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
    // const storedToken = localStorage.getItem("token");
    const {jwt} = useParams();
    useEffect(()=>{
        if(jwt){
            localStorage.setItem("token", jwt);
        }
    },[jwt]);

    const { category, search } = useParams<SearchPageProps>();
    const setSearchPage = useSetRecoilState(searchPage);
    useEffect(()=>{
        setSearchPage(true);
    },[setSearchPage])
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