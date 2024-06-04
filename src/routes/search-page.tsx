import { useParams } from "react-router-dom";
import SearchList from "../components/SearchList";
import { ListPage, ListWrapper, SideBarWrapper } from "../components/components";
import SearchPageSideBar from "../components/search-side";
import { useEffect } from "react";
import { SearchPageProps } from "../interface";


function SearchPage(){
    const storedToken = localStorage.getItem("token");
    const {jwt} = useParams();
    const token = storedToken? storedToken : jwt? jwt : "";
    useEffect(()=>{
        if(jwt){
            localStorage.setItem("token", jwt);
        }
    },[jwt]);

    const { category, search } = useParams<SearchPageProps>();
    return(
        <ListPage className="listPage">
            <SideBarWrapper>
                <SearchPageSideBar/>
            </SideBarWrapper>
            <ListWrapper className="listWrapper">
                <SearchList category={category? category : "all"} search={search? search : ""} token={token}/>
            </ListWrapper>
        </ListPage>
    )
}

export default SearchPage;